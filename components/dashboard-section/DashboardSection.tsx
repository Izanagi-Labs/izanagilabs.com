import { SectionCopy } from "./SectionCopy"
import { DashboardDemo } from "./DashboardDemo"

export function DashboardSection() {
  return (
    <section className="w-full max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 py-24 md:py-32 relative">
      <div className="flex flex-col xl:flex-row gap-12 xl:gap-15 items-start relative z-10">
        <div className="w-full xl:w-[28%] shrink-0 sticky top-24">
          <SectionCopy />
        </div>
        <div className="w-full xl:w-[72%] min-w-0">
          <DashboardDemo />
        </div>
      </div>
      
    </section>
  )
}
