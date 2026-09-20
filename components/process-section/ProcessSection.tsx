import { ProcessDemo } from "./ProcessDemo"


export function ProcessSection() {
  return (
    <section className="w-full max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 py-24 md:py-32 relative">
      <div className="flex flex-col xl:flex-row gap-12 xl:gap-20 items-start relative z-10">
        
        {/* Marketing Content (Left) */}
        <div className="w-full xl:w-[32%] shrink-0 sticky top-24 pt-4 pb-10">
          
          {/* Annotation: From planning... */}
          <div className="hidden xl:block absolute -top-16 right-16 transform -rotate-6 z-20 flex items-center">
            <span className="font-annotation text-foreground-faint text-xl relative z-10 block text-right mr-4">From planning<br/>to dispatch...</span>
            <svg width="32" height="24" viewBox="0 0 32 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="absolute top-10 -right-6 text-foreground-fainter opacity-60">
              <path d="M4 22C4 22 18 14 28 4C28 4 22 6 22 6M28 4C28 4 24 12 24 12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </div>

          <div className="flex flex-col gap-4 w-full relative h-full xl:pr-4">
            <div className="flex flex-col gap-2 relative z-10">
              <span className="text-label text-foreground-faint">03 &mdash; PROCESS & PRODUCTION MANAGEMENT</span>
              <h2 className="text-display-lg font-serif text-foreground leading-tight tracking-tight mt-4">
                From planning<br/>to dispatch.
              </h2>
            </div>
            
            <p className="text-body-lg text-foreground-muted relative z-10 mt-4">
              Manage inventory, planning, production,<br/>quality and dispatch through one<br/>connected system.
            </p>
            
            <div className="my-8 relative z-10">
              <span className="text-system-xs text-foreground-faint tracking-widest leading-relaxed block">
                INVENTORY &bull; PLANNING &bull; PRODUCTION &bull; QUALITY &bull; DISPATCH
              </span>
            </div>
            
            <div className="relative z-10 flex items-center justify-between">
              <a href="#" className="inline-flex items-center text-system-sm font-semibold text-accent hover:text-accent-hover transition-colors group tracking-widest uppercase">
                Explore possibilities 
                <span className="ml-2 group-hover:translate-x-1 transition-transform">──&gt;</span>
              </a>
            </div>
          </div>
        </div>

        {/* Software UI (Right) */}
        <div className="w-full xl:w-[68%] min-w-0 relative">
          {/* Annotation: Less delay... */}
          <div className="hidden xl:block absolute -top-16 right-20 transform -rotate-3 z-20 flex flex-col items-center">
            <span className="font-annotation text-foreground-faint text-xl relative z-10 text-right block">Less delay.<br/>More control.</span>
            <svg width="32" height="24" viewBox="0 0 32 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="absolute top-12 -left-6 text-foreground-fainter opacity-60">
              <path d="M28 2C28 2 12 8 4 20C4 20 10 18 10 18M4 20C4 20 8 12 8 12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </div>
          
          <ProcessDemo />
          
          {/* Annotation: Keep production moving. */}
          <div className="hidden xl:block absolute -bottom-25 left-1/2 transform -translate-x-1/2 -rotate-3 z-20 flex flex-col items-center">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="absolute -top-6 left-12 text-foreground-fainter opacity-60 transform -scale-y-100">
              <path d="M12 2C12 2 12 18 12 18C12 18 8 14 8 14M12 18C12 18 16 14 16 14" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
            <span className="font-annotation text-foreground-faint text-xl relative z-10 block mt-2">Keep production<br/>moving.</span>
          </div>
        </div>
        
      </div>
    </section>
  )
}
