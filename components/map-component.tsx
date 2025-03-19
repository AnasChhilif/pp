"use client"

import { useState, useEffect } from "react"
import dynamic from "next/dynamic"

// Import CSS for Leaflet
import "leaflet/dist/leaflet.css"

// Dynamically import the ClientMap component with no SSR
const ClientMap = dynamic(() => import("./client-map"), {
  ssr: false,
  loading: () => (
    <div 
      style={{ 
        height: "400px", 
        width: "100%", 
        display: "flex", 
        alignItems: "center", 
        justifyContent: "center",
        background: "#f0f8ff",
        borderRadius: "0.5rem",
        border: "1px solid #e2e8f0"
      }}
    >
      <div className="animate-pulse">Loading map...</div>
    </div>
  )
})

interface MapComponentProps {
  trip: any
  view: string
}

export default function MapComponent({ trip, view }: MapComponentProps) {
  const [isBrowser, setIsBrowser] = useState(false)

  // Only render the map component on the client
  useEffect(() => {
    setIsBrowser(true)
  }, [])

  if (!trip) {
    return (
      <div 
        style={{ 
          height: "400px", 
          width: "100%", 
          display: "flex", 
          alignItems: "center", 
          justifyContent: "center",
          background: "#f0f8ff",
          borderRadius: "0.5rem",
          border: "1px solid #e2e8f0"
        }}
      >
        <div className="text-center p-4">
          <p className="font-medium">Select a trip to view data</p>
          <p className="text-sm text-muted-foreground mt-2">
            Click on one of the trips on the left to see the route on the map
          </p>
        </div>
      </div>
    )
  }

  // Only render the ClientMap component on the client-side
  return (
    <>
      {isBrowser ? (
        <ClientMap trip={trip} view={view} />
      ) : (
        <div 
          style={{ 
            height: "400px", 
            width: "100%", 
            display: "flex", 
            alignItems: "center", 
            justifyContent: "center",
            background: "#f0f8ff",
            borderRadius: "0.5rem",
            border: "1px solid #e2e8f0"
          }}
        >
          <div className="animate-pulse">Loading map...</div>
        </div>
      )}
    </>
  )
}