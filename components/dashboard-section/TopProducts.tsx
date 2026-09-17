interface Product {
  id: string
  name: string
  percentage: number
}

interface TopProductsProps {
  data: Product[]
  dateRange: string
}

export function TopProducts({ data, dateRange }: TopProductsProps) {
  const label = dateRange === "7d" ? "LAST 7 DAYS" : dateRange === "30d" ? "LAST 30 DAYS" : "LAST 90 DAYS"

  return (
    <div className="bg-surface-raised border border-border rounded-lg shadow-sm overflow-hidden h-full flex flex-col">
      <div className="p-3 border-b border-border flex justify-between items-center">
        <h3 className="text-body-sm font-semibold text-foreground">Top Products</h3>
        <button className="text-[10px] text-foreground-faint hover:text-foreground transition-colors uppercase tracking-wider font-semibold flex items-center">
          {label}
          <span className="ml-1 text-[8px]">∨</span>
        </button>
      </div>
      <div className="p-4 flex flex-col gap-3 flex-1">
        {data.map((product) => (
          <div key={product.id}>
            <div className="flex justify-between items-end mb-1">
              <span className="text-xs font-medium text-foreground truncate mr-2">{product.name}</span>
              <span className="text-[10px] font-semibold text-foreground shrink-0">{product.percentage}%</span>
            </div>
            <div className="w-full bg-surface-raised border border-border rounded-full h-1.5 overflow-hidden">
              <div 
                className="bg-accent h-full rounded-full transition-all duration-1000 ease-in-out" 
                style={{ width: `${product.percentage}%` }}
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
