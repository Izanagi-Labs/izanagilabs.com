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
      <div className="absolute -top-12 left-1/3 -rotate-6 z-20 pointer-events-none hidden lg:flex flex-col items-center gap-1">
        <span className="font-annotation text-foreground-muted text-[22px] leading-tight block">Turn data into decisions...</span>
        <svg width="40" height="40" viewBox="0 0 40 40" fill="none" className="text-foreground-fainter opacity-60">
          <path d="M 20 4 C 20 4 20 36 20 36 C 20 36 12 28 12 28 M 20 36 C 20 36 28 28 28 28" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" fill="none"/>
        </svg>
      </div>
      
      <div className="absolute -top-10 -right-6 rotate-6 z-20 pointer-events-none hidden lg:flex flex-col items-end gap-1">
        <span className="font-annotation text-foreground-muted text-[22px] leading-tight block text-right">Real insights. Real progress.</span>
        <svg width="40" height="40" viewBox="0 0 40 40" fill="none" className="text-foreground-fainter opacity-60 mr-4">
          <path d="M36 4C36 4 20 6 10 20C10 20 18 20 18 20M10 20C10 20 10 12 10 12" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" fill="none"/>
        </svg>
      </div>
      
      <div className="absolute -bottom-10 -left-8 -rotate-6 z-20 pointer-events-none hidden lg:flex flex-col items-start gap-1">
        <svg width="40" height="40" viewBox="0 0 40 40" fill="none" className="text-foreground-fainter opacity-60 ml-4">
          <path d="M4 36C4 36 20 34 30 20C30 20 22 20 22 20M30 20C30 20 30 28 30 28" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" fill="none"/>
        </svg>
        <span className="font-annotation text-foreground-muted text-[22px] leading-tight block">...a clearer view of what&apos;s next.</span>
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
