"use client"

import { useState } from "react"
import dynamic from "next/dynamic"
import { BusinessSoftwareShell } from "./BusinessSoftwareShell"
import { DashboardHeader } from "./DashboardHeader"
import { KpiGrid } from "./KpiGrid"
import { RecentOrders } from "./RecentOrders"
import { TopProducts } from "./TopProducts"
import { DateRange, getKpiData, getRevenueData, getOrderStatus, getRecentOrders, getTopProducts } from "./data"

// Lazy load Recharts wrappers to keep initial bundle small
const RevenueChart = dynamic(() => import("./RevenueChart"), { 
  ssr: false, 
  loading: () => <div className="h-[140px] w-full mt-2 bg-surface/50 rounded-md animate-pulse" /> 
})

const OrderStatus = dynamic(() => import("./OrderStatus"), { 
  ssr: false, 
  loading: () => <div className="h-[140px] w-full bg-surface/50 rounded-full animate-pulse" /> 
})

export function DashboardDemo() {
  const [dateRange, setDateRange] = useState<DateRange>("30d")

  const kpiData = getKpiData(dateRange)
  const revenueData = getRevenueData(dateRange)
  const orderStatusData = getOrderStatus(dateRange)
  const recentOrdersData = getRecentOrders(dateRange)
  const topProductsData = getTopProducts(dateRange)

  return (
    <div className="relative">
      {/* Decorative Handwritten Annotations */}
      <div className="absolute -top-12 left-1/3 -rotate-6 text-foreground-faint text-xl z-20 pointer-events-none hidden lg:flex flex-col items-center gap-1" style={{ fontFamily: 'var(--font-annotation)' }}>
        <span>Turn data into decisions...</span>
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="text-foreground-fainter opacity-60">
          <path d="M12 2C12 2 12 18 12 18C12 18 8 14 8 14M12 18C12 18 16 14 16 14" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      </div>
      
      <div className="absolute -top-10 -right-6 rotate-6 text-foreground-faint text-xl z-20 pointer-events-none hidden lg:flex flex-col items-end gap-1" style={{ fontFamily: 'var(--font-annotation)' }}>
        <span>Real insights. Real progress.</span>
        <svg width="32" height="24" viewBox="0 0 32 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="text-foreground-fainter opacity-60 mr-4">
          <path d="M28 2C28 2 12 8 4 20C4 20 10 18 10 18M4 20C4 20 8 12 8 12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      </div>
      
      <div className="absolute -bottom-10 -left-8 -rotate-6 text-foreground-faint text-xl z-20 pointer-events-none hidden lg:flex flex-col items-start gap-1" style={{ fontFamily: 'var(--font-annotation)' }}>
        <svg width="32" height="24" viewBox="0 0 32 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="text-foreground-fainter opacity-60 ml-4">
          <path d="M4 22C4 22 18 14 28 4C28 4 22 6 22 6M28 4C28 4 24 12 24 12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
        <span>...a clearer view of what's next.</span>
      </div>

      <BusinessSoftwareShell activeTab="overview" flexibleHeight>
        <DashboardHeader dateRange={dateRange} setDateRange={setDateRange} />
        

        <div className="flex flex-col flex-1">
          <KpiGrid data={kpiData} />
          
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-4 mb-4 flex-1">
            <div className="lg:col-span-3 bg-surface-raised border border-border rounded-lg shadow-sm p-3">
              <div className="flex justify-between items-center mb-1">
                <h3 className="text-body-sm font-semibold text-foreground">Revenue</h3>
                <button className="text-xs text-foreground-faint hover:text-foreground transition-colors flex items-center">
                  {dateRange === "7d" ? "Last 7 days" : dateRange === "30d" ? "Last 30 days" : "Last 90 days"}
                  <span className="ml-1 text-[8px]">∨</span>
                </button>
              </div>
              <RevenueChart data={revenueData} />
            </div>
            <div className="lg:col-span-2 bg-surface-raised border border-border rounded-lg shadow-sm p-3 flex flex-col">
              <h3 className="text-body-sm font-semibold text-foreground mb-2">Order Status</h3>
              <div className="flex-1 flex items-center justify-center">
                <OrderStatus data={orderStatusData} />
              </div>
            </div>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-4">
            <div className="lg:col-span-3">
              <RecentOrders data={recentOrdersData} />
            </div>
            <div className="lg:col-span-2">
              <TopProducts data={topProductsData} dateRange={dateRange} />
            </div>
          </div>
        </div>
      </BusinessSoftwareShell>
    </div>
  )
}
