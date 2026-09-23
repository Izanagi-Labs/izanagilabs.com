"use client"

import { useEffect, useRef } from "react"
import { animate, useInView, useReducedMotion } from "motion/react"

export function AnimatedValue({ value }: { value: string }) {
  const ref = useRef<HTMLSpanElement>(null)
  const inView = useInView(ref, { once: true, amount: 0.5 })
  const reducedMotion = useReducedMotion()
  const hasAnimated = useRef(false)

  useEffect(() => {
    if (!ref.current || !inView || reducedMotion || hasAnimated.current) return
    
    const match = value.match(/^([^0-9]*)([0-9.,]+)(.*)$/)
    if (!match) return
    
    hasAnimated.current = true
    const prefix = match[1]
    const numStr = match[2].replace(/,/g, '')
    const suffix = match[3]
    const endValue = parseFloat(numStr)
    const isDecimal = numStr.includes('.')
    
    // Set to 0 immediately when animation starts
    const initialFormatted = isDecimal ? "0.0" : "0"
    ref.current.textContent = `${prefix}${initialFormatted}${suffix}`
    
    const controls = animate(0, endValue, {
      duration: 0.9,
      delay: 0.3, // Wait for dashboard to enter
      ease: "easeOut",
      onUpdate: (latest) => {
        if (ref.current) {
          const formatted = isDecimal ? latest.toFixed(1) : Math.round(latest).toLocaleString('en-IN')
          ref.current.textContent = `${prefix}${formatted}${suffix}`
        }
      }
    })
    
    return () => controls.stop()
  }, [value, inView, reducedMotion])

  return <span ref={ref}>{value}</span>
}
