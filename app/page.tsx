"use client"

import Link from "next/link"
import Image from "next/image"
import { ArrowRight, BarChart3, Database, Shield } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function Home() {
  return (
    <>
      <section className="w-full py-12 md:py-24 lg:py-32 xl:py-48 bg-gradient-to-b from-background to-muted">
        <div className="container px-4 md:px-6">
          <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 xl:grid-cols-2">
            <div className="flex flex-col justify-center space-y-4">
              <div className="space-y-2">
                <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none">
                  Revolutionary Maritime Sensing Technology
                </h1>
                <p className="max-w-[600px] text-muted-foreground md:text-xl">
                  Nautisense provides cutting-edge sensor technology for maritime vessels, collecting vital data to help
                  study our oceans.
                </p>
              </div>
              <div className="flex flex-col gap-2 min-[400px]:flex-row">
                <Link href="/pricing">
                  <Button className="px-8">Get Started</Button>
                </Link>
                <Link href="/sample-data">
                  <Button variant="outline" className="px-8">
                    View Sample Data
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </Link>
              </div>
            </div>
            <div className="flex items-center justify-center">
              <Image
                src="/ship.jpg?height=550&width=550"
                width={550}
                height={550}
                alt="Nautisense sensor device attached to a ship"
                className="rounded-lg object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Rest of the component remains the same */}
      {/* Features section */}
      <section id="features" className="w-full py-12 md:py-24 lg:py-32 bg-background">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <div className="inline-block rounded-lg bg-primary px-3 py-1 text-sm text-primary-foreground">
                Features
              </div>
              <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight">
                Advanced Maritime Sensing Technology
              </h2>
              <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Our sensors collect comprehensive data from maritime vessels to support research and improve operational
                efficiency.
              </p>
            </div>
          </div>
          <div className="mx-auto grid max-w-5xl items-center gap-6 py-12 lg:grid-cols-3 lg:gap-12">
            <div className="flex flex-col justify-center space-y-4">
              <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10 text-primary">
                <BarChart3 className="h-6 w-6" />
              </div>
              <div className="space-y-2">
                <h3 className="text-xl font-bold">Real-time Data Collection</h3>
                <p className="text-muted-foreground">
                  Continuous monitoring of water quality, temperature, salinity, and marine life activity.
                </p>
              </div>
            </div>
            <div className="flex flex-col justify-center space-y-4">
              <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10 text-primary">
                <Database className="h-6 w-6" />
              </div>
              <div className="space-y-2">
                <h3 className="text-xl font-bold">Comprehensive Analytics</h3>
                <p className="text-muted-foreground">
                  Advanced data processing and visualization tools for researchers and maritime companies.
                </p>
              </div>
            </div>
            <div className="flex flex-col justify-center space-y-4">
              <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10 text-primary">
                <Shield className="h-6 w-6" />
              </div>
              <div className="space-y-2">
                <h3 className="text-xl font-bold">Environmental Protection</h3>
                <p className="text-muted-foreground">
                  Monitoring emissions and environmental impact to help reduce the carbon footprint of maritime
                  transport.
                </p>
              </div>
            </div>
          </div>
          <div className="flex justify-center">
            <Link href="/features">
              <Button variant="outline">
                Learn More About Features
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* How it works section */}
      <section id="how-it-works" className="w-full py-12 md:py-24 lg:py-32 bg-muted">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight">How Nautisense Works</h2>
              <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Our innovative sensor technology is easy to install and provides valuable data for research and maritime
                operations.
              </p>
            </div>
          </div>
          <div className="mx-auto grid max-w-5xl items-center gap-6 py-12 lg:grid-cols-2 lg:gap-12">
            <div className="flex flex-col justify-center space-y-4">
              <ol className="space-y-6">
                <li className="flex items-start gap-4">
                  <div className="flex h-8 w-8 items-center justify-center rounded-full bg-primary text-primary-foreground">
                    1
                  </div>
                  <div className="space-y-1">
                    <h3 className="text-xl font-bold">Installation</h3>
                    <p className="text-muted-foreground">
                      Our team installs the Nautisense device on your maritime vessel, ensuring optimal placement for
                      data collection.
                    </p>
                  </div>
                </li>
                <li className="flex items-start gap-4">
                  <div className="flex h-8 w-8 items-center justify-center rounded-full bg-primary text-primary-foreground">
                    2
                  </div>
                  <div className="space-y-1">
                    <h3 className="text-xl font-bold">Data Collection</h3>
                    <p className="text-muted-foreground">
                      The sensors continuously collect data during your vessel's journey, monitoring various
                      environmental and operational parameters.
                    </p>
                  </div>
                </li>
                <li className="flex items-start gap-4">
                  <div className="flex h-8 w-8 items-center justify-center rounded-full bg-primary text-primary-foreground">
                    3
                  </div>
                  <div className="space-y-1">
                    <h3 className="text-xl font-bold">Analysis & Insights</h3>
                    <p className="text-muted-foreground">
                      Our platform processes the collected data, providing valuable insights for research facilities and
                      maritime companies.
                    </p>
                  </div>
                </li>
              </ol>
            </div>
            <div className="flex items-center justify-center">
              <Image
                src="/image.webp?height=400&width=400"
                width={400}
                height={400}
                alt="Nautisense data collection process"
                className="rounded-lg object-cover"
              />
            </div>
          </div>
          <div className="flex justify-center">
            <Link href="/how-it-works">
              <Button variant="outline">
                Learn More About How It Works
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
          </div>
        </div>
      </section>


      {/* Contact section */}
      <section id="contact" className="w-full py-12 md:py-24 lg:py-32 bg-muted">
        <div className="container grid items-center gap-6 px-4 md:px-6 lg:grid-cols-2 lg:gap-10">
          <div className="space-y-2">
            <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight">Ready to Get Started?</h2>
            <p className="max-w-[600px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              Contact us today to learn more about how Nautisense can help your research or maritime operations.
            </p>
          </div>
          <div className="flex flex-col gap-2 min-[400px]:flex-row lg:justify-end">
            <Link href="/contact">
              <Button className="w-full lg:w-auto">Contact Us</Button>
            </Link>
            <Link href="/sample-data">
              <Button variant="outline" className="w-full lg:w-auto">
                View Sample Data
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}

