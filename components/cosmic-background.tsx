"use client"

import { useEffect, useRef } from "react"

export function CosmicBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext("2d")
    if (!ctx) return

    const resizeCanvas = () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
    }

    resizeCanvas()
    window.addEventListener("resize", resizeCanvas)

    const particles: Array<{
      x: number
      y: number
      vx: number
      vy: number
      size: number
      opacity: number
      hue: number
    }> = []

    const circles: Array<{
      x: number
      y: number
      radius: number
      opacity: number
      rotation: number
      rotationSpeed: number
    }> = []

    // Create particles
    for (let i = 0; i < 100; i++) {
      particles.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        vx: (Math.random() - 0.5) * 0.3,
        vy: (Math.random() - 0.5) * 0.3,
        size: Math.random() * 2 + 0.5,
        opacity: Math.random() * 0.5 + 0.2,
        hue: Math.random() * 60 + 30, // Golden hues
      })
    }

    // Create cosmic circles
    for (let i = 0; i < 5; i++) {
      circles.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        radius: Math.random() * 200 + 100,
        opacity: Math.random() * 0.1 + 0.05,
        rotation: 0,
        rotationSpeed: (Math.random() - 0.5) * 0.01,
      })
    }

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height)

      // Draw cosmic circles
      circles.forEach((circle) => {
        circle.rotation += circle.rotationSpeed

        ctx.save()
        ctx.translate(circle.x, circle.y)
        ctx.rotate(circle.rotation)

        // Draw multiple concentric circles
        for (let i = 0; i < 3; i++) {
          ctx.beginPath()
          ctx.arc(0, 0, circle.radius - i * 20, 0, Math.PI * 2)
          ctx.strokeStyle = `hsla(45, 70%, 60%, ${circle.opacity / (i + 1)})`
          ctx.lineWidth = 2
          ctx.stroke()
        }

        ctx.restore()
      })

      // Draw particles
      particles.forEach((particle) => {
        particle.x += particle.vx
        particle.y += particle.vy

        // Wrap around edges
        if (particle.x < 0) particle.x = canvas.width
        if (particle.x > canvas.width) particle.x = 0
        if (particle.y < 0) particle.y = canvas.height
        if (particle.y > canvas.height) particle.y = 0

        // Draw particle
        ctx.beginPath()
        ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2)
        ctx.fillStyle = `hsla(${particle.hue}, 70%, 60%, ${particle.opacity})`
        ctx.fill()

        // Add glow effect
        ctx.shadowBlur = 10
        ctx.shadowColor = `hsla(${particle.hue}, 70%, 60%, ${particle.opacity})`
        ctx.fill()
        ctx.shadowBlur = 0
      })

      requestAnimationFrame(animate)
    }

    animate()

    return () => {
      window.removeEventListener("resize", resizeCanvas)
    }
  }, [])

  return (
    <canvas ref={canvasRef} className="fixed inset-0 pointer-events-none z-0" style={{ background: "transparent" }} />
  )
}
