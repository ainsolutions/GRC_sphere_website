"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { Shield, Brain, Lock, Zap } from "lucide-react"
import Image from "next/image"

// Animated particles component
const AnimatedParticles = () => {
  const [particles, setParticles] = useState<
    Array<{
      id: number
      x: number
      y: number
      size: number
      opacity: number
      speed: number
    }>
  >([])

  useEffect(() => {
    const generateParticles = () => {
      const newParticles = Array.from({ length: 50 }, (_, i) => ({
        id: i,
        x: Math.random() * 100,
        y: Math.random() * 100,
        size: Math.random() * 3 + 1,
        opacity: Math.random() * 0.8 + 0.2,
        speed: Math.random() * 0.5 + 0.1,
      }))
      setParticles(newParticles)
    }

    generateParticles()
  }, [])

  return (
    <div className="absolute inset-0 overflow-hidden">
      {particles.map((particle) => (
        <div
          key={particle.id}
          className="absolute rounded-full bg-gradient-to-r from-cyan-400 to-purple-400 animate-pulse"
          style={{
            left: `${particle.x}%`,
            top: `${particle.y}%`,
            width: `${particle.size}px`,
            height: `${particle.size}px`,
            opacity: particle.opacity,
            animation: `float ${10 + particle.speed * 10}s infinite linear`,
          }}
        />
      ))}
    </div>
  )
}

// Navigation component
const Navigation = () => {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-black/20 backdrop-blur-md border-b border-white/10">
      <div className="max-w-7xl mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <Image src="/grc-sphere-logo.png" alt="GRC Sphere Logo" width={40} height={40} className="object-contain" />
            <span className="text-xl font-bold bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
              GRC Sphere
            </span>
          </div>

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
            <Link href="/contact" className="text-gray-300 hover:text-cyan-400 transition-colors">
              Contact
            </Link>
          </div>

          <Button className="bg-gradient-to-r from-cyan-500 to-purple-500 hover:from-cyan-600 hover:to-purple-600 text-white border-0">
            <Link href="/products">Get Started</link>
          </Button>
        </div>
      </div>
    </nav>
  )
}

export default function HomePage() {
  return (
    <div className="min-h-screen bg-black relative overflow-hidden">
      {/* Animated background */}
      <div className="absolute inset-0 bg-gradient-to-br from-black via-gray-900 to-black">
        <AnimatedParticles />
      </div>

      {/* Navigation */}
      <Navigation />

      {/* Hero Section */}
      <main className="relative z-10 flex items-center justify-center min-h-screen px-6">
        <div className="text-center max-w-4xl mx-auto">
          {/* Central Logo */}
          <div className="mb-8 flex justify-center">
            <div className="relative">
              <div className="w-64 h-64 rounded-full bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 p-1 animate-spin-slow">
                <div className="w-full h-full rounded-full bg-black flex items-center justify-center">
                  <div className="relative w-48 h-48 rounded-full bg-gradient-to-br from-gray-800 to-gray-900 flex items-center justify-center">
                    {/* Dual head silhouettes with neural network */}
                    <div className="relative w-32 h-32">
                      <Shield className="w-16 h-16 text-cyan-400 absolute top-4 left-4" />
                      <Brain className="w-16 h-16 text-purple-400 absolute top-4 right-4" />
                      <Lock className="w-12 h-12 text-pink-400 absolute bottom-6 left-1/2 transform -translate-x-1/2" />
                      <div className="absolute inset-0 bg-gradient-to-r from-cyan-400/20 to-purple-400/20 rounded-full animate-pulse" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Main Title */}
          <h1 className="text-6xl md:text-8xl font-bold mb-6 bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent animate-pulse">
            GRC SPHERE
          </h1>

          {/* Subtitle */}
          <p className="text-xl md:text-2xl text-gray-300 mb-8 font-light">
            Comprehensive Governance, Risk & Compliance Solutions
          </p>

          {/* Feature Words */}
          <div className="flex flex-wrap justify-center gap-8 mb-12 text-lg">
            <span className="text-cyan-400 font-semibold">Secure</span>
            <span className="text-purple-400 font-semibold">Compliant</span>
            <span className="text-pink-400 font-semibold">Intelligent</span>
          </div>

          {/* CTA Button */}
        

          {/* Additional Info */}
          <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div className="p-6 rounded-lg bg-white/5 backdrop-blur-sm border border-white/10">
              <Shield className="w-12 h-12 text-cyan-400 mx-auto mb-4" />
              <h3 className="text-lg font-semibold text-white mb-2">Cybersecurity GRC</h3>
              <p className="text-gray-400 text-sm">Advanced governance and risk management solutions</p>
            </div>
            <div className="p-6 rounded-lg bg-white/5 backdrop-blur-sm border border-white/10">
              <Lock className="w-12 h-12 text-purple-400 mx-auto mb-4" />
              <h3 className="text-lg font-semibold text-white mb-2">Regulatory Compliance</h3>
              <p className="text-gray-400 text-sm">Ensure adherence to industry standards and regulations</p>
            </div>
            <div className="p-6 rounded-lg bg-white/5 backdrop-blur-sm border border-white/10">
              <Brain className="w-12 h-12 text-pink-400 mx-auto mb-4" />
              <h3 className="text-lg font-semibold text-white mb-2">AI-Powered Solutions</h3>
              <p className="text-gray-400 text-sm">Intelligent business applications for modern enterprises</p>
            </div>
          </div>
        </div>
      </main>

      <style jsx>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          50% { transform: translateY(-20px) rotate(180deg); }
        }
        
        @keyframes spin-slow {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        
        .animate-spin-slow {
          animation: spin-slow 20s linear infinite;
        }
      `}</style>
    </div>
  )
}
