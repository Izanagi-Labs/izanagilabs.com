import { MarketingToolbar } from "./MarketingToolbar"
import { MarketingKPIs } from "./MarketingKPIs"
import { CampaignTable } from "./CampaignTable"
import dynamic from "next/dynamic"

const SpendRevenueChart = dynamic(
  () => import("./SpendRevenueChart").then((mod) => mod.SpendRevenueChart),
  { 
    loading: () => <div className="w-full h-[240px] bg-background/50 rounded animate-pulse mt-4" />
  }
)
import { Lightbulb, TrendingUp, TrendingDown } from "lucide-react"

function OptimizationOpportunity() {
  return (
    <div className="flex flex-col p-3 sm:p-4 border border-border rounded-xl bg-surface-raised shadow-sm">
      <div className="flex items-center mb-2">
        <span className="text-[10px] uppercase tracking-widest text-foreground-faint font-semibold font-mono">
          OPTIMIZATION OPPORTUNITY
        </span>
      </div>
      <div className="flex gap-2.5 sm:gap-3 items-start">
        <div className="w-7 h-7 sm:w-8 sm:h-8 rounded-lg flex items-center justify-center bg-accent-soft text-accent shrink-0">
          <Lightbulb className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
        </div>
        <div className="flex flex-col gap-1">
          <span className="text-body-sm font-semibold text-foreground leading-tight">
            High Intent is outperforming.
          </span>
          <span className="text-[10px] text-foreground-secondary font-medium mt-0.5">
            Suggested budget shift: <span className="text-accent font-semibold ml-1">+₹25K</span>
          </span>
        </div>
      </div>
    </div>
  )
}

export function MarketingDashboard() {
  return (
    <div className="w-full h-auto xl:h-[620px] bg-surface rounded-[16px] border border-border-subtle shadow-[0_2px_10px_rgba(0,0,0,0.02)] flex flex-col overflow-hidden relative">
      <MarketingToolbar />
      
      <div className="flex flex-col flex-1 p-4 sm:p-5 lg:p-6">
        
        {/* Dashboard Heading */}
        <div className="flex flex-col gap-0.5 sm:gap-1 mb-4 sm:mb-5">
          
          <h3 className="text-heading-md font-semibold text-foreground tracking-tight mt-0.5">
            Campaign Performance
          </h3>
          <p className="text-body-sm text-foreground-muted mt-0">
            Track spend, conversions and return across channels.
          </p>
        </div>
        
        {/* Internal Layout Foundation (Reserved for Phases 3-5) */}
        {/* This container will establish the flex layout for future content */}
        <div className="flex-1 flex flex-col gap-4 sm:gap-5 w-full overflow-hidden">
          {/* Top row (KPIs) */}
          <MarketingKPIs />
          
          {/* Main content split (Table & Insights) */}
          <div className="flex-1 flex flex-col lg:flex-row gap-4 sm:gap-5 min-h-0">
            {/* Left: Campaign Table (~65%) */}
            <div className="w-full lg:w-[65%] shrink-0 h-full">
              <CampaignTable />
            </div>
            
            {/* Right: Analytics Column (~35%) */}
            <div className="w-full lg:flex-1 flex flex-col gap-2 sm:gap-3">
              <OptimizationOpportunity />
              
              {/* Phase 5: Chart & Metrics */}
              <SpendRevenueChart />
              
              <div className="flex border border-border rounded-xl bg-surface-raised shadow-sm shrink-0 p-2.5 sm:p-3">
                <div className="flex-1 flex justify-between items-center px-1 sm:px-2 gap-2">
                  <span className="text-xs sm:text-[13px] font-semibold text-foreground truncate">Conversions</span>
                  <span className="flex items-center gap-1 text-[11px] sm:text-xs font-semibold text-emerald-600 whitespace-nowrap">
                    <TrendingUp className="w-3.5 h-3.5" /> 32%
                  </span>
                </div>
                <div className="w-px bg-border-subtle my-0.5 mx-1"></div>
                <div className="flex-1 flex justify-between items-center px-1 sm:px-2 gap-2">
                  <span className="text-xs sm:text-[13px] font-semibold text-foreground truncate">CPA</span>
                  <span className="flex items-center gap-1 text-[11px] sm:text-xs font-semibold text-emerald-600 whitespace-nowrap">
                    <TrendingDown className="w-3.5 h-3.5" /> 18%
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>

      </div>
    </div>
  )
}
