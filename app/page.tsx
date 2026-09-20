import { Hero } from "@/components/hero/Hero"
import { DashboardSection } from "@/components/dashboard-section/DashboardSection"
import { BusinessManagementSection } from "@/components/software-section/BusinessManagementSection"
import { ProcessSection } from "@/components/process-section/ProcessSection"
import { PerformanceMarketingSection } from "@/components/performance-marketing-section/PerformanceMarketingSection"

import { AISEOSection } from "@/components/ai-seo-section/AISEOSection"
import { WebsiteDevelopmentSection } from "@/components/website-development-section/WebsiteDevelopmentSection"

export default function Home() {
  return (
    <main>
      <Hero />
      <DashboardSection />
      <BusinessManagementSection />
      <ProcessSection />
      <WebsiteDevelopmentSection />
      <AISEOSection />
      <PerformanceMarketingSection />
    </main>
  )
}
