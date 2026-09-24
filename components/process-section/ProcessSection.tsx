"use client"

import { ProcessDemo } from "./ProcessDemo"
import { motion, useReducedMotion, Variants } from "motion/react"


export function ProcessSection() {
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
    <section id="process" className="w-full max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 py-24 md:py-32 relative">
      <motion.div 
        className="flex flex-col lg:flex-row gap-12 lg:gap-16 xl:gap-24 items-center relative z-10"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "0px 0px -15% 0px" }}
        variants={{
          visible: { transition: { staggerChildren: 0.15 } }
        }}
      >
        
        {/* Marketing Content (Left) */}
        <motion.div 
          className="w-full lg:w-[35%] xl:w-[30%] shrink-0 flex flex-col justify-center relative"
          variants={copyVariants}
        >
          
          {/* Annotation: From planning... */}
          <motion.div 
            initial={reducedMotion ? { opacity: 1, y: 0 } : { opacity: 0, y: 8 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="hidden xl:flex absolute -top-25 right-40 transform -rotate-6 z-20 flex-col items-center pointer-events-none" aria-hidden="true"
          >
            <span className="font-annotation text-foreground-muted text-[22px] leading-tight relative z-10 block pr-8">From planning<br/>to dispatch...</span>
            <svg width="40" height="40" viewBox="0 0 40 40" fill="none" className="text-[#707070]er opacity-60 mt-1 ml-16">
              <motion.path 
                initial={reducedMotion ? { pathLength: 1 } : { pathLength: 0 }}
                whileInView={{ pathLength: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.8, ease: "easeInOut" }}
                d="M4 4C4 4 20 6 30 20C30 20 22 20 22 20M30 20C30 20 30 12 30 12" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" fill="none"
              />
            </svg>
          </motion.div>

          <div className="flex flex-col gap-4 w-full relative max-w-[480px] lg:pr-4 xl:pr-8">
            <div className="flex flex-col gap-2 relative z-10">
              <span className="text-label text-[#707070]">03 &mdash; PROCESS & PRODUCTION MANAGEMENT</span>
              <h2 className="text-display-lg font-serif text-foreground leading-tight tracking-tight mt-4">
                From planning<br/>to dispatch.
              </h2>
            </div>
            
            <p className="text-body-lg text-foreground-muted relative z-10 mt-4 leading-relaxed">
              Custom software and business automation for manufacturing. Connect inventory, planning, production, quality and dispatch through one system.
            </p>
            
            <div className="my-8 relative z-10">
              <span className="text-system-xs text-[#707070] tracking-widest leading-relaxed block">
                INVENTORY &bull; PLANNING &bull; PRODUCTION &bull; QUALITY &bull; DISPATCH
              </span>
            </div>
            
            <div className="relative z-10 flex items-center justify-between">
              <a href="#contact" className="inline-flex items-center text-system-sm font-semibold text-[#A94A29] hover:text-[#A94A29]-hover transition-colors group tracking-widest uppercase">
                Explore possibilities 
                <span className="ml-2 group-hover:translate-x-1 transition-transform">──&gt;</span>
              </a>
            </div>
          </div>
        </motion.div>

        {/* Software UI (Right) */}
        <motion.div 
          className="w-full lg:w-[65%] xl:w-[70%] min-w-0 relative"
          variants={dashboardVariants}
        >
          {/* Annotation: Less delay... */}
          <motion.div 
            initial={reducedMotion ? { opacity: 1, y: 0 } : { opacity: 0, y: 8 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.6, delay: 0.75 }}
            className="hidden xl:flex absolute -top-20 right-20 transform -rotate-3 z-20 flex-col items-center pointer-events-none" aria-hidden="true"
          >
            <span className="font-annotation text-foreground-muted text-[22px] leading-tight relative z-10 text-right block pl-12">Less delay.<br/>More control.</span>
            <svg width="40" height="40" viewBox="0 0 40 40" fill="none" className="text-[#707070]er opacity-60 mt-1 mr-24">
              <motion.path 
                initial={reducedMotion ? { pathLength: 1 } : { pathLength: 0 }}
                whileInView={{ pathLength: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.95, ease: "easeInOut" }}
                d="M36 4C36 4 20 6 10 20C10 20 18 20 18 20M10 20C10 20 10 12 10 12" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" fill="none"
              />
            </svg>
          </motion.div>
          
          <ProcessDemo />
          
          {/* Annotation: Keep production moving. */}
          <motion.div 
            initial={reducedMotion ? { opacity: 1, y: 0 } : { opacity: 0, y: 8 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.6, delay: 0.9 }}
            className="hidden xl:flex absolute -bottom-25 left-1/2 transform -translate-x-1/2 -rotate-3 z-20 flex-col items-center pointer-events-none" aria-hidden="true"
          >
            <svg width="40" height="40" viewBox="0 0 40 40" fill="none" className="text-[#707070]er opacity-60 mb-1">
              <motion.path 
                initial={reducedMotion ? { pathLength: 1 } : { pathLength: 0 }}
                whileInView={{ pathLength: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 1.1, ease: "easeInOut" }}
                d="M 20 36 C 20 36 20 4 20 4 C 20 4 12 12 12 12 M 20 4 C 20 4 28 12 28 12" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" fill="none"
              />
            </svg>
            <span className="font-annotation text-foreground-muted text-[22px] leading-tight relative z-10 block mt-2">Keep production<br/>moving.</span>
          </motion.div>
        </motion.div>
        
      </motion.div>
    </section>
  )
}
