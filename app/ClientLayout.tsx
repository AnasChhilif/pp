"use client"

import "@/app/globals.css"
import { Inter } from "next/font/google"
import { ThemeProvider } from "@/components/theme-provider"
import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"
import { ScrollToTop } from "@/components/scroll-to-top"
import { useEffect } from "react"

const inter = Inter({ subsets: ["latin"] })

export default function ClientLayout({ children }) {
  // Set metadata on the client side
  useEffect(() => {
    document.title = "Nautisense - Revolutionary Maritime Sensing Technology"
    const metaDescription = document.querySelector('meta[name="description"]')
    if (metaDescription) {
      metaDescription.setAttribute(
        "content",
        "Nautisense provides cutting-edge sensor technology for maritime vessels, collecting vital data to help study our oceans",
      )
    } else {
      const meta = document.createElement("meta")
      meta.name = "description"
      meta.content =
        "Nautisense provides cutting-edge sensor technology for maritime vessels, collecting vital data to help study our oceans"
      document.head.appendChild(meta)
    }
  }, [])

  return (
    <html lang="en">
      <body className={inter.className}>
        <ThemeProvider attribute="class" defaultTheme="light" enableSystem disableTransitionOnChange>
          <div className="flex flex-col min-h-screen">
            <ScrollToTop />
            <SiteHeader />
            <main className="flex-1">{children}</main>
            <SiteFooter />
          </div>
        </ThemeProvider>
      </body>
    </html>
  )
}

