import { CRMDemo } from "./CRMDemo"

export function BusinessManagementSection() {
  return (
    <section className="w-full max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 py-24 md:py-32 relative">
      <div className="flex flex-col-reverse xl:flex-row gap-12 xl:gap-20 items-start relative z-10">
        <div className="w-full xl:w-[68%] min-w-0 relative">
          {/* Annotation: From enquiry to payment... */}
          <div className="hidden xl:block absolute -top-20 left-20 transform -rotate-6 z-20">
            <span className="font-annotation text-foreground-faint text-xl relative z-10">From enquiry<br/>to payment...</span>
            <svg width="60" height="60" viewBox="0 0 60 60" fill="none" className="absolute top-14 left-10 text-foreground-faint -z-10">
              <path d="M10 5 Q 30 5 45 35" stroke="currentColor" strokeWidth="1" fill="none" />
              <path d="M35 33 L 45 35 L 41 22" stroke="currentColor" strokeWidth="1" fill="none" />
            </svg>
          </div>
          <CRMDemo />
        </div>
        <div className="w-full xl:w-[32%] shrink-0 sticky top-24 pt-4 pb-10">
          <div className="flex flex-col gap-4 w-full relative h-full xl:pl-4">
            
            {/* Annotation: Less admin. More business. */}
            <div className="hidden xl:block absolute -top-12 right-0 transform rotate-3">
              <span className="font-annotation text-foreground-faint text-xl">Less admin.<br/>More business.</span>
              <svg width="60" height="60" viewBox="0 0 60 60" fill="none" className="absolute top-4 -left-10 text-foreground-faint">
                <path d="M50 10 Q 30 10 10 30" stroke="currentColor" strokeWidth="1" fill="none" />
                <path d="M10 20 L 10 30 L 20 30" stroke="currentColor" strokeWidth="1" fill="none" />
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
            
            {/* Annotation: ...keep your business moving forward. */}
            <div className="hidden xl:block absolute -bottom-60 -left-140 transform -rotate-3">
              <svg width="60" height="60" viewBox="0 0 60 60" fill="none" className="absolute -top-12 left-0 text-foreground-faint">
                <path d="M40 50 Q 20 50 10 10" stroke="currentColor" strokeWidth="1" fill="none" />
                <path d="M10 20 L 10 10 L 20 10" stroke="currentColor" strokeWidth="1" fill="none" />
              </svg>
              <span className="font-annotation text-foreground-faint text-xl whitespace-nowrap ml-6">...keep your business<br/>moving forward.</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
