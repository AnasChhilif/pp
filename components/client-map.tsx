"use client"

// ClientMap.js - This should be imported dynamically with ssr: false
import { useEffect, useRef } from "react"

const ClientMap = ({ trip, view }) => {
  const mapContainerRef = useRef(null)
  const mapInstanceRef = useRef(null)
  
  // Initialize and clean up the map
  useEffect(() => {
    // Safety check to ensure we're in the browser
    if (typeof window === 'undefined') return
    
    // Dynamically import Leaflet
    import('leaflet').then(L => {
      console.log("Leaflet loaded, initializing map")
      
      // Fix Leaflet's default icon issue
      delete L.Icon.Default.prototype._getIconUrl
      L.Icon.Default.mergeOptions({
        iconRetinaUrl: "https://unpkg.com/leaflet@1.7.1/dist/images/marker-icon-2x.png",
        iconUrl: "https://unpkg.com/leaflet@1.7.1/dist/images/marker-icon.png",
        shadowUrl: "https://unpkg.com/leaflet@1.7.1/dist/images/marker-shadow.png",
      })
      
      // Check if map already exists - if so, clean it up
      if (mapInstanceRef.current) {
        mapInstanceRef.current.remove()
        mapInstanceRef.current = null
      }
      
      // Create a new map
      console.log("Creating map instance")
      mapInstanceRef.current = L.map(mapContainerRef.current).setView([20, 0], 2)
      
      // Add the tile layer
      L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
        maxZoom: 19
      }).addTo(mapInstanceRef.current)
      
      // Update the map with trip data if available
      if (trip) {
        console.log("Adding trip data to map", trip.id)
        
        // Add the route
        if (view === 'route' && trip.coordinates && trip.coordinates.length > 1) {
          const routePoints = trip.coordinates.map(coord => [coord.lat, coord.lng])
          L.polyline(routePoints, { color: '#0066cc', weight: 3 }).addTo(mapInstanceRef.current)
          
          // Add start marker
          const startIcon = L.divIcon({
            html: '<div style="width: 12px; height: 12px; background-color: #22c55e; border-radius: 50%; border: 2px solid white;"></div>',
            className: '',
            iconSize: [16, 16],
            iconAnchor: [8, 8],
          })
          
          L.marker([trip.coordinates[0].lat, trip.coordinates[0].lng], { icon: startIcon })
            .bindTooltip('Start', { permanent: false, direction: 'right' })
            .addTo(mapInstanceRef.current)
            
          // Add end marker
          const endIcon = L.divIcon({
            html: '<div style="width: 12px; height: 12px; background-color: #ef4444; border-radius: 50%; border: 2px solid white;"></div>',
            className: '',
            iconSize: [16, 16],
            iconAnchor: [8, 8],
          })
          
          L.marker([trip.coordinates[trip.coordinates.length - 1].lat, trip.coordinates[trip.coordinates.length - 1].lng], { icon: endIcon })
            .bindTooltip('End', { permanent: false, direction: 'right' })
            .addTo(mapInstanceRef.current)
            
          // Add ship markers for intermediate points
          trip.coordinates.forEach((coord, index) => {
            if (index > 0 && index < trip.coordinates.length - 1) {
              const shipIcon = L.divIcon({
                html: `<div style="color: #0066cc; transform: rotate(45deg);"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" class="lucide lucide-ship"><path d="M2 21c.6.5 1.2 1 2.5 1 2.5 0 2.5-2 5-2 1.3 0 1.9.5 2.5 1 .6.5 1.2 1 2.5 1 2.5 0 2.5-2 5-2 1.3 0 1.9.5 2.5 1"/><path d="M19.38 20A11.6 11.6 0 0 0 21 14l-9-4-9 4c0 2.9.94 5.34 2.81 7.76"/><path d="M19 13V7a2 2 0 0 0-2-2H7a2 2 0 0 0-2 2v6"/><path d="M12 10v4"/><path d="M12 2v3"/></svg></div>`,
                className: '',
                iconSize: [24, 24],
                iconAnchor: [12, 12],
              })
              L.marker([coord.lat, coord.lng], { icon: shipIcon }).addTo(mapInstanceRef.current)
            }
          })
        }
        
        // Add temperature heatmap
        if (view === 'heatmap' && trip.data && trip.data.waterQuality && trip.data.waterQuality.length > 0) {
          trip.data.waterQuality.forEach((data, index) => {
            const coordIndex = Math.min(index, trip.coordinates.length - 1)
            const coord = trip.coordinates[coordIndex]
            
            // Create a circle with radius based on temperature
            const radius = 20000 + data.temperature * 5000 // in meters
            const circle = L.circle([coord.lat, coord.lng], {
              radius,
              color: 'transparent',
              fillColor: `rgba(255, ${Math.max(0, 255 - data.temperature * 10)}, 0, 0.5)`,
              fillOpacity: 0.5,
            }).addTo(mapInstanceRef.current)
            
            // Add tooltip with temperature data
            circle.bindTooltip(`Temperature: ${data.temperature}°C<br>Date: ${data.date}`, {
              permanent: false,
              direction: 'top',
            })
          })
        }
        
        // Fit map to bounds of the route
        if (trip.coordinates && trip.coordinates.length > 0) {
          const bounds = L.latLngBounds(trip.coordinates.map(coord => [coord.lat, coord.lng]))
          mapInstanceRef.current.fitBounds(bounds, { padding: [50, 50] })
        }
      }
      
      // Force a resize
      setTimeout(() => {
        if (mapInstanceRef.current) {
          console.log("Resizing map")
          mapInstanceRef.current.invalidateSize(true)
        }
      }, 500)
    })
    
    // Cleanup function
    return () => {
      if (mapInstanceRef.current) {
        console.log("Cleaning up map instance")
        mapInstanceRef.current.remove()
        mapInstanceRef.current = null
      }
    }
  }, [trip, view]) // Re-run when trip or view changes
  
  return (
    <div 
      ref={mapContainerRef} 
      style={{ 
        height: "400px", 
        width: "100%", 
        background: "#f0f8ff",
        borderRadius: "0.5rem",
        border: "1px solid #e2e8f0"
      }} 
    />
  )
}

export default ClientMap