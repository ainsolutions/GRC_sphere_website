"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import Link from "next/link"
import {
  Shield,
  Mail,
  Phone,
  MapPin,
  Clock,
  Send,
  Users,
  Headphones,
  Handshake,
  Linkedin,
  Twitter,
  Github,
  Globe,
} from "lucide-react"





const Navigation = () => {
  return (
 
    <nav className="fixed top-0 left-0 right-0 z-50 bg-black/20 backdrop-blur-md border-b border-white/10">
      <div className="max-w-7xl mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <Link href="/" className="flex items-center space-x-2">
            <Shield className="w-8 h-8 text-cyan-400" />
            <span className="text-xl font-bold bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
              GRC Sphere
            </span>
          </Link>

          <div className="hidden md:flex items-center space-x-8">
            <Link href="/products" className="text-gray-300 hover:text-cyan-400 transition-colors">
              Products
            </Link>
            <Link href="/services" className="text-gray-300 hover:text-cyan-400 transition-colors">
              Services
            </Link>
            <Link href="/blogs" className="text-gray-300 hover:text-cyan-400 transition-colors">
              Blogs
            </Link>
            <Link href="/contact" className="text-cyan-400 font-semibold">
              Contact
            </Link>
          </div>

          <Button className="bg-gradient-to-r from-cyan-500 to-purple-500 hover:from-cyan-600 hover:to-purple-600 text-white border-0">
            Get Started
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
      contact: "info@grcsphere.com",
      phone: "+971 (506) 583-714",
      gradient: "from-green-400 to-teal-500",
    },
  ]

  return (

  
    <div className="min-h-screen bg-black relative overflow-hidden">
      {/* Animated background */}
      <div className="absolute inset-0 bg-gradient-to-br from-black via-gray-900 to-black">
        <div className="absolute inset-0 opacity-20">
          {Array.from({ length: 30 }).map((_, i) => (
            <div
              key={i}
              className="absolute rounded-full bg-gradient-to-r from-cyan-400 to-purple-400 animate-pulse"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                width: `${Math.random() * 3 + 1}px`,
                height: `${Math.random() * 3 + 1}px`,
                animationDelay: `${Math.random() * 2}s`,
              }}
            />
          ))}
        </div>
      </div>

      <Navigation />

      <main className="relative z-10 pt-24 pb-16 px-6">
        <div className="max-w-7xl mx-auto">
     
          {/* Header Section */}
          <div className="text-center mb-16">
   

      

            <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
              Get In Touch
            </h1>
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
                    className="bg-white/5 backdrop-blur-sm border border-white/10 hover:border-white/20 transition-all duration-300"
                  >
                    <CardHeader className="pb-4">
                      <div
                        className={`w-12 h-12 rounded-full bg-gradient-to-r ${method.gradient} flex items-center justify-center mb-3`}
                      >
                        <IconComponent className="w-6 h-6 text-white" />
                      </div>
                      <CardTitle className="text-lg text-white">{method.title}</CardTitle>
                      <CardDescription className="text-gray-300">{method.description}</CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-2">
                      <div className="flex items-center text-gray-300">
                        <Mail className="w-4 h-4 mr-2 text-cyan-400" />
                        <a href={`mailto:${method.contact}`} className="hover:text-cyan-400 transition-colors">
                          {method.contact}
                        </a>
                      </div>
                      <div className="flex items-center text-gray-300">
                        <Phone className="w-4 h-4 mr-2 text-purple-400" />
                        <a href={`tel:${method.phone}`} className="hover:text-purple-400 transition-colors">
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
                    <MapPin className="w-5 h-5 text-cyan-400 mr-2" />
                    Our Location
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="text-gray-300">
                    <p className="font-semibold text-white mb-2">GRC Sphere Headquarters</p>
              
                    <p>Dubai, United Arab Emirates</p>
                  </div>

                  <div className="flex items-center text-gray-300">
                    <Clock className="w-4 h-4 mr-2 text-purple-400" />
                    <span>Mon - Fri: 9:00 AM - 6:00 PM PST</span>
                  </div>

                  {/* Social Media Links */}
                  <div className="pt-4 border-t border-white/10">
                    <p className="text-white font-semibold mb-3">Follow Us</p>
                    <div className="flex space-x-4">
                      <a href="#" className="text-gray-400 hover:text-cyan-400 transition-colors">
                        <Linkedin className="w-5 h-5" />
                      </a>
                      <a href="#" className="text-gray-400 hover:text-cyan-400 transition-colors">
                        <Twitter className="w-5 h-5" />
                      </a>
                      <a href="#" className="text-gray-400 hover:text-cyan-400 transition-colors">
                        <Github className="w-5 h-5" />
                      </a>
                      <a href="#" className="text-gray-400 hover:text-cyan-400 transition-colors">
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
                          className="w-full border-cyan-500/50 text-cyan-300 hover:bg-cyan-500/10 hover:text-cyan-200 bg-transparent backdrop-blur-sm"
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
                          className="w-full border-cyan-500/50 text-cyan-300 hover:bg-cyan-500/10 hover:text-cyan-200 bg-transparent backdrop-blur-sm"
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
                          className="w-full border-cyan-500/50 text-cyan-300 hover:bg-cyan-500/10 hover:text-cyan-200 bg-transparent backdrop-blur-sm"
                          placeholder="Enter your company name"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-white mb-2">Inquiry Type *</label>
                        <Select onValueChange={(value) => handleInputChange("inquiryType", value)}>
                          <SelectTrigger className="w-full border-cyan-500/50 text-cyan-300 hover:bg-cyan-500/10 hover:text-cyan-200 bg-transparent backdrop-blur-sm">
                            <SelectValue placeholder="Select inquiry type" />
                          </SelectTrigger>
                          <SelectContent className="w-full border-cyan-500/50 text-cyan-300 hover:bg-cyan-500/10 hover:text-cyan-200 bg-transparent backdrop-blur-sm">
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
                        className="w-full border-cyan-500/50 text-cyan-300 hover:bg-cyan-500/10 hover:text-cyan-200 bg-transparent backdrop-blur-sm"
                        placeholder="Tell us about your requirements, questions, or how we can help you..."
                        required
                      />
                    </div>

                    <div className="flex flex-col sm:flex-row gap-4">
                      <Button
                        type="submit"
                        className="bg-gradient-to-r from-cyan-500 to-purple-500 hover:from-cyan-600 hover:to-purple-600 text-white border-0 flex-1"
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
                <h3 className="text-lg font-semibold text-cyan-400 mb-2">
                  How quickly can you implement a GRC solution?
                </h3>
                <p className="text-gray-300">
                  Implementation timelines vary based on your organization's size and requirements. Typically, our GRC
                  solutions can be deployed within 4-8 weeks with full customization.
                </p>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-cyan-400 mb-2">Do you offer 24/7 support?</h3>
                <p className="text-gray-300">
                  Yes, we provide 24/7 technical support for all enterprise customers, ensuring your security operations
                  never stop.
                </p>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-cyan-400 mb-2">
                  Can your solutions integrate with existing systems?
                </h3>
                <p className="text-gray-300">
                  Absolutely. Our solutions are designed with integration in mind and can connect with most existing
                  security, compliance, and business systems.
                </p>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-cyan-400 mb-2">What industries do you serve?</h3>
                <p className="text-gray-300">
                  We serve organizations across all industries, with specialized expertise in financial services,
                  healthcare, manufacturing, and technology sectors.
                </p>
              </div>
            </div>
          </div>
        </div>
      </main>
      <script async src="https://www.googletagmanager.com/gtag/js?id=AW-17583674550"></script>

    </div>
  )
}
