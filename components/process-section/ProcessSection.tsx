import { ProcessDemo } from "./ProcessDemo"


export function ProcessSection() {
  return (
    <section id="process" className="w-full max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 py-24 md:py-32 relative">
      <div className="flex flex-col lg:flex-row gap-12 lg:gap-16 xl:gap-24 items-center relative z-10">
        
        {/* Marketing Content (Left) */}
        <div className="w-full lg:w-[40%] xl:w-[35%] shrink-0 flex flex-col justify-center">
          
          {/* Annotation: From planning... */}
          <div className="hidden xl:flex absolute -top-16 right-16 transform -rotate-6 z-20 flex-col items-center pointer-events-none" aria-hidden="true">
            <span className="font-annotation text-foreground-muted text-[22px] leading-tight relative z-10 block pr-8">From planning<br/>to dispatch...</span>
            <svg width="40" height="40" viewBox="0 0 40 40" fill="none" className="text-[#707070]er opacity-60 mt-1 ml-16">
              <path d="M4 4C4 4 20 6 30 20C30 20 22 20 22 20M30 20C30 20 30 12 30 12" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" fill="none"/>
            </svg>
          </div>

          <div className="flex flex-col gap-4 w-full relative max-w-[480px] lg:pr-4 xl:pr-8">
            <div className="flex flex-col gap-2 relative z-10">
              <span className="text-label text-[#707070]">03 &mdash; PROCESS & PRODUCTION MANAGEMENT</span>
              <h2 className="text-display-lg font-serif text-foreground leading-tight tracking-tight mt-4">
                From planning<br/>to dispatch.
              </h2>
            </div>
            
            <p className="text-body-lg text-foreground-muted relative z-10 mt-4">
              Manage inventory, planning, production,<br/>quality and dispatch through one<br/>connected system.
            </p>
            
            <div className="my-8 relative z-10">
              <span className="text-system-xs text-[#707070] tracking-widest leading-relaxed block">
                INVENTORY &bull; PLANNING &bull; PRODUCTION &bull; QUALITY &bull; DISPATCH
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

        {/* Software UI (Right) */}
        <div className="w-full lg:w-[60%] xl:w-[65%] min-w-0 relative">
          {/* Annotation: Less delay... */}
          <div className="hidden xl:flex absolute -top-16 right-20 transform -rotate-3 z-20 flex-col items-center pointer-events-none" aria-hidden="true">
            <span className="font-annotation text-foreground-muted text-[22px] leading-tight relative z-10 text-right block pl-12">Less delay.<br/>More control.</span>
            <svg width="40" height="40" viewBox="0 0 40 40" fill="none" className="text-[#707070]er opacity-60 mt-1 mr-24">
              <path d="M36 4C36 4 20 6 10 20C10 20 18 20 18 20M10 20C10 20 10 12 10 12" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" fill="none"/>
            </svg>
          </div>
          
          <ProcessDemo />
          
          {/* Annotation: Keep production moving. */}
          <div className="hidden xl:flex absolute -bottom-25 left-1/2 transform -translate-x-1/2 -rotate-3 z-20 flex-col items-center pointer-events-none" aria-hidden="true">
            <svg width="40" height="40" viewBox="0 0 40 40" fill="none" className="text-[#707070]er opacity-60 mb-1">
              <path d="M 20 36 C 20 36 20 4 20 4 C 20 4 12 12 12 12 M 20 4 C 20 4 28 12 28 12" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" fill="none"/>
            </svg>
            <span className="font-annotation text-foreground-muted text-[22px] leading-tight relative z-10 block mt-2">Keep production<br/>moving.</span>
          </div>
        </div>
        
      </div>
    </section>
  )
}
