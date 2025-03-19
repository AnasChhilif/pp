import Link from "next/link"
import { Waves } from "lucide-react"

export function SiteFooter() {
  return (
    <footer className="w-full border-t bg-background py-6 md:py-12">
      <div className="container flex flex-col gap-6 px-4 md:flex-row md:items-center md:px-6">
        <div className="flex items-center gap-2">
          <Waves className="h-6 w-6 text-primary" />
          <span className="text-lg font-bold">Nautisense</span>
        </div>
        <nav className="flex gap-4 md:gap-6 md:ml-auto">
          <Link href="/features" className="text-sm hover:underline underline-offset-4">
            Features
          </Link>
          <Link href="/how-it-works" className="text-sm hover:underline underline-offset-4">
            How It Works
          </Link>
          <Link href="/pricing" className="text-sm hover:underline underline-offset-4">
            Pricing
          </Link>
          <Link href="/sample-data" className="text-sm hover:underline underline-offset-4">
            Sample Data
          </Link>
          <Link href="/contact" className="text-sm hover:underline underline-offset-4">
            Contact
          </Link>
        </nav>
        <div className="flex gap-2 md:ml-auto">
          <Link href="#" className="text-sm hover:underline underline-offset-4">
            Privacy Policy
          </Link>
          <span className="text-sm text-muted-foreground">|</span>
          <Link href="#" className="text-sm hover:underline underline-offset-4">
            Terms of Service
          </Link>
        </div>
      </div>
      <div className="container px-4 md:px-6 mt-6">
        <p className="text-center text-sm text-muted-foreground">
          © {new Date().getFullYear()} Nautisense. All rights reserved.
        </p>
      </div>
    </footer>
  )
}

