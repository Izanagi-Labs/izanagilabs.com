import { Search, User } from "lucide-react"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { DateRange } from "./data"

interface DashboardHeaderProps {
  dateRange: DateRange
  setDateRange: (val: DateRange) => void
  searchPlaceholder?: string
}

export function DashboardHeader({ dateRange, setDateRange, searchPlaceholder = "Search..." }: DashboardHeaderProps) {
  return (
    <div className="flex flex-col md:flex-row md:items-center justify-between gap-3 pb-3 mb-4 border-b border-border">
      {/* Left side: Search */}
      <div className={`hidden md:flex items-center text-foreground-faint bg-surface border border-border px-2 py-1 rounded-md w-full ${searchPlaceholder.length > 15 ? 'max-w-[320px]' : 'max-w-[240px]'}`}>
        <Search className="w-3.5 h-3.5 mr-2 shrink-0" />
        <span className="text-xs truncate">{searchPlaceholder}</span>
      </div>
      
      <div className="flex items-center justify-between md:justify-end gap-3 w-full md:w-auto">
        <Select value={dateRange} onValueChange={(val) => setDateRange(val as DateRange)}>
          <SelectTrigger className="w-[120px] h-7 bg-surface-raised text-xs font-medium border-border shadow-sm">
            <SelectValue placeholder="Select range" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="7d" className="text-xs">Last 7 days</SelectItem>
            <SelectItem value="30d" className="text-xs">Last 30 days</SelectItem>
            <SelectItem value="90d" className="text-xs">Last 90 days</SelectItem>
          </SelectContent>
        </Select>

        <div className="w-7 h-7 rounded-full bg-surface-raised border border-border flex items-center justify-center ml-1 cursor-pointer hover:bg-surface transition-colors text-foreground-faint hover:text-foreground">
          <User className="w-3.5 h-3.5" />
        </div>
      </div>
    </div>
  )
}
