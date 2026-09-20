import React from "react";
import { MarketingDashboard } from "./MarketingDashboard";

export function PerformanceMarketingSection() {
  return (
    <section className="w-full max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 py-24 md:py-25 relative">
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
