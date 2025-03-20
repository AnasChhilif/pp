"use client"

import { useState } from "react"
import dynamic from "next/dynamic"
import Link from "next/link"
import { ArrowLeft, Info, Ship, Waves } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip"

// Dynamically import the MapComponent with no SSR
const MapComponent = dynamic(() => import("@/components/map-component"), {
  ssr: false,
  loading: () => (
    <div className="h-[400px] bg-muted flex items-center justify-center">
      <div className="animate-pulse">Loading map...</div>
    </div>
  ),
})

// Sample data for boat trips
const boatTrips = [
  {
    id: "trip-1",
    vesselName: "Ocean Explorer",
    route: "Rotterdam to New York",
    startDate: "2023-05-10",
    endDate: "2023-05-25",
    distance: 3638,
    data: {
      waterQuality: [
        { date: "2023-05-10", ph: 8.1, salinity: 35, temperature: 15 },
        { date: "2023-05-15", ph: 8.2, salinity: 34, temperature: 16 },
        { date: "2023-05-20", ph: 8.0, salinity: 35, temperature: 17 },
        { date: "2023-05-25", ph: 8.1, salinity: 36, temperature: 16 },
      ],
      emissions: [
        { date: "2023-05-10", co2: 120, nox: 15, sox: 5 },
        { date: "2023-05-15", co2: 125, nox: 16, sox: 6 },
        { date: "2023-05-20", co2: 118, nox: 14, sox: 5 },
        { date: "2023-05-25", co2: 122, nox: 15, sox: 5 },
      ],
      marineLife: [
        { date: "2023-05-10", whales: 2, dolphins: 15, seabirds: 45 },
        { date: "2023-05-15", whales: 1, dolphins: 20, seabirds: 30 },
        { date: "2023-05-20", whales: 3, dolphins: 25, seabirds: 40 },
        { date: "2023-05-25", whales: 2, dolphins: 18, seabirds: 35 },
      ],
    },
    coordinates: [
      { lat: 51.9, lng: 4.5 },
      { lat: 50.1, lng: -1.4 },
      { lat: 48.3, lng: -8.2 },
      { lat: 45.7, lng: -20.5 },
      { lat: 42.3, lng: -40.8 },
      { lat: 40.7, lng: -74.0 },
    ],
  },
  {
    id: "trip-2",
    vesselName: "Pacific Voyager",
    route: "Shanghai to Los Angeles",
    startDate: "2023-06-05",
    endDate: "2023-06-25",
    distance: 6252,
    data: {
      waterQuality: [
        { date: "2023-06-05", ph: 8.0, salinity: 34, temperature: 18 },
        { date: "2023-06-10", ph: 8.1, salinity: 33, temperature: 19 },
        { date: "2023-06-15", ph: 8.2, salinity: 34, temperature: 20 },
        { date: "2023-06-20", ph: 8.1, salinity: 35, temperature: 21 },
        { date: "2023-06-25", ph: 8.0, salinity: 34, temperature: 20 },
      ],
      emissions: [
        { date: "2023-06-05", co2: 130, nox: 17, sox: 6 },
        { date: "2023-06-10", co2: 128, nox: 16, sox: 6 },
        { date: "2023-06-15", co2: 132, nox: 18, sox: 7 },
        { date: "2023-06-20", co2: 129, nox: 17, sox: 6 },
        { date: "2023-06-25", co2: 127, nox: 16, sox: 5 },
      ],
      marineLife: [
        { date: "2023-06-05", whales: 1, dolphins: 12, seabirds: 30 },
        { date: "2023-06-10", whales: 0, dolphins: 18, seabirds: 35 },
        { date: "2023-06-15", whales: 2, dolphins: 22, seabirds: 40 },
        { date: "2023-06-20", whales: 3, dolphins: 25, seabirds: 38 },
        { date: "2023-06-25", whales: 1, dolphins: 15, seabirds: 32 },
      ],
    },
    coordinates: [
      { lat: 31.2, lng: 121.5 },
      { lat: 28.5, lng: 140.0 },
      { lat: 25.8, lng: 160.5 },
      { lat: 23.1, lng: -175.2 },
      { lat: 30.5, lng: -140.8 },
      { lat: 34.0, lng: -118.2 },
    ],
  },
  {
    id: "trip-3",
    vesselName: "Arctic Navigator",
    route: "Oslo to Reykjavik",
    startDate: "2023-07-01",
    endDate: "2023-07-08",
    distance: 1302,
    data: {
      waterQuality: [
        { date: "2023-07-01", ph: 8.0, salinity: 33, temperature: 10 },
        { date: "2023-07-03", ph: 8.1, salinity: 32, temperature: 9 },
        { date: "2023-07-05", ph: 8.0, salinity: 33, temperature: 8 },
        { date: "2023-07-08", ph: 7.9, salinity: 34, temperature: 7 },
      ],
      emissions: [
        { date: "2023-07-01", co2: 110, nox: 14, sox: 4 },
        { date: "2023-07-03", co2: 112, nox: 15, sox: 5 },
        { date: "2023-07-05", co2: 109, nox: 13, sox: 4 },
        { date: "2023-07-08", co2: 111, nox: 14, sox: 4 },
      ],
      marineLife: [
        { date: "2023-07-01", whales: 4, dolphins: 8, seabirds: 60 },
        { date: "2023-07-03", whales: 5, dolphins: 10, seabirds: 65 },
        { date: "2023-07-05", whales: 3, dolphins: 6, seabirds: 70 },
        { date: "2023-07-08", whales: 6, dolphins: 12, seabirds: 75 },
      ],
    },
    coordinates: [
      { lat: 59.9, lng: 10.7 },
      { lat: 61.5, lng: 5.0 },
      { lat: 63.0, lng: 0.0 },
      { lat: 64.1, lng: -10.0 },
      { lat: 64.1, lng: -21.9 },
    ],
  },
]

