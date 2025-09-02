"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import Link from "next/link"
import { Shield, Brain, CheckCircle, ArrowRight, Zap, Users, Globe, Target, Eye } from "lucide-react"

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

          <Button className="bg-gradient-to-r from-cyan-500 to-purple-500 hover:from-cyan-600 hover:to-purple-600 text-white border-0">
            Get Started
          </Button>
        </div>
      </div>
    </nav>
  )
}

export default function ServicesPage() {
  const [hoveredCard, setHoveredCard] = useState<string | null>(null)

  const services = [
    {
      id: "cybersecurity-services",
      title: "Cybersecurity Services",
      description:
        "Comprehensive cybersecurity consulting and implementation services to protect your organization from evolving threats.",
      icon: Shield,
      gradient: "from-cyan-400 to-blue-500",
      subServices: ["GRC Risk Management Services", "Security Architecture Design", "Red Teaming and Forensics"],
      features: [
        "Expert security consulting",
        "Threat assessment and mitigation",
        "Security framework implementation",
        "Incident response planning",
        "Vulnerability assessments",
        "Security training and awareness",
      ],
      benefits: [
        "Reduce security incidents by 90%",
        "Improve security posture assessment",
        "Expert-led security implementations",
        "24/7 security monitoring support",
      ],
    },
    {
      id: "ai-business-applications",
      title: "AI-Powered Business Applications",
      description:
        "Cutting-edge artificial intelligence solutions designed to transform your business operations and decision-making processes.",
      icon: Brain,
      gradient: "from-purple-400 to-pink-500",
      subServices: [
        "Intelligent Process Automation",
        "Predictive Analytics Solutions",
        "AI-Driven Decision Support Systems",
      ],
      features: [
        "Custom AI model development",
        "Machine learning implementation",
        "Natural language processing",
        "Computer vision solutions",
        "Predictive analytics platforms",
        "AI integration consulting",
      ],
      benefits: [
        "Increase operational efficiency by 75%",
        "Automate complex business processes",
        "Data-driven decision making",
        "Competitive advantage through AI",
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
              Our Services
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
              Expert cybersecurity consulting and AI-powered solutions designed to transform your organization's
              security posture and operational efficiency.
            </p>
          </div>

          {/* Services Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
            {services.map((service) => {
              const IconComponent = service.icon
              return (
                <Card
                  key={service.id}
                  className={`bg-white/5 backdrop-blur-sm border border-white/10 hover:border-white/20 transition-all duration-300 transform hover:scale-105 ${
                    hoveredCard === service.id ? "shadow-2xl" : ""
                  }`}
                  onMouseEnter={() => setHoveredCard(service.id)}
                  onMouseLeave={() => setHoveredCard(null)}
                >
                  <CardHeader className="pb-4">
                    <div
                      className={`w-16 h-16 rounded-full bg-gradient-to-r ${service.gradient} flex items-center justify-center mb-4`}
                    >
                      <IconComponent className="w-8 h-8 text-white" />
                    </div>
                    <CardTitle className="text-2xl text-white mb-2">{service.title}</CardTitle>
                    <CardDescription className="text-gray-300 text-lg leading-relaxed">
                      {service.description}
                    </CardDescription>
                  </CardHeader>

                  <CardContent className="space-y-6">
                    {/* Sub-services */}
                    <div>
                      <h4 className="text-lg font-semibold text-white mb-3 flex items-center">
                        <Target className="w-5 h-5 text-cyan-400 mr-2" />
                        Service Areas
                      </h4>
                      <ul className="space-y-2">
                        {service.subServices.map((subService, index) => (
                          <li key={index} className="flex items-center text-gray-300">
                            <ArrowRight className="w-4 h-4 text-purple-400 mr-3 flex-shrink-0" />
                            {subService}
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Features */}
                    <div>
                      <h4 className="text-lg font-semibold text-white mb-3 flex items-center">
                        <Zap className="w-5 h-5 text-cyan-400 mr-2" />
                        Key Capabilities
                      </h4>
                      <ul className="space-y-2">
                        {service.features.map((feature, index) => (
                          <li key={index} className="flex items-center text-gray-300">
                            <CheckCircle className="w-4 h-4 text-green-400 mr-3 flex-shrink-0" />
                            {feature}
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Benefits */}
                    <div>
                      <h4 className="text-lg font-semibold text-white mb-3 flex items-center">
                        <Eye className="w-5 h-5 text-purple-400 mr-2" />
                        Business Impact
                      </h4>
                      <ul className="space-y-2">
                        {service.benefits.map((benefit, index) => (
                          <li key={index} className="flex items-center text-gray-300">
                            <ArrowRight className="w-4 h-4 text-cyan-400 mr-3 flex-shrink-0" />
                            {benefit}
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* CTA */}
                    <div className="pt-4">
                      <Link href={`/services/${service.id}`}>
                        <Button
                          className={`w-full bg-gradient-to-r ${service.gradient} hover:opacity-90 text-white border-0`}
                        >
                          Explore Services
                          <ArrowRight className="w-4 h-4 ml-2" />
                        </Button>
                      </Link>
                    </div>
                  </CardContent>
                </Card>
              )
            })}
          </div>

          {/* Bottom CTA Section */}
          <div className="text-center bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-12">
            <h2 className="text-3xl font-bold text-white mb-4">Ready to Transform Your Organization?</h2>
            <p className="text-gray-300 text-lg mb-8 max-w-2xl mx-auto">
              Partner with our experts to enhance your cybersecurity posture and leverage AI for competitive advantage.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                size="lg"
                className="bg-gradient-to-r from-cyan-500 to-purple-500 hover:from-cyan-600 hover:to-purple-600 text-white border-0"
              >
                <Users className="w-5 h-5 mr-2" />
                Consult Our Experts
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-white/20 text-white hover:bg-white/10 bg-transparent"
              >
                <Globe className="w-5 h-5 mr-2" />
                Request Assessment
              </Button>
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}
