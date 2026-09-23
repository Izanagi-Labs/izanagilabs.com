import { DiscoveryVisual } from "./DiscoveryVisual"

export function AISEOSection() {
  return (
    <section className="w-full max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-25 relative overflow-hidden">
      <div className="flex flex-col lg:flex-row gap-8 lg:gap-4 items-center lg:items-start relative z-10">
        
        {/* Left Side — Editorial Copy */}
        <div className="w-full lg:w-[40%] shrink-0 flex flex-col justify-center pt-8 lg:pt-32">
          <div className="flex flex-col gap-4 w-full relative max-w-[480px]">

            <div className="flex flex-col gap-2 relative z-10">
              {/* Section label with long horizontal line separator */}
              <div className="flex items-center gap-4">
                <span className="text-label text-[#707070] whitespace-nowrap">05</span>
                <div className="w-10 h-px bg-foreground-faint" />
                <span className="text-label text-[#707070] whitespace-nowrap">AI SEO &amp; DISCOVERY</span>
              </div>
              <h2 className="text-display-lg font-serif text-foreground leading-tight tracking-tight mt-4">
                Built to be<br/>discovered.
              </h2>
            </div>
            
            <p className="text-body-lg text-foreground-muted relative z-10 mt-4 leading-relaxed">
              We structure your website for people, search engines and AI systems. Our SEO services combine technical SEO, structured data and content strategy to drive organic visibility and search discovery.
            </p>
            
            <div className="my-8 relative z-10">
              <span className="text-[9px] font-mono text-[#707070] tracking-[0.15em] leading-relaxed block uppercase">
                Technical SEO &bull; Content &bull; Structured Data &bull; AI Discovery
              </span>
            </div>
            
            <div className="relative z-10 flex items-center justify-between">
              <a href="#contact" className="inline-flex items-center text-system-sm font-semibold text-[#A94A29] hover:text-[#A94A29]-hover transition-colors group tracking-widest uppercase">
                Explore possibilities 
                <span className="ml-2 group-hover:translate-x-1 transition-transform">──&gt;</span>
              </a>
            </div>
          </div>
        </div>

        {/* Right Side — Discovery System Visual */}
        <div className="w-full lg:w-[60%] relative flex items-center justify-center">
          <DiscoveryVisual />
        </div>

      </div>
    </section>
  )
}
