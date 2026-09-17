import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Badge } from "@/components/ui/badge"

interface Order {
  id: string
  customer: string
  amount: string
  status: string
  date: string
}

interface RecentOrdersProps {
  data: Order[]
}

export function RecentOrders({ data }: RecentOrdersProps) {
  return (
    <div className="bg-surface-raised border border-border rounded-lg shadow-sm overflow-hidden h-full flex flex-col">
      <div className="p-3 border-b border-border flex justify-between items-center">
        <h3 className="text-body-sm font-semibold text-foreground">Recent Orders</h3>
        <a  className="cursor-pointer text-[10px] font-semibold text-accent hover:text-accent-hover transition-colors">
          View all →
        </a>
      </div>
      <div className="overflow-x-auto flex-1">
        <Table className="text-xs">
          <TableHeader>
            <TableRow className="h-8 hover:bg-transparent">
              <TableHead className="w-[70px] h-8 py-1">#</TableHead>
              <TableHead className="h-8 py-1">Customer</TableHead>
              <TableHead className="text-right h-8 py-1">Amount</TableHead>
              <TableHead className="h-8 py-1">Status</TableHead>
              <TableHead className="text-right hidden sm:table-cell h-8 py-1">Date</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {data.map((order) => (
              <TableRow key={order.id} className="h-10">
                <TableCell className="py-2 font-medium text-foreground-faint">{order.id}</TableCell>
                <TableCell className="py-2 font-medium whitespace-nowrap">{order.customer}</TableCell>
                <TableCell className="py-2 text-right font-medium">{order.amount}</TableCell>
                <TableCell className="py-2">
                  <Badge variant={order.status === "Completed" ? "success" : order.status === "Processing" ? "secondary" : "outline"} className="px-1.5 py-0 text-[9px]">
                    {order.status}
                  </Badge>
                </TableCell>
                <TableCell className="py-2 text-right hidden sm:table-cell text-foreground-faint whitespace-nowrap">{order.date}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    </div>
  )
}
