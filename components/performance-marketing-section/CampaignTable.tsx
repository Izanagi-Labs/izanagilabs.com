import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Badge } from "@/components/ui/badge"
import { Search, Globe } from "lucide-react"

const campaigns = [
  {
    name: "Google Search — High Intent",
    description: "Brand & high intent keywords",
    source: "search",
    spend: "₹92K",
    conv: "384",
    roas: "6.2×",
    status: "Scaling",
  },
  {
    name: "Meta — Retargeting",
    description: "Website visitors",
    source: "meta",
    spend: "₹68K",
    conv: "241",
    roas: "5.1×",
    status: "Scaling",
  },
  {
    name: "Meta — Prospecting",
    description: "Lookalike audiences",
    source: "meta",
    spend: "₹1.4L",
    conv: "319",
    roas: "3.4×",
    status: "Optimizing",
  },
  {
    name: "Google Search — Generic",
    description: "Non-brand keywords",
    source: "search",
    spend: "₹1.0L",
    conv: "142",
    roas: "1.8×",
    status: "Reduce",
  },
  {
    name: "LinkedIn — B2B Targeting",
    description: "Decision makers",
    source: "social",
    spend: "₹1.2L",
    conv: "89",
    roas: "2.1×",
    status: "Optimizing",
  },
  {
    name: "Google Search — Competitor",
    description: "Conquesting keywords",
    source: "search",
    spend: "₹45K",
    conv: "112",
    roas: "3.8×",
    status: "Scaling",
  },
]

export function CampaignTable() {
  return (
    <div className="flex flex-col bg-surface-raised border border-border rounded-xl shadow-sm overflow-hidden h-full">
      <div className="px-3 py-1.5 sm:py-2 border-b border-border bg-surface/50">
        <h4 className="text-body-sm font-semibold text-foreground">Campaigns</h4>
      </div>
      <Table>
        <TableHeader>
          <TableRow className="hover:bg-transparent border-border-subtle">
            <TableHead className="!h-6 !py-0.5 !px-3 text-xs font-medium text-foreground-faint">CAMPAIGN</TableHead>
            <TableHead className="!h-6 !py-0.5 !px-3 text-xs font-medium text-foreground-faint hidden sm:table-cell">SPEND</TableHead>
            <TableHead className="!h-6 !py-0.5 !px-3 text-xs font-medium text-foreground-faint hidden md:table-cell">CONV.</TableHead>
            <TableHead className="!h-6 !py-0.5 !px-3 text-xs font-medium text-foreground-faint">ROAS</TableHead>
            <TableHead className="!h-6 !py-0.5 !px-3 text-xs font-medium text-foreground-faint text-right">STATUS</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {campaigns.map((camp, i) => (
            <TableRow key={i} className="border-border-subtle">
              <TableCell className="py-1.5 px-3">
                <div className="flex items-start gap-2">
                  <div className="w-[18px] h-[18px] rounded border border-border flex items-center justify-center shrink-0 bg-surface mt-[1px]">
                    {camp.source === "search" ? (
                      <Search className="w-[10px] h-[10px] text-foreground-muted" />
                    ) : (
                      <Globe className="w-[10px] h-[10px] text-foreground-muted" />
                    )}
                  </div>
                  <div className="flex flex-col min-w-0">
                    <span className="text-xs font-medium text-foreground truncate leading-tight">{camp.name}</span>
                    <span className="text-[10px] text-foreground-secondary font-medium truncate mt-0.5">{camp.description}</span>
                  </div>
                </div>
              </TableCell>
              <TableCell className="py-1.5 px-3 hidden sm:table-cell text-xs font-medium text-foreground-faint">{camp.spend}</TableCell>
              <TableCell className="py-1.5 px-3 hidden md:table-cell text-xs font-medium text-foreground-faint">{camp.conv}</TableCell>
              <TableCell className="py-1.5 px-3 text-xs font-medium text-foreground">{camp.roas}</TableCell>
              <TableCell className="py-1.5 px-3 text-right">
                <Badge 
                  variant={
                    camp.status === "Scaling" ? "success" : 
                    camp.status === "Reduce" ? "destructive" : 
                    "secondary"
                  }
                  className={`text-[9px] px-1.5 py-0 leading-tight h-[18px] ${
                    camp.status === 'Optimizing' ? 'bg-orange-50 text-orange-700 hover:bg-orange-100' : ''
                  }`}
                >
                  {camp.status}
                </Badge>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  )
}
