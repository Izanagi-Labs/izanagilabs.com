"use client"

import { Area, AreaChart, ResponsiveContainer, Tooltip, XAxis, YAxis } from "recharts"

interface RevenueChartProps {
  data: { date: string; revenue: number }[]
}

export default function RevenueChart({ data }: RevenueChartProps) {
  return (
    <div className="h-[140px] w-full mt-2">
      <ResponsiveContainer width="100%" height="100%">
        <AreaChart data={data} margin={{ top: 5, right: 0, left: -20, bottom: 0 }}>
          <defs>
            <linearGradient id="colorRevenue" x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%" stopColor="var(--color-accent)" stopOpacity={0.2} />
              <stop offset="95%" stopColor="var(--color-accent)" stopOpacity={0} />
            </linearGradient>
          </defs>
          <XAxis 
            dataKey="date" 
            axisLine={false} 
            tickLine={false} 
            tick={{ fill: "var(--color-foreground-faint)", fontSize: 10 }} 
            dy={8}
          />
          <YAxis 
            axisLine={false} 
            tickLine={false} 
            tick={{ fill: "var(--color-foreground-faint)", fontSize: 10 }} 
            tickFormatter={(value) => {
              if (value === 0) return "0";
              if (value >= 100000) return `${(value / 100000).toFixed(1).replace('.0', '')}L`;
              if (value >= 1000) return `${(value / 1000).toFixed(1).replace('.0', '')}k`;
              return value;
            }}
            width={35}
          />
          <Tooltip 
            contentStyle={{ 
              backgroundColor: "var(--color-surface-raised)", 
              borderColor: "var(--color-border)", 
              borderRadius: "4px",
              boxShadow: "0 2px 4px -1px rgb(0 0 0 / 0.1)",
              padding: "4px 8px"
            }}
            itemStyle={{ color: "var(--color-foreground)", fontSize: "12px", fontWeight: "600" }}
            labelStyle={{ color: "var(--color-foreground-faint)", fontSize: "10px", marginBottom: "2px" }}
          />
          <Area 
            type="monotone" 
            dataKey="revenue" 
            stroke="var(--color-accent)" 
            strokeWidth={2}
            fillOpacity={1} 
            fill="url(#colorRevenue)" 
          />
        </AreaChart>
      </ResponsiveContainer>
    </div>
  )
}
