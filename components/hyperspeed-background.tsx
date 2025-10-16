"use client"

import { useEffect, useRef } from "react"

interface Particle {
  x: number
  y: number
  z: number
  px: number
  py: number
}

export function HyperspeedBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext("2d")
    if (!ctx) return

    let animationFrameId: number
    let particles: Particle[] = []

    const resizeCanvas = () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
    }

    const initParticles = () => {
      particles = []
      const particleCount = 150

      for (let i = 0; i < particleCount; i++) {
        particles.push({
          x: Math.random() * canvas.width - canvas.width / 2,
          y: Math.random() * canvas.height - canvas.height / 2,
          z: Math.random() * 1500,
          px: 0,
          py: 0,
        })
      }
    }

    const animate = () => {
      ctx.fillStyle = "rgba(15, 15, 30, 0.1)"
      ctx.fillRect(0, 0, canvas.width, canvas.height)

      const centerX = canvas.width / 2
      const centerY = canvas.height / 2

      particles.forEach((particle) => {
        // Move particle towards viewer (decrease z)
        particle.z -= 12

        // Reset particle if it goes past the viewer
        if (particle.z <= 0) {
          particle.z = 1500
          particle.x = Math.random() * canvas.width - canvas.width / 2
          particle.y = Math.random() * canvas.height - canvas.height / 2
        }

        // Calculate 2D position
        const scale = 500 / particle.z
        const x2d = particle.x * scale + centerX
        const y2d = particle.y * scale + centerY

        // Store previous position
        const px = particle.px
        const py = particle.py

        particle.px = x2d
        particle.py = y2d

        // Draw line from previous position to current position
        if (px !== 0 && py !== 0) {
          const opacity = 1 - particle.z / 1500
          const gradient = ctx.createLinearGradient(px, py, x2d, y2d)
          gradient.addColorStop(0, `rgba(0, 217, 255, ${opacity * 0.1})`)
          gradient.addColorStop(1, `rgba(0, 217, 255, ${opacity})`)

          ctx.strokeStyle = gradient
          ctx.lineWidth = (1 - particle.z / 1500) * 8
          ctx.beginPath()
          ctx.moveTo(px, py)
          ctx.lineTo(x2d, y2d)
          ctx.stroke()
        }
      })

      animationFrameId = requestAnimationFrame(animate)
    }

    resizeCanvas()
    initParticles()
    animate()

    window.addEventListener("resize", () => {
      resizeCanvas()
      initParticles()
    })

    return () => {
      cancelAnimationFrame(animationFrameId)
      window.removeEventListener("resize", resizeCanvas)
    }
  }, [])

  return <canvas ref={canvasRef} className="fixed inset-0 pointer-events-none z-0" style={{ opacity: 0.6 }} />
}
