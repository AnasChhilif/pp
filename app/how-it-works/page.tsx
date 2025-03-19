"use client"

import Link from "next/link"
import Image from "next/image"
import { ArrowRight, Ship, Anchor, Database, BarChart3, Wrench, Upload, Download } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { useEffect } from "react"

export default function HowItWorksPage() {
  // Set page-specific metadata
  useEffect(() => {
    document.title = "How It Works - Nautisense"
  }, [])

  return (
    <div className="flex flex-col min-h-screen">
      <main className="flex-1">
        <section className="w-full py-12 md:py-24 lg:py-32 bg-gradient-to-b from-background to-muted">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl">How Nautisense Works</h1>
                <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Our innovative sensor technology is easy to install and provides valuable data for research and
                  maritime operations.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="w-full py-12 md:py-24 lg:py-32 bg-background">
          <div className="container px-4 md:px-6">
            <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 xl:grid-cols-2">
              <div className="flex flex-col justify-center space-y-4">
                <div className="space-y-2">
                  <div className="inline-block rounded-lg bg-primary px-3 py-1 text-sm text-primary-foreground">
                    The Process
                  </div>
                  <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight">
                    From Installation to Insights
                  </h2>
                  <p className="max-w-[600px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                    Nautisense follows a streamlined process to deliver valuable maritime data and insights to
                    researchers and vessel operators.
                  </p>
                </div>
              </div>
              <div className="flex items-center justify-center">
                <Image
                  src="/placeholder.svg?height=300&width=500"
                  width={500}
                  height={300}
                  alt="Nautisense process overview"
                  className="rounded-lg object-cover"
                />
              </div>
            </div>
          </div>
        </section>

        <section className="w-full py-12 md:py-24 lg:py-32 bg-muted">
          <div className="container px-4 md:px-6">
            <div className="mx-auto max-w-5xl">
              <div className="grid gap-12">
                <div className="grid gap-6 md:grid-cols-[1fr_2fr] md:gap-12 items-center">
                  <div className="flex h-20 w-20 items-center justify-center rounded-full bg-primary text-4xl font-bold text-primary-foreground">
                    1
                  </div>
                  <div className="space-y-4">
                    <h3 className="text-2xl font-bold">Consultation & Assessment</h3>
                    <p className="text-muted-foreground">
                      Our team works with you to understand your specific research needs or vessel requirements. We
                      assess the optimal placement and configuration of Nautisense sensors for your particular
                      application.
                    </p>
                    <div className="flex items-center gap-4">
                      <Ship className="h-10 w-10 text-primary" />
                      <div className="space-y-1">
                        <p className="text-sm font-medium">Vessel Assessment</p>
                        <p className="text-xs text-muted-foreground">
                          We evaluate your vessel type and operational patterns
                        </p>
                      </div>
                    </div>
                    <div className="flex items-center gap-4">
                      <Database className="h-10 w-10 text-primary" />
                      <div className="space-y-1">
                        <p className="text-sm font-medium">Data Requirements</p>
                        <p className="text-xs text-muted-foreground">
                          We identify the specific data points needed for your research
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="grid gap-6 md:grid-cols-[1fr_2fr] md:gap-12 items-center">
                  <div className="flex h-20 w-20 items-center justify-center rounded-full bg-primary text-4xl font-bold text-primary-foreground">
                    2
                  </div>
                  <div className="space-y-4">
                    <h3 className="text-2xl font-bold">Installation & Configuration</h3>
                    <p className="text-muted-foreground">
                      Our certified technicians install the Nautisense device on your maritime vessel, ensuring optimal
                      placement for data collection. The installation is non-invasive and designed to withstand harsh
                      maritime conditions.
                    </p>
                    <div className="flex items-center gap-4">
                      <Wrench className="h-10 w-10 text-primary" />
                      <div className="space-y-1">
                        <p className="text-sm font-medium">Professional Installation</p>
                        <p className="text-xs text-muted-foreground">
                          Expert technicians ensure proper setup and calibration
                        </p>
                      </div>
                    </div>
                    <div className="flex items-center gap-4">
                      <Anchor className="h-10 w-10 text-primary" />
                      <div className="space-y-1">
                        <p className="text-sm font-medium">Secure Mounting</p>
                        <p className="text-xs text-muted-foreground">
                          Ruggedized installation for maritime environments
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="grid gap-6 md:grid-cols-[1fr_2fr] md:gap-12 items-center">
                  <div className="flex h-20 w-20 items-center justify-center rounded-full bg-primary text-4xl font-bold text-primary-foreground">
                    3
                  </div>
                  <div className="space-y-4">
                    <h3 className="text-2xl font-bold">Data Collection</h3>
                    <p className="text-muted-foreground">
                      The sensors continuously collect data during your vessel's journey, monitoring various
                      environmental and operational parameters. Data is stored locally and transmitted securely when
                      connectivity is available.
                    </p>
                    <div className="flex items-center gap-4">
                      <Upload className="h-10 w-10 text-primary" />
                      <div className="space-y-1">
                        <p className="text-sm font-medium">Continuous Monitoring</p>
                        <p className="text-xs text-muted-foreground">24/7 data collection during vessel operation</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-4">
                      <Download className="h-10 w-10 text-primary" />
                      <div className="space-y-1">
                        <p className="text-sm font-medium">Secure Transmission</p>
                        <p className="text-xs text-muted-foreground">Encrypted data transfer to our cloud platform</p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="grid gap-6 md:grid-cols-[1fr_2fr] md:gap-12 items-center">
                  <div className="flex h-20 w-20 items-center justify-center rounded-full bg-primary text-4xl font-bold text-primary-foreground">
                    4
                  </div>
                  <div className="space-y-4">
                    <h3 className="text-2xl font-bold">Analysis & Insights</h3>
                    <p className="text-muted-foreground">
                      Our platform processes the collected data, providing valuable insights for research facilities and
                      maritime companies. Advanced analytics and machine learning algorithms identify patterns and
                      anomalies.
                    </p>
                    <div className="flex items-center gap-4">
                      <BarChart3 className="h-10 w-10 text-primary" />
                      <div className="space-y-1">
                        <p className="text-sm font-medium">Data Visualization</p>
                        <p className="text-xs text-muted-foreground">Interactive dashboards and reports</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-4">
                      <Database className="h-10 w-10 text-primary" />
                      <div className="space-y-1">
                        <p className="text-sm font-medium">Research Integration</p>
                        <p className="text-xs text-muted-foreground">
                          Data export and API access for scientific analysis
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="w-full py-12 md:py-24 lg:py-32 bg-background">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight">Technical Specifications</h2>
                <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Nautisense devices are built with cutting-edge technology to ensure reliable data collection in
                  maritime environments.
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl items-center gap-6 py-12 md:grid-cols-2">
              <Card>
                <CardHeader>
                  <CardTitle>Physical Specifications</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    <li className="flex justify-between">
                      <span className="font-medium">Dimensions:</span>
                      <span>30cm x 20cm x 10cm</span>
                    </li>
                    <li className="flex justify-between">
                      <span className="font-medium">Weight:</span>
                      <span>3.5 kg</span>
                    </li>
                    <li className="flex justify-between">
                      <span className="font-medium">Housing:</span>
                      <span>Marine-grade stainless steel</span>
                    </li>
                    <li className="flex justify-between">
                      <span className="font-medium">Waterproof Rating:</span>
                      <span>IP68 (10m submersion)</span>
                    </li>
                    <li className="flex justify-between">
                      <span className="font-medium">Operating Temperature:</span>
                      <span>-20°C to +60°C</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle>Technical Specifications</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    <li className="flex justify-between">
                      <span className="font-medium">Power Consumption:</span>
                      <span>5W average, 12W peak</span>
                    </li>
                    <li className="flex justify-between">
                      <span className="font-medium">Power Supply:</span>
                      <span>12-24V DC or solar option</span>
                    </li>
                    <li className="flex justify-between">
                      <span className="font-medium">Data Storage:</span>
                      <span>128GB local storage</span>
                    </li>
                    <li className="flex justify-between">
                      <span className="font-medium">Connectivity:</span>
                      <span>4G/LTE, Satellite, Wi-Fi</span>
                    </li>
                    <li className="flex justify-between">
                      <span className="font-medium">Battery Backup:</span>
                      <span>72 hours operation</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle>Sensor Specifications</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    <li className="flex justify-between">
                      <span className="font-medium">Temperature Accuracy:</span>
                      <span>±0.1°C</span>
                    </li>
                    <li className="flex justify-between">
                      <span className="font-medium">pH Measurement Range:</span>
                      <span>0-14 pH (±0.1 accuracy)</span>
                    </li>
                    <li className="flex justify-between">
                      <span className="font-medium">Salinity Measurement:</span>
                      <span>0-50 ppt (±0.5 accuracy)</span>
                    </li>
                    <li className="flex justify-between">
                      <span className="font-medium">Emissions Sensors:</span>
                      <span>CO2, NOx, SOx</span>
                    </li>
                    <li className="flex justify-between">
                      <span className="font-medium">GPS Accuracy:</span>
                      <span>±2m</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle>Data Specifications</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    <li className="flex justify-between">
                      <span className="font-medium">Sampling Rate:</span>
                      <span>1 second to 1 hour (configurable)</span>
                    </li>
                    <li className="flex justify-between">
                      <span className="font-medium">Data Formats:</span>
                      <span>JSON, CSV, custom formats</span>
                    </li>
                    <li className="flex justify-between">
                      <span className="font-medium">Encryption:</span>
                      <span>AES-256</span>
                    </li>
                    <li className="flex justify-between">
                      <span className="font-medium">API Access:</span>
                      <span>REST API, GraphQL</span>
                    </li>
                    <li className="flex justify-between">
                      <span className="font-medium">Data Retention:</span>
                      <span>Configurable (1-10 years)</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        <section className="w-full py-12 md:py-24 lg:py-32 bg-muted">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight">Ready to Get Started?</h2>
                <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Contact us today to learn more about how Nautisense can help your research or maritime operations.
                </p>
              </div>
              <div className="flex flex-col gap-2 min-[400px]:flex-row">
                <Link href="/pricing">
                  <Button className="px-8">View Pricing</Button>
                </Link>
                <Link href="/contact">
                  <Button variant="outline" className="px-8">
                    Contact Us
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  )
}

