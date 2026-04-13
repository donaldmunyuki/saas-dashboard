import { BarChart3, TrendingUp, Users, DollarSign } from "lucide-react";
import { StatCard } from "@/components/StatCard";
import { ProductVentory } from "@/components/ProductVentory";

const Dashboard = () => {
  return (
    <div>
      <h1 className="text-2xl font-bold text-foreground mb-1">Dashboard</h1>
      <p className="text-sm text-muted-foreground mb-6">Welcome back, here's your overview</p>
      <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-4 mb-6">
        <StatCard title="Total Revenue" value="$124,563" change="12.5%" icon={DollarSign} />
        <StatCard title="Total Users" value="45,231" change="8.2%" icon={Users} />
        <StatCard title="Conversion Rate" value="3.6%" change="1.2%" icon={TrendingUp} />
        <StatCard title="Active Sessions" value="1,893" change="4.1%" icon={BarChart3} />
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
        <ProductVentory />
        <div className="rounded-xl border border-border bg-card p-5">
          <h3 className="text-sm font-bold text-foreground mb-2">Recent Activity</h3>
          <div className="space-y-3">
            {["New order #1234 placed", "User John signed up", "Payment of $500 received", "Inventory updated for SKU-789", "Support ticket #42 resolved"].map((a, i) => (
              <div key={i} className="flex items-center gap-3 rounded-lg border border-border p-3">
                <div className="h-2 w-2 rounded-full bg-success" />
                <p className="text-sm text-foreground">{a}</p>
                <span className="ml-auto text-xs text-muted-foreground">{i + 1}h ago</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
