"use client"

import { useEffect, useRef } from "react"
import { Chart, registerables } from "chart.js"

Chart.register(...registerables)

export function ImpactChart() {
  const chartRef = useRef<HTMLCanvasElement>(null)
  const chartInstance = useRef<Chart | null>(null)

  useEffect(() => {
    const canvas = chartRef.current
    if (!canvas) return

    const ctx = canvas.getContext("2d")
    if (!ctx) return

    // Destroy existing chart if it exists
    if (chartInstance.current) {
      chartInstance.current.destroy()
    }

    chartInstance.current = new Chart(ctx, {
      type: "bar",
      data: {
        labels: ["Study Time (Hours)", "Comprehension Score", "Retention Rate (%)"],
        datasets: [
          {
            label: "Without BardoAI",
            data: [10, 65, 70],
            backgroundColor: "rgba(107, 78, 113, 0.8)",
            borderColor: "#6B4E71",
            borderWidth: 2,
            borderRadius: 8,
          },
          {
            label: "With BardoAI",
            data: [6, 85, 90],
            backgroundColor: "rgba(74, 144, 226, 0.8)",
            borderColor: "#4A90E2",
            borderWidth: 2,
            borderRadius: 8,
          },
        ],
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
          legend: {
            labels: {
              color: "#F5E6CC",
              font: {
                size: 14,
              },
            },
          },
          title: {
            display: true,
            text: "BardoAI Impact on Learning Outcomes",
            color: "#F5E6CC",
            font: {
              size: 16,
              weight: "bold",
            },
          },
        },
        scales: {
          x: {
            ticks: {
              color: "#F5E6CC",
            },
            grid: {
              color: "rgba(245, 230, 204, 0.1)",
            },
          },
          y: {
            ticks: {
              color: "#F5E6CC",
            },
            grid: {
              color: "rgba(245, 230, 204, 0.1)",
            },
          },
        },
      },
    })

    return () => {
      if (chartInstance.current) {
        chartInstance.current.destroy()
      }
    }
  }, [])

  return (
    <div className="bg-gradient-to-br from-purple-800/50 to-blue-800/50 rounded-2xl p-6 backdrop-blur-sm border border-purple-500/20">
      <div className="h-80">
        <canvas ref={chartRef}></canvas>
      </div>
    </div>
  )
}
