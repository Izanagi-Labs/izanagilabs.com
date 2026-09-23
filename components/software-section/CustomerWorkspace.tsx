import { CustomerLifecycle, LifecycleStep } from "./CustomerLifecycle"
import { Clock, FileText, ChevronRight, Phone, Mail, User } from "lucide-react"

export function CustomerWorkspace() {
  const lifecycleSteps: LifecycleStep[] = [
    {
      id: "enq",
      title: "Enquiry",
      description: "Received 14 Sep",
      status: "completed",
      badgeText: "Completed"
    },
    {
      id: "req",
      title: "Requirement",
      description: "500 Industrial Components",
      status: "completed",
      badgeText: "Completed"
    },
    {
      id: "quote",
      title: "Quotation",
      description: "QT-184 • ₹4,85,000 • Sent 15 Sep",
      status: "completed",
      badgeText: "Completed"
    },
    {
      id: "fup",
      title: "Follow-up",
      description: (
        <span className="text-accent font-medium">Today • 4:30 PM</span>
      ),
      status: "pending",
      badgeText: "Pending"
    },
    {
      id: "conf",
      title: "Confirmation",
      description: "Awaiting",
      status: "not-started",
      badgeText: "Not started"
    }
  ]

  return (
    <div className="flex flex-col lg:flex-row min-h-0 gap-4">
      {/* Left Column (RK Card + Timeline) */}
      <div className="lg:max-w-[75%] flex flex-col min-h-0">
        <div className="bg-surface-raised border border-border rounded-lg shadow-sm flex flex-col flex-1 min-h-0">
          {/* Workspace Header */}
          <div className="p-3 border-b border-border flex flex-col gap-3 shrink-0">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded bg-surface border border-border flex items-center justify-center text-sm font-semibold text-foreground">
            RK
          </div>
          <div>
            <h3 className="text-sm font-semibold text-foreground leading-tight">RK Industries</h3>
            <p className="text-[11px] text-foreground-muted mt-0.5">Mumbai, Maharashtra <span className="mx-1">•</span> Industrial Components</p>
          </div>
        </div>
        
        {/* Contact Info Row */}
        <div className="flex flex-wrap items-center gap-x-2 gap-y-3 mt-1 text-[11px]">
          <div className="flex flex-col gap-1">
            <div className="flex items-center gap-1.5 text-foreground-muted">
              <User className="w-3 h-3" />
              <span className="text-system-xs text-foreground-fainter">Contact</span>
            </div>
            <span className="font-medium text-foreground ml-4.5">Rahul Kulkarni</span>
          </div>
          <div className="flex flex-col gap-1">
            <div className="flex items-center gap-1.5 text-foreground-muted">
              <Phone className="w-3 h-3" />
              <span className="text-system-xs text-foreground-fainter">Phone</span>
            </div>
            <span className="font-medium text-foreground ml-4.5">+91 99999 99999</span>
          </div>
          <div className="flex flex-col gap-1">
            <div className="flex items-center gap-1.5 text-foreground-muted">
              <Mail className="w-3 h-3" />
              <span className="text-system-xs text-foreground-fainter">Email</span>
            </div>
            <span className="font-medium text-foreground ml-4.5">rahul.kulkarni@rkind.com</span>
          </div>
        </div>
      </div>

      {/* Workspace Content - Timeline */}
      <div className="p-3 overflow-y-auto flex-1">
        <CustomerLifecycle steps={lifecycleSteps} />
      </div>
    </div>
  </div>

  {/* Right Column: Independent Action Cards */}
  <div className="flex-1 flex flex-col gap-3 overflow-y-auto">
    {/* Next Action Card */}
    <div className="flex flex-col">
      <span className="text-[10px] uppercase tracking-widest font-semibold text-foreground-faint mb-1.5">Next Action</span>
      <div className="bg-surface-raised shadow-sm border border-border rounded-lg p-3 flex items-start gap-3 transition-all duration-200 hover:-translate-y-0.5 hover:shadow-md hover:border-border-subtle cursor-pointer group">
        <div className="w-8 h-8 rounded-md bg-accent-soft text-accent flex items-center justify-center shrink-0">
          <Clock className="w-4 h-4" />
        </div>
        <div className="flex flex-col min-w-0 gap-1">
          <div className="flex items-center justify-between">
            <span className="text-xs font-semibold text-foreground">Follow up with RK Industries</span>
            <ChevronRight className="w-3.5 h-3.5 text-foreground-faint group-hover:text-foreground transition-colors" />
          </div>
          <span className="text-[11px] text-accent mt-0.5 block">Today • 4:30 PM</span>
          
          <p className="text-[11px] text-foreground-muted mt-2 leading-relaxed">
            Discuss revised pricing for<br/>the 500-unit requirement.
          </p>
          
          <div className="flex items-center justify-between mt-3">
            <div className="flex items-center gap-1.5 text-foreground-muted">
              <Phone className="w-3 h-3" />
              <span className="text-[10px] font-medium">Phone Call</span>
            </div>
            <div className="px-1.5 py-0.5 rounded text-[9px] font-semibold tracking-wider uppercase bg-danger/10 text-danger border border-danger/20">
              High Priority
            </div>
          </div>
        </div>
      </div>
    </div>

    {/* Quotation Card */}
    <div className="flex flex-col mt-1">
      <span className="text-[10px] uppercase tracking-widest font-semibold text-foreground-faint mb-1.5">Quotation</span>
      <div className="bg-surface-raised shadow-sm border border-border rounded-lg p-3 flex items-start gap-3 transition-all duration-200 hover:-translate-y-0.5 hover:shadow-md hover:border-border-subtle cursor-pointer group">
        <div className="w-8 h-8 rounded-md bg-surface border border-border flex items-center justify-center shrink-0 text-foreground-muted">
          <FileText className="w-4 h-4" />
        </div>
        <div className="flex-1 min-w-0">
          <div className="flex items-center justify-between">
                  <span className="text-xs  text-foreground">QT-184</span>
            <ChevronRight className="w-3.5 h-3.5 text-foreground-faint group-hover:text-foreground transition-colors" />
          </div>
          <div className="flex flex-col gap-0.5 mt-0.5">
            <span className="text-lg font-semibold text-foreground">₹4,85,000</span>
            <span className="text-[11px] text-foreground-muted">Sent Sep 15</span>
            <div className="flex items-center gap-1.5 mt-1">
              <div className="w-2 h-2 rounded-full bg-accent" />
              <span className="text-[11px] text-accent font-medium">Awaiting response</span>
            </div>
          </div>
        </div>
      </div>
    </div>

    {/* On Confirmation Flow */}
    <div className="flex flex-col mt-auto pt-2">
      <span className="text-[10px] uppercase tracking-widest font-semibold text-foreground-faint mb-1.5">On Confirmation</span>
      <div className="bg-surface-raised shadow-sm border border-border rounded-lg p-3 flex items-center justify-between transition-all duration-200 hover:-translate-y-0.5 hover:shadow-md hover:border-border-subtle cursor-pointer group">
        <div className="flex flex-col items-center gap-1">
          <div className="w-5 h-5 flex items-center justify-center text-foreground-muted">
            <FileText className="w-3.5 h-3.5" />
          </div>
          <span className="text-[9px] font-semibold text-foreground uppercase tracking-wider">Job Order</span>
        </div>
        <ChevronRight className="w-3.5 h-3.5 text-foreground-muted" />
        <div className="flex flex-col items-center gap-1">
          <div className="w-5 h-5 flex items-center justify-center text-foreground-muted">
            <FileText className="w-3.5 h-3.5" />
          </div>
          <span className="text-[9px] font-semibold text-foreground uppercase tracking-wider">Invoice</span>
        </div>
        <ChevronRight className="w-3.5 h-3.5 text-foreground-muted" />
        <div className="flex flex-col items-center gap-1">
          <div className="w-5 h-5 flex items-center justify-center text-foreground-muted">
            <FileText className="w-3.5 h-3.5" />
          </div>
          <span className="text-[9px] font-semibold text-foreground uppercase tracking-wider">Payment</span>
        </div>
      </div>
    </div>
  </div>
</div>
  )
}
