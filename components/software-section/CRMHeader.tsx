import { Plus } from "lucide-react"

export function CRMHeader() {
  return (
    <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-3 mb-3">
      <div className="flex flex-col gap-0.5">
        <span className="text-system-xs text-foreground-faint tracking-widest">CRM</span>
        <h2 className="text-xl text-foreground leading-tight tracking-tight">Customer Pipeline</h2>
        <p className="text-xs text-foreground-muted">Manage enquiries, customers and opportunities.</p>
      </div>
      <button className="inline-flex items-center justify-center gap-1.5 px-3 py-1.5 bg-accent hover:bg-accent-hover text-white text-xs font-medium rounded-md transition-colors shadow-sm self-start sm:self-auto">
        <Plus className="w-3.5 h-3.5" />
        New Enquiry
      </button>
    </div>
  )
}
