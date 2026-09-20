import { Search, Bell, User } from "lucide-react"

export function MarketingToolbar() {
  return (
    <div className="flex items-center justify-between w-full h-[52px] px-4 sm:px-6 border-b border-border/60 bg-surface-raised shrink-0">
      
      {/* Left: Branding */}
      <div className="flex items-center gap-2 lg:gap-3 shrink-0">
        <div className="flex items-end h-4">
          <div className="w-0 h-0 border-l-[5px] border-l-transparent border-r-[5px] border-r-transparent border-b-[11px] border-b-foreground" />
          <div className="w-0 h-0 border-l-[7px] border-l-transparent border-r-[7px] border-r-transparent border-b-[16px] border-b-foreground -ml-1" />
        </div>
        <span className="text-[10px] font-bold tracking-[0.25em] uppercase text-foreground hidden sm:block mt-0.5">
          IZANAGI
        </span>
      </div>
      
      {/* Center: Search Visual */}
      <div className="flex-1 hidden sm:flex justify-end lg:justify-center mx-4 lg:mx-8 min-w-0">
        <div className="flex items-center gap-2.5 h-8 px-3 rounded-md border border-border bg-background/50 max-w-[320px] w-full min-w-0 shrink text-foreground-faint transition-colors hover:bg-background">
          <Search className="w-3.5 h-3.5 shrink-0 opacity-70" />
          <span className="text-xs truncate mt-0.5">Search campaigns, keywords or audiences...</span>
        </div>
      </div>
      
      {/* Right: Utilities */}
      <div className="flex items-center gap-2 sm:gap-3 shrink-0">
        
        {/* Date Range Visual */}
        <div className="flex items-center gap-1.5 h-8 px-2 sm:px-3 rounded-md border border-border bg-surface text-xs font-medium text-foreground-muted cursor-default hover:text-foreground transition-colors shrink-0 ml-auto sm:ml-0">
          <span className="mt-0.5">Last 30 days</span>
          <svg width="10" height="10" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg" className="ml-1 opacity-60">
            <path d="M3 4.5L6 7.5L9 4.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </div>
        
        <div aria-hidden="true" className="flex items-center justify-center w-8 h-8 rounded-full hover:bg-border-subtle transition-colors text-foreground-muted">
          <Bell className="w-[15px] h-[15px]" />
        </div>
        
        <div aria-hidden="true" className="flex items-center justify-center w-7 h-7 rounded-full bg-border-subtle/50 border border-border/80 text-foreground hover:bg-border-subtle transition-colors ml-1">
          <User className="w-3.5 h-3.5" />
        </div>
      </div>
    </div>
  )
}
