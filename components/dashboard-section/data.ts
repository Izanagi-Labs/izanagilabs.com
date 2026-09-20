export type DateRange = "7d" | "30d" | "90d"

export const getKpiData = (range: DateRange) => {
  switch (range) {
    case "7d":
      return [
        { label: "Revenue", value: "₹4.2L", change: "↑ 5.2% vs previous", positive: true, sparkline: [20, 25, 22, 30, 28, 35, 42], icon: "barChart", iconColor: "orange" },
        { label: "Orders", value: "312", change: "↑ 2.4% vs previous", positive: true, sparkline: [15, 18, 25, 20, 28, 24, 30], icon: "bag", iconColor: "grey" },
        { label: "Pending Amount", value: "₹0.8L", change: "↓ 1.2% vs previous", positive: false, sparkline: [40, 35, 38, 30, 25, 28, 20], icon: "clock", iconColor: "orange" },
      ]
    case "90d":
      return [
        { label: "Revenue", value: "₹45.8L", change: "↑ 22.4% vs previous", positive: true, sparkline: [5, 10, 15, 25, 30, 35, 45], icon: "barChart", iconColor: "orange" },
        { label: "Orders", value: "4,102", change: "↑ 18.1% vs previous", positive: true, sparkline: [10, 15, 22, 35, 30, 40, 48], icon: "bag", iconColor: "grey" },
        { label: "Pending Amount", value: "₹8.5L", change: "↓ 8.4% vs previous", positive: false, sparkline: [60, 50, 45, 40, 30, 25, 15], icon: "clock", iconColor: "orange" },
      ]
    case "30d":
    default:
      return [
        { label: "Revenue", value: "₹12.4L", change: "↑ 12.8% vs previous", positive: true, sparkline: [10, 20, 15, 30, 25, 40, 50], icon: "barChart", iconColor: "orange" },
        { label: "Orders", value: "1,284", change: "↑ 8.4% vs previous", positive: true, sparkline: [20, 25, 20, 30, 28, 35, 40], icon: "bag", iconColor: "grey" },
        { label: "Pending Amount", value: "₹3.2L", change: "↓ 4.1% vs previous", positive: false, sparkline: [50, 40, 45, 30, 35, 20, 10], icon: "clock", iconColor: "orange" },
      ]
  }
}

export const getRevenueData = (range: DateRange) => {
  switch (range) {
    case "7d":
      return [
        { date: "Mon", revenue: 45000 },
        { date: "Tue", revenue: 52000 },
        { date: "Wed", revenue: 41000 },
        { date: "Thu", revenue: 68000 },
        { date: "Fri", revenue: 59000 },
        { date: "Sat", revenue: 84000 },
        { date: "Sun", revenue: 76000 },
      ]
    case "90d":
      return [
        { date: "Week 1", revenue: 220000 },
        { date: "Week 2", revenue: 190000 },
        { date: "Week 3", revenue: 260000 },
        { date: "Week 4", revenue: 310000 },
        { date: "Week 5", revenue: 280000 },
        { date: "Week 6", revenue: 350000 },
        { date: "Week 7", revenue: 320000 },
        { date: "Week 8", revenue: 420000 },
        { date: "Week 9", revenue: 390000 },
        { date: "Week 10", revenue: 480000 },
        { date: "Week 11", revenue: 450000 },
        { date: "Week 12", revenue: 550000 },
      ]
    case "30d":
    default:
      return [
        { date: "01", revenue: 28000 },
        { date: "04", revenue: 32000 },
        { date: "07", revenue: 29000 },
        { date: "10", revenue: 41000 },
        { date: "13", revenue: 38000 },
        { date: "16", revenue: 45000 },
        { date: "19", revenue: 42000 },
        { date: "22", revenue: 51000 },
        { date: "25", revenue: 48000 },
        { date: "28", revenue: 62000 },
        { date: "30", revenue: 59000 },
      ]
  }
}

export const getOrderStatus = (range: DateRange) => {
  const mult = range === "7d" ? 1 : range === "30d" ? 4 : 12
  const completedBase = range === "7d" ? 64 : range === "30d" ? 58 : 72
  const processingBase = range === "7d" ? 22 : range === "30d" ? 26 : 18
  const pendingBase = 100 - completedBase - processingBase

  return [
    { name: "Completed", value: completedBase * mult, fill: "var(--color-accent)" },
    { name: "Processing", value: processingBase * mult, fill: "var(--color-border)" },
    { name: "Pending", value: pendingBase * mult, fill: "var(--color-foreground-faint)" },
  ]
}

export const getRecentOrders = (range: DateRange) => {
  switch (range) {
    case "7d":
      return [
        { id: "#1092", customer: "Tech Solutions", amount: "₹15,400", status: "Completed", date: "Today, 11:20 AM" },
        { id: "#1091", customer: "Global Trade Inc.", amount: "₹22,800", status: "Processing", date: "Today, 09:45 AM" },
        { id: "#1090", customer: "Apex Retail", amount: "₹8,900", status: "Pending", date: "Yesterday, 03:15 PM" },
      ]
    case "90d":
      return [
        { id: "#0842", customer: "ABC Industries", amount: "₹145,000", status: "Completed", date: "Jan 12, 2026" },
        { id: "#0821", customer: "Nexus Corp", amount: "₹92,500", status: "Completed", date: "Jan 05, 2026" },
        { id: "#0790", customer: "Sharma & Co.", amount: "₹68,200", status: "Completed", date: "Dec 18, 2025" },
      ]
    case "30d":
    default:
      return [
        { id: "#1028", customer: "ABC Industries", amount: "₹42,500", status: "Completed", date: "Today, 10:42 AM" },
        { id: "#1027", customer: "Sharma & Co.", amount: "₹18,200", status: "Processing", date: "Today, 09:15 AM" },
        { id: "#1025", customer: "Kedar Enterprises", amount: "₹12,400", status: "Pending", date: "Yesterday, 04:20 PM" },
      ]
  }
}

export const getTopProducts = (range: DateRange) => {
  switch (range) {
    case "7d":
      return [
        { id: "1", name: "Smart Watch", percentage: 48 },
        { id: "2", name: "Wireless Headphones", percentage: 26 },
        { id: "3", name: "Phone Case", percentage: 14 },
      ]
    case "90d":
      return [
        { id: "1", name: "Wireless Headphones", percentage: 38 },
        { id: "2", name: "Laptop Stand", percentage: 29 },
        { id: "3", name: "Smart Watch", percentage: 18 },
      ]
    case "30d":
    default:
      return [
        { id: "1", name: "Wireless Headphones", percentage: 42 },
        { id: "2", name: "Smart Watch", percentage: 33 },
        { id: "3", name: "Portable Speaker", percentage: 25 },
      ]
  }
}
