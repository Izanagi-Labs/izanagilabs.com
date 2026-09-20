"use client"

import { motion } from "motion/react"
import { useEffect, useState } from "react"

export function ConnectorLayer() {
  const [mounted, setMounted] = useState(false)
  
  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) return null

  // 5 curves fanning from center-top (350,0) to each platform position
  const curves = [
    { d: "M 350 0 C 350 60, 70 60, 70 120",  delay: 0.5 },   // Google (far left)
    { d: "M 350 0 C 350 60, 210 60, 210 120", delay: 0.6 },   // Bing
    { d: "M 350 0 C 350 60, 350 60, 350 120", delay: 0.7 },   // ChatGPT (center)
    { d: "M 350 0 C 350 60, 490 60, 490 120", delay: 0.8 },   // Gemini
    { d: "M 350 0 C 350 60, 630 60, 630 120", delay: 0.9 },   // Perplexity (far right)
  ]

  return (
    <div className="absolute inset-0 pointer-events-none z-0">
      <svg 
        width="100%" 
        height="100%" 
        viewBox="0 0 700 120" 
        preserveAspectRatio="none"
        className="overflow-visible"
      >
        {curves.map((curve, i) => (
          <motion.path
            key={i}
            initial={{ pathLength: 0, opacity: 0 }}
            whileInView={{ pathLength: 1, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: curve.delay }}
            d={curve.d}
            stroke="var(--color-foreground-fainter)"
            strokeWidth="1"
            fill="none"
            opacity={0.5}
            vectorEffect="non-scaling-stroke"
          />
        ))}
      </svg>

      {/* Origin dot at center-top */}
      <motion.div 
        initial={{ scale: 0, opacity: 0 }}
        whileInView={{ scale: 1, opacity: 1 }}
        viewport={{ once: true }}
        transition={{ delay: 0.3, duration: 0.4 }}
        className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 w-2.5 h-2.5 rounded-full bg-accent z-10"
      />
    </div>
  )
}
