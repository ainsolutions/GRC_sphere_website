"use client"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { Shield, Lock, Brain, CheckCircle, ArrowRight, Globe } from "lucide-react"
import { HyperspeedBackground } from "@/components/hyperspeed-background"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"

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
            <stop offset="0%" stopColor="hsl(var(--primary))" />
            <stop offset="50%" stopColor="hsl(var(--secondary))" />
            <stop offset="100%" stopColor="hsl(var(--accent))" />
          </linearGradient>
        </defs>
      </svg>
    </div>
  )
}

export default function HomePage() {
  return (
    <div className="min-h-screen bg-background">
      <HyperspeedBackground />
      <Header />

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 px-6 min-h-screen flex items-center">
        {/* Background decorative elements */}
        <div className="absolute top-20 left-10 w-64 h-64 bg-primary/10 rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-secondary/10 rounded-full blur-3xl" />

        <div className="max-w-7xl mx-auto relative z-10">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-5xl md:text-7xl font-bold text-foreground mb-6 leading-tight">
              Measure and Improve
              <br />
              <span className="text-foreground">Your Risk Exposure</span>
            </h1>

            {/* Statistics Circle */}
            <div className="mt-20 flex justify-center">
              <div className="relative">
                <div className="w-64 h-64 rounded-full border-4 border-transparent bg-gradient-to-r from-primary via-secondary to-accent p-[2px]">
                  <div className="w-full h-full rounded-full bg-card flex flex-col items-center justify-center">
                    <p className="text-sm text-muted-foreground mb-2">on average</p>
                    <p className="text-6xl font-bold text-foreground">99.9%</p>
                    <p className="text-sm text-muted-foreground mt-2 text-center px-6">
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
      <section className="relative py-20 px-6 bg-background">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              Dynamic
              <br />
              <span className="text-foreground">Cyber Risk Manageement</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Our comprehensive GRC platform combined with expert services delivers unique cost-effective solutions for
              your organization.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
            {/* Left side features */}
            <div className="space-y-6">
              <div className="flex items-start space-x-3">
                <CheckCircle className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                <div>
                  <h3 className="text-lg font-semibold text-foreground mb-1">Real-Time Monitoring</h3>
                  <p className="text-muted-foreground">Continuous assessment of your security posture</p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <CheckCircle className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                <div>
                  <h3 className="text-lg font-semibold text-foreground mb-1">GRC Risk Management</h3>
                  <p className="text-muted-foreground">Comprehensive governance and compliance tracking</p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <CheckCircle className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                <div>
                  <h3 className="text-lg font-semibold text-foreground mb-1">Reduce Cognitive Load</h3>
                  <p className="text-muted-foreground">Automated workflows and intelligent insights</p>
                </div>
              </div>
            </div>

            {/* Right side - Statistics Circle */}
            <div className="flex justify-center">
              <div className="relative">
                <div className="w-72 h-72 rounded-full border-4 border-transparent bg-gradient-to-r from-primary via-secondary to-accent p-[2px]">
                  <div className="w-full h-full rounded-full bg-card flex flex-col items-center justify-center">
                    <p className="text-7xl font-bold text-foreground">85%</p>
                    <p className="text-sm text-muted-foreground mt-4 text-center px-8">
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
                <div className="w-72 h-72 rounded-full border-4 border-transparent bg-gradient-to-r from-accent via-secondary to-primary p-[2px]">
                  <div className="w-full h-full rounded-full bg-card flex flex-col items-center justify-center">
                    <p className="text-7xl font-bold text-foreground">50%</p>
                    <p className="text-sm text-muted-foreground mt-4 text-center px-8">
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
                <CheckCircle className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                <div>
                  <h3 className="text-lg font-semibold text-foreground mb-1">Compliance Management</h3>
                  <p className="text-muted-foreground">ISO 27001, PCI-DSS, NESA, SAMA, HIPAA compliance</p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <CheckCircle className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                <div>
                  <h3 className="text-lg font-semibold text-foreground mb-1">
                    Vulnerability Tracking Platform with Prioritization
                  </h3>
                  <p className="text-muted-foreground">Powered by AI Model</p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <CheckCircle className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                <div>
                  <h3 className="text-lg font-semibold text-foreground mb-1">Risk Quantification</h3>
                  <p className="text-muted-foreground">Quantify your risk scenarios</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Overview Section */}
      <section className="py-20 px-6 bg-background">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">Comprehensive Security Solutions</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              From governance to incident response, we provide end-to-end cybersecurity services
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-card/50 backdrop-blur-sm border border-border rounded-xl p-8 hover:border-primary/50 transition-all">
              <Shield className="w-12 h-12 text-primary mb-4" />
              <h3 className="text-2xl font-bold text-foreground mb-4">Cybersecurity GRC</h3>
              <p className="text-muted-foreground mb-6">
                Comprehensive governance, risk, and compliance management platform
              </p>
              <Link
                href="/products/cybersecurity-grc"
                className="text-primary hover:text-primary/80 flex items-center space-x-2"
              >
                <span>Learn More</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>

            <div className="bg-card/50 backdrop-blur-sm border border-border rounded-xl p-8 hover:border-primary/50 transition-all">
              <Lock className="w-12 h-12 text-primary mb-4" />
              <h3 className="text-2xl font-bold text-foreground mb-4">Regulatory Compliance</h3>
              <p className="text-muted-foreground mb-6">
                Ensure adherence to industry standards and regulatory requirements
              </p>
              <Link
                href="/products/regulatory-compliance"
                className="text-primary hover:text-primary/80 flex items-center space-x-2"
              >
                <span>Learn More</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>

            <div className="bg-card/50 backdrop-blur-sm border border-border rounded-xl p-8 hover:border-primary/50 transition-all">
              <Brain className="w-12 h-12 text-primary mb-4" />
              <h3 className="text-2xl font-bold text-foreground mb-4">Security Services</h3>
              <p className="text-muted-foreground mb-6">
                Expert-led security architecture, red teaming, and forensics services
              </p>
              <Link
                href="/services/cybersecurity-services"
                className="text-primary hover:text-primary/80 flex items-center space-x-2"
              >
                <span>Learn More</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-6 bg-background">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Ready to Strengthen Your Security Posture?
          </h2>
          <p className="text-xl text-muted-foreground mb-8">
            Get started with a free trial and see how GRC Sphere can transform your security operations
          </p>
          <Button size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground border-0">
            <Globe className="w-5 h-5 mr-2" />
            <Link href="mailto:connect@observeri.com">Consult Our Experts</Link>
          </Button>
        </div>
      </section>
      <Footer />
    </div>
  )
}
