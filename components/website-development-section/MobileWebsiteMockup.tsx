import Image from "next/image"

export function MobileWebsiteMockup() {
  return (
    <div className="w-full xl:w-[180px] aspect-[18/38] xl:aspect-auto xl:h-[380px] bg-[#FCFCFC] rounded-[8px] md:rounded-[12px] xl:rounded-[14px] shadow-[0_10px_30px_rgba(20,20,20,0.10),0_2px_8px_rgba(20,20,20,0.04)] xl:shadow-[0_20px_50px_rgba(20,20,20,0.12),0_4px_12px_rgba(20,20,20,0.06)] flex flex-col overflow-hidden select-none border border-border/50">
      
      {/* Navigation */}
      <div className="h-[10%] xl:h-[36px] bg-white shrink-0 flex items-center justify-between px-3 xl:px-5 border-b border-border-subtle/40 relative z-10">
        <div className="text-[5px] md:text-[6px] xl:text-[7.5px] font-semibold tracking-[0.25em] leading-[1.05] uppercase text-foreground">
          NORTH<br/>HOUSE
        </div>
        
        {/* Hamburger Icon */}
        <div className="w-[8px] xl:w-[12px] h-[6px] xl:h-[9px] flex flex-col justify-between py-[1px] xl:py-[1.5px]">
          <div className="w-full h-px xl:h-[1px] bg-foreground" />
          <div className="w-full h-px xl:h-[1px] bg-foreground" />
          <div className="w-[6px] xl:w-[8px] self-end h-px xl:h-[1px] bg-foreground" />
        </div>
      </div>

      {/* Hero Image */}
      <div className="h-[28%] xl:h-[110px] w-full relative shrink-0 bg-[#f4f3f0]">
        <Image 
          src="/images/hero-arch.jpg"
          alt=""
          fill
          className="object-cover object-[center_65%]"
          sizes="(max-width: 1280px) 100vw, 200px"
          priority
        />
      </div>

      {/* Content Area */}
      <div className="flex-1 flex flex-col px-3 md:px-4 xl:px-5 py-2 md:py-3 xl:py-4 bg-white">
        
        <span className="text-[3px] md:text-[4px] xl:text-[4.5px] font-semibold tracking-[0.2em] text-foreground-muted uppercase mb-1 md:mb-1.5">
          ARCHITECTURE / INTERIORS
        </span>
        
        <div className="font-serif text-[12px] md:text-[14px] xl:text-[18px] leading-[0.95] text-foreground tracking-tight mb-1 md:mb-2">
          Spaces shaped<br/>around living.
        </div>
        
        <p className="hidden md:block text-[5.5px] leading-[1.45] text-foreground-muted max-w-[130px] mb-3">
          Thoughtful architecture and interior design<br/>for a more human way of living.
        </p>
        
        <div>
          <button className="bg-foreground text-background px-2 xl:px-3 h-[14px] xl:h-[18px] rounded-[1px] xl:rounded-[1.5px] text-[3.5px] xl:text-[4.5px] font-medium tracking-wider uppercase inline-flex items-center gap-1 xl:gap-2 mb-2 xl:mb-4 hover:bg-foreground-secondary transition-colors">
            View our work
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="square" strokeLinejoin="miter" className="w-[3px] h-[3px] xl:w-[5px] xl:h-[5px]">
              <path d="M5 12h14M12 5l7 7-7 7" />
            </svg>
          </button>
        </div>

        {/* Featured Work - One Project */}
        <div className="flex flex-col mt-auto pb-1">
          <span className="hidden md:block text-[5px] font-semibold tracking-widest text-foreground-muted uppercase mb-2">
            FEATURED WORK
          </span>
          
          <div className="flex flex-col group cursor-pointer">
            <div className="h-[30px] md:h-[40px] xl:h-[50px] w-full rounded-[1px] mb-1 xl:mb-1.5 overflow-hidden relative">
              <Image 
                src="/images/project-cove-house.jpg" 
                alt="" 
                fill 
                className="object-cover object-[center_70%] transition-transform duration-700 group-hover:scale-105" 
                sizes="(max-width: 1280px) 100vw, 200px" 
              />
            </div>
            <div className="flex justify-between items-center mb-0.5">
              <span className="text-[6px] xl:text-[8px] font-serif text-foreground">Cove House</span>
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="square" className="hidden xl:block w-[6px] h-[6px] text-foreground-muted opacity-0 group-hover:opacity-100 transition-opacity">
                <path d="M5 12h14M12 5l7 7-7 7" />
              </svg>
            </div>
            <span className="hidden md:block text-[4.5px] tracking-[0.15em] text-foreground-faint uppercase">RESIDENTIAL</span>
          </div>
        </div>
        
      </div>
      
    </div>
  )
}
