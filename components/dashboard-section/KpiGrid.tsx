import { BarChart2, ShoppingBag, Clock } from "lucide-react"
import { Sparkline } from "./Sparkline"
import { cn } from "@/lib/utils"

interface KpiData {
  label: string
  value: string
  change: string
  positive: boolean
  sparkline: number[]
  icon: string
  iconColor: string
}

interface KpiGridProps {
  data: KpiData[]
}

export function KpiGrid({ data }: KpiGridProps) {
  const getIcon = (name: string, color: string) => {
    const colorClass = color === "orange" ? "text-accent" : "text-foreground-secondary"
    switch (name) {
      case "barChart": return <BarChart2 className={cn("w-4 h-4", colorClass)} />
      case "users": return <Clock className={cn("w-4 h-4", colorClass)} />
      case "clock": return <Clock className={cn("w-4 h-4", colorClass)} />
      case "bag": return <ShoppingBag className={cn("w-4 h-4", colorClass)} />
      default: return null
    }
  }

  const getBadgeClass = (color: string) => {
    return color === "orange" ? "bg-accent-soft" : "bg-surface"
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-3 mb-4">
      {data.map((item, index) => (
        <div key={index} className="bg-surface-raised border border-border rounded-lg p-3.5 shadow-[0_2px_12px_rgb(0,0,0,0.03)] flex flex-col gap-2 relative overflow-hidden">
          <div className="flex items-center justify-between">
            <span className="text-[10px] uppercase tracking-widest text-foreground-faint font-semibold font-mono">{item.label}</span>
            <div className={cn("w-6 h-6 rounded-md flex items-center justify-center", getBadgeClass(item.iconColor))}>
              {getIcon(item.icon, item.iconColor)}
            </div>
          </div>
          
          <div className="flex items-end justify-between mt-1">
            <div>
              <span className="text-heading-md font-semibold text-foreground tracking-tight">{item.value}</span>
              <div className={cn(
                "text-[10px] font-medium flex items-center gap-1 mt-0.5",
                item.positive ? "text-emerald-600" : "text-accent"
              )}>
                {item.change}
              </div>
            </div>
            <div className="mb-0.5 w-16">
              <Sparkline data={item.sparkline} positive={item.positive} />
            </div>
          </div>
        </div>
      ))}
    </div>
  )
}
