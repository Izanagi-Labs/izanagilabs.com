"use client"

import { Area, AreaChart, ResponsiveContainer, XAxis, YAxis } from "recharts"

const chartData = [
  { date: "1 Sep", spend: 6, conversions: 100 },
  { date: "8 Sep", spend: 8, conversions: 180 },
  { date: "15 Sep", spend: 10, conversions: 230 },
  { date: "22 Sep", spend: 13, conversions: 300 },
  { date: "30 Sep", spend: 17, conversions: 390 },
]

export function SpendRevenueChart() {
  return (
    <div className="flex flex-col p-3 sm:p-4 border border-border rounded-xl bg-surface-raised shadow-sm flex-1 min-h-[140px] overflow-hidden">
      <div className="flex justify-between items-center mb-1">
        <span className="text-[10px] uppercase tracking-widest text-foreground-faint font-semibold font-mono">
          SPEND VS CONVERSIONS
        </span>
        <div className="flex items-center gap-3">
          <div className="flex items-center gap-1.5">
            <span className="w-1.5 h-1.5 rounded-full bg-border-strong"></span>
            <span className="text-[9px] uppercase tracking-wider font-semibold text-foreground-faint">Spend</span>
          </div>
          <div className="flex items-center gap-1.5">
            <span className="w-1.5 h-1.5 rounded-full bg-accent"></span>
            <span className="text-[9px] uppercase tracking-wider font-semibold text-foreground-faint">Conversions</span>
          </div>
        </div>
      </div>
      
      <div className="w-full h-[160px] lg:h-auto lg:flex-1 lg:min-h-0 mt-2">
        <ResponsiveContainer width="100%" height="100%">
          <AreaChart data={chartData} margin={{ top: 5, right: 0, left: -25, bottom: 0 }}>
            <defs>
              <linearGradient id="colorRevenuePerf" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="var(--color-accent)" stopOpacity={0.2} />
                <stop offset="95%" stopColor="var(--color-accent)" stopOpacity={0} />
              </linearGradient>
              <linearGradient id="colorSpendPerf" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="var(--color-border-strong)" stopOpacity={0.2} />
                <stop offset="95%" stopColor="var(--color-border-strong)" stopOpacity={0} />
              </linearGradient>
            </defs>
            <XAxis 
              dataKey="date" 
              axisLine={false} 
              tickLine={false} 
              tick={{ fill: "var(--color-foreground-faint)", fontSize: 9 }} 
              dy={5}
              minTickGap={30}
            />
            <YAxis 
              axisLine={false} 
              tickLine={false} 
              tick={{ fill: "var(--color-foreground-faint)", fontSize: 9 }} 
              width={35}
            />
            <Area 
              type="monotone" 
              dataKey="spend" 
              stroke="var(--color-border-strong)" 
              strokeWidth={1.5}
              fillOpacity={1} 
              fill="url(#colorSpendPerf)" 
              isAnimationActive={false}
            />
            <Area 
              type="monotone" 
              dataKey="conversions" 
              stroke="var(--color-accent)" 
              strokeWidth={1.5}
              fillOpacity={1} 
              fill="url(#colorRevenuePerf)" 
              isAnimationActive={false}
            />
          </AreaChart>
        </ResponsiveContainer>
      </div>
    </div>
  )
}
