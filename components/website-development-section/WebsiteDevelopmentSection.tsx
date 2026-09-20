import { WebsiteShowcase } from "./WebsiteShowcase"

export function WebsiteDevelopmentSection() {
  return (
    <section className="w-full max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 py-16 xl:py-25 relative overflow-hidden flex flex-col">
      <div className="flex flex-col lg:flex-row gap-12 lg:gap-8 xl:gap-4 items-center lg:items-start relative z-10 flex-1">
        
        {/* Left Side — Editorial Copy */}
        <div className="w-full lg:w-[40%] xl:w-[40%] shrink-0 flex flex-col justify-center pt-8 lg:pt-16">
          <div className="flex flex-col gap-4 w-full relative max-w-[480px]">

            <div className="flex flex-col gap-2 relative z-10 mb-6 lg:mb-2">
              {/* Section label with long horizontal line separator */}
              <div className="flex items-center gap-4">
                <span className="text-label text-foreground-faint whitespace-nowrap">04</span>
                <div className="w-10 h-px bg-foreground-faint" />
                <span className="text-label text-foreground-faint whitespace-nowrap">WEBSITE DEVELOPMENT</span>
              </div>
              <h2 className="text-display-lg font-serif text-foreground leading-tight tracking-tight mt-2 lg:mt-4">
                Websites built<br/>to make an impression.
              </h2>
            </div>
            
            <p className="text-body-md xl:text-body-lg text-foreground-muted relative z-10 mt-2 lg:mt-4 leading-relaxed max-w-[400px] xl:max-w-full mb-6 lg:mb-2">
              We design and build distinctive websites <br className="hidden lg:block" />that are fast, responsive and built around <br className="hidden lg:block" />your business.
            </p>
            
            <div className="my-2 lg:my-8 relative z-10">
              <span className="text-[9px] font-mono text-foreground-faint tracking-[0.15em] leading-relaxed block uppercase flex flex-wrap gap-x-2">
                <span>DESIGN &bull;</span> <span>DEVELOPMENT &bull;</span> <span>RESPONSIVE &bull;</span> <span>PERFORMANCE</span>
              </span>
            </div>
            
            <div className="relative z-10 flex items-center justify-between mt-4 lg:mt-0">
              <a href="#" className="inline-flex items-center text-system-sm font-semibold text-accent hover:text-accent-hover transition-colors group tracking-widest uppercase">
                Explore possibilities 
                <span className="ml-2 group-hover:translate-x-1 transition-transform">──&gt;</span>
              </a>
            </div>
          </div>
        </div>

        {/* Right Side — Website Showcase (NOT constrained to strict 60%) */}
        <div className="w-full lg:w-[60%] xl:w-auto flex-1 relative flex items-center justify-center pt-12 lg:pt-0">
          <WebsiteShowcase />
        </div>

      </div>

    </section>
  )
}
