import { JobOrderHeader } from "./JobOrderHeader"
import { ProcessStages } from "./ProcessStages"
import { ProductionProgress } from "./ProductionProgress"
import { TodayMetrics, InventoryMetrics, QualityMetrics, DispatchMetrics } from "./OperationalMetrics"
import { DateRange } from "../dashboard-section/data"

interface ProcessWorkspaceProps {
  dateRange?: DateRange
}

export function ProcessWorkspace({ dateRange = "30d" }: ProcessWorkspaceProps) {
  return (
    <div className="flex flex-col h-full w-full min-h-0 text-sm overflow-hidden">
      {/* Top Section: Header & Timeline */}
      <div className="flex flex-col shrink-0 px-1 pt-1">
        <JobOrderHeader />
        <div className="border-t border-b border-border mt-3 py-3 w-full">
          <ProcessStages />
        </div>
      </div>

      {/* Bottom Section: Cards Grid */}
      <div className="flex-1 overflow-y-auto mt-3 px-1 pb-2">
        <div className="flex flex-col gap-3">
          {/* Row 1 */}
          <div className="flex flex-col lg:flex-row items-stretch gap-3">
            <div className="lg:w-[60%] flex flex-col min-w-0">
              <ProductionProgress dateRange={dateRange} />
            </div>
            <div className="lg:w-[40%] flex flex-col min-w-0">
              <TodayMetrics dateRange={dateRange} />
            </div>
          </div>
          {/* Row 2 */}
          <div className="flex flex-col lg:flex-row items-stretch gap-3">
            <div className="lg:w-[48%] flex flex-col min-w-0">
              <InventoryMetrics dateRange={dateRange} />
            </div>
            <div className="lg:w-[32%] flex flex-col min-w-0">
              <QualityMetrics dateRange={dateRange} />
            </div>
            <div className="lg:w-[20%] flex flex-col min-w-0">
              <DispatchMetrics dateRange={dateRange} />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
