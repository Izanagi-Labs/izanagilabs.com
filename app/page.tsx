import { Hero } from "@/components/hero/Hero"
import { DashboardSection } from "@/components/dashboard-section/DashboardSection"
import { BusinessManagementSection } from "@/components/software-section/BusinessManagementSection"

export default function Home() {
  return (
    <main>
      <Hero />
      <DashboardSection />
      <BusinessManagementSection />
    </main>
  )
}
