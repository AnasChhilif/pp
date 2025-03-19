"use client"

import Link from "next/link"
import { ArrowRight, Check } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { useEffect } from "react"

export default function PricingPage() {
  // Set page-specific metadata
  useEffect(() => {
    document.title = "Pricing - Nautisense"
  }, [])

  return (
    <div className="flex flex-col min-h-screen">
      <main className="flex-1">
        <section className="w-full py-12 md:py-24 lg:py-32 bg-gradient-to-b from-background to-muted">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl">Pricing Plans</h1>
                <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Choose the plan that best fits your research or maritime operation needs.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="w-full py-12 md:py-24 lg:py-32 bg-background">
          <div className="container px-4 md:px-6">
            <div className="mx-auto grid max-w-5xl items-start gap-6 md:grid-cols-2 lg:grid-cols-3">
              <Card>
                <CardHeader>
                  <CardTitle>Basic</CardTitle>
                  <CardDescription>Perfect for small research projects and individual vessels.</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="text-4xl font-bold">
                    $2,999<span className="text-sm font-normal text-muted-foreground">/device</span>
                  </div>
                  <p className="text-sm text-muted-foreground mt-4">One-time hardware cost plus annual subscription</p>
                  <div className="mt-6 space-y-4">
                    <div className="flex items-start gap-2">
                      <Check className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                      <div>
                        <h4 className="font-medium">1 Nautisense device</h4>
                        <p className="text-sm text-muted-foreground">For a single vessel</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-2">
                      <Check className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                      <div>
                        <h4 className="font-medium">Basic data collection</h4>
                        <p className="text-sm text-muted-foreground">Water quality, temperature, emissions</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-2">
                      <Check className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                      <div>
                        <h4 className="font-medium">Standard analytics dashboard</h4>
                        <p className="text-sm text-muted-foreground">Basic visualization and reports</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-2">
                      <Check className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                      <div>
                        <h4 className="font-medium">Email support</h4>
                        <p className="text-sm text-muted-foreground">Response within 48 hours</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-2">
                      <Check className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                      <div>
                        <h4 className="font-medium">Data storage</h4>
                        <p className="text-sm text-muted-foreground">1 year of data retention</p>
                      </div>
                    </div>
                  </div>
                </CardContent>
                <CardFooter>
                  <Link href="/contact" className="w-full">
                    <Button className="w-full">Get Started</Button>
                  </Link>
                </CardFooter>
              </Card>
              <Card className="border-primary">
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <CardTitle>Professional</CardTitle>
                    <div className="inline-block rounded-full bg-primary px-3 py-1 text-xs text-primary-foreground">
                      Popular
                    </div>
                  </div>
                  <CardDescription>Ideal for research institutions and medium-sized fleets.</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="text-4xl font-bold">
                    $7,999<span className="text-sm font-normal text-muted-foreground">/package</span>
                  </div>
                  <p className="text-sm text-muted-foreground mt-4">One-time hardware cost plus annual subscription</p>
                  <div className="mt-6 space-y-4">
                    <div className="flex items-start gap-2">
                      <Check className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                      <div>
                        <h4 className="font-medium">3 Nautisense devices</h4>
                        <p className="text-sm text-muted-foreground">For multiple vessels or research points</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-2">
                      <Check className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                      <div>
                        <h4 className="font-medium">Advanced data collection</h4>
                        <p className="text-sm text-muted-foreground">All basic metrics plus marine life detection</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-2">
                      <Check className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                      <div>
                        <h4 className="font-medium">Advanced analytics with API access</h4>
                        <p className="text-sm text-muted-foreground">Custom dashboards and data export</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-2">
                      <Check className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                      <div>
                        <h4 className="font-medium">Priority support</h4>
                        <p className="text-sm text-muted-foreground">Response within 24 hours</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-2">
                      <Check className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                      <div>
                        <h4 className="font-medium">Quarterly research reports</h4>
                        <p className="text-sm text-muted-foreground">Customized analysis of your data</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-2">
                      <Check className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                      <div>
                        <h4 className="font-medium">Data storage</h4>
                        <p className="text-sm text-muted-foreground">3 years of data retention</p>
                      </div>
                    </div>
                  </div>
                </CardContent>
                <CardFooter>
                  <Link href="/contact" className="w-full">
                    <Button className="w-full">Get Started</Button>
                  </Link>
                </CardFooter>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle>Enterprise</CardTitle>
                  <CardDescription>For large research projects and commercial fleets.</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="text-4xl font-bold">
                    Custom<span className="text-sm font-normal text-muted-foreground">/solution</span>
                  </div>
                  <p className="text-sm text-muted-foreground mt-4">Tailored pricing based on your specific needs</p>
                  <div className="mt-6 space-y-4">
                    <div className="flex items-start gap-2">
                      <Check className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                      <div>
                        <h4 className="font-medium">Unlimited Nautisense devices</h4>
                        <p className="text-sm text-muted-foreground">For your entire fleet or research network</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-2">
                      <Check className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                      <div>
                        <h4 className="font-medium">Custom sensor configurations</h4>
                        <p className="text-sm text-muted-foreground">Tailored to your specific research needs</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-2">
                      <Check className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                      <div>
                        <h4 className="font-medium">Enterprise-grade analytics platform</h4>
                        <p className="text-sm text-muted-foreground">Full customization and integration options</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-2">
                      <Check className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                      <div>
                        <h4 className="font-medium">Dedicated account manager</h4>
                        <p className="text-sm text-muted-foreground">Personalized support and consultation</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-2">
                      <Check className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                      <div>
                        <h4 className="font-medium">Custom research collaboration</h4>
                        <p className="text-sm text-muted-foreground">Joint research initiatives and publications</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-2">
                      <Check className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                      <div>
                        <h4 className="font-medium">Data storage</h4>
                        <p className="text-sm text-muted-foreground">Custom retention policies</p>
                      </div>
                    </div>
                  </div>
                </CardContent>
                <CardFooter>
                  <Link href="/contact" className="w-full">
                    <Button variant="outline" className="w-full">
                      Contact Sales
                    </Button>
                  </Link>
                </CardFooter>
              </Card>
            </div>
          </div>
        </section>

        <section className="w-full py-12 md:py-24 lg:py-32 bg-muted">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight">Frequently Asked Questions</h2>
                <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Find answers to common questions about Nautisense pricing and services.
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl gap-6 py-12 lg:grid-cols-2">
              <Card>
                <CardHeader>
                  <CardTitle className="text-xl">What's included in the hardware cost?</CardTitle>
                </CardHeader>
                <CardContent>
                  <p>
                    The hardware cost includes the Nautisense device, all necessary sensors, installation by our
                    certified technicians, and a one-year warranty. It also covers initial calibration and setup of the
                    system.
                  </p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle className="text-xl">What does the annual subscription cover?</CardTitle>
                </CardHeader>
                <CardContent>
                  <p>
                    The annual subscription includes access to our cloud platform, data storage, analytics tools,
                    software updates, technical support, and maintenance services. It ensures your Nautisense system
                    remains up-to-date and fully functional.
                  </p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle className="text-xl">Can I upgrade my plan later?</CardTitle>
                </CardHeader>
                <CardContent>
                  <p>
                    Yes, you can upgrade your plan at any time. We'll prorate the difference in subscription costs and
                    arrange for the installation of any additional hardware. Contact our sales team to discuss upgrade
                    options.
                  </p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle className="text-xl">Do you offer academic discounts?</CardTitle>
                </CardHeader>
                <CardContent>
                  <p>
                    Yes, we offer special pricing for academic institutions and research organizations. Please contact
                    our sales team with details about your research project to discuss academic pricing options.
                  </p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle className="text-xl">What happens to my data if I cancel?</CardTitle>
                </CardHeader>
                <CardContent>
                  <p>
                    If you cancel your subscription, you'll have 30 days to download your data. After that period, we'll
                    archive your data for an additional 90 days before permanent deletion. We can provide data export
                    services if needed.
                  </p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle className="text-xl">Is there a long-term contract?</CardTitle>
                </CardHeader>
                <CardContent>
                  <p>
                    Our standard subscription is annual, but we offer flexible terms for different needs. Enterprise
                    customers typically benefit from multi-year agreements with preferential pricing. Contact us to
                    discuss contract options.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        <section className="w-full py-12 md:py-24 lg:py-32 bg-background">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight">Ready to Get Started?</h2>
                <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Contact us today to learn more about how Nautisense can help your research or maritime operations.
                </p>
              </div>
              <div className="flex flex-col gap-2 min-[400px]:flex-row">
                <Link href="/contact">
                  <Button className="px-8">Contact Us</Button>
                </Link>
                <Link href="/sample-data">
                  <Button variant="outline" className="px-8">
                    View Sample Data
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

