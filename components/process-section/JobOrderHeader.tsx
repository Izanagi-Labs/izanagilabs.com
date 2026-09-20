import { Badge } from "@/components/ui/badge"
import { Plus } from "lucide-react"

export function JobOrderHeader() {
  return (
    <div className="flex flex-col gap-1 w-full">
      <span className="text-[10px] uppercase tracking-widest font-semibold text-foreground-faint mb-1">Process Management</span>
      <div className="flex items-start justify-between w-full">
        <div className="flex flex-col gap-0.5">
          <div className="flex items-center gap-3">
            <h2 className="text-xl font-semibold text-foreground leading-tight tracking-tight">Job Order #JO-1048</h2>
            <Badge variant="default" className="px-2 py-0.5 text-[10px] bg-emerald-500/10 text-emerald-700 border border-emerald-500/20 shadow-none uppercase tracking-widest font-bold flex items-center gap-1.5 rounded-full">
              <div className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
              IN PRODUCTION
            </Badge>
          </div>
          <p className="text-sm font-medium text-foreground mt-1">Industrial Pump Assembly</p>
          <p className="text-[11px] text-foreground-muted mt-0.5 flex items-center gap-1.5">
            500 units <span className="w-1 h-1 rounded-full bg-border" /> <span className="font-semibold text-foreground">RK Industries</span>
          </p>
        </div>
        
        <div className="flex flex-col items-end gap-3">
          <button className="inline-flex items-center justify-center gap-1.5 px-3 py-1.5 bg-[#E85D38] hover:bg-[#D44A26] text-white text-[11px] font-semibold tracking-wide rounded-md transition-colors shadow-sm">
            <Plus className="w-3.5 h-3.5" />
            New Job Order
          </button>
          <div className="flex items-center gap-6 text-[11px] mt-1 mr-1">
            <div className="flex flex-col items-end gap-1 border-r border-border pr-6">
              <span className="text-system-xs text-foreground-faint">Started</span>
              <span className="font-semibold text-foreground">Sep 18</span>
            </div>
            <div className="flex flex-col items-start gap-1">
              <span className="text-system-xs text-foreground-faint">Target</span>
              <span className="font-semibold text-foreground">Sep 24</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
