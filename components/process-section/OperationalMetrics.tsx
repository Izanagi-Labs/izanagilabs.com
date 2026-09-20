import { FileText, Settings, CheckCircle2, XCircle, Truck, Package, Database } from "lucide-react"
import { DateRange } from "../dashboard-section/data"

interface MetricProps {
  dateRange?: DateRange
}

export function TodayMetrics({ dateRange = "30d" }: MetricProps) {
  const m = dateRange === "7d" ? 0.3 : dateRange === "90d" ? 2.5 : 1

  return (
    <div className="bg-white border border-border rounded-lg shadow-sm p-3 h-full flex flex-col">
      <span className="text-[10px] uppercase tracking-widest font-semibold text-foreground-faint mb-3 block px-1">Today</span>
      <div className="grid grid-cols-2 gap-3 flex-1">
        <div className="bg-white border border-border/50 rounded-lg p-3 flex flex-col justify-between">
          <div className="flex items-center justify-between mb-2">
            <span className="text-xs font-medium text-foreground-muted">Planned</span>
            <div className="w-6 h-6 rounded-md bg-orange-50 text-[#E85D38] flex items-center justify-center shrink-0">
              <FileText className="w-3.5 h-3.5" />
            </div>
          </div>
          <span className="font-semibold text-xl text-foreground tracking-tight">{Math.round(120 * m)}</span>
        </div>
        <div className="bg-white border border-border/50 rounded-lg p-3 flex flex-col justify-between">
          <div className="flex items-center justify-between mb-2">  
            <span className="text-xs font-medium text-foreground-muted">Produced</span>
            <div className="w-6 h-6 rounded-md bg-emerald-50 text-emerald-600 flex items-center justify-center shrink-0">
              <Settings className="w-3.5 h-3.5" />
            </div>
          </div>
          <span className="font-semibold text-xl text-foreground tracking-tight">{Math.round(104 * m)}</span>
        </div>
        <div className="bg-white border border-border/50 rounded-lg p-3 flex flex-col justify-between">
          <div className="flex items-center justify-between mb-2">
            <span className="text-xs font-medium text-foreground-muted">Passed QC</span>
            <div className="w-6 h-6 rounded-md bg-emerald-50 text-emerald-600 flex items-center justify-center shrink-0">
              <CheckCircle2 className="w-3.5 h-3.5" />
            </div>
          </div>
          <span className="font-semibold text-xl text-foreground tracking-tight">{Math.round(96 * m)}</span>
        </div>
        <div className="bg-white border border-border/50 rounded-lg p-3 flex flex-col justify-between">
          <div className="flex items-center justify-between mb-2">
            <span className="text-xs font-medium text-foreground-muted">Rejected</span>
            <div className="w-6 h-6 rounded-md bg-red-50 text-red-500 flex items-center justify-center shrink-0">
              <XCircle className="w-3.5 h-3.5" />
            </div>
          </div>
          <span className="font-semibold text-xl text-foreground tracking-tight">{Math.round(8 * m)}</span>
        </div>
      </div>
    </div>
  )
}

