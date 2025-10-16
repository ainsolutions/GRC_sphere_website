"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import Link from "next/link"
import Image from "next/image"
import { Mail, Phone, MapPin, Clock, Send, Handshake, Linkedin, Twitter, Github, Globe } from "lucide-react"
import { HyperspeedBackground } from "@/components/hyperspeed-background"

const Navigation = () => {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-[#1a1a2e]/80 backdrop-blur-md border-b border-white/10">
      <div className="max-w-7xl mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
         <Link href="/" className="flex items-center">
            <Image
              src="/grc-sphere-full-logo.png"
              alt="GRC Sphere"
              width={140}
              height={50}
              className="object-contain"
            />
          </Link>

          <div className="hidden md:flex items-center space-x-8">
            <Link href="/products" className="text-gray-300 hover:text-[#00D9FF] transition-colors">
              Products
            </Link>
            <Link href="/services" className="text-gray-300 hover:text-[#00D9FF] transition-colors">
              Services
            </Link>
            <Link href="/blogs" className="text-gray-300 hover:text-[#00D9FF] transition-colors">
              Resources
            </Link>
            <Link href="/contact" className="text-[#00D9FF] font-semibold">
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

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    inquiryType: "",
    message: "",
  })

  const handleInputChange = (field: string, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle form submission
    console.log("Form submitted:", formData)
  }

  const contactMethods = [
    {
      icon: Handshake,
      title: "Sales & Partnerships",
      description: "Explore sales and partnership opportunities",
      contact: "connect@observeri.com",
      phone: "+971 (506) 583-714",
    },
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#0f0f1e] via-[#1a1a2e] to-[#16213e]">
      <HyperspeedBackground />
      <div className="absolute top-20 left-10 w-64 h-64 bg-[#00D9FF]/10 rounded-full blur-3xl" />
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl" />

      <Navigation />

      <main className="relative z-10 pt-32 pb-16 px-6">
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="text-center mb-16">
            <h1 className="text-5xl md:text-6xl font-bold mb-6 text-white">Get In Touch</h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
              Ready to transform your cybersecurity and compliance posture? Our experts are here to help you navigate
              the complex world of GRC and AI-powered solutions.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
            {/* Contact Methods */}
            <div className="lg:col-span-1 space-y-6">
              <h2 className="text-2xl font-bold text-white mb-6">Contact Methods</h2>

              {contactMethods.map((method, index) => {
                const IconComponent = method.icon
                return (
                  <Card
                    key={index}
                    className="bg-white/5 backdrop-blur-sm border border-white/10 hover:border-[#00D9FF]/50 transition-all duration-300"
                  >
                    <CardHeader className="pb-4">
                      <div className="w-12 h-12 rounded-full bg-[#00D9FF]/20 flex items-center justify-center mb-3">
                        <IconComponent className="w-6 h-6 text-[#00D9FF]" />
                      </div>
                      <CardTitle className="text-lg text-white">{method.title}</CardTitle>
                      <CardDescription className="text-gray-300">{method.description}</CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-2">
                      <div className="flex items-center text-gray-300">
                        <Mail className="w-4 h-4 mr-2 text-[#00D9FF]" />
                        <a href={`mailto:${method.contact}`} className="hover:text-[#00D9FF] transition-colors">
                          {method.contact}
                        </a>
                      </div>
                      <div className="flex items-center text-gray-300">
                        <Phone className="w-4 h-4 mr-2 text-[#00D9FF]" />
                        <a href={`tel:${method.phone}`} className="hover:text-[#00D9FF] transition-colors">
                          {method.phone}
                        </a>
                      </div>
                    </CardContent>
                  </Card>
                )
              })}

              {/* Company Information */}
              <Card className="bg-white/5 backdrop-blur-sm border border-white/10">
                <CardHeader>
                  <CardTitle className="text-lg text-white flex items-center">
                    <MapPin className="w-5 h-5 text-[#00D9FF] mr-2" />
                    Our Location
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="text-gray-300">
                    <p className="font-semibold text-white mb-2">GRC Sphere Headquarters</p>
                    <p>Dubai, United Arab Emirates</p>
                  </div>

                  <div className="flex items-center text-gray-300">
                    <Clock className="w-4 h-4 mr-2 text-[#00D9FF]" />
                    <span>Mon - Fri: 9:00 AM - 6:00 PM PST</span>
                  </div>

                  {/* Social Media Links */}
                  <div className="pt-4 border-t border-white/10">
                    <p className="text-white font-semibold mb-3">Follow Us</p>
                    <div className="flex space-x-4">
                      <a href="#" className="text-gray-400 hover:text-[#00D9FF] transition-colors">
                        <Linkedin className="w-5 h-5" />
                      </a>
                      <a href="#" className="text-gray-400 hover:text-[#00D9FF] transition-colors">
                        <Twitter className="w-5 h-5" />
                      </a>
                      <a href="#" className="text-gray-400 hover:text-[#00D9FF] transition-colors">
                        <Github className="w-5 h-5" />
                      </a>
                      <a href="#" className="text-gray-400 hover:text-[#00D9FF] transition-colors">
                        <Globe className="w-5 h-5" />
                      </a>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Contact Form */}
            <div className="lg:col-span-2">
              <Card className="bg-white/5 backdrop-blur-sm border border-white/10">
                <CardHeader>
                  <CardTitle className="text-2xl text-white">Send Us a Message</CardTitle>
                  <CardDescription className="text-gray-300">
                    Fill out the form below and our team will get back to you within 24 hours.
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <label className="block text-sm font-medium text-white mb-2">Full Name *</label>
                        <Input
                          type="text"
                          value={formData.name}
                          onChange={(e) => handleInputChange("name", e.target.value)}
                          className="w-full bg-white/10 border border-white/20 text-white placeholder-gray-400 focus:border-[#00D9FF]"
                          placeholder="Enter your full name"
                          required
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-white mb-2">Email Address *</label>
                        <Input
                          type="email"
                          value={formData.email}
                          onChange={(e) => handleInputChange("email", e.target.value)}
                          className="w-full bg-white/10 border border-white/20 text-white placeholder-gray-400 focus:border-[#00D9FF]"
                          placeholder="Enter your email"
                          required
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <label className="block text-sm font-medium text-white mb-2">Company</label>
                        <Input
                          type="text"
                          value={formData.company}
                          onChange={(e) => handleInputChange("company", e.target.value)}
                          className="w-full bg-white/10 border border-white/20 text-white placeholder-gray-400 focus:border-[#00D9FF]"
                          placeholder="Enter your company name"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-white mb-2">Inquiry Type *</label>
                        <Select onValueChange={(value) => handleInputChange("inquiryType", value)}>
                          <SelectTrigger className="w-full bg-white/10 border border-white/20 text-white">
                            <SelectValue placeholder="Select inquiry type" />
                          </SelectTrigger>
                          <SelectContent className="bg-[#1a1a2e] border-white/20 text-white">
                            <SelectItem value="sales">Sales Inquiry</SelectItem>
                            <SelectItem value="support">Technical Support</SelectItem>
                            <SelectItem value="partnership">Partnership</SelectItem>
                            <SelectItem value="demo">Request Demo</SelectItem>
                            <SelectItem value="general">General Question</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-white mb-2">Message *</label>
                      <Textarea
                        value={formData.message}
                        onChange={(e) => handleInputChange("message", e.target.value)}
                        className="w-full bg-white/10 border border-white/20 text-white placeholder-gray-400 focus:border-[#00D9FF] min-h-[150px]"
                        placeholder="Tell us about your requirements, questions, or how we can help you..."
                        required
                      />
                    </div>

                    <div className="flex flex-col sm:flex-row gap-4">
                      <Button
                        type="submit"
                        className="bg-[#00D9FF] hover:bg-[#00B8D4] text-black font-semibold border-0 flex-1"
                      >
                        <Send className="w-4 h-4 mr-2" />
                        Send Message
                      </Button>
                      <Button
                        type="button"
                        variant="outline"
                        className="border-white/20 text-white hover:bg-white/10 bg-transparent"
                      >
                        Schedule Call
                      </Button>
                    </div>
                  </form>
                </CardContent>
              </Card>
            </div>
          </div>

          {/* FAQ Section */}
          <div className="text-center bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-12">
            <h2 className="text-3xl font-bold text-white mb-6">Frequently Asked Questions</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-left">
              <div>
                <h3 className="text-lg font-semibold text-[#00D9FF] mb-2">
                  How quickly can you implement a GRC solution?
                </h3>
                <p className="text-gray-300">
                  Implementation timelines vary based on your organization's size and requirements. Typically, our GRC
                  solutions can be deployed within 4-8 weeks with full customization.
                </p>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-[#00D9FF] mb-2">Do you offer 24/7 support?</h3>
                <p className="text-gray-300">
                  Yes, we provide 24/7 technical support for all enterprise customers, ensuring your security operations
                  never stop.
                </p>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-[#00D9FF] mb-2">
                  Can your solutions integrate with existing systems?
                </h3>
                <p className="text-gray-300">
                  Absolutely. Our solutions are designed with integration in mind and can connect with most existing
                  security, compliance, and business systems.
                </p>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-[#00D9FF] mb-2">What industries do you serve?</h3>
                <p className="text-gray-300">
                  We serve organizations across all industries, with specialized expertise in financial services,
                  healthcare, manufacturing, and technology sectors.
                </p>
              </div>
            </div>
          </div>
          {/* Footer */}
          <footer className="bg-[#0a0a14] py-12 px-6 border-t border-white/10">
            <div className="max-w-7xl mx-auto">
              <div className="grid md:grid-cols-4 gap-8 mb-8">
                <div>
                  <div className="flex items-center space-x-3 mb-4">
                <Link href="/" className="flex items-center">
            <Image
              src="/grc-sphere-full-logo.png"
              alt="GRC Sphere"
              width={120}
              height={50}
              className="object-contain"
            />
          </Link>
                  </div>
                  <p className="text-gray-400 text-sm">
                    Comprehensive cybersecurity governance, risk, and compliance solutions
                  </p>
                </div>

                <div>
                  <h4 className="text-white font-semibold mb-4">Products</h4>
                  <ul className="space-y-2">
                    <li>
                      <Link href="/products/cybersecurity-grc" className="text-gray-400 hover:text-[#00D9FF] text-sm">
                        Cybersecurity GRC
                      </Link>
                    </li>
                    <li>
                      <Link
                        href="/products/regulatory-compliance"
                        className="text-gray-400 hover:text-[#00D9FF] text-sm"
                      >
                        Regulatory Compliance
                      </Link>
                    </li>
                  </ul>
                </div>

                <div>
                  <h4 className="text-white font-semibold mb-4">Services</h4>
                  <ul className="space-y-2">
                    <li>
                      <Link
                        href="/services/cybersecurity-services"
                        className="text-gray-400 hover:text-[#00D9FF] text-sm"
                      >
                        Cybersecurity Services
                      </Link>
                    </li>
                    <li>
                      <Link href="/services" className="text-gray-400 hover:text-[#00D9FF] text-sm">
                        All Services
                      </Link>
                    </li>
                  </ul>
                </div>

                <div>
                  <h4 className="text-white font-semibold mb-4">Company</h4>
                  <ul className="space-y-2">
                    <li>
                      <Link href="/blogs" className="text-gray-400 hover:text-[#00D9FF] text-sm">
                        Blog
                      </Link>
                    </li>
                    <li>
                      <Link href="/contact" className="text-gray-400 hover:text-[#00D9FF] text-sm">
                        Contact
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>

              <div className="border-t border-white/10 pt-8 text-center text-gray-400 text-sm">
                <p>&copy; 2025 GRC Sphere. All rights reserved.</p>
              </div>
            </div>
          </footer>
        </div>
      </main>
    </div>
  )
}
