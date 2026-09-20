import React from "react"
import { Check, ArrowRight } from "lucide-react"

export function ProcessStages() {
  const stages = [
    {
      id: "material",
      title: "Material",
      status: "completed",
      icon: (
        <div className="w-4 h-4 rounded-full bg-emerald-500 flex items-center justify-center text-white shrink-0 mt-0.5">
          <Check className="w-2.5 h-2.5 stroke-[3]" />
        </div>
      ),
      content: <span className="text-[10px] text-emerald-700 font-semibold block uppercase tracking-widest mt-0.5">Available</span>
    },
    {
      id: "planning",
      title: "Planning",
      status: "completed",
      icon: (
        <div className="w-4 h-4 rounded-full bg-emerald-500 flex items-center justify-center text-white shrink-0 mt-0.5">
          <Check className="w-2.5 h-2.5 stroke-[3]" />
        </div>
      ),
      content: <span className="text-[10px] text-emerald-700 font-semibold block uppercase tracking-widest mt-0.5">Planned</span>
    },
    {
      id: "production",
      title: "Production",
      status: "in-progress",
      icon: (
        <div className="w-4 h-4 rounded-full border-2 border-accent border-t-transparent flex items-center justify-center shrink-0 mt-0.5 rotate-45" />
      ),
      content: (
       <span className="text-[10px] text-accent font-semibold block uppercase tracking-widest mt-0.5">In Progress</span>
      )
    },
    {
      id: "quality",
      title: "Quality",
      status: "pending",
      icon: <div className="w-4 h-4 rounded-full border border-border bg-surface shrink-0 mt-0.5" />,
      content: <span className="text-[10px] text-foreground-faint font-medium block uppercase tracking-widest mt-0.5">Pending</span>
    },
    {
      id: "dispatch",
      title: "Dispatch",
      status: "pending",
      icon: <div className="w-4 h-4 rounded-full border border-border bg-surface shrink-0 mt-0.5" />,
      content: <span className="text-[10px] text-foreground-faint font-medium block uppercase tracking-widest mt-0.5">Pending</span>
    }
  ]

  return (
    <div 
      className="w-full grid items-start gap-x-2 lg:gap-x-4 h-full"
      style={{ gridTemplateColumns: 'minmax(0,1fr) auto minmax(0,1fr) auto minmax(0,1.2fr) auto minmax(0,1fr) auto minmax(0,1fr)' }}
    >
      {stages.map((stage, index) => {
        const isLast = index === stages.length - 1
        return (
          <React.Fragment key={stage.id}>
            <div className="flex items-start gap-1.5 min-w-0">
              {stage.icon}
              <div className="flex flex-col min-w-0">
                <span className={`text-[11px] font-bold leading-tight truncate ${stage.status === 'pending' ? 'text-foreground-faint' : 'text-foreground'}`}>
                  {stage.title}
                </span>
                {stage.content}
              </div>
            </div>
            {!isLast && (
              <div className="flex items-center justify-center h-5 shrink-0 text-border">
                <ArrowRight className="w-3 h-3 stroke-[2]" />
              </div>
            )}
          </React.Fragment>
        )
      })}
    </div>
  )
}
