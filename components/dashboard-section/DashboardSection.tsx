"use client"

import { SectionCopy } from "./SectionCopy"
import { DashboardDemo } from "./DashboardDemo"
import { motion, useReducedMotion, Variants } from "motion/react"

export function DashboardSection() {
  const reducedMotion = useReducedMotion()
  
  const copyVariants: Variants = {
    hidden: reducedMotion ? { opacity: 0, y: 0 } : { opacity: 0, y: 16 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
  }
  
  const dashboardVariants: Variants = {
    hidden: reducedMotion ? { opacity: 0, y: 0 } : { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: "easeOut" } }
  }

  return (
    <section id="capabilities" className="w-full max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 py-24 md:py-32 relative">
      <motion.div 
        className="flex flex-col xl:flex-row gap-12 xl:gap-15 items-center relative z-10"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.25 }}
        variants={{
          visible: { transition: { staggerChildren: 0.15 } }
        }}
      >
        <motion.div 
          className="w-full xl:w-[28%] shrink-0"
          variants={copyVariants}
        >
          <SectionCopy />
        </motion.div>
        <motion.div 
          className="w-full xl:w-[72%] min-w-0"
          variants={dashboardVariants}
        >
          <DashboardDemo />
        </motion.div>
      </motion.div>
      
    </section>
  )
}
