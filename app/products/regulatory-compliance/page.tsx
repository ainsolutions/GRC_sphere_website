"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import Link from "next/link"
import Image from "next/image"
import { HyperspeedBackground } from "@/components/hyperspeed-background"
import { Lock, ArrowLeft, CheckCircle, Zap, BarChart3, Globe, FileText, Shield, AlertCircle } from "lucide-react"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"

export default function RegulatoryCompliancePage() {
  const frameworks = [
    {
      icon: FileText,
      title: "SOX Compliance",
      description: "Sarbanes-Oxley Act compliance management and reporting",
    },
    {
      icon: Lock,
      title: "GDPR & Privacy",
      description: "Data protection and privacy regulation compliance",
    },
    {
      icon: Shield,
      title: "HIPAA Security",
      description: "Healthcare information protection and compliance",
    },
    {
      icon: AlertCircle,
      title: "ISO Standards",
      description: "ISO 27001, 27002, and other international standards",
    },
  ]

  return (
    <div className="min-h-screen bg-black relative overflow-hidden">
      {/* Animated background */}
      <div className="absolute inset-0 bg-gradient-to-br from-black via-gray-900 to-black">
        <HyperspeedBackground />
        <div className="absolute inset-0 opacity-20">
          {Array.from({ length: 30 }).map((_, i) => (
            <div
              key={i}
              className="absolute rounded-full bg-gradient-to-r from-purple-400 to-pink-500 animate-pulse"
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

      <Header />

      <main className="relative z-10 pt-24 pb-16 px-6">
        <div className="max-w-7xl mx-auto">
          {/* Back Navigation */}
          <Link
            href="/products"
            className="inline-flex items-center text-purple-400 hover:text-purple-300 mb-8 transition-colors"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Products
          </Link>

          {/* Hero Section */}
          <div className="text-center mb-16">
            <div className="w-24 h-24 rounded-full bg-gradient-to-r from-purple-400 to-pink-500 flex items-center justify-center mx-auto mb-8">
              <Lock className="w-12 h-12 text-white" />
            </div>
            <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-purple-400 to-pink-500 bg-clip-text text-transparent">
              Regulatory Compliance
            </h1>
            <p className="text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
              Advanced compliance management system that ensures adherence to industry standards and regulatory
              requirements. Streamline your compliance processes with automated monitoring, evidence collection, and
              reporting.
            </p>
          </div>

          {/* Supported Frameworks */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            {frameworks.map((framework, index) => {
              const IconComponent = framework.icon
              return (
                <Card
                  key={index}
                  className="bg-white/5 backdrop-blur-sm border border-white/10 hover:border-purple-400/50 transition-all duration-300"
                >
                  <CardHeader className="text-center pb-4">
                    <div className="w-16 h-16 rounded-full bg-gradient-to-r from-purple-400 to-pink-500 flex items-center justify-center mx-auto mb-4">
                      <IconComponent className="w-8 h-8 text-white" />
                    </div>
                    <CardTitle className="text-lg text-white">{framework.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="text-gray-300 text-center">{framework.description}</CardDescription>
                  </CardContent>
                </Card>
              )
            })}
          </div>

          {/* Detailed Features */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
            <div>
              <h2 className="text-3xl font-bold text-white mb-6 flex items-center">
                <Zap className="w-8 h-8 text-purple-400 mr-3" />
                Compliance Features
              </h2>
              <div className="space-y-4">
                {[
                  "Multi-framework compliance support",
                  "Automated evidence collection and storage",
                  "Real-time compliance gap analysis",
                  "Regulatory change management alerts",
                  "Comprehensive audit trail tracking",
                  "Custom compliance workflow builder",
                  "Risk-based compliance prioritization",
                  "Executive compliance dashboards",
                ].map((feature, index) => (
                  <div key={index} className="flex items-center text-gray-300">
                    <CheckCircle className="w-5 h-5 text-green-400 mr-3 flex-shrink-0" />
                    {feature}
                  </div>
                ))}
              </div>
            </div>

            <div>
              <h2 className="text-3xl font-bold text-white mb-6 flex items-center">
                <BarChart3 className="w-8 h-8 text-pink-400 mr-3" />
                Compliance Benefits
              </h2>
              <div className="space-y-6">
                <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-lg p-6">
                  <h3 className="text-xl font-semibold text-purple-400 mb-2">100% Compliance Assurance</h3>
                  <p className="text-gray-300">
                    Maintain continuous compliance across all applicable regulatory frameworks.
                  </p>
                </div>
                <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-lg p-6">
                  <h3 className="text-xl font-semibold text-pink-400 mb-2">70% Faster Audits</h3>
                  <p className="text-gray-300">
                    Automated evidence collection and organized documentation streamline audit processes.
                  </p>
                </div>
                <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-lg p-6">
                  <h3 className="text-xl font-semibold text-cyan-400 mb-2">Real-time Monitoring</h3>
                  <p className="text-gray-300">
                    Continuous compliance monitoring with instant alerts for any deviations or gaps.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* CTA Section */}
          <div className="text-center bg-gradient-to-r from-purple-500/10 to-pink-500/10 backdrop-blur-sm border border-purple-400/20 rounded-2xl p-12">
            <h2 className="text-3xl font-bold text-white mb-4">Achieve Seamless Regulatory Compliance</h2>
            <p className="text-gray-300 text-lg mb-8 max-w-2xl mx-auto">
              Transform your compliance processes with our comprehensive regulatory management platform.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                size="lg"
                className="bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-600 hover:to-blue-600 text-white border-0"
              >
                <Globe className="w-5 h-5 mr-2" />
                <Link href="mailto:connect@observeri.com">Request Trial</Link>
              </Button>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  )
}
