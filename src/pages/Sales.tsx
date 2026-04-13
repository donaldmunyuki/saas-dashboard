import { DollarSign, TrendingUp, ShoppingBag } from "lucide-react";
import { StatCard } from "@/components/StatCard";
import { LineChart, Line, XAxis, YAxis, Tooltip, ResponsiveContainer } from "recharts";

const data = [
  { month: "Jan", revenue: 12000 }, { month: "Feb", revenue: 19000 }, { month: "Mar", revenue: 15000 },
  { month: "Apr", revenue: 22000 }, { month: "May", revenue: 28000 }, { month: "Jun", revenue: 25000 },
];

const Sales = () => (
  <div>
    <h1 className="text-2xl font-bold text-foreground mb-1">Sales</h1>
    <p className="text-sm text-muted-foreground mb-6">Your revenue and sales performance</p>
    <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-6">
      <StatCard title="Total Sales" value="$284,500" change="15.3%" icon={DollarSign} />
      <StatCard title="Growth Rate" value="23.5%" change="4.2%" icon={TrendingUp} />
      <StatCard title="Items Sold" value="12,456" change="8.7%" icon={ShoppingBag} />
    </div>
    <div className="rounded-xl border border-border bg-card p-5">
      <h3 className="text-sm font-bold text-foreground mb-4">Revenue Over Time</h3>
      <ResponsiveContainer width="100%" height={280}>
        <LineChart data={data}>
          <XAxis dataKey="month" axisLine={false} tickLine={false} tick={{ fontSize: 11, fill: "hsl(var(--muted-foreground))" }} />
          <YAxis axisLine={false} tickLine={false} tickFormatter={(v) => `$${v / 1000}k`} tick={{ fontSize: 11, fill: "hsl(var(--muted-foreground))" }} />
          <Tooltip formatter={(v: number) => [`$${v.toLocaleString()}`, "Revenue"]} />
          <Line type="monotone" dataKey="revenue" stroke="hsl(var(--chart-line))" strokeWidth={2} dot={{ r: 4, fill: "hsl(var(--card))", stroke: "hsl(var(--chart-dot))", strokeWidth: 2 }} />
        </LineChart>
      </ResponsiveContainer>
    </div>
  </div>
);

export default Sales;
