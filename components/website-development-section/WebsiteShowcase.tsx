import { DesktopWebsiteMockup } from "./DesktopWebsiteMockup"
import { MobileWebsiteMockup } from "./MobileWebsiteMockup"
import { motion, useReducedMotion } from "motion/react"

export function WebsiteShowcase() {
  const reducedMotion = useReducedMotion()

  const pathInitial = reducedMotion ? { pathLength: 1 } : { pathLength: 0 }
  const pathInView = { pathLength: 1 }

  const annotationInitial = reducedMotion ? { opacity: 1, y: 0 } : { opacity: 0, y: 6 }
  const annotationInView = { opacity: 1, y: 0 }
  return (
    <div className="relative w-full flex flex-col items-center justify-center pb-[15%] lg:pb-0 xl:h-[600px]">
      
      <div className="relative w-full max-w-[820px] mx-auto flex items-center justify-center">
        
        {/* Annotation #1: Top Left */}
        <motion.div 
          initial={annotationInitial}
          whileInView={annotationInView}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.5, delay: 0.75, ease: "easeOut" }}
          className="absolute -top-[100px] -left-[0px] transform -rotate-3 z-30 flex-col items-end pointer-events-none hidden xl:flex"
        >
          <span className="font-annotation text-foreground-muted text-[22px] leading-tight block text-right">
            From concept<br/>to something remarkable.
          </span>
          <svg width="45" height="45" viewBox="0 0 50 50" fill="none" className="text-foreground-fainter opacity-60 mt-1 mr-4">
            <motion.path 
              initial={pathInitial}
              whileInView={pathInView}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.9, ease: "easeInOut" }}
              d="M 15 10 Q 35 15 40 35 M 32 35 L 40 35 L 40 27" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" fill="none"
            />
          </svg>
        </motion.div>

        {/* Annotation #2: Upper Right */}
        <motion.div 
          initial={annotationInitial}
          whileInView={annotationInView}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.5, delay: 0.9, ease: "easeOut" }}
          className="absolute -top-[85px] right-[80px] transform rotate-3 z-30 flex-col items-center pointer-events-none hidden xl:flex"
        >
          <span className="font-annotation text-foreground-muted text-[22px] leading-tight block text-center">
            Designed around<br/>your brand.
          </span>
          <svg width="40" height="45" viewBox="0 0 50 50" fill="none" className="text-foreground-fainter opacity-60 mt-2 -ml-8">
            <motion.path 
              initial={pathInitial}
              whileInView={pathInView}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 1.05, ease: "easeInOut" }}
              d="M 35 10 Q 20 15 15 35 M 15 27 L 15 35 L 23 35" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" fill="none"
            />
          </svg>
        </motion.div>

        {/* Annotation #3: Bottom */}
        <motion.div 
          initial={annotationInitial}
          whileInView={annotationInView}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.5, delay: 1.05, ease: "easeOut" }}
          className="absolute -bottom-[80px] right-[255px] transform -rotate-2 z-30 flex-col items-center pointer-events-none hidden xl:flex"
        >
          <svg width="35" height="40" viewBox="0 0 50 50" fill="none" className="text-foreground-fainter opacity-60 mb-2 ml-10">
            <motion.path 
              initial={pathInitial}
              whileInView={pathInView}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 1.2, ease: "easeInOut" }}
              d="M 15 35 Q 25 15 40 10 M 32 10 L 40 10 L 40 18" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" fill="none"
            />
          </svg>
          <span className="font-annotation text-foreground-muted text-[22px] leading-tight block text-center">
            Fast by default.<br/>...not another template.
          </span>
        </motion.div>

        {/* Wireframe Placeholder */}
        <div 
          className="absolute w-[780px] h-[540px] border border-foreground/15 opacity-[0.08] -left-[40px] top-[10px] z-0 rounded-[4px] flex-col overflow-hidden pointer-events-none bg-[#FAFAF9]/50 hidden lg:flex rotate-[-5deg]"
        >
          {/* Wireframe Nav */}
          <div className="h-[52px] border-b border-foreground/15 flex items-center justify-between px-8">
            <div className="w-[60px] h-[12px] border border-foreground/20 rounded-[2px]"></div>
            <div className="flex gap-4 items-center">
              <div className="w-[20px] h-[4px] border border-foreground/20 rounded-sm"></div>
              <div className="w-[20px] h-[4px] border border-foreground/20 rounded-sm"></div>
              <div className="w-[20px] h-[4px] border border-foreground/20 rounded-sm"></div>
              <div className="w-[20px] h-[4px] border border-foreground/20 rounded-sm"></div>
              <div className="w-[50px] h-[16px] border border-foreground/30 rounded-[2px] ml-4"></div>
            </div>
          </div>

          {/* Wireframe Hero */}
          <div className="h-[280px] flex px-8 py-8">
            <div className="w-[43%] flex flex-col justify-center pr-6 gap-3">
              <div className="w-[80%] h-[18px] bg-foreground/[0.04] border border-foreground/15 rounded-[1px]"></div>
              <div className="w-[60%] h-[18px] bg-foreground/[0.04] border border-foreground/15 rounded-[1px]"></div>
              <div className="w-[50%] h-[8px] border border-foreground/15 rounded-[1px] mt-4"></div>
              <div className="w-[30%] h-[8px] border border-foreground/15 rounded-[1px]"></div>
              <div className="w-[90px] h-[24px] border border-foreground/30 rounded-[2px] mt-4"></div>
            </div>
            <div className="w-[57%] border border-foreground/20 rounded-[1px] relative overflow-hidden flex items-center justify-center">
              <div className="absolute w-[150%] h-px bg-foreground/10 rotate-[35deg]"></div>
              <div className="absolute w-[150%] h-px bg-foreground/10 -rotate-[35deg]"></div>
            </div>
          </div>

          {/* Wireframe Featured */}
          <div className="flex-1 flex gap-5 px-8 pt-4 pb-6">
            <div className="flex-1 h-[80px] border border-foreground/20 rounded-[1px]"></div>
            <div className="flex-1 h-[80px] border border-foreground/20 rounded-[1px]"></div>
            <div className="flex-1 h-[80px] border border-foreground/20 rounded-[1px]"></div>
          </div>
        </div>

        {/* Desktop Website */}
        <motion.div 
          initial={reducedMotion ? { opacity: 1, y: 0, scale: 1 } : { opacity: 0, y: 24, scale: 0.985 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.65, delay: 0.15, ease: "easeOut" }}
          className="relative z-10 w-[94%] sm:w-[96%] lg:w-[94%] xl:w-auto mx-auto xl:mx-0 rotate-[-1deg] xl:rotate-[1.5deg]"
        >
          <DesktopWebsiteMockup />
        </motion.div>

        {/* Mobile Website */}
        <motion.div 
          initial={reducedMotion ? { opacity: 1, x: 0, y: 0 } : { opacity: 0, x: 30, y: 35 }}
          whileInView={{ opacity: 1, x: 0, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6, delay: 0.45, ease: "easeOut" }}
          className="absolute z-20 w-[28%] md:w-[24%] lg:w-[22%] xl:w-auto -bottom-[6%] right-[0%] sm:-bottom-[10%] sm:right-[2%] xl:top-[240px] xl:-right-[10px] rotate-[1deg] xl:rotate-[0.5deg]"
        >
          <MobileWebsiteMockup />
        </motion.div>
      </div>

    </div>
  )
}
