import { BusinessSoftwareShell } from "../dashboard-section/BusinessSoftwareShell"
import { DashboardHeader } from "../dashboard-section/DashboardHeader"
import { CRMHeader } from "./CRMHeader"
import { CRMSummaryStats } from "./CRMSummaryStats"
import { CustomerWorkspace } from "./CustomerWorkspace"

export function CRMDemo() {
  return (
    <BusinessSoftwareShell activeTab="crm" compactSidebar flexibleHeight={false}>
      <DashboardHeader 
        dateRange="30d" 
        searchPlaceholder="Search customers or enquiries..."
      />
      <div className="flex flex-col flex-1 h-full min-h-0">
        <CRMHeader />
        <CRMSummaryStats />
        <CustomerWorkspace />
      </div>
    </BusinessSoftwareShell>
  )
}
