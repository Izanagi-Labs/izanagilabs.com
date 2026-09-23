import { Users, Clock, FileText, CheckCircle2 } from "lucide-react"
import { DateRange } from "../dashboard-section/data"
import { AnimatedValue } from "../dashboard-section/AnimatedValue"

interface CRMSummaryStatsProps {
  dateRange?: DateRange
}

export function CRMSummaryStats({ dateRange = "30d" }: CRMSummaryStatsProps) {
  const multiplier = dateRange === "7d" ? 0.3 : dateRange === "90d" ? 2.8 : 1
  
  const stats = [
    { label: "New Enquiries", value: Math.round(24 * multiplier).toString(), icon: Users, color: "text-accent", bg: "bg-accent-soft" },
    { label: "Follow-ups", value: Math.round(8 * multiplier).toString(), icon: Clock, color: "text-accent", bg: "bg-accent-soft" },
    { label: "Quotations", value: Math.round(11 * multiplier).toString(), icon: FileText, color: "text-accent", bg: "bg-accent-soft" },
    { label: "Confirmed", value: Math.round(6 * multiplier).toString(), icon: CheckCircle2, color: "text-success", bg: "bg-success/10" },
  ]

  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-2 mb-3">
      {stats.map((stat) => {
        const Icon = stat.icon
        return (
          <div key={stat.label} className="bg-surface-raised border border-border rounded-lg p-2.5 flex flex-col justify-between shadow-sm group transition-all duration-200 hover:-translate-y-0.5 hover:shadow-md hover:border-border-subtle">
            <div className="flex justify-between items-start mb-1.5">
              <span className="text-[11px] font-medium text-foreground-muted">{stat.label}</span>
              <div className={`w-6 h-6 rounded flex items-center justify-center ${stat.bg}`}>
                <Icon className={`w-3.5 h-3.5 ${stat.color}`} />
              </div>
            </div>
            <span className="text-base font-semibold text-foreground tracking-tight">
              <AnimatedValue value={stat.value} />
            </span>
          </div>
        )
      })}
    </div>
  )
}
