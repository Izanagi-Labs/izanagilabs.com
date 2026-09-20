import { DateRange } from "../dashboard-section/data"

interface ProductionProgressProps {
  dateRange?: DateRange
}

export function ProductionProgress({ dateRange = "30d" }: ProductionProgressProps) {
  const completed = dateRange === "7d" ? 120 : dateRange === "90d" ? 890 : 340
  const total = dateRange === "7d" ? 180 : dateRange === "90d" ? 1200 : 500
  const percent = Math.round((completed / total) * 100)

  return (
    <div className="bg-surface-raised border border-border rounded-lg shadow-sm p-3 flex flex-col h-full justify-between">
      <div>
        <span className="text-[10px] uppercase tracking-widest font-semibold text-foreground-faint mb-4 block">Production Progress</span>
        
        <div className="flex items-end justify-between mb-2">
          <div className="flex items-baseline gap-1.5">
            <span className="text-2xl font-bold text-foreground leading-none">{completed}</span>
            <span className="text-xs text-foreground-muted font-medium">/ {total} units completed</span>
          </div>
          <span className="text-lg font-bold text-accent leading-none">{percent}%</span>
        </div>
        
        <div className="w-full h-3 bg-surface rounded-full overflow-hidden border border-border mt-3 mb-6">
          <div className="h-full bg-accent rounded-full transition-all duration-1000" style={{ width: `${percent}%` }} />
        </div>

        {/* Secondary Metrics */}
        <div className="grid grid-cols-3 gap-1 mb-2">
          <div className="flex flex-col gap-1">
            <span className="text-[10px] uppercase tracking-widest text-foreground-faint font-semibold">Current Rate</span>
            <div className="flex items-baseline gap-1">
              <span className="text-sm font-semibold text-foreground">42</span>
              <span className="text-[10px] text-foreground-muted">units/hr</span>
            </div>
          </div>
          <div className="flex flex-col gap-1">
            <span className="text-[10px] uppercase tracking-widest text-foreground-faint font-semibold">Est. Completion</span>
            <span className="text-sm font-semibold text-foreground">5:30 PM</span>
          </div>
          <div className="flex flex-col gap-1">
            <span className="text-[10px] uppercase tracking-widest text-foreground-faint font-semibold">Active Machine</span>
            <div className="flex items-center gap-1.5">
              <div className="w-1.5 h-1.5 rounded-full bg-emerald-500 shrink-0" />
              <span className="text-sm font-semibold text-foreground truncate">Line A-1</span>
            </div>
          </div>
        </div>
      </div>
      
      <div className="bg-[#FFF4F0] border border-[#FBE6DF] rounded-md p-3 flex items-start gap-3">
        <div className="mt-0.5 text-foreground-faint shrink-0">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <line x1="12" y1="20" x2="12" y2="10" />
            <line x1="18" y1="20" x2="18" y2="4" />
            <line x1="6" y1="20" x2="6" y2="16" />
          </svg>
        </div>
        <div className="flex flex-col">
          <p className="text-xs font-semibold text-foreground">Production is on track.</p>
          <p className="text-[11px] text-foreground-muted mt-0.5 leading-relaxed">
            Maintain current output to meet target date.
          </p>
        </div>
      </div>
    </div>
  )
}
