"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import Link from "next/link"
import { Brain, ArrowLeft, CheckCircle, Cpu, BarChart3, Zap, Users, Globe, Bot, TrendingUp, Shield } from "lucide-react"

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

export default function AIBusinessApplicationsPage() {
  const aiSolutions = [
    {
      icon: Bot,
      title: "Intelligent Process Automation",
      description: "AI-driven automation solutions for complex business processes",
      features: [
        "Robotic Process Automation (RPA)",
        "Intelligent document processing",
        "Workflow optimization",
        "Decision automation",
        "Process mining and analysis",
        "Integration with existing systems",
      ],
    },
    {
      icon: BarChart3,
      title: "Predictive Analytics Solutions",
      description: "Advanced analytics and machine learning for business insights",
      features: [
        "Predictive modeling and forecasting",
        "Customer behavior analysis",
        "Risk prediction and assessment",
        "Market trend analysis",
        "Performance optimization",
        "Real-time analytics dashboards",
      ],
    },
    {
      icon: TrendingUp,
      title: "AI-Driven Decision Support Systems",
      description: "Intelligent systems to enhance strategic decision-making",
      features: [
        "Strategic planning support",
        "Resource allocation optimization",
        "Risk-based decision making",
        "Performance monitoring",
        "Scenario planning and simulation",
        "Executive intelligence platforms",
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

      <Navigation />

      <main className="relative z-10 pt-24 pb-16 px-6">
        <div className="max-w-7xl mx-auto">
          {/* Back Navigation */}
          <Link
            href="/services"
            className="inline-flex items-center text-purple-400 hover:text-purple-300 mb-8 transition-colors"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Services
          </Link>

          {/* Hero Section */}
          <div className="text-center mb-16">
            <div className="w-24 h-24 rounded-full bg-gradient-to-r from-purple-400 to-pink-500 flex items-center justify-center mx-auto mb-8">
              <Brain className="w-12 h-12 text-white" />
            </div>
            <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-purple-400 to-pink-500 bg-clip-text text-transparent">
              AI-Powered Business Applications
            </h1>
            <p className="text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
              Transform your business operations with cutting-edge artificial intelligence solutions. From intelligent
              automation to predictive analytics, we help organizations leverage AI for competitive advantage and
              operational excellence.
            </p>
          </div>

          {/* AI Solutions Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
            {aiSolutions.map((solution, index) => {
              const IconComponent = solution.icon
              return (
                <Card
                  key={index}
                  className="bg-white/5 backdrop-blur-sm border border-white/10 hover:border-purple-400/50 transition-all duration-300 transform hover:scale-105"
                >
                  <CardHeader className="text-center pb-4">
                    <div className="w-16 h-16 rounded-full bg-gradient-to-r from-purple-400 to-pink-500 flex items-center justify-center mx-auto mb-4">
                      <IconComponent className="w-8 h-8 text-white" />
                    </div>
                    <CardTitle className="text-xl text-white mb-2">{solution.title}</CardTitle>
                    <CardDescription className="text-gray-300">{solution.description}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2">
                      {solution.features.map((feature, featureIndex) => (
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

          {/* AI Implementation Process */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
            <div>
              <h2 className="text-3xl font-bold text-white mb-6 flex items-center">
                <Cpu className="w-8 h-8 text-purple-400 mr-3" />
                AI Implementation Process
              </h2>
              <div className="space-y-6">
                <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-lg p-6">
                  <h3 className="text-xl font-semibold text-purple-400 mb-2">1. Discovery & Assessment</h3>
                  <p className="text-gray-300">
                    Analyze your business processes and identify AI opportunities for maximum impact and ROI.
                  </p>
                </div>
                <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-lg p-6">
                  <h3 className="text-xl font-semibold text-pink-400 mb-2">2. AI Solution Design</h3>
                  <p className="text-gray-300">
                    Design custom AI solutions tailored to your specific business requirements and objectives.
                  </p>
                </div>
                <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-lg p-6">
                  <h3 className="text-xl font-semibold text-cyan-400 mb-2">3. Development & Deployment</h3>
                  <p className="text-gray-300">
                    Build, test, and deploy AI solutions with seamless integration into your existing systems.
                  </p>
                </div>
                <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-lg p-6">
                  <h3 className="text-xl font-semibold text-blue-400 mb-2">4. Optimization & Support</h3>
                  <p className="text-gray-300">
                    Continuous monitoring, optimization, and support to ensure maximum AI performance and value.
                  </p>
                </div>
              </div>
            </div>

            <div>
              <h2 className="text-3xl font-bold text-white mb-6 flex items-center">
                <Zap className="w-8 h-8 text-pink-400 mr-3" />
                AI Benefits & Impact
              </h2>
              <div className="space-y-4">
                {[
                  "Increase operational efficiency by up to 75%",
                  "Automate complex decision-making processes",
                  "Reduce manual errors and processing time",
                  "Gain predictive insights for strategic planning",
                  "Enhance customer experience and satisfaction",
                  "Optimize resource allocation and costs",
                  "Enable data-driven business decisions",
                  "Scale operations without proportional cost increases",
                ].map((benefit, index) => (
                  <div key={index} className="flex items-center text-gray-300">
                    <CheckCircle className="w-5 h-5 text-green-400 mr-3 flex-shrink-0" />
                    {benefit}
                  </div>
                ))}
              </div>

              <div className="mt-8 bg-gradient-to-r from-purple-500/10 to-pink-500/10 backdrop-blur-sm border border-purple-400/20 rounded-lg p-6">
                <h3 className="text-lg font-semibold text-white mb-3">AI Technologies We Use</h3>
                <div className="grid grid-cols-2 gap-2 text-sm text-gray-300">
                  <div>• Machine Learning</div>
                  <div>• Natural Language Processing</div>
                  <div>• Computer Vision</div>
                  <div>• Deep Learning</div>
                  <div>• Predictive Analytics</div>
                  <div>• Robotic Process Automation</div>
                </div>
              </div>
            </div>
          </div>

          {/* CTA Section */}
          <div className="text-center bg-gradient-to-r from-purple-500/10 to-pink-500/10 backdrop-blur-sm border border-purple-400/20 rounded-2xl p-12">
            <h2 className="text-3xl font-bold text-white mb-4">Ready to Harness the Power of AI?</h2>
            <p className="text-gray-300 text-lg mb-8 max-w-2xl mx-auto">
              Transform your business with intelligent AI solutions designed for your specific needs and objectives.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                size="lg"
                className="bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white border-0"
              >
                <Users className="w-5 h-5 mr-2" />
                Consult AI Experts
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-purple-400/50 text-purple-400 hover:bg-purple-400/10 bg-transparent"
              >
                <Globe className="w-5 h-5 mr-2" />
                Request AI Assessment
              </Button>
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}
