"use client"

import { useState } from "react"
import { BusinessSoftwareShell } from "../dashboard-section/BusinessSoftwareShell"
import { DashboardHeader } from "../dashboard-section/DashboardHeader"
import { ProcessWorkspace } from "./ProcessWorkspace"
import { DateRange } from "../dashboard-section/data"

export function ProcessDemo() {
  const [dateRange, setDateRange] = useState<DateRange>("30d")

  return (
    <div className="relative">
      <BusinessSoftwareShell activeTab="process" compactSidebar flexibleHeight>
        <DashboardHeader 
          dateRange={dateRange}
          setDateRange={setDateRange}
          searchPlaceholder="Search job orders, materials, or production..."
        />
        <div className="flex flex-col flex-1 h-full min-h-0">
          <ProcessWorkspace dateRange={dateRange} />
        </div>
      </BusinessSoftwareShell>
    </div>
  )
}
