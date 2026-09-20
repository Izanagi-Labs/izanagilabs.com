

export type LifecycleStatus = 'completed' | 'pending' | 'not-started'

export interface LifecycleStep {
  id: string
  title: string
  description: React.ReactNode
  status: LifecycleStatus
  badgeText: string
}

interface CustomerLifecycleProps {
  steps: LifecycleStep[]
}

export function CustomerLifecycle({ steps }: CustomerLifecycleProps) {
  return (
    <div className="flex flex-col">
      {steps.map((step, index) => {
        const isLast = index === steps.length - 1
        const isCompleted = step.status === 'completed'
        const isPending = step.status === 'pending'
        const isNotStarted = step.status === 'not-started'

        return (
          <div key={step.id} className="relative flex items-start gap-3 pb-6">
            {!isLast && (
              <div className="absolute left-[11px] top-6 w-[2px] h-[calc(100%-2px)] bg-border" />
            )}
            
            <div className="relative z-10 flex-shrink-0 mt-0.5">
              <div className={`w-6 h-6 rounded-full flex items-center justify-center text-xs font-semibold
                ${isCompleted || isPending ? 'bg-accent text-white' : 'bg-surface-raised border border-border text-foreground-faint'}
              `}>
                {index + 1}
              </div>
            </div>
            
            <div className="flex-1 flex justify-between items-start gap-2 min-w-0 pt-0.5">
              <div className="flex flex-col min-w-0">
                <span className={`text-xs font-semibold leading-tight ${isNotStarted ? 'text-foreground-faint' : 'text-foreground'}`}>
                  {step.title}
                </span>
                <span className="text-[11px] text-foreground-muted leading-tight mt-1">
                  {step.description}
                </span>
              </div>
              
              <div className="flex-shrink-0 ml-2 mt-0.5">
                {isCompleted && (
                  <span className="inline-flex items-center px-2 py-0.5 rounded-full text-[9px] font-bold tracking-widest uppercase bg-success/10 text-success border border-success/20">
                    {step.badgeText}
                  </span>
                )}
                {isPending && (
                  <span className="inline-flex items-center px-2 py-0.5 rounded-full text-[9px] font-bold tracking-widest uppercase bg-accent-soft text-accent border border-accent/20">
                    {step.badgeText}
                  </span>
                )}
                {isNotStarted && (
                  <span className="inline-flex items-center px-2 py-0.5 rounded-full text-[9px] font-bold tracking-widest uppercase bg-surface-raised text-foreground-faint border border-border">
                    {step.badgeText}
                  </span>
                )}
              </div>
            </div>
          </div>
        )
      })}
    </div>
  )
}
