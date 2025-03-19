"use client"

import "../leaflet.css"
import { useEffect } from "react"

export default function SampleDataLayout({ children }) {
  // Add Leaflet CSS on the client side
  useEffect(() => {
    // Check if the Leaflet CSS is already loaded
    if (!document.querySelector('link[href*="leaflet.css"]')) {
      const link = document.createElement("link")
      link.rel = "stylesheet"
      link.href = "https://unpkg.com/leaflet@1.7.1/dist/leaflet.css"
      link.integrity = "sha512-xodZBNTC5n17Xt2atTPuE1HxjVMSvLVW9ocqUKLsCC5CXdbqCmblAshOMAS6/keqq/sMZMZ19scR4PsZChSR7A=="
      link.crossOrigin = ""
      document.head.appendChild(link)
    }
  }, [])

  return <>{children}</>
}

