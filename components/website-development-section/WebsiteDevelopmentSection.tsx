"use client"

import { WebsiteShowcase } from "./WebsiteShowcase"
import { motion, useReducedMotion, Variants } from "motion/react"

export function WebsiteDevelopmentSection() {
  const reducedMotion = useReducedMotion()

  const copyVariants: Variants = {
    hidden: reducedMotion ? { opacity: 0, y: 0 } : { opacity: 0, y: 16 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
  }

  return (
    <section className="w-full max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 py-16 xl:py-25 relative overflow-hidden flex flex-col">
      <motion.div 
        className="flex flex-col lg:flex-row-reverse gap-12 lg:gap-16 xl:gap-24 items-center lg:items-center relative z-10 flex-1"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "0px 0px -15% 0px" }}
        variants={{
          visible: { transition: { staggerChildren: 0.15 } }
        }}
      >
        
        {/* Right Side — Editorial Copy */}
        <motion.div 
          className="w-full lg:w-[40%] xl:w-[35%] shrink-0 flex flex-col justify-center pt-8 lg:pt-0"
          variants={copyVariants}
        >
          <div className="flex flex-col gap-4 w-full relative max-w-[480px]">
            
            <div className="flex flex-col gap-2 relative z-10">
              <div className="flex items-center gap-4">
                <span className="text-label text-[#707070] whitespace-nowrap">04</span>
                <div className="w-12 h-px bg-[#707070]" />
                <span className="text-label text-[#707070] whitespace-nowrap">WEBSITE DEVELOPMENT</span>
              </div>
              <h2 className="text-display-lg font-serif text-foreground leading-[1.05] tracking-tight mt-4">
                Websites built<br/>to make an impression.
              </h2>
            </div>
            
            <p className="text-body-lg text-foreground-muted relative z-10 mt-4 leading-relaxed">
              We provide custom website development for modern businesses, designing high performance, responsive websites that make a lasting impression.
            </p>
            
            <div className="my-8 relative z-10">
              <span className="text-[9px] font-mono text-[#707070] tracking-[0.15em] leading-relaxed block uppercase">
                DESIGN &bull; DEVELOPMENT &bull; RESPONSIVE &bull; PERFORMANCE
              </span>
            </div>
            
            <div className="mt-4">
              <a href="#contact" className="inline-flex items-center text-system-sm font-semibold text-accent-hover hover:text-[#913F23] transition-colors group tracking-widest uppercase">
                EXPLORE POSSIBILITIES
                <span className="ml-3 group-hover:translate-x-1.5 transition-transform duration-200 ease-out">&rarr;</span>
              </a>
            </div>
          </div>
        </motion.div>

        {/* Left Side — Website Showcase */}
        <motion.div 
          className="w-full lg:w-[60%] xl:w-[55%] relative min-w-0 pointer-events-none pb-12 lg:pb-0"
          variants={{
            hidden: { opacity: 1 }, // Content internally animates via WebsiteShowcase
            visible: { opacity: 1 }
          }}
        >
          <WebsiteShowcase />
        </motion.div>

      </motion.div>

    </section>
  )
}
