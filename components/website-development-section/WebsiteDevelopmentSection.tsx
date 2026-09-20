import { WebsiteShowcase } from "./WebsiteShowcase"

export function WebsiteDevelopmentSection() {
  return (
    <section className="w-full max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 py-16 xl:py-25 relative overflow-hidden flex flex-col">
      <div className="flex flex-col lg:flex-row-reverse gap-12 lg:gap-16 xl:gap-24 items-center lg:items-center relative z-10 flex-1">
        
        {/* Right Side — Editorial Copy */}
        <div className="w-full lg:w-[40%] xl:w-[35%] shrink-0 flex flex-col justify-center pt-8 lg:pt-0">
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
              We design and build distinctive websites that are fast, responsive and built around your business.
            </p>
            
            <div className="my-8 relative z-10">
              <span className="text-[9px] font-mono text-[#707070] tracking-[0.15em] leading-relaxed block uppercase">
                DESIGN &bull; DEVELOPMENT &bull; RESPONSIVE &bull; PERFORMANCE
              </span>
            </div>
            
            <div className="mt-4">
              <a href="#contact" className="inline-flex items-center text-system-sm font-semibold text-accent-hover hover:text-[#913F23] transition-colors group tracking-widest uppercase">
                EXPLORE POSSIBILITIES
                <span className="ml-3 group-hover:translate-x-1 transition-transform">&rarr;</span>
              </a>
            </div>
          </div>
        </div>

        {/* Left Side — Website Showcase */}
        <div className="w-full lg:w-[60%] xl:w-[55%] relative min-w-0 pointer-events-none pb-12 lg:pb-0">
          <WebsiteShowcase />
        </div>

      </div>

    </section>
  )
}
