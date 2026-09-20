"use client"

import { useState } from "react"
import { BusinessSoftwareShell } from "../dashboard-section/BusinessSoftwareShell"
import { DashboardHeader } from "../dashboard-section/DashboardHeader"
import { CRMHeader } from "./CRMHeader"
import { CRMSummaryStats } from "./CRMSummaryStats"
import { CustomerWorkspace } from "./CustomerWorkspace"
import { DateRange } from "../dashboard-section/data"

export function CRMDemo() {
  const [dateRange, setDateRange] = useState<DateRange>("30d")

  return (
    <BusinessSoftwareShell activeTab="crm" compactSidebar flexibleHeight={false}>
      <DashboardHeader 
        dateRange={dateRange} 
        setDateRange={setDateRange}
        searchPlaceholder="Search customers or enquiries..."
      />
      <div className="flex flex-col flex-1 h-full min-h-0">
        <CRMHeader />
        <CRMSummaryStats dateRange={dateRange} />
        <CustomerWorkspace />
      </div>
    </BusinessSoftwareShell>
  )
}
