"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import Link from "next/link"
import Image from "next/image"
import { Shield, ArrowLeft, CheckCircle, Target, Eye, Globe, Lock, Zap } from "lucide-react"

const Navigation = () => {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-black/20 backdrop-blur-md border-b border-white/10">
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
            <Link href="/products" className="text-gray-300 hover:text-cyan-400 transition-colors">
              Products
            </Link>
            <Link href="/services" className="text-cyan-400 font-semibold">
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

export default function CybersecurityServicesPage() {
  const subServices = [
    {
      icon: Target,
      title: "GRC Risk Management Services",
      description: "Comprehensive governance, risk, and compliance management consulting",
      features: [
        "Risk assessment and analysis",
        "Compliance framework implementation",
        "Policy development and management",
        "Audit preparation and support",
        "Risk mitigation strategies",
        "Continuous monitoring setup",
      ],
    },
    {
      icon: Lock,
      title: "Security Architecture Design",
      description: "Strategic security architecture planning and implementation",
      features: [
        "Security architecture assessment",
        "Zero-trust architecture design",
        "Network security planning",
        "Cloud security architecture",
        "Identity and access management",
        "Security controls implementation",
      ],
    },
    {
      icon: Target,
      title: "Data Protection",
      description: "Data protection, classification, and management services",
      features: [
        "Policy and Procedure Development",
        "Regulatory Compliance",
        "Managed Services for Hotline",
        "Technology Implementation",
        "Data Classification & Management",
        "Post-incident analysis and reporting",
      ],
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
              className="absolute rounded-full bg-gradient-to-r from-cyan-400 to-blue-500 animate-pulse"
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
          {/* Back Navigation */}
          <Link
            href="/services"
            className="inline-flex items-center text-cyan-400 hover:text-cyan-300 mb-8 transition-colors"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Services
          </Link>

          {/* Hero Section */}
          <div className="text-center mb-16">
            <div className="w-24 h-24 rounded-full bg-gradient-to-r from-cyan-400 to-blue-500 flex items-center justify-center mx-auto mb-8">
              <Shield className="w-12 h-12 text-white" />
            </div>
            <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
              Cybersecurity Services
            </h1>
            <p className="text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
              Expert cybersecurity consulting services designed to strengthen your organization's security posture
              through comprehensive risk management, advanced architecture design, and proactive threat assessment.
            </p>
          </div>

          {/* Sub-services Grid */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-14">
            {subServices.map((service, index) => {
              const IconComponent = service.icon
              return (
                <Card
                  key={index}
                  className="bg-white/5 backdrop-blur-sm border border-white/10 hover:border-cyan-400/50 transition-all duration-300 transform hover:scale-105"
                >
                  <CardHeader className="text-center pb-4">
                    <div className="w-16 h-16 rounded-full bg-gradient-to-r from-cyan-400 to-blue-500 flex items-center justify-center mx-auto mb-4">
                      <IconComponent className="w-8 h-8 text-white" />
                    </div>
                    <CardTitle className="text-xl text-white mb-2">{service.title}</CardTitle>
                    <CardDescription className="text-gray-300">{service.description}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2">
                      {service.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-center text-gray-300 text-sm">
                          <CheckCircle className="w-4 h-4 text-green-400 mr-2 flex-shrink-0" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              )
            })}
          </div>

          {/* Detailed Process */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
            <div>
              <h2 className="text-3xl font-bold text-white mb-6 flex items-center">
                <Zap className="w-8 h-8 text-cyan-400 mr-3" />
                Our Approach
              </h2>
              <div className="space-y-6">
                <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-lg p-6">
                  <h3 className="text-xl font-semibold text-cyan-400 mb-2">1. Assessment & Analysis</h3>
                  <p className="text-gray-300">
                    Comprehensive evaluation of your current security posture, identifying vulnerabilities and risk
                    areas.
                  </p>
                </div>
                <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-lg p-6">
                  <h3 className="text-xl font-semibold text-blue-400 mb-2">2. Strategy Development</h3>
                  <p className="text-gray-300">
                    Custom security strategy and roadmap tailored to your organization's specific needs and
                    requirements.
                  </p>
                </div>
                <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-lg p-6">
                  <h3 className="text-xl font-semibold text-purple-400 mb-2">3. Implementation & Support</h3>
                  <p className="text-gray-300">
                    Expert implementation of security measures with ongoing support and continuous improvement.
                  </p>
                </div>
              </div>
            </div>

            <div>
              <h2 className="text-3xl font-bold text-white mb-6 flex items-center">
                <Eye className="w-8 h-8 text-purple-400 mr-3" />
                Service Benefits
              </h2>
              <div className="space-y-4">
                {[
                  "Expert-led security assessments and implementations",
                  "Customized security strategies for your industry",
                  "Proactive threat identification and mitigation",
                  "Compliance with industry standards and regulations",
                  "24/7 security monitoring and incident response",
                  "Continuous security posture improvement",
                  "Cost-effective security solutions",
                  "Executive-level security reporting and insights",
                ].map((benefit, index) => (
                  <div key={index} className="flex items-center text-gray-300">
                    <CheckCircle className="w-5 h-5 text-green-400 mr-3 flex-shrink-0" />
                    {benefit}
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* CTA Section */}
          <div className="text-center bg-gradient-to-r from-cyan-500/10 to-blue-500/10 backdrop-blur-sm border border-cyan-400/20 rounded-2xl p-12">
            <h2 className="text-3xl font-bold text-white mb-4">Strengthen Your Cybersecurity Posture</h2>
            <p className="text-gray-300 text-lg mb-8 max-w-2xl mx-auto">
              Partner with our cybersecurity experts to build a robust defense against evolving threats.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                size="lg"
                className="bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-600 hover:to-blue-600 text-white border-0"
              >
                <Globe className="w-5 h-5 mr-2" />
                <Link href="mailto:connect@observeri.com">Consult Our Experts</Link>
              </Button>
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