export function InventoryMetrics({ dateRange = "30d" }: MetricProps) {
  const m = dateRange === "7d" ? 0.8 : dateRange === "90d" ? 3.5 : 1

  return (
    <div className="bg-white border border-border rounded-lg shadow-sm p-3 h-full flex flex-col">
      <span className="text-[10px] uppercase tracking-widest font-semibold text-foreground-faint mb-3 block">Inventory</span>
      <div className="flex flex-col gap-4">
        <div className="grid grid-cols-[auto_1fr_auto_auto] gap-x-3 items-center text-xs">
          <Package className="w-4 h-4 text-foreground shrink-0" />
          <span className="text-foreground-muted whitespace-nowrap font-medium">Raw Material A</span>
          <span className="font-medium text-foreground text-right whitespace-nowrap">{Math.round(640 * m)} units</span>
          <span className="w-10 text-center text-[10px] font-bold text-emerald-600 bg-emerald-50 px-1 py-0.5 rounded">OK</span>
        </div>
        <div className="grid grid-cols-[auto_1fr_auto_auto] gap-x-3 items-center text-xs">
          <Database className="w-4 h-4 text-foreground shrink-0" />
          <span className="text-foreground-muted whitespace-nowrap font-medium">Component B</span>
          <span className="font-medium text-foreground text-right whitespace-nowrap">{Math.round(520 * m)} units</span>
          <span className="w-10 text-center text-[10px] font-bold text-emerald-600 bg-emerald-50 px-1 py-0.5 rounded">OK</span>
        </div>
        <div className="grid grid-cols-[auto_1fr_auto_auto] gap-x-3 items-center text-xs">
          <Package className="w-4 h-4 text-foreground shrink-0" />
          <span className="text-foreground-muted whitespace-nowrap font-medium">Packaging</span>
          <span className="font-medium text-foreground text-right whitespace-nowrap">{Math.round(84 * m)} units</span>
          <span className="w-10 text-center text-[10px] font-bold text-[#E85D38] bg-orange-50 px-1 py-0.5 rounded">LOW</span>
        </div>
        <div className="grid grid-cols-[auto_1fr_auto_auto] gap-x-3 items-center text-xs">
          <Package className="w-4 h-4 text-foreground shrink-0" />
          <span className="text-foreground-muted whitespace-nowrap font-medium">Finished Goods</span>
          <span className="font-medium text-foreground text-right whitespace-nowrap">{Math.round(140 * m)} units</span>
          <span className="w-10 text-center text-[10px] font-bold text-emerald-600 bg-emerald-50 px-1 py-0.5 rounded">OK</span>
        </div>
      </div>
    </div>
  )
}

export function QualityMetrics({ dateRange = "30d" }: MetricProps) {
  const m = dateRange === "7d" ? 0.3 : dateRange === "90d" ? 2.5 : 1

  return (
    <div className="bg-white border border-border rounded-lg shadow-sm p-3 h-full flex flex-col">
      <span className="text-[10px] uppercase tracking-widest font-semibold text-foreground-faint mb-3 block">Quality</span>
      <div className="flex flex-col gap-2.5">
        <div className="flex justify-between items-center text-[11px]">
          <span className="text-foreground-muted font-medium">Inspected</span>
          <span className="font-semibold text-base text-foreground leading-none">{Math.round(104 * m)}</span>
        </div>
        <div className="flex justify-between items-center text-[11px]">
          <span className="text-foreground-muted font-medium">Passed</span>
          <span className="font-semibold text-base text-foreground leading-none">{Math.round(96 * m)}</span>
        </div>
        <div className="flex justify-between items-center text-[11px]">
          <span className="text-foreground-muted font-medium">Rejected</span>
          <span className="font-semibold text-base text-foreground leading-none">{Math.round(8 * m)}</span>
        </div>
        <div className="flex justify-between items-end text-xs mt-1 pt-2 border-t border-border">
          <span className="font-medium text-foreground">Pass Rate</span>
          <span className="font-semibold text-xl text-foreground leading-none">{dateRange === "7d" ? "94.2%" : dateRange === "90d" ? "91.5%" : "92.3%"}</span>
        </div>
      </div>
    </div>
  )
}

export function DispatchMetrics({ dateRange = "30d" }: MetricProps) {
  const units = dateRange === "7d" ? 12 : dateRange === "90d" ? 145 : 40

  return (
    <div className="bg-white border border-border rounded-lg shadow-sm p-3 h-full flex flex-col justify-between relative overflow-hidden">
      <div className="flex flex-col h-full">
        <span className="text-[10px] uppercase tracking-widest font-semibold text-foreground-faint mb-2 block">Dispatch</span>
        <div className="flex flex-col items-center justify-center flex-1 gap-1 text-center mt-1">
          <div className="w-10 h-10 rounded bg-surface border border-border flex items-center justify-center shrink-0 mb-1">
            <Truck className="w-5 h-5 text-foreground-muted" />
          </div>
          <span className="text-[13px] font-semibold text-foreground leading-tight">{units} units ready</span>
          <span className="text-[9px] text-foreground-muted mt-0.5 leading-relaxed px-2">Awaiting final QC clearance.</span>
        </div>
      </div>
    </div>
  )
}

export function OperationalMetrics() {
  return null // Removed original wrapper, using individual components
}
