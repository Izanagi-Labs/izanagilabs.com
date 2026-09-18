import { 
  LayoutDashboard, 
  Users, 
  MessageSquareText, 
  Workflow, 
  Boxes, 
  Factory, 
  ReceiptText, 
  FileBarChart,
  Settings 
} from "lucide-react"

export type SidebarTab = 'overview' | 'crm' | 'enquiries' | 'process' | 'inventory' | 'production' | 'finance' | 'reports';

interface DashboardSidebarProps {
  activeTab?: SidebarTab
  compact?: boolean
}

export function DashboardSidebar({ activeTab = 'overview', compact = false }: DashboardSidebarProps) {
  const widthClass = compact ? "w-16 lg:w-[140px]" : "w-16 lg:w-[180px]"
  
  const navItems: { id: SidebarTab; label: string; icon: React.ElementType }[] = [
    { id: 'overview', label: 'Overview', icon: LayoutDashboard },
    { id: 'crm', label: 'CRM', icon: Users },
    { id: 'enquiries', label: 'Enquiries', icon: MessageSquareText },
    { id: 'process', label: 'Process', icon: Workflow },
    { id: 'inventory', label: 'Inventory', icon: Boxes },
    { id: 'production', label: 'Production', icon: Factory },
    { id: 'finance', label: 'Finance', icon: ReceiptText },
    { id: 'reports', label: 'Reports', icon: FileBarChart },
  ]

  return (
    <div className={`hidden md:flex flex-col border-r border-border bg-background shrink-0 ${widthClass}`}>
      <div className="h-12 flex items-center justify-center lg:justify-start lg:px-5 border-b border-border shrink-0">
        {/* Double-peak Logo Mock */}
        <div className="flex items-end h-4">
          <div className="w-0 h-0 border-l-[5px] border-l-transparent border-r-[5px] border-r-transparent border-b-[11px] border-b-foreground" />
          <div className="w-0 h-0 border-l-[7px] border-l-transparent border-r-[7px] border-r-transparent border-b-[16px] border-b-foreground -ml-1" />
        </div>
        <span className="hidden lg:block ml-2.5 font-semibold text-xs text-foreground tracking-widest uppercase">Izanagi</span>
      </div>
      <nav className="flex-1 py-4 flex flex-col gap-0.5 px-2">
        {navItems.map((item) => {
          const Icon = item.icon
          const isActive = activeTab === item.id
          
          return (
            <div 
              key={item.id} 
              className={`flex items-center gap-2.5 px-3 py-1.5 rounded-md group cursor-pointer transition-colors relative ${isActive ? 'bg-accent-soft text-accent' : 'text-foreground-faint hover:text-foreground hover:bg-surface-raised'}`}
            >
              <Icon className="w-3.5 h-3.5" />
              <span className={`hidden lg:block text-xs ${isActive ? 'font-semibold' : 'font-medium'}`}>{item.label}</span>
              {isActive && <div className="absolute left-0 top-1/2 -translate-y-1/2 w-1 h-4 bg-accent rounded-r-md" />}
            </div>
          )
        })}
        
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
