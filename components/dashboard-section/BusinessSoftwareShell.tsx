import { ReactNode } from "react"
import { DashboardSidebar } from "./DashboardSidebar"

interface BusinessSoftwareShellProps {
  children: ReactNode
  activeTab?: 'overview' | 'orders'
}

export function BusinessSoftwareShell({ children, activeTab = 'overview' }: BusinessSoftwareShellProps) {
  return (
    <div className="bg-background border border-border shadow-md rounded-xl flex font-sans relative z-10 h-[680px]">
      <DashboardSidebar activeTab={activeTab} />
      <div className="flex-1 flex flex-col min-w-0 bg-surface">
        <div className="p-4 lg:px-6 lg:py-5 flex-1 flex flex-col">
          {children}
        </div>
      </div>
    </div>
  )
}
