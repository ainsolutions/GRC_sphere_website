"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import Link from "next/link"
import { Shield, CheckCircle, Target, Eye, Lock, Zap, Globe } from "lucide-react"
import Image from "next/image"
import { HyperspeedBackground } from "@/components/hyperspeed-background"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"

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
    <div className="min-h-screen bg-gradient-to-br from-[#0f0f1e] via-[#1a1a2e] to-[#16213e]">
      <HyperspeedBackground />
      <Header />

      <main className="relative z-10 pt-32 pb-16 px-6">
        <div className="absolute top-20 left-10 w-64 h-64 bg-[#00D9FF]/10 rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl" />

        <div className="max-w-7xl mx-auto relative z-10">
          {/* Hero Section */}
          <div className="text-center mb-16">
            <div className="w-24 h-24 rounded-full bg-[#00D9FF]/20 flex items-center justify-center mx-auto mb-8">
              <Shield className="w-12 h-12 text-[#00D9FF]" />
            </div>
            <h1 className="text-5xl md:text-6xl font-bold mb-6 text-white">Cybersecurity Services</h1>
            <p className="text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
              Expert cybersecurity consulting services designed to strengthen your organization's security posture
              through comprehensive risk management, advanced architecture design, and proactive threat assessment.
            </p>
          </div>

          {/* Sub-services Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
            {subServices.map((service, index) => {
              const IconComponent = service.icon
              return (
                <Card
                  key={index}
                  className="bg-white/5 backdrop-blur-sm border border-white/10 hover:border-[#00D9FF]/50 transition-all duration-300"
                >
                  <CardHeader className="text-center pb-4">
                    <div className="w-16 h-16 rounded-full bg-[#00D9FF]/20 flex items-center justify-center mx-auto mb-4">
                      <IconComponent className="w-8 h-8 text-[#00D9FF]" />
                    </div>
                    <CardTitle className="text-xl text-white mb-2">{service.title}</CardTitle>
                    <CardDescription className="text-gray-300">{service.description}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2">
                      {service.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-center text-gray-300 text-sm">
                          <CheckCircle className="w-4 h-4 text-[#00D9FF] mr-2 flex-shrink-0" />
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
                <Zap className="w-8 h-8 text-[#00D9FF] mr-3" />
                Our Approach
              </h2>
              <div className="space-y-6">
                <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-lg p-6">
                  <h3 className="text-xl font-semibold text-[#00D9FF] mb-2">1. Assessment & Analysis</h3>
                  <p className="text-gray-300">
                    Comprehensive evaluation of your current security posture, identifying vulnerabilities and risk
                    areas.
                  </p>
                </div>
                <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-lg p-6">
                  <h3 className="text-xl font-semibold text-[#00D9FF] mb-2">2. Strategy Development</h3>
                  <p className="text-gray-300">
                    Custom security strategy and roadmap tailored to your organization's specific needs and
                    requirements.
                  </p>
                </div>
                <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-lg p-6">
                  <h3 className="text-xl font-semibold text-[#00D9FF] mb-2">3. Implementation & Support</h3>
                  <p className="text-gray-300">
                    Expert implementation of security measures with ongoing support and continuous improvement.
                  </p>
                </div>
              </div>
            </div>

            <div>
              <h2 className="text-3xl font-bold text-white mb-6 flex items-center">
                <Eye className="w-8 h-8 text-[#00D9FF] mr-3" />
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
                    <CheckCircle className="w-5 h-5 text-[#00D9FF] mr-3 flex-shrink-0" />
                    {benefit}
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* CTA Section */}
          <div className="text-center bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-12">
            <h2 className="text-3xl font-bold text-white mb-4">Strengthen Your Cybersecurity Posture</h2>
            <p className="text-gray-300 text-lg mb-8 max-w-2xl mx-auto">
              Partner with our cybersecurity experts to build a robust defense against evolving threats.
            </p>
              <Button
                size="lg"
                className="bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-600 hover:to-blue-600 text-white border-0"
              >
                <Globe className="w-5 h-5 mr-2" />
                <Link href="mailto:connect@observeri.com">Consult Our Experts</Link>
              </Button>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  )
}
