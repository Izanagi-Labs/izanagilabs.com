import { CRMDemo } from "./CRMDemo"

export function BusinessManagementSection() {
  return (
    <section className="w-full max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 py-24 md:py-32 relative">
      <div className="flex flex-col-reverse lg:flex-row gap-12 lg:gap-16 xl:gap-24 items-center relative z-10">
        <div className="w-full lg:w-[60%] xl:w-[65%] min-w-0 relative">
          {/* Annotation: From enquiry to payment... */}
          <div className="hidden xl:flex absolute -top-20 left-20 transform -rotate-6 z-20 flex-col items-center pointer-events-none" aria-hidden="true">
            <span className="font-annotation text-foreground-muted text-[22px] leading-tight relative z-10 block pr-8">From enquiry<br/>to payment...</span>
            <svg width="40" height="40" viewBox="0 0 40 40" fill="none" className="text-foreground-fainter opacity-60 mt-1 ml-16">
              <path d="M4 4C4 4 20 6 30 20C30 20 22 20 22 20M30 20C30 20 30 12 30 12" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" fill="none"/>
            </svg>
          </div>
          <CRMDemo />
          
          {/* Annotation: ...keep your business moving forward. */}
          <div className="hidden xl:flex absolute -bottom-24 left-32 transform -rotate-3 z-20 flex-col items-center pointer-events-none" aria-hidden="true">
            <svg width="40" height="40" viewBox="0 0 40 40" fill="none" className="text-foreground-fainter opacity-60 mb-2 ml-16">
              <path d="M4 36C4 36 20 34 30 20C30 20 22 20 22 20M30 20C30 20 30 28 30 28" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" fill="none"/>
            </svg>
            <span className="font-annotation text-foreground-muted text-[22px] leading-tight relative z-10 block pl-8">...keep your business<br/>moving forward.</span>
          </div>
        </div>
        <div className="w-full lg:w-[40%] xl:w-[35%] shrink-0">
          <div className="flex flex-col gap-4 w-full relative max-w-[480px] lg:pl-4 xl:pl-8">
            
            {/* Annotation: Less admin. More business. */}
            <div className="hidden xl:flex absolute -top-12 right-0 transform rotate-3 flex-col items-center pointer-events-none" aria-hidden="true">
              <span className="font-annotation text-foreground-muted text-[22px] leading-tight block text-right pl-12">Less admin.<br/>More business.</span>
              <svg width="40" height="40" viewBox="0 0 40 40" fill="none" className="text-foreground-fainter opacity-60 mt-1 mr-24">
                <path d="M36 4C36 4 20 6 10 20C10 20 18 20 18 20M10 20C10 20 10 12 10 12" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" fill="none"/>
              </svg>
            </div>

            <div className="flex flex-col gap-2 relative z-10">
              <span className="text-label text-foreground-faint">02 &mdash; BUSINESS MANAGEMENT SOFTWARE</span>
              <h2 className="text-display-lg font-serif text-foreground leading-tight tracking-tight mt-4">
                One system.<br/>Your entire business.
              </h2>
            </div>
            
            <p className="text-body-lg text-foreground-muted relative z-10 mt-4">
              Manage customers, enquiries, quotations, follow-ups, jobs, invoices and payments without jumping between tools.
            </p>
            
            <div className="my-8 relative z-10">
              <span className="text-system-xs text-foreground-faint tracking-widest leading-relaxed block">
                CRM &bull; ENQUIRIES &bull; QUOTATIONS &bull; JOBS &bull; BILLING
              </span>
            </div>
            
            <div className="relative z-10 flex items-center justify-between">
              <a href="#" className="inline-flex items-center text-system-sm font-semibold text-accent hover:text-accent-hover transition-colors group tracking-widest uppercase">
                Explore possibilities 
                <span className="ml-2">──&gt;</span>
              </a>

              {/* Annotation: FROM OPPORTUNITIES TO OUTCOMES. */}
              <span className="hidden sm:block text-system-2xs text-foreground-fainter tracking-[0.2em] ml-auto mr-4">
                FROM OPPORTUNITIES<br/>TO OUTCOMES.
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
