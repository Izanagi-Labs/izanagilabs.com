import React from "react";
import { MarketingDashboard } from "./MarketingDashboard";

export function PerformanceMarketingSection() {
  return (
    <section className="w-full max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 py-24 md:py-32 relative">
      
      {/* Top Left Annotation */}
      <div className="hidden xl:flex absolute top-12 left-[12%] transform -rotate-6 z-20 flex-col items-center pointer-events-none" aria-hidden="true">
        <span className="font-annotation text-foreground-muted text-[22px] leading-tight relative z-10 block pr-8">From clicks<br/>to conversions...</span>
        <svg width="40" height="40" viewBox="0 0 40 40" fill="none" className="text-foreground-fainter opacity-60 mt-1 ml-16">
          <path d="M4 4C4 4 20 6 30 20C30 20 22 20 22 20M30 20C30 20 30 12 30 12" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" fill="none"/>
        </svg>
      </div>

      {/* Top Right Annotation */}
      <div className="hidden xl:flex absolute top-20 right-[8%] transform -rotate-3 z-20 flex-col items-center pointer-events-none" aria-hidden="true">
        <span className="font-annotation text-foreground-muted text-[22px] leading-tight relative z-10 block text-right pl-12">Less guesswork.<br/>More growth.</span>
        <svg width="40" height="40" viewBox="0 0 40 40" fill="none" className="text-foreground-fainter opacity-60 mt-1 mr-24">
          <path d="M36 4C36 4 20 6 10 20C10 20 18 20 18 20M10 20C10 20 10 12 10 12" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" fill="none"/>
        </svg>
      </div>

      {/* Bottom Center Annotation */}
      <div className="hidden xl:flex absolute bottom-8 left-[35%] transform -rotate-3 z-20 flex-col items-center pointer-events-none" aria-hidden="true">
        <svg width="40" height="40" viewBox="0 0 40 40" fill="none" className="text-foreground-fainter opacity-60 mb-2 mr-16">
          <path d="M4 36C4 36 20 34 30 20C30 20 22 20 22 20M30 20C30 20 30 28 30 28" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" fill="none"/>
        </svg>
        <span className="font-annotation text-foreground-muted text-[22px] leading-tight relative z-10 block pr-8">...shift budget toward<br/>what performs.</span>
      </div>

      {/* 
        flex-col lg:flex-row-reverse ensures the editorial content (first child in DOM) 
        appears on top on mobile (< 1024px) when stacked. 
        lg:flex-row-reverse puts dashboard on left, editorial on right for desktop (>=1024px).
      */}
      <div className="flex flex-col lg:flex-row-reverse gap-12 lg:gap-16 xl:gap-24 items-center lg:items-center relative z-10">
        
        {/* Right Side — Editorial Copy (~40%) */}
        <div className="w-full lg:w-[40%] flex flex-col justify-center">
          <div className="flex flex-col gap-4 w-full relative max-w-[480px]">
            
            <div className="flex flex-col gap-2 relative z-10 mb-2">
              {/* Section label with subtle horizontal line treatment */}
              <div className="flex items-center gap-4">
                <span className="text-label text-foreground-faint whitespace-nowrap">06</span>
                <div className="w-10 h-px bg-foreground-faint" />
                <span className="text-label text-foreground-faint whitespace-nowrap">PERFORMANCE MARKETING</span>
              </div>
              
              <h2 className="text-display-lg font-serif text-foreground leading-tight tracking-tight mt-4">
                Spend smarter.<br />Scale what works.
              </h2>
            </div>
            
            <p className="text-body-lg text-foreground-muted relative z-10 mt-2 leading-relaxed">
              Run search, social and retargeting campaigns with clear attribution, better conversion efficiency and measurable growth.
            </p>
            
            <div className="my-6 relative z-10">
              <span className="text-system-xs text-foreground-faint tracking-[0.2em] leading-relaxed block uppercase">
                PAID SEARCH &bull; PAID SOCIAL &bull; RETARGETING &bull; CRO
              </span>
            </div>
            
            <div className="relative z-10 flex items-center mt-2">
              <a href="#" className="inline-flex items-center text-system-sm font-semibold text-accent hover:text-accent-hover transition-colors group tracking-widest uppercase">
                OPTIMIZE FOR GROWTH 
                <span className="ml-2 group-hover:translate-x-1 transition-transform">──&gt;</span>
              </a>
            </div>
            
          </div>
        </div>

        {/* Left Side — Dashboard Showcase (~60%) */}
        <div className="w-full lg:w-[80%] relative">
          <MarketingDashboard />
        </div>

      </div>
    </section>
  )
}
