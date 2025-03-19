"use client"

import Link from "next/link"
import { ArrowRight, Mail, MapPin, Phone } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { useEffect } from "react"

export default function ContactPage() {
  // Set page-specific metadata
  useEffect(() => {
    document.title = "Contact Us - Nautisense"
  }, [])

  // Handle form submission on the client side
  const handleSubmit = (e) => {
    e.preventDefault()
    // Client-side form handling logic would go here
    // For example, you could use fetch to send the form data to an API
    console.log("Form submitted")
    alert("Thank you for your message! We'll get back to you soon.")
  }

  return (
    <>
      <section className="w-full py-12 md:py-24 lg:py-32 bg-gradient-to-b from-background to-muted">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl">Contact Us</h1>
              <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Get in touch with our team to learn more about Nautisense and how we can help your research or maritime
                operations.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="w-full py-12 md:py-24 lg:py-32 bg-background">
        <div className="container px-4 md:px-6">
          <div className="grid gap-6 lg:grid-cols-2 lg:gap-12">
            <div className="flex flex-col justify-center space-y-4">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight">Get in Touch</h2>
                <p className="max-w-[600px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  We're here to answer your questions about Nautisense and help you find the right solution for your
                  needs.
                </p>
              </div>
              <div className="space-y-4">
                <div className="flex items-start gap-4">
                  <MapPin className="h-6 w-6 text-primary mt-1" />
                  <div>
                    <h3 className="font-bold">Our Location</h3>
                    <p className="text-muted-foreground">
                      123 Ocean Avenue
                      <br />
                      Maritime District
                      <br />
                      Rotterdam, Netherlands
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <Mail className="h-6 w-6 text-primary mt-1" />
                  <div>
                    <h3 className="font-bold">Email Us</h3>
                    <p className="text-muted-foreground">
                      <Link href="mailto:info@nautisense.com" className="hover:underline">
                        info@nautisense.com
                      </Link>
                    </p>
                    <p className="text-sm text-muted-foreground">For general inquiries</p>
                    <p className="text-muted-foreground mt-2">
                      <Link href="mailto:research@nautisense.com" className="hover:underline">
                        research@nautisense.com
                      </Link>
                    </p>
                    <p className="text-sm text-muted-foreground">For research collaborations</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <Phone className="h-6 w-6 text-primary mt-1" />
                  <div>
                    <h3 className="font-bold">Call Us</h3>
                    <p className="text-muted-foreground">
                      <Link href="tel:+31101234567" className="hover:underline">
                        +31 10 123 4567
                      </Link>
                    </p>
                    <p className="text-sm text-muted-foreground">Monday to Friday, 9am to 5pm CET</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex flex-col gap-4">
              <Card>
                <CardHeader>
                  <CardTitle>Send Us a Message</CardTitle>
                  <CardDescription>
                    Fill out the form below and we'll get back to you as soon as possible.
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <form className="grid gap-4" onSubmit={handleSubmit}>
                    <div className="grid grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="first-name">First name</Label>
                        <Input id="first-name" placeholder="Enter your first name" />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="last-name">Last name</Label>
                        <Input id="last-name" placeholder="Enter your last name" />
                      </div>
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="email">Email</Label>
                      <Input id="email" type="email" placeholder="Enter your email" required />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="organization">Organization</Label>
                      <Input id="organization" placeholder="Enter your organization" />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="interest">I'm interested in</Label>
                      <Select>
                        <SelectTrigger id="interest">
                          <SelectValue placeholder="Select your interest" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="research">Research Collaboration</SelectItem>
                          <SelectItem value="basic">Basic Plan</SelectItem>
                          <SelectItem value="professional">Professional Plan</SelectItem>
                          <SelectItem value="enterprise">Enterprise Solution</SelectItem>
                          <SelectItem value="other">Other</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="message">Message</Label>
                      <Textarea id="message" placeholder="Enter your message" className="min-h-[120px]" required />
                    </div>
                    <Button type="submit" className="w-full">
                      Send Message
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      <section className="w-full py-12 md:py-24 lg:py-32 bg-muted">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight">Frequently Asked Questions</h2>
              <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Find answers to common questions about Nautisense.
              </p>
            </div>
          </div>
          <div className="mx-auto grid max-w-5xl gap-6 py-12 lg:grid-cols-2">
            <Card>
              <CardHeader>
                <CardTitle className="text-xl">How long does installation take?</CardTitle>
              </CardHeader>
              <CardContent>
                <p>
                  Installation typically takes 1-2 days depending on the vessel size and complexity. Our technicians
                  work efficiently to minimize disruption to your operations.
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle className="text-xl">Do you offer international service?</CardTitle>
              </CardHeader>
              <CardContent>
                <p>
                  Yes, we operate globally and have installation partners in major maritime hubs around the world. We
                  can coordinate installation and service wherever your vessels operate.
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle className="text-xl">What kind of training do you provide?</CardTitle>
              </CardHeader>
              <CardContent>
                <p>
                  We provide comprehensive training for your team on using the Nautisense platform and interpreting the
                  data. This includes online tutorials, documentation, and personalized training sessions.
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle className="text-xl">How secure is my data?</CardTitle>
              </CardHeader>
              <CardContent>
                <p>
                  We take data security seriously. All data is encrypted both in transit and at rest. We use
                  industry-standard security practices and regular audits to ensure your data remains protected.
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
              <Link href="/pricing">
                <Button className="px-8">View Pricing</Button>
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
    </>
  )
}

