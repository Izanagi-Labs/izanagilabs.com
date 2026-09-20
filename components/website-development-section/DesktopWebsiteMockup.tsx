import Image from "next/image"

export function DesktopWebsiteMockup() {
  return (
    <div className="w-full xl:w-[820px] aspect-[82/56] xl:aspect-auto xl:h-[560px] bg-white rounded-[2px] md:rounded-md shadow-[0_10px_30px_rgba(20,20,20,0.06),0_2px_8px_rgba(20,20,20,0.02)] xl:shadow-[0_20px_50px_rgba(20,20,20,0.08),0_4px_12px_rgba(20,20,20,0.03)] flex flex-col border border-border/50 overflow-hidden select-none">
      
      {/* Navigation - ~10% height */}
      <div className="h-[10%] xl:h-[52px] shrink-0 flex items-center justify-between px-3 md:px-5 xl:px-8 border-b border-border-subtle/30">
        <div className="text-[6px] md:text-[8px] xl:text-[11px] font-semibold tracking-[0.25em] leading-[1.05] uppercase text-foreground">
          NORTH<br/>HOUSE
        </div>
        <div className="flex items-center gap-4 xl:gap-8">
          <div className="hidden md:flex items-center gap-4 xl:gap-6 text-[8px] font-medium tracking-wide text-foreground-secondary">
            <span>Work</span>
            <span>About</span>
            <span>Approach</span>
            <span>Journal</span>
          </div>
          <button className="border border-foreground text-foreground px-2 py-1 xl:px-4 xl:py-1.5 rounded-[1px] md:rounded-[2px] text-[4.5px] md:text-[6px] xl:text-[8px] font-medium hover:bg-foreground hover:text-white transition-colors">
            Get in touch
          </button>
        </div>
      </div>

      {/* Hero - ~55% height */}
      <div className="flex-1 xl:flex-none xl:h-[310px] shrink-0 flex px-3 md:px-5 xl:px-8 py-3 md:py-4 xl:py-6 bg-[#FAF9F7]">
        {/* Left Hero Content */}
        <div className="w-[43%] flex flex-col justify-center pr-2 md:pr-4 xl:pr-6">
          <span className="text-[3.5px] md:text-[5px] xl:text-[6.5px] font-semibold tracking-[0.2em] text-foreground-muted uppercase mb-1.5 md:mb-3 xl:mb-4">
            ARCHITECTURE / INTERIORS
          </span>
          <div className="font-serif text-[16px] md:text-[24px] xl:text-[36px] leading-[0.95] text-foreground tracking-tight mb-1.5 md:mb-3 xl:mb-4">
            Spaces shaped<br/>around living.
          </div>
          <p className="hidden md:block text-[6.5px] xl:text-[9px] leading-[1.45] text-foreground-muted max-w-[200px] mb-3 xl:mb-6">
            Thoughtful architecture and interior design<br/>for a more human way of living.
          </p>
          <div>
            <button className="bg-foreground text-background px-3 md:px-4 xl:px-5 h-[16px] md:h-[22px] xl:h-[28px] rounded-[1px] md:rounded-[2px] text-[4.5px] md:text-[6px] xl:text-[7.5px] font-medium tracking-wider uppercase inline-flex items-center gap-1.5 md:gap-2 xl:gap-3 hover:bg-foreground-secondary transition-colors">
              View our work
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="square" strokeLinejoin="miter" className="w-[4px] h-[4px] md:w-[7px] md:h-[7px] xl:w-[10px] xl:h-[10px]">
                <path d="M5 12h14M12 5l7 7-7 7" />
              </svg>
            </button>
          </div>
        </div>

        {/* Right Hero Content (Image) */}
        <div className="w-[57%] relative">
          <Image 
            src="/images/hero-arch.jpg"
            alt=""
            fill
            className="object-cover object-[center_30%] rounded-[1px]"
            sizes="(max-width: 1280px) 60vw, 470px"
            priority
          />
        </div>
      </div>

      {/* Featured Work - ~35% height */}
      <div className="flex-1 flex flex-col justify-center px-3 md:px-5 xl:px-8 pt-2 md:pt-4 xl:pt-5 pb-3 md:pb-5 xl:pb-6 bg-white">
        <span className="text-[4px] md:text-[5.5px] xl:text-[7px] font-semibold tracking-widest text-foreground-muted uppercase mb-1.5 md:mb-2 xl:mb-3">
          FEATURED WORK
        </span>
        
        <div className="grid grid-cols-3 gap-2 md:gap-4 xl:gap-6 pr-2 md:pr-4 xl:pr-6">
          {/* Card 1 */}
          <div className="flex flex-col group cursor-pointer">
            <div className="h-[35px] md:h-[65px] xl:h-[95px] w-full rounded-[1px] mb-1 md:mb-2 overflow-hidden relative">
              <Image 
                src="/images/project-cove-house.jpg" 
                alt="" 
                fill 
                className="object-cover object-[center_60%] transition-transform duration-700 group-hover:scale-105" 
                sizes="(max-width: 1280px) 33vw, 275px" 
              />
            </div>
            <div className="flex justify-between items-center mb-0.5">
              <span className="text-[5.5px] md:text-[8px] xl:text-[11px] font-serif text-foreground">Cove House</span>
              <svg width="8" height="8" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="square" className="hidden xl:block text-foreground-muted opacity-0 group-hover:opacity-100 transition-opacity">
                <path d="M5 12h14M12 5l7 7-7 7" />
              </svg>
            </div>
            <span className="hidden md:block text-[4.5px] xl:text-[6.5px] tracking-[0.15em] text-foreground-faint uppercase">RESIDENTIAL</span>
          </div>

          {/* Card 2 */}
          <div className="flex flex-col group cursor-pointer">
            <div className="h-[35px] md:h-[65px] xl:h-[95px] w-full rounded-[1px] mb-1 md:mb-2 overflow-hidden relative">
              <Image 
                src="/images/project-marina-villa.jpg" 
                alt="" 
                fill 
                className="object-cover object-[center_55%] transition-transform duration-700 group-hover:scale-105" 
                sizes="(max-width: 1280px) 33vw, 275px" 
              />
            </div>
            <div className="flex justify-between items-center mb-0.5">
              <span className="text-[5.5px] md:text-[8px] xl:text-[11px] font-serif text-foreground">Marina Villa</span>
              <svg width="8" height="8" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="square" className="hidden xl:block text-foreground-muted opacity-0 group-hover:opacity-100 transition-opacity">
                <path d="M5 12h14M12 5l7 7-7 7" />
              </svg>
            </div>
            <span className="hidden md:block text-[4.5px] xl:text-[6.5px] tracking-[0.15em] text-foreground-faint uppercase">RESIDENTIAL</span>
          </div>

          {/* Card 3 */}
          <div className="flex flex-col group cursor-pointer">
            <div className="h-[35px] md:h-[65px] xl:h-[95px] w-full rounded-[1px] mb-1 md:mb-2 overflow-hidden relative">
              <Image 
                src="/images/project-hillside-retreat.jpg" 
                alt="" 
                fill 
                className="object-cover object-[center_40%] transition-transform duration-700 group-hover:scale-105" 
                sizes="(max-width: 1280px) 33vw, 275px" 
              />
            </div>
            <div className="flex justify-between items-center mb-0.5">
              <span className="text-[5.5px] md:text-[8px] xl:text-[11px] font-serif text-foreground">Hillside Retreat</span>
              <svg width="8" height="8" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="square" className="hidden xl:block text-foreground-muted opacity-0 group-hover:opacity-100 transition-opacity">
                <path d="M5 12h14M12 5l7 7-7 7" />
              </svg>
            </div>
            <span className="hidden md:block text-[4.5px] xl:text-[6.5px] tracking-[0.15em] text-foreground-faint uppercase">HOSPITALITY</span>
          </div>
        </div>
      </div>

    </div>
  )
}
