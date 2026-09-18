import { ReactNode } from "react"
import { DashboardSidebar, SidebarTab } from "./DashboardSidebar"

interface BusinessSoftwareShellProps {
  children: ReactNode
  activeTab?: SidebarTab
  compactSidebar?: boolean
  flexibleHeight?: boolean
}

export function BusinessSoftwareShell({ 
  children, 
  activeTab = 'overview', 
  compactSidebar = false,
  flexibleHeight = false
}: BusinessSoftwareShellProps) {
  const heightClass = flexibleHeight ? "min-h-[680px] h-auto" : "h-[700px]"
  return (
    <div className={`bg-background border border-border shadow-md rounded-xl flex font-sans relative z-10 ${heightClass}`}>
      <DashboardSidebar activeTab={activeTab} compact={compactSidebar} />
      <div className="flex-1 flex flex-col min-w-0 bg-surface">
        <div className="p-4 lg:px-6 lg:py-5 flex-1 flex flex-col">
          {children}
        </div>
      </div>
    </div>
  )
}
