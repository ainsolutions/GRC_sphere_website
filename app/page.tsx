"use client"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { Shield, Lock, Brain, CheckCircle, ArrowRight, Globe } from "lucide-react"
import Image from "next/image"
import { HyperspeedBackground } from "@/components/hyperspeed-background"

// Navigation component
const Navigation = () => {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-[#1a1a2e]/80 backdrop-blur-md border-b border-white/10">
      <div className="max-w-7xl mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
        
          <Link href="/" className="flex items-center">
            
            <Image
              src="/grc-sphere-full-logo.png"
              alt="GRC Sphere"
              width={120}
              height={120}
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
            <Link href="/contact" className="text-gray-300 hover:text-[#00D9FF] transition-colors">
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

// Decorative wave component
const WaveDecoration = () => {
  return (
    <div className="absolute bottom-0 left-0 right-0 h-32 overflow-hidden">
      <svg
        className="absolute bottom-0 w-full h-full"
        viewBox="0 0 1440 320"
        preserveAspectRatio="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          fill="none"
          stroke="url(#gradient)"
          strokeWidth="2"
          d="M0,160 C320,100 420,220 720,160 C1020,100 1120,220 1440,160 L1440,320 L0,320 Z"
          opacity="0.3"
        />
        <path
          fill="none"
          stroke="url(#gradient)"
          strokeWidth="2"
          d="M0,200 C320,140 420,260 720,200 C1020,140 1120,260 1440,200"
          opacity="0.5"
        />
        <defs>
          <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#00D9FF" />
            <stop offset="50%" stopColor="#9D4EDD" />
            <stop offset="100%" stopColor="#FF006E" />
          </linearGradient>
        </defs>
      </svg>
    </div>
  )
}

export default function HomePage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-[#0f0f1e] via-[#1a1a2e] to-[#16213e]">
      <HyperspeedBackground />

      {/* Navigation */}
      <Navigation />

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 px-6 min-h-screen flex items-center">
        {/* Background decorative elements */}
        <div className="absolute top-20 left-10 w-64 h-64 bg-[#00D9FF]/10 rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl" />

        <div className="max-w-7xl mx-auto relative z-10">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
              Measure and Improve
              <br />
              <span className="text-white">Your Risk Exposure</span>
            </h1>


      

            {/* Statistics Circle */}
            <div className="mt-20 flex justify-center">
              <div className="relative">
                <div className="w-64 h-64 rounded-full border-4 border-transparent bg-gradient-to-r from-[#00D9FF] via-purple-500 to-pink-500 p-[2px]">
                  <div className="w-full h-full rounded-full bg-[#1a1a2e] flex flex-col items-center justify-center">
                    <p className="text-sm text-gray-400 mb-2">on average</p>
                    <p className="text-6xl font-bold text-white">99.9%</p>
                    <p className="text-sm text-gray-400 mt-2 text-center px-6">
                      compliance rate achieved
                      <br />
                      by our clients
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <WaveDecoration />
      </section>

      {/* 24/7 Operations Section */}
      <section className="relative py-20 px-6 bg-gradient-to-b from-[#1a1a2e] to-[#0f0f1e]">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Dynamic
              <br />
              <span className="text-white">Cyber Risk Manageement</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
              Our comprehensive GRC platform combined with expert services delivers unique cost-effective solutions for
              your organization.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
            {/* Left side features */}
            <div className="space-y-6">
              <div className="flex items-start space-x-3">
                <CheckCircle className="w-6 h-6 text-[#00D9FF] flex-shrink-0 mt-1" />
                <div>
                  <h3 className="text-lg font-semibold text-white mb-1">Real-Time Monitoring</h3>
                  <p className="text-gray-400">Continuous assessment of your security posture</p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <CheckCircle className="w-6 h-6 text-[#00D9FF] flex-shrink-0 mt-1" />
                <div>
                  <h3 className="text-lg font-semibold text-white mb-1">GRC Risk Management</h3>
                  <p className="text-gray-400">Comprehensive governance and compliance tracking</p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <CheckCircle className="w-6 h-6 text-[#00D9FF] flex-shrink-0 mt-1" />
                <div>
                  <h3 className="text-lg font-semibold text-white mb-1">Reduce Cognitive Load</h3>
                  <p className="text-gray-400">Automated workflows and intelligent insights</p>
                </div>
              </div>
            </div>

            {/* Right side - Statistics Circle */}
            <div className="flex justify-center">
              <div className="relative">
                <div className="w-72 h-72 rounded-full border-4 border-transparent bg-gradient-to-r from-[#00D9FF] via-purple-500 to-pink-500 p-[2px]">
                  <div className="w-full h-full rounded-full bg-[#1a1a2e] flex flex-col items-center justify-center">
                    <p className="text-7xl font-bold text-white">85%</p>
                    <p className="text-sm text-gray-400 mt-4 text-center px-8">
                      confidence on AI
                      <br />
                      models
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* Left side - Another Statistics Circle */}
            <div className="flex justify-center order-2 md:order-1">
              <div className="relative">
                <div className="w-72 h-72 rounded-full border-4 border-transparent bg-gradient-to-r from-pink-500 via-purple-500 to-[#00D9FF] p-[2px]">
                  <div className="w-full h-full rounded-full bg-[#1a1a2e] flex flex-col items-center justify-center">
                    <p className="text-7xl font-bold text-white">50%</p>
                    <p className="text-sm text-gray-400 mt-4 text-center px-8">
                      reduction in compliance
                      <br />
                      management time
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Right side features */}
            <div className="space-y-6 order-1 md:order-2">
              <div className="flex items-start space-x-3">
                <CheckCircle className="w-6 h-6 text-[#00D9FF] flex-shrink-0 mt-1" />
                <div>
                  <h3 className="text-lg font-semibold text-white mb-1">Compliance Management</h3>
                  <p className="text-gray-400">ISO 27001, PCI-DSS, NESA, SAMA, HIPAA compliance</p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <CheckCircle className="w-6 h-6 text-[#00D9FF] flex-shrink-0 mt-1" />
                <div>
                  <h3 className="text-lg font-semibold text-white mb-1">Vulnerability Tracking Platform with Prioritization</h3>
                  <p className="text-gray-400">Powered by AI Model</p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <CheckCircle className="w-6 h-6 text-[#00D9FF] flex-shrink-0 mt-1" />
                <div>
                  <h3 className="text-lg font-semibold text-white mb-1">Risk Quantification</h3>
                  <p className="text-gray-400">Quantify your risk scenarios</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Overview Section */}
      <section className="py-20 px-6 bg-gradient-to-b from-[#0f0f1e] to-[#1a1a2e]">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">Comprehensive Security Solutions</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              From governance to incident response, we provide end-to-end cybersecurity services
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-8 hover:border-[#00D9FF]/50 transition-all">
              <Shield className="w-12 h-12 text-[#00D9FF] mb-4" />
              <h3 className="text-2xl font-bold text-white mb-4">Cybersecurity GRC</h3>
              <p className="text-gray-400 mb-6">Comprehensive governance, risk, and compliance management platform</p>
              <Link
                href="/products/cybersecurity-grc"
                className="text-[#00D9FF] hover:text-[#00B8D4] flex items-center space-x-2"
              >
                <span>Learn More</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>

            <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-8 hover:border-[#00D9FF]/50 transition-all">
              <Lock className="w-12 h-12 text-[#00D9FF] mb-4" />
              <h3 className="text-2xl font-bold text-white mb-4">Regulatory Compliance</h3>
              <p className="text-gray-400 mb-6">Ensure adherence to industry standards and regulatory requirements</p>
              <Link
                href="/products/regulatory-compliance"
                className="text-[#00D9FF] hover:text-[#00B8D4] flex items-center space-x-2"
              >
                <span>Learn More</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>

            <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-8 hover:border-[#00D9FF]/50 transition-all">
              <Brain className="w-12 h-12 text-[#00D9FF] mb-4" />
              <h3 className="text-2xl font-bold text-white mb-4">Security Services</h3>
              <p className="text-gray-400 mb-6">
                Expert-led security architecture, red teaming, and forensics services
              </p>
              <Link
                href="/services/cybersecurity-services"
                className="text-[#00D9FF] hover:text-[#00B8D4] flex items-center space-x-2"
              >
                <span>Learn More</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-6 bg-gradient-to-b from-[#1a1a2e] to-[#0f0f1e]">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">Ready to Strengthen Your Security Posture?</h2>
          <p className="text-xl text-gray-300 mb-8">
            Get started with a free trial and see how GRC Sphere can transform your security operations
          </p>
               <Button
                size="lg"
                className="bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-600 hover:to-blue-600 text-white border-0"
              >
                <Globe className="w-5 h-5 mr-2" />
                <Link href="mailto:connect@observeri.com">Consult Our Experts</Link>
              </Button>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#0a0a14] py-12 px-6 border-t border-white/10">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div>
              <Link href="/" className="flex items-center mb-4">
                <Image
                  src="/grc-sphere-full-logo.png"
                  alt="GRC Sphere"
                  width={150}
                  height={40}
                  className="object-contain"
                />
              </Link>
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
                  <Link href="/products/regulatory-compliance" className="text-gray-400 hover:text-[#00D9FF] text-sm">
                    Regulatory Compliance
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="text-white font-semibold mb-4">Services</h4>
              <ul className="space-y-2">
                <li>
                  <Link href="/services/cybersecurity-services" className="text-gray-400 hover:text-[#00D9FF] text-sm">
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
  )
}
