import React from "react";

export function WhyIzanagiSection() {
  return (
    <section className="w-full max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 py-24 xl:py-25 relative overflow-hidden">
      
      {/* Top Left Annotation */}
      <div className="hidden xl:flex absolute top-12 left-[8%] transform -rotate-6 z-20 flex-col items-center pointer-events-none" aria-hidden="true">
        <span className="font-annotation text-foreground-muted text-[22px] leading-tight relative z-10 block pr-8">Built to last.</span>
        <svg width="40" height="40" viewBox="0 0 40 40" fill="none" className="text-[#707070]er opacity-60 mt-1 ml-16">
          <path d="M4 4C4 4 20 6 30 20C30 20 22 20 22 20M30 20C30 20 30 12 30 12" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      </div>

      {/* Top Right Annotation */}
      <div className="hidden xl:flex absolute top-8 right-[5%] transform -rotate-3 z-20 flex-col items-center pointer-events-none" aria-hidden="true">
        <span className="font-annotation text-foreground-muted text-[22px] leading-tight relative z-10 block text-right pl-12">Less handoff.<br/>More ownership.</span>
        <svg width="40" height="40" viewBox="0 0 40 40" fill="none" className="text-[#707070]er opacity-60 mt-1 mr-24">
          <path d="M36 4C36 4 20 6 10 20C10 20 18 20 18 20M10 20C10 20 10 12 10 12" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      </div>

      <div className="flex flex-col lg:flex-row gap-16 lg:gap-10 xl:gap-12 justify-between items-start relative z-10 mx-auto max-w-7xl">
        
        {/* Left Side — Editorial Copy */}
        <div className="w-full lg:w-[38%] xl:w-[32%] shrink-0 flex flex-col pt-8 xl:pt-16">
          
          <div className="flex flex-col gap-4 w-full relative max-w-[500px]">
            
            <div className="flex flex-col gap-2 relative z-10 mb-2">
              {/* Section eyebrow */}
              <div className="flex items-center gap-4">
                <span className="text-label text-[#707070] whitespace-nowrap">07</span>
                <div className="w-12 h-px bg-foreground-faint" />
                <span className="text-label text-[#707070] whitespace-nowrap">WHY IZANAGI LABS?</span>
              </div>
              
              <h2 className="text-display-lg font-serif text-foreground leading-[1.05] tracking-tight mt-6">
                Built like a product team.<br className="hidden md:block" />
                Not a project factory.
              </h2>
            </div>
            
            <p className="text-body-lg text-foreground-muted relative z-10 mt-4 leading-relaxed max-w-[420px]">
              We combine strategy, design, engineering and growth to build systems that perform, scale and stay maintainable.
            </p>
            
            <div className="my-8 xl:my-12 relative z-10">
              <span className="text-system-xs text-[#707070] tracking-[0.2em] leading-[1.8] block uppercase">
                STRATEGY &bull; DESIGN &bull; ENGINEERING &bull; GROWTH
              </span>
            </div>
            
            <div className="relative z-10 flex items-center mt-2">
              <a href="#process" className="inline-flex items-center text-system-sm font-semibold text-[#A94A29] hover:text-[#A94A29]-hover transition-colors group tracking-widest uppercase border-b border-accent pb-2">
                SEE HOW WE WORK 
                <span className="ml-3 group-hover:translate-x-1 transition-transform">──&gt;</span>
              </a>
            </div>
            
          </div>
        </div>

        {/* Right Side — Principle Grid */}
        <div className="w-full lg:w-[62%] xl:w-[68%] relative flex-1">
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-0 border border-border-subtle rounded-sm overflow-hidden bg-transparent">
            
            {/* Panel 01 */}
            <div className="p-8 lg:p-10 border-b md:border-r border border-border-subtle flex flex-col">
              <div className="flex items-center gap-4 mb-6">
                <span className="font-serif text-[26px] text-foreground-muted">01</span>
                <div className="w-8 h-px bg-border" />
              </div>
              <h3 className="text-display-md text-foreground font-serif text-[28px] lg:text-[32px] leading-[1.15] mb-4">
                Built for the long run.
              </h3>
              <p className="text-body-md text-foreground-muted leading-relaxed">
                Scalable architecture and maintainable systems &mdash; not quick fixes that become tomorrow&rsquo;s technical debt.
              </p>
            </div>

            {/* Panel 02 */}
            <div className="p-8 lg:p-10 border-b border border-border-subtle flex flex-col">
              <div className="flex items-center gap-4 mb-6">
                <span className="font-serif text-[26px] text-foreground-muted">02</span>
                <div className="w-8 h-px bg-border" />
              </div>
              <h3 className="text-display-md text-foreground font-serif text-[28px] lg:text-[32px] leading-[1.15] mb-4">
                Performance by default.
              </h3>
              <p className="text-body-md text-foreground-muted leading-relaxed">
                Speed, accessibility and responsiveness are engineering requirements, not a final optimization pass.
              </p>
            </div>

            {/* Panel 03 */}
            <div className="p-8 lg:p-10 border-b  md:border-r border border-border-subtle flex flex-col">
              <div className="flex items-center gap-4 mb-6">
                <span className="font-serif text-[26px] text-foreground-muted">03</span>
                <div className="w-8 h-px bg-border" />
              </div>
              <h3 className="text-display-md text-foreground font-serif text-[28px] lg:text-[32px] leading-[1.15] mb-4">
                Business before<br className="hidden xl:block" />technology.
              </h3>
              <p className="text-body-md text-foreground-muted leading-relaxed">
                We understand the workflow and problem before deciding what should be built.
              </p>
            </div>

            {/* Panel 04 */}
            <div className="p-8 lg:p-10 flex flex-col  border border-border-subtle ">
              <div className="flex items-center gap-4 mb-6">
                <span className="font-serif text-[26px] text-foreground-muted">04</span>
                <div className="w-8 h-px bg-border" />
              </div>
              <h3 className="text-display-md text-foreground font-serif text-[28px] lg:text-[32px] leading-[1.15] mb-4">
                No black boxes.
              </h3>
              <p className="text-body-md text-foreground-muted leading-relaxed">
                Clear decisions, transparent communication and systems your team can actually understand and own.
              </p>
            </div>

          </div>
        </div>

      </div>

      {/* Bottom Annotations & Micro-copy */}
      <div className="flex flex-col md:flex-row justify-between items-end md:items-center w-full  relative z-10 max-w-7xl mx-auto">
        {/* Center Annotation */}
        <div className="hidden xl:flex absolute left-[45%] -top-35 flex-col items-center transform -rotate-3 pointer-events-none" aria-hidden="true">
          <svg width="40" height="40" viewBox="0 0 40 40" fill="none" className="text-[#707070]er opacity-60 mb-1 mr-16">
             <path d="M36 36C36 36 20 34 10 20C10 20 18 20 18 20M10 20C10 20 10 28 10 28" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
          <span className="font-annotation text-foreground-muted text-[22px] leading-tight relative z-10 block pr-8">...one team,<br/>all the way through.</span>
        </div>

      </div>

    </section>
  );
}
