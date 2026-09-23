import { Megaphone, BarChart3, TrendingUp, Users } from "lucide-react"
import { AnimatedValue } from "../dashboard-section/AnimatedValue"

const metrics = [
  {
    label: "Ad Spend",
    value: "₹4.2L",
    icon: Megaphone,
  },
  {
    label: "Conversions",
    value: "1,240",
    icon: BarChart3,
  },
  {
    label: "ROAS",
    value: "4.45×",
    icon: TrendingUp,
  },
  {
    label: "Cost / Conversion",
    value: "₹286",
    icon: Users,
  },
]

export function MarketingKPIs() {
  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4 w-full shrink-0">
      {metrics.map((metric, i) => (
        <div 
          key={i} 
          className="flex flex-col p-2 sm:p-2 border border-border rounded-xl bg-surface-raised relative overflow-hidden shadow-sm transition-all duration-200 hover:-translate-y-0.5 hover:shadow-md hover:border-border-subtle group"
        >
          <div className="flex justify-between items-start mb-1.5 sm:mb-2">
            <span className="text-[10px] uppercase tracking-widest text-foreground-faint font-semibold font-mono">
              {metric.label}
            </span>
            <div className="w-5 h-5 sm:w-6 sm:h-6 rounded-md flex items-center justify-center bg-accent-soft text-accent shrink-0 ml-2">
              <metric.icon className="w-3 h-3 sm:w-3.5 sm:h-3.5" />
            </div>
          </div>
          
          <span className="text-heading-md font-semibold text-foreground tracking-tight">
            <AnimatedValue value={metric.value} />
          </span>
        </div>
      ))}
    </div>
  )
}
