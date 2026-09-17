import { LayoutDashboard, BarChart3, Users, Settings, Package, ShoppingCart, FileText } from "lucide-react"

interface DashboardSidebarProps {
  activeTab?: 'overview' | 'orders'
}

export function DashboardSidebar({ activeTab = 'overview' }: DashboardSidebarProps) {
  return (
    <div className="hidden md:flex flex-col w-16 lg:w-[180px] border-r border-border bg-background h-[680px] shrink-0">
      <div className="h-12 flex items-center justify-center lg:justify-start lg:px-5 border-b border-border">
        {/* Double-peak Logo Mock */}
        <div className="flex items-end h-4">
          <div className="w-0 h-0 border-l-[5px] border-l-transparent border-r-[5px] border-r-transparent border-b-[11px] border-b-foreground" />
          <div className="w-0 h-0 border-l-[7px] border-l-transparent border-r-[7px] border-r-transparent border-b-[16px] border-b-foreground -ml-1" />
        </div>
        <span className="hidden lg:block ml-2.5 font-semibold text-xs text-foreground tracking-widest uppercase">Izanagi</span>
      </div>
      <nav className="flex-1 py-4 flex flex-col gap-0.5 px-2">
        <div className={`flex items-center gap-2.5 px-3 py-1.5 rounded-md group cursor-pointer transition-colors relative ${activeTab === 'overview' ? 'bg-accent-soft text-accent' : 'text-foreground-faint hover:text-foreground hover:bg-surface-raised'}`}>
          <LayoutDashboard className="w-3.5 h-3.5" />
          <span className={`hidden lg:block text-xs ${activeTab === 'overview' ? 'font-semibold' : 'font-medium'}`}>Overview</span>
          {activeTab === 'overview' && <div className="absolute left-0 top-1/2 -translate-y-1/2 w-1 h-4 bg-accent rounded-r-md" />}
        </div>
        <div className={`flex items-center gap-2.5 px-3 py-1.5 rounded-md group cursor-pointer transition-colors relative ${activeTab === 'orders' ? 'bg-accent-soft text-accent' : 'text-foreground-faint hover:text-foreground hover:bg-surface-raised'}`}>
          <ShoppingCart className="w-3.5 h-3.5" />
          <span className={`hidden lg:block text-xs ${activeTab === 'orders' ? 'font-semibold' : 'font-medium'}`}>Orders</span>
          {activeTab === 'orders' && <div className="absolute left-0 top-1/2 -translate-y-1/2 w-1 h-4 bg-accent rounded-r-md" />}
        </div>
        <div className="flex items-center gap-2.5 px-3 py-1.5 rounded-md text-foreground-faint hover:text-foreground hover:bg-surface-raised group cursor-pointer transition-colors">
          <Package className="w-3.5 h-3.5" />
          <span className="hidden lg:block text-xs font-medium">Inventory</span>
        </div>
        <div className="flex items-center gap-2.5 px-3 py-1.5 rounded-md text-foreground-faint hover:text-foreground hover:bg-surface-raised group cursor-pointer transition-colors">
          <Users className="w-3.5 h-3.5" />
          <span className="hidden lg:block text-xs font-medium">Customers</span>
        </div>
        <div className="flex items-center gap-2.5 px-3 py-1.5 rounded-md text-foreground-faint hover:text-foreground hover:bg-surface-raised group cursor-pointer transition-colors">
          <BarChart3 className="w-3.5 h-3.5" />
          <span className="hidden lg:block text-xs font-medium">Analytics</span>
        </div>
        <div className="flex items-center gap-2.5 px-3 py-1.5 rounded-md text-foreground-faint hover:text-foreground hover:bg-surface-raised group cursor-pointer transition-colors">
          <FileText className="w-3.5 h-3.5" />
          <span className="hidden lg:block text-xs font-medium">Reports</span>
        </div>
        
        <div className="mt-auto">
          <div className="flex items-center gap-2.5 px-3 py-1.5 rounded-md text-foreground-faint hover:text-foreground hover:bg-surface-raised group cursor-pointer transition-colors">
            <Settings className="w-3.5 h-3.5" />
            <span className="hidden lg:block text-xs font-medium">Settings</span>
          </div>
          
          <div className="mt-4 pt-3 border-t border-border flex justify-center lg:justify-start px-3">
            <span className="hidden lg:block text-[9px] text-foreground-fainter tracking-[0.15em] leading-relaxed">SIMPLE TOOLS.<br/>REAL PROGRESS.</span>
          </div>
        </div>
      </nav>
    </div>
  )
}
