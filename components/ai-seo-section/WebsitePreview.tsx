"use client"

import { motion } from "motion/react"
import { Monitor, Globe, Search, BarChart3 } from "lucide-react"

export function WebsitePreview() {
  return (
    <div className="relative w-full pb-10">
      
      {/* Schema Card (Floating Behind/Right) */}
      <motion.div 
        initial={{ opacity: 0, x: 10, y: 5 }}
        whileInView={{ opacity: 1, x: 0, y: 0 }}
        viewport={{ once: true, margin: "-50px" }}
        transition={{ duration: 0.8, delay: 0.4 }}
        className="hidden md:block absolute -right-20 lg:-left-20 -bottom-10 z-20 bg-white border border-border/60 shadow-lg rounded p-3 max-w-[220px] rotate-2"
      >
        {/* Structured data callout */}
        <div className="absolute -bottom-15 -left-10 flex items-start gap-1.5">
          <div className="w-2 h-2 rounded-full bg-accent mt-1.5 shrink-0" />
          <div>
            <div className="text-xs font-semibold whitespace-nowrap text-foreground">Structured data</div>
            <div className="text-[10px] text-foreground-muted mt-0.5 leading-tight">Helps machines<br/>understand your business.</div>
          </div>
        </div>
        <pre className="overflow-hidden text-[9px] leading-snug font-mono text-foreground-muted bg-transparent m-0 p-0">
{`{
  "@context": "https://schema.org",
  "@type": "Organization",
  "name": "Izanagi Labs",
  "url": "https://izanagilabs.com"
}`}
        </pre>
      </motion.div>

      {/* Main Website Card */}
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-50px" }}
        transition={{ duration: 0.8 }}
        className="relative z-10 w-full bg-surface-raised border border-border/80 rounded shadow-2xl overflow-hidden -rotate-2"
      >
         {/* Website Header */}
         <header className="flex items-center justify-between px-4 py-2 border-b border-border/50 bg-background/50">
           <div className="flex items-center gap-1.5">
             <div className="flex items-end h-4">
          <div className="w-0 h-0 border-l-[5px] border-l-transparent border-r-[5px] border-r-transparent border-b-[11px] border-b-foreground" />
          <div className="w-0 h-0 border-l-[7px] border-l-transparent border-r-[7px] border-r-transparent border-b-[16px] border-b-foreground -ml-1" />
        </div>
             <span className="text-[11px] font-bold uppercase tracking-wider">Izanagi</span>
           </div>
           <nav className="hidden sm:flex gap-4 text-[10px] font-medium text-foreground-muted">
             <span>Home</span>
             <span>Services</span>
             <span>Work</span>
             <span>About</span>
           </nav>
           <div className="bg-foreground text-background text-[9px] px-3 py-1.5 rounded-full font-semibold">
             Get in touch
           </div>
         </header>

         {/* Website Hero */}
         <div className="flex flex-col sm:flex-row items-stretch bg-background/20 min-h-[200px]">
           <div className="px-6 py-8 flex flex-col justify-center flex-1">
             <h1 className="text-xl sm:text-2xl font-serif leading-tight mb-3 text-foreground">
               Modern software<br/>for growing businesses.
             </h1>
             <p className="text-[10px] sm:text-[11px] text-foreground-muted max-w-[240px] mb-5 leading-relaxed">
               Custom software, web solutions and AI integration to help businesses move forward.
             </p>
             <div className="flex gap-3">
               <div className="bg-accent text-white text-[10px] px-4 py-2 rounded font-medium shadow-sm">Get in touch</div>
               <div className="text-[10px] px-4 py-2 font-medium flex items-center border border-border/80 rounded bg-surface shadow-sm text-foreground">Our work &rarr;</div>
             </div>
           </div>
           {/* Abstract Image Area */}
           <div className="w-full sm:w-[50%] bg-border/40 relative overflow-hidden">
             <img src="/images/hero-workflow.jpg" alt="Izanagi workflow miniature" className="absolute inset-0 w-full h-full object-cover mix-blend-multiply opacity-90" />
           </div>
         </div>

         {/* Website Features (Solutions Grid) */}
         <div className="px-6 py-6 border-t border-border/50 bg-surface">
           <h3 className="text-xs font-serif italic mb-3 text-foreground">Solutions for what&apos;s next.</h3>
           <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
              {[
                { title: "Custom Software", desc: "Development", icon: Monitor },
                { title: "Website", desc: "Development", icon: Globe },
                { title: "AI SEO &", desc: "Discovery", icon: Search },
                { title: "Performance", desc: "Marketing", icon: BarChart3 }
              ].map((item, i) => {
                const Icon = item.icon
                return (
                  <div key={i} className="border border-border/50 p-3 flex flex-col gap-3 rounded bg-background/50 relative">
                     <div className="w-6 h-6 flex items-center justify-center rounded bg-foreground/[0.04]">
                       <Icon className="w-3.5 h-3.5 text-foreground-muted" strokeWidth={2} />
                     </div>
                     <div>
                       <div className="text-[10px] font-semibold text-foreground">{item.title}</div>
                       <div className="text-[9px] text-foreground-faint mt-0.5">{item.desc}</div>
                     </div>
                     <span className="absolute bottom-2 right-2 text-[10px] text-foreground-faint">&rarr;</span>
                  </div>
                )
              })}
           </div>
         </div>
      </motion.div>

      {/* Useful Content Callout (Left) */}
      <motion.div 
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ delay: 0.6 }}
        className="hidden lg:flex absolute -left-24 xl:-left-32 top-[15%] items-center gap-0 z-20"
      >
        <div className="text-right pr-2">
          <div className="text-xs font-semibold whitespace-nowrap text-foreground">Useful content</div>
          <div className="text-[10px] text-foreground-muted mt-0.5 leading-tight">Pages built around<br/>real search intent.</div>
        </div>
        <div className="flex items-center -mt-2">
          <div className="w-2 h-2 rounded-full bg-accent z-10 relative" />
          <svg width="40" height="20" viewBox="0 0 40 20" fill="none" className="text-foreground-fainter opacity-60 -ml-1 mt-2">
            <path d="M 0 0 Q 20 5 35 15 M 30 15 L 35 15 L 34 10" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round" fill="none" />
          </svg>
        </div>
      </motion.div>

      {/* Strong Structure Callout (Left) */}
      <motion.div 
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ delay: 0.7 }}
        className="hidden lg:flex absolute -left-24 xl:-left-32 top-[45%] items-center gap-0 z-20"
      >
        <div className="text-right pr-2">
          <div className="text-xs font-semibold whitespace-nowrap text-foreground">Strong structure</div>
          <div className="text-[10px] text-foreground-muted mt-0.5 leading-tight">Clear hierarchy<br/>for better indexing.</div>
        </div>
        <div className="flex items-center -mt-2">
          <div className="w-2 h-2 rounded-full bg-accent z-10 relative" />
          <svg width="40" height="20" viewBox="0 0 40 20" fill="none" className="text-foreground-fainter opacity-60 -ml-1 mt-2">
            <path d="M 0 0 Q 15 10 35 15 M 30 15 L 35 15 L 32 10" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round" fill="none" />
          </svg>
        </div>
      </motion.div>

      {/* Performance Card (Right side, overlapping website) */}
      <motion.div 
        initial={{ opacity: 0, y: 15 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.8 }}
        className="hidden md:block absolute -right-6 lg:-right-10 -bottom-6 z-20 bg-surface-raised border border-border shadow-lg rounded p-4 min-w-[140px]"
      >
        <div className="flex flex-col items-center mb-3">
          {/* SVG Progress Ring */}
          <svg width="48" height="48" viewBox="0 0 52 52" className="mb-1.5">
            <circle cx="26" cy="26" r="22" fill="none" stroke="#E5E7EB" strokeWidth="4" />
            <circle 
              cx="26" cy="26" r="22" fill="none" stroke="#22C55E" strokeWidth="4" strokeLinecap="round"
              strokeDasharray={`${2 * Math.PI * 22 * 0.98} ${2 * Math.PI * 22 * 0.02}`}
              transform="rotate(-90 26 26)"
            />
            <text x="26" y="26" textAnchor="middle" dominantBaseline="central" className="text-sm font-bold fill-green-600">98</text>
          </svg>
          <div className="text-[9px] text-foreground-muted uppercase tracking-widest font-semibold">Performance</div>
        </div>
        <div className="space-y-1.5 text-[10px] font-mono">
          <div className="flex justify-between gap-4 border-b border-border/50 pb-1">
            <span className="text-foreground-muted font-sans">LCP</span>
            <span className="text-green-600 font-semibold">1.2s</span>
          </div>
          <div className="flex justify-between gap-4 border-b border-border/50 pb-1">
            <span className="text-foreground-muted font-sans">INP</span>
            <span className="text-accent font-semibold">78ms</span>
          </div>
          <div className="flex justify-between gap-4">
            <span className="text-foreground-muted font-sans">CLS</span>
            <span className="text-green-600 font-semibold">0.01</span>
          </div>
        </div>
        
        {/* Fast by default annotation */}
        <div className="hidden xl:block absolute -bottom-20 -translate-y-1/2 -right-0">
           <div className="flex items-start gap-2">
             <div className="w-2 h-2 rounded-full bg-accent mt-1.5 shrink-0" />
             <div>
               <div className="text-xs font-semibold whitespace-nowrap text-foreground">Fast by default</div>
               <div className="text-[10px] text-foreground-muted mt-0.5 leading-tight">Better experience.<br/>Higher visibility.</div>
             </div>
           </div>
        </div>
      </motion.div>

    </div>
  )
}
