"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import Link from "next/link"
import { Shield, Lock, CheckCircle, ArrowRight, Zap, BarChart3, Globe } from "lucide-react"
import { HyperspeedBackground } from "@/components/hyperspeed-background"
import { Footer } from "@/components/footer"
import { Header } from "@/components/header"

export default function ProductsPage() {
  const products = [
    {
      id: "cybersecurity-grc",
      title: "Cybersecurity GRC Solution",
      description:
        "Comprehensive governance, risk management, and compliance platform designed for modern cybersecurity challenges.",
      icon: Shield,
      features: [
        "Risk Assessment & Management",
        "Compliance Monitoring",
        "Incident Response Automation",
        "Security Policy Management",
        "Threat Intelligence Integration",
        "Real-time Dashboard & Analytics",
      ],
      benefits: [
        "Reduce security risks by 85%",
        "Automate compliance reporting",
        "Streamline audit processes",
        "Centralized security governance",
      ],
    },
    {
      id: "regulatory-compliance",
      title: "Regulatory Compliance",
      description:
        "Advanced compliance management system ensuring adherence to industry standards and regulatory requirements.",
      icon: Lock,
      features: [
        "Multi-Framework Support (SOX, GDPR, HIPAA)",
        "Automated Evidence Collection",
        "Compliance Gap Analysis",
        "Regulatory Change Management",
        "Audit Trail Management",
        "Compliance Reporting Suite",
      ],
      benefits: [
        "Ensure 100% regulatory compliance",
        "Reduce audit preparation time by 70%",
        "Automated compliance monitoring",
        "Real-time compliance status tracking",
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
          {/* Header Section */}
          <div className="text-center mb-16">
            <h1 className="text-5xl md:text-6xl font-bold mb-6 text-white">Our Products</h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
              Cutting-edge cybersecurity and compliance solutions designed to protect and empower your organization in
              the digital age.
            </p>
          </div>

          {/* Products Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
            {products.map((product) => {
              const IconComponent = product.icon
              return (
                <Card
                  key={product.id}
                  className="bg-white/5 backdrop-blur-sm border border-white/10 hover:border-[#00D9FF]/50 transition-all duration-300"
                >
                  <CardHeader className="pb-4">
                    <div className="w-16 h-16 rounded-full bg-[#00D9FF]/20 flex items-center justify-center mb-4">
                      <IconComponent className="w-8 h-8 text-[#00D9FF]" />
                    </div>
                    <CardTitle className="text-2xl text-white mb-2">{product.title}</CardTitle>
                    <CardDescription className="text-gray-300 text-lg leading-relaxed">
                      {product.description}
                    </CardDescription>
                  </CardHeader>

                  <CardContent className="space-y-6">
                    {/* Features */}
                    <div>
                      <h4 className="text-lg font-semibold text-white mb-3 flex items-center">
                        <Zap className="w-5 h-5 text-[#00D9FF] mr-2" />
                        Key Features
                      </h4>
                      <ul className="space-y-2">
                        {product.features.map((feature, index) => (
                          <li key={index} className="flex items-center text-gray-300">
                            <CheckCircle className="w-4 h-4 text-[#00D9FF] mr-3 flex-shrink-0" />
                            {feature}
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Benefits */}
                    <div>
                      <h4 className="text-lg font-semibold text-white mb-3 flex items-center">
                        <BarChart3 className="w-5 h-5 text-[#00D9FF] mr-2" />
                        Benefits
                      </h4>
                      <ul className="space-y-2">
                        {product.benefits.map((benefit, index) => (
                          <li key={index} className="flex items-center text-gray-300">
                            <ArrowRight className="w-4 h-4 text-[#00D9FF] mr-3 flex-shrink-0" />
                            {benefit}
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* CTA */}
                    <div className="pt-4">
                      <Link href={`/products/${product.id}`}>
                        <Button className="w-full bg-[#00D9FF] hover:bg-[#00B8D4] text-black font-semibold border-0">
                          Learn More
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
            <h2 className="text-3xl font-bold text-white mb-4">Ready to Transform Your Security Posture?</h2>
            <p className="text-gray-300 text-lg mb-8 max-w-2xl mx-auto">
              Join hundreds of organizations that trust GRC Sphere to protect their digital assets and ensure
              compliance.
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
