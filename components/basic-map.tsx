"use client"

import { useEffect, useRef, useState } from "react"
import SimpleMap from "@/components/simple-map" // Import the fallback component

interface BasicMapProps {
  trip: any
  view: string
}

export default function BasicMap({ trip, view }: BasicMapProps) {
  const mapContainerRef = useRef<HTMLDivElement>(null)
  const [mapError, setMapError] = useState<string | null>(null)
  const [isLoading, setIsLoading] = useState(true)
  const [leaflet, setLeaflet] = useState<any>(null)
  const [map, setMap] = useState<any>(null)

  // First, load the Leaflet library
  useEffect(() => {
    // Only run this in the browser
    if (typeof window === "undefined") return

    async function loadLeaflet() {
      try {
        console.log("Loading Leaflet library...")
        const L = await import("leaflet")

        // Fix Leaflet icon issues
        delete L.Icon.Default.prototype._getIconUrl
        L.Icon.Default.mergeOptions({
          iconRetinaUrl: "https://unpkg.com/leaflet@1.7.1/dist/images/marker-icon-2x.png",
          iconUrl: "https://unpkg.com/leaflet@1.7.1/dist/images/marker-icon.png",
          shadowUrl: "https://unpkg.com/leaflet@1.7.1/dist/images/marker-shadow.png",
        })

        setLeaflet(L)
        console.log("Leaflet library loaded successfully")
      } catch (error) {
        console.error("Error loading Leaflet:", error)
        setMapError(`Failed to load Leaflet: ${error.message}`)
        setIsLoading(false)
      }
    }

    loadLeaflet()
  }, [])

  // Then, initialize the map once Leaflet is loaded and the container is ready
  useEffect(() => {
    if (!leaflet || !mapContainerRef.current || mapError) return

    // Add a small delay to ensure the DOM is fully rendered
    const initTimer = setTimeout(() => {
      try {
        console.log("Initializing map...", mapContainerRef.current)

        // Double-check that the container exists and has dimensions
        if (!mapContainerRef.current) {
          throw new Error("Map container not found")
        }

        // Check if the container has dimensions
        const { offsetWidth, offsetHeight } = mapContainerRef.current
        console.log(`Container dimensions: ${offsetWidth}x${offsetHeight}`)

        if (offsetWidth === 0 || offsetHeight === 0) {
          throw new Error("Map container has zero dimensions")
        }

        // Create the map
        const mapInstance = leaflet.map(mapContainerRef.current).setView([20, 0], 2)

        // Add the tile layer
        leaflet
          .tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
            attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
          })
          .addTo(mapInstance)

        // Store the map instance
        setMap(mapInstance)

        // Force a resize after a short delay
        setTimeout(() => {
          mapInstance.invalidateSize()
          setIsLoading(false)
          console.log("Map initialized successfully")
        }, 200)
      } catch (error) {
        console.error("Error initializing map:", error)
        setMapError(`Failed to initialize map: ${error.message}`)
        setIsLoading(false)
      }
    }, 500) // Add a 500ms delay

    return () => {
      clearTimeout(initTimer)
    }
  }, [leaflet, mapError])

  // Update the map when trip or view changes
  useEffect(() => {
    if (!map || !leaflet || !trip) return

    try {
      console.log("Updating map with trip data", trip.id, view)

      // Clear previous layers except the base tile layer
      map.eachLayer((layer: any) => {
        if (layer instanceof leaflet.TileLayer) return
        layer.remove()
      })

      const { coordinates } = trip

      // Create route polyline
      if (view === "route" && coordinates.length > 1) {
        const routeCoordinates = coordinates.map((coord: any) => [coord.lat, coord.lng])
        const routeLine = leaflet.polyline(routeCoordinates, { color: "#0066cc", weight: 3 })
        routeLine.addTo(map)

        // Add start and end markers
        leaflet
          .marker([coordinates[0].lat, coordinates[0].lng])
          .bindTooltip("Start", { permanent: false, direction: "right" })
          .addTo(map)

        leaflet
          .marker([coordinates[coordinates.length - 1].lat, coordinates[coordinates.length - 1].lng])
          .bindTooltip("End", { permanent: false, direction: "right" })
          .addTo(map)
      }

      // Create temperature heatmap
      if (view === "heatmap" && trip.data.waterQuality.length > 0) {
        trip.data.waterQuality.forEach((data: any, index: number) => {
          const coordIndex = Math.min(index, coordinates.length - 1)
          const coord = coordinates[coordIndex]

          // Create a circle with radius based on temperature
          const radius = 20000 + data.temperature * 5000 // in meters
          const circle = leaflet
            .circle([coord.lat, coord.lng], {
              radius,
              color: "transparent",
              fillColor: `rgba(255, ${Math.max(0, 255 - data.temperature * 10)}, 0, 0.5)`,
              fillOpacity: 0.5,
            })
            .addTo(map)

          // Add tooltip with temperature data
          circle.bindTooltip(`Temperature: ${data.temperature}°C<br>Date: ${data.date}`, {
            permanent: false,
            direction: "top",
          })
        })
      }

      // Fit map to bounds of the route
      const bounds = leaflet.latLngBounds(coordinates.map((coord: any) => [coord.lat, coord.lng]))
      map.fitBounds(bounds, { padding: [50, 50] })

      // Force a resize to ensure the map renders correctly
      setTimeout(() => {
        map.invalidateSize()
      }, 100)

      console.log("Map updated successfully")
    } catch (error) {
      console.error("Error updating map:", error)
      setMapError(`Failed to update map: ${error.message}`)
    }
  }, [trip, view, map, leaflet])

  // Cleanup function
  useEffect(() => {
    return () => {
      if (map) {
        console.log("Cleaning up map")
        map.remove()
      }
    }
  }, [map])

  // Fallback for when no trip is selected
  if (!trip) {
    return (
      <div className="h-[400px] bg-muted flex items-center justify-center border rounded-lg">
        <div className="text-center p-4">
          <p className="font-medium">Select a trip to view data</p>
          <p className="text-sm text-muted-foreground mt-2">
            Click on one of the trips on the left to see the route on the map
          </p>
        </div>
      </div>
    )
  }

  // If there's an error or we're still loading, show the SimpleMap fallback
  if (mapError || isLoading) {
    return (
      <div className="h-[400px] relative">
        <SimpleMap trip={trip} view={view} />

        {isLoading && !mapError && (
          <div className="absolute inset-0 flex items-center justify-center bg-muted/50 rounded-lg">
            <div className="text-center p-4 bg-white/80 rounded-lg shadow-sm">
              <div className="animate-spin h-8 w-8 border-4 border-primary border-t-transparent rounded-full mx-auto mb-2"></div>
              <p>Loading interactive map...</p>
            </div>
          </div>
        )}

        {mapError && (
          <div className="absolute bottom-2 right-2 bg-white/90 p-2 rounded text-xs text-red-500 max-w-[200px]">
            Error: {mapError}
          </div>
        )}
      </div>
    )
  }

  return (
    <div className="h-[400px] w-full relative">
      {/* Map container - make sure it has explicit dimensions */}
      <div
        ref={mapContainerRef}
        className="absolute inset-0 bg-blue-50 border rounded-lg"
        style={{ height: "400px", width: "100%" }}
      />
    </div>
  )
}

