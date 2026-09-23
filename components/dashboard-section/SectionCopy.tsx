

export function SectionCopy() {
  return (
    <div className="flex flex-col gap-4 lg:max-w-md w-full relative h-full pt-4 pb-10">
      <div className="flex flex-col gap-2 relative z-10">
        <span className="text-label text-[#707070]">01 &mdash; DASHBOARDS & INTERNAL TOOLS</span>
        <h2 className="text-display-lg font-serif text-foreground leading-tight tracking-tight mt-4">
          See your business clearly.
        </h2>
      </div>
      
      <p className="text-body-lg text-foreground-muted relative z-10 leading-relaxed">
        We build custom dashboards and internal business tools that turn your data into actionable analytics and insights.
      </p>
      
      <div className="my-6 relative z-10">
        <span className="text-system-xs text-[#707070] tracking-widest leading-relaxed block max-w-xs">
          DASHBOARDS • ANALYTICS • VISUALIZATION • INTERNAL TOOLS
        </span>
      </div>
      
      <div className="relative z-10">
        <a href="#contact" className="inline-flex items-center text-system-sm font-semibold text-[#A94A29] hover:text-[#A94A29]-hover transition-colors group tracking-widest uppercase">
          Explore possibilities 
          <span className="ml-2">──&gt;</span>
        </a>
      </div>
    </div>
  )
}
