"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import Link from "next/link"
import { Shield, ArrowLeft, CheckCircle, Zap, BarChart3, Users, Globe, Lock, Eye, AlertTriangle } from "lucide-react"

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

          <Button className="bg-gradient-to-r from-cyan-500 to-purple-500 hover:from-cyan-600 hover:to-purple-600 text-white border-0">
            Get Started
          </Button>
        </div>
      </div>
    </nav>
  )
}

export default function CybersecurityGRCPage() {
  const capabilities = [
    {
      icon: Lock,
      title: "Risk Assessment",
      description: "Comprehensive risk identification, analysis, and mitigation strategies",
    },
    {
      icon: Eye,
      title: "Compliance Monitoring",
      description: "Real-time monitoring of compliance status across all frameworks",
    },
    {
      icon: AlertTriangle,
      title: "Incident Response",
      description: "Automated incident detection, response, and recovery workflows",
    },
    {
      icon: BarChart3,
      title: "Analytics & Reporting",
      description: "Advanced analytics with customizable dashboards and reports",
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
            href="/products"
            className="inline-flex items-center text-cyan-400 hover:text-cyan-300 mb-8 transition-colors"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Products
          </Link>

          {/* Hero Section */}
          <div className="text-center mb-16">
            <div className="w-24 h-24 rounded-full bg-gradient-to-r from-cyan-400 to-blue-500 flex items-center justify-center mx-auto mb-8">
              <Shield className="w-12 h-12 text-white" />
            </div>
            <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
              Cybersecurity GRC Solution
            </h1>
            <p className="text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
              A comprehensive governance, risk management, and compliance platform that transforms how organizations
              approach cybersecurity. Built for the modern threat landscape with AI-powered insights and automated
              workflows.
            </p>
          </div>

          {/* Key Capabilities */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            {capabilities.map((capability, index) => {
              const IconComponent = capability.icon
              return (
                <Card
                  key={index}
                  className="bg-white/5 backdrop-blur-sm border border-white/10 hover:border-cyan-400/50 transition-all duration-300"
                >
                  <CardHeader className="text-center pb-4">
                    <div className="w-16 h-16 rounded-full bg-gradient-to-r from-cyan-400 to-blue-500 flex items-center justify-center mx-auto mb-4">
                      <IconComponent className="w-8 h-8 text-white" />
                    </div>
                    <CardTitle className="text-lg text-white">{capability.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="text-gray-300 text-center">{capability.description}</CardDescription>
                  </CardContent>
                </Card>
              )
            })}
          </div>

          {/* Detailed Features */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
            <div>
              <h2 className="text-3xl font-bold text-white mb-6 flex items-center">
                <Zap className="w-8 h-8 text-cyan-400 mr-3" />
                Advanced Features
              </h2>
              <div className="space-y-4">
                {[
                  "AI-powered Risk analysis",
                  "Automated risk scoring and prioritization",
                  "Real-time compliance dashboard",
                  "Integrated incident response workflows",
                  "Custom policy management system",
                  "Third-party risk assessment tools",
                  "Continuous security monitoring",
                  "Executive-level reporting suite",
                  "IS Standards Compliance ISO27001, PCI-DSS",
                  "Regulatory Compliance NESA, NIS, NIS, SAMA, HIPAA,
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
                <BarChart3 className="w-8 h-8 text-purple-400 mr-3" />
                Business Impact
              </h2>
              <div className="space-y-6">
                <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-lg p-6">
                  <h3 className="text-xl font-semibold text-cyan-400 mb-2">85% Risk Reduction</h3>
                  <p className="text-gray-300">
                    Proactive identification and mitigation of security risks before they impact operations.
                  </p>
                </div>
                <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-lg p-6">
                  <h3 className="text-xl font-semibold text-purple-400 mb-2">70% Faster Compliance</h3>
                  <p className="text-gray-300">
                    Automated compliance monitoring and reporting reduces audit preparation time significantly.
                  </p>
                </div>
                <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-lg p-6">
                  <h3 className="text-xl font-semibold text-pink-400 mb-2">24/7 Protection</h3>
                  <p className="text-gray-300">
                    Continuous monitoring and automated response capabilities ensure round-the-clock security.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* CTA Section */}
          <div className="text-center bg-gradient-to-r from-cyan-500/10 to-blue-500/10 backdrop-blur-sm border border-cyan-400/20 rounded-2xl p-12">
            <h2 className="text-3xl font-bold text-white mb-4">Ready to Strengthen Your Security Posture?</h2>
            <p className="text-gray-300 text-lg mb-8 max-w-2xl mx-auto">
              See how our Cybersecurity GRC Solution can transform your organization's approach to risk management and
              compliance.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                size="lg"
                className="bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-600 hover:to-blue-600 text-white border-0"
              >
                <Users className="w-5 h-5 mr-2" />
                Schedule Demo
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-cyan-400/50 text-cyan-400 hover:bg-cyan-400/10 bg-transparent"
              >
                <Globe className="w-5 h-5 mr-2" />
                Request Trial
              </Button>
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}
