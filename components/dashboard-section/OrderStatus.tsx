"use client"

import { PieChart, Pie, Cell, ResponsiveContainer, Tooltip } from "recharts"
import { useInView, useReducedMotion } from "motion/react"
import { useRef } from "react"

interface OrderStatusProps {
  data: { name: string; value: number; fill: string }[]
}

export default function OrderStatus({ data }: OrderStatusProps) {
  const total = data.reduce((sum, item) => sum + item.value, 0)
  
  const ref = useRef<HTMLDivElement>(null)
  const inView = useInView(ref, { once: true, amount: 0.5 })
  const reducedMotion = useReducedMotion()

  return (
    <div ref={ref} className="h-[140px] w-full flex items-center justify-between relative">
      <div className="w-[110px] h-[110px] relative shrink-0">
        <div className="absolute inset-0 flex flex-col items-center justify-center pointer-events-none z-0">
          <span className="text-body-md font-semibold text-foreground">1,284</span>
          <span className="text-[8px] text-foreground-faint uppercase tracking-wider">Total</span>
        </div>
        <div className="relative z-10 w-full h-full">
          <ResponsiveContainer width="100%" height="100%">
            {inView ? (
            <PieChart>
              <Pie
                data={data}
                cx="50%"
                cy="50%"
                innerRadius={42}
                outerRadius={55}
                stroke="none"
                dataKey="value"
                isAnimationActive={!reducedMotion}
                animationDuration={800}
                animationBegin={200}
              >
                {data.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={entry.fill} />
                ))}
              </Pie>
              <Tooltip 
                contentStyle={{ 
                  backgroundColor: "var(--color-surface-raised)", 
                  borderColor: "var(--color-border)", 
                  borderRadius: "4px",
                  boxShadow: "0 2px 4px -1px rgb(0 0 0 / 0.1)",
                  padding: "4px 8px"
                }}
                itemStyle={{ color: "var(--color-foreground)", fontSize: "12px" }}
              />
            </PieChart>
            ) : <div />}
          </ResponsiveContainer>
        </div>
      </div>
      <div className="flex-1 flex flex-col justify-center gap-2 pl-6 relative z-10">
        {data.map((entry, index) => {
          const percentage = Math.round((entry.value / total) * 100)
          return (
            <div key={index} className="flex items-center justify-between w-full">
              <div className="flex items-center gap-1.5">
                <div className="w-2 h-2 rounded-full shrink-0" style={{ backgroundColor: entry.fill }} />
                <span className="text-[10px] text-foreground-secondary font-medium">{entry.name}</span>
              </div>
              <span className="text-[10px] font-semibold text-foreground">{percentage}%</span>
            </div>
          )
        })}
      </div>
    </div>
  )
}
