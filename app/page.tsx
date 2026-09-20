import { Hero } from "@/components/hero/Hero"
import { DashboardSection } from "@/components/dashboard-section/DashboardSection"
import { BusinessManagementSection } from "@/components/software-section/BusinessManagementSection"
import { ProcessSection } from "@/components/process-section/ProcessSection"
import { PerformanceMarketingSection } from "@/components/performance-marketing-section/PerformanceMarketingSection"
import { WhyIzanagiSection } from "@/components/why-izanagi-section/WhyIzanagiSection"
import { ContactSection } from "@/components/contact-section/ContactSection"

import { AISEOSection } from "@/components/ai-seo-section/AISEOSection"
import { WebsiteDevelopmentSection } from "@/components/website-development-section/WebsiteDevelopmentSection"
import type { Metadata } from "next"

export const metadata: Metadata = {
  alternates: {
    canonical: "/",
  },
}

export default function Home() {
  return (
    <main id="main-content">
      <Hero />
      <DashboardSection />
      <BusinessManagementSection />
      <ProcessSection />
      <WebsiteDevelopmentSection />
      <AISEOSection />
      <PerformanceMarketingSection />
      <WhyIzanagiSection />
      <ContactSection />
    </main>
  )
}
