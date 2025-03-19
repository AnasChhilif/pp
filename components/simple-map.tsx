"use client"

interface SimpleMapProps {
  trip: any
  view: string
}

export default function SimpleMap({ trip, view }: SimpleMapProps) {
  if (!trip) {
    return (
      <div className="h-[400px] bg-muted flex items-center justify-center">
        <div className="text-center p-4">
          <p className="font-medium">Select a trip to view data</p>
          <p className="text-sm text-muted-foreground mt-2">Click on one of the trips on the left to see the route</p>
        </div>
      </div>
    )
  }

  return (
    <div className="h-[400px] bg-blue-50 p-4 flex flex-col items-center justify-center border rounded-lg">
      <div className="text-center">
        <h3 className="font-bold text-lg mb-2">{trip.vesselName}</h3>
        <p className="text-sm mb-4">{trip.route}</p>

        <div className="w-full max-w-md h-40 bg-white rounded-lg border border-gray-200 mb-4 relative overflow-hidden">
          {/* Simple SVG map representation */}
          <svg width="100%" height="100%" viewBox="0 0 400 160" className="absolute inset-0">
            <path
              d={`M 20,${view === "route" ? "80" : "60"} 
                  L ${trip.coordinates
                    .map((coord, i) => {
                      // Convert coordinates to simple SVG path
                      const x = 20 + i * (360 / (trip.coordinates.length - 1))
                      const y =
                        view === "route"
                          ? 80 + Math.sin(i) * 30
                          : 60 + trip.data.waterQuality[Math.min(i, trip.data.waterQuality.length - 1)].temperature * 3
                      return `${x},${y}`
                    })
                    .join(" L ")}`}
              stroke={view === "route" ? "#0066cc" : "transparent"}
              strokeWidth="3"
              fill="none"
            />

            {view === "heatmap" &&
              trip.data.waterQuality.map((data, i) => {
                const coordIndex = Math.min(i, trip.coordinates.length - 1)
                const x = 20 + coordIndex * (360 / (trip.coordinates.length - 1))
                const y = 60 + data.temperature * 3
                return (
                  <circle
                    key={i}
                    cx={x}
                    cy={y}
                    r={10 + data.temperature}
                    fill={`rgba(255, ${Math.max(0, 255 - data.temperature * 10)}, 0, 0.5)`}
                  />
                )
              })}

            {/* Start and end markers */}
            <circle cx="20" cy={view === "route" ? "80" : "60"} r="5" fill="#22c55e" />
            <circle
              cx={20 + (trip.coordinates.length - 1) * (360 / (trip.coordinates.length - 1))}
              cy={view === "route" ? "80" : "60"}
              r="5"
              fill="#ef4444"
            />
          </svg>
        </div>

        <p className="text-sm text-muted-foreground">
          {view === "route"
            ? "Interactive map unavailable. Showing simplified route view."
            : "Interactive map unavailable. Showing simplified temperature data."}
        </p>
      </div>
    </div>
  )
}

