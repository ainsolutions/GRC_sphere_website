"use client"
import Link from "next/link"
import { Globe } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Logo } from "./ui/Logo/logo"

export const Header = () => {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-black/20 backdrop-blur-md border-b border-white/10">
      <div className="max-w-7xl mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <Link href="/" className="flex items-center">
            <Logo
              width={50}
              height={50}
              name="GRC Sphere"
            />
          </Link>
          <div className="hidden md:flex items-center space-x-8">
            <Link href="/products" className="text-cyan-400 font-semibold">
              Products
            </Link>
            <Link href="/services" className="text-gray-300 hover:text-cyan-400 transition-colors">
              Services
            </Link>
            <Link href="/blogs" className="text-gray-300 hover:text-cyan-400 transition-colors">
              Blogs
            </Link>
            <Link href="/contact" className="text-gray-300 hover:text-cyan-400 transition-colors">
              Contact
            </Link>
          </div>

          <Button
            size="lg"
            className="bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-600 hover:to-blue-600 text-white border-0"
          >
            <Globe className="w-5 h-5 mr-2" />
            <Link href="mailto:connect@observeri.com">Consult Our Experts</Link>
          </Button>
        </div>
      </div>
    </nav>
  )
}