export default function SampleDataPage() {
  const [selectedTrip, setSelectedTrip] = useState(null)
  const [mapView, setMapView] = useState("route") // "route" or "heatmap"

  // Function to handle trip selection
  const handleTripSelect = (trip) => {
    setSelectedTrip(trip)
  }

  // Simple map component that renders the route or heatmap

  // Data visualization component
  const DataVisualization = ({ data, type }) => {
    if (!data) return null

    const renderTable = (items, columns) => (
      <div className="overflow-x-auto">
        <table className="w-full border-collapse">
          <thead>
            <tr>
              {columns.map((col) => (
                <th key={col.key} className="text-left p-2 border-b">
                  {col.label}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {items.map((item, index) => (
              <tr key={index} className={index % 2 === 0 ? "bg-muted/50" : ""}>
                {columns.map((col) => (
                  <td key={col.key} className="p-2 border-b">
                    {item[col.key]}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    )

    switch (type) {
      case "waterQuality":
        return renderTable(data.waterQuality, [
          { key: "date", label: "Date" },
          { key: "ph", label: "pH Level" },
          { key: "salinity", label: "Salinity (ppt)" },
          { key: "temperature", label: "Temperature (°C)" },
        ])
      case "emissions":
        return renderTable(data.emissions, [
          { key: "date", label: "Date" },
          { key: "co2", label: "CO2 (tons)" },
          { key: "nox", label: "NOx (kg)" },
          { key: "sox", label: "SOx (kg)" },
        ])
      default:
        return null
    }
  }

  return (
    <div className="flex flex-col min-h-screen">
      <main className="flex-1 container py-8">
        <div className="space-y-6">
          <div>
            <h1 className="text-3xl font-bold tracking-tighter">Sample Maritime Data</h1>
            <p className="text-muted-foreground mt-2">
              Explore sample data collected by Nautisense sensors on various maritime voyages. Select a trip to view
              detailed information.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-3">
            <div className="md:col-span-1 space-y-4">
              <h2 className="text-xl font-bold">Available Trips</h2>
              <div className="space-y-2">
                {boatTrips.map((trip) => (
                  <Card
                    key={trip.id}
                    className={`cursor-pointer transition-colors ${selectedTrip?.id === trip.id ? "border-primary" : ""}`}
                    onClick={() => handleTripSelect(trip)}
                  >
                    <CardHeader className="p-4">
                      <CardTitle className="text-lg flex items-center gap-2">
                        <Ship className="h-5 w-5" />
                        {trip.vesselName}
                      </CardTitle>
                      <CardDescription>{trip.route}</CardDescription>
                    </CardHeader>
                    <CardContent className="p-4 pt-0">
                      <div className="text-sm text-muted-foreground">
                        <div>Distance: {trip.distance} nautical miles</div>
                        <div>
                          {trip.startDate} to {trip.endDate}
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>

            <div className="md:col-span-2 space-y-6">
              <div className="flex items-center justify-between">
                <h2 className="text-xl font-bold">Trip Data Visualization</h2>
                {selectedTrip && (
                  <div className="flex items-center gap-2">
                    <Button
                      variant={mapView === "route" ? "default" : "outline"}
                      size="sm"
                      onClick={() => setMapView("route")}
                    >
                      Route View
                    </Button>
                    <Button
                      variant={mapView === "heatmap" ? "default" : "outline"}
                      size="sm"
                      onClick={() => setMapView("heatmap")}
                    >
                      Temperature Map
                    </Button>
                  </div>
                )}
              </div>

              <MapComponent trip={selectedTrip} view={mapView} />

              {selectedTrip && (
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center justify-between">
                      <span>Sensor Data for {selectedTrip.vesselName}</span>
                      <TooltipProvider>
                        <Tooltip>
                          <TooltipTrigger asChild>
                            <Button variant="ghost" size="icon">
                              <Info className="h-4 w-4" />
                              <span className="sr-only">Info</span>
                            </Button>
                          </TooltipTrigger>
                          <TooltipContent>
                            <p className="max-w-xs">
                              This data was collected by Nautisense sensors during the voyage. It represents a sample of
                              the comprehensive data our sensors can collect.
                            </p>
                          </TooltipContent>
                        </Tooltip>
                      </TooltipProvider>
                    </CardTitle>
                    <CardDescription>Explore different types of data collected during this voyage</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <Tabs defaultValue="waterQuality">
                      <TabsList className="grid w-full grid-cols-2">
                        <TabsTrigger value="waterQuality">Water Quality</TabsTrigger>
                        <TabsTrigger value="emissions">Emissions</TabsTrigger>
                      </TabsList>
                      <TabsContent value="waterQuality" className="mt-4">
                        <DataVisualization data={selectedTrip.data} type="waterQuality" />
                      </TabsContent>
                      <TabsContent value="emissions" className="mt-4">
                        <DataVisualization data={selectedTrip.data} type="emissions" />
                      </TabsContent>
                    </Tabs>
                  </CardContent>
                </Card>
              )}
            </div>
          </div>

          <div className="mt-8 p-6 bg-muted rounded-lg">
            <h2 className="text-xl font-bold mb-4">How Nautisense Collects This Data</h2>
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              <Card>
                <CardHeader>
                  <CardTitle>Advanced Sensors</CardTitle>
                </CardHeader>
                <CardContent>
                  <p>
                    Our proprietary sensors measure water quality, emissions, and detect marine life using non-invasive
                    technology.
                  </p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle>Real-time Processing</CardTitle>
                </CardHeader>
                <CardContent>
                  <p>
                    Data is processed in real-time on the vessel and transmitted securely to our cloud platform for
                    analysis.
                  </p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle>Research Integration</CardTitle>
                </CardHeader>
                <CardContent>
                  <p>
                    Researchers can access raw data or use our analytics tools to derive insights for environmental
                    studies.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>

          <div className="flex justify-center mt-8 gap-4">
            <Link href="/contact">
              <Button size="lg" className="px-8">
                Get Nautisense for Your Research
              </Button>
            </Link>
            <a target='_blank'
            rel='noopener noreferrer' href="https://nautisense.vercel.app">
              <Button size="lg" className="px-8 bg-white text-black hover:text-white">
                Explore data in further detail.
              </Button>
            </a>
          </div>
        </div>
      </main>
      <footer className="w-full border-t bg-background py-6">
        <div className="container px-4 md:px-6">
          <p className="text-center text-sm text-muted-foreground">
            © {new Date().getFullYear()} Nautisense. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  )
}

