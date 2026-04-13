import { ShoppingBag, Package, Truck, DollarSign } from "lucide-react";
import { StatCard } from "@/components/StatCard";
import { ProductVentory } from "@/components/ProductVentory";
import { CountriesWidget } from "@/components/CountriesWidget";
import { BestSellingProducts } from "@/components/BestSellingProducts";
import { CalendarWidget } from "@/components/CalendarWidget";

const Orders = () => {
  return (
    <div>
      <div className="mb-6 flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <h1 className="text-2xl font-bold text-foreground">Orders</h1>
          <p className="text-sm text-muted-foreground">Your buying and selling transactions</p>
        </div>
        <div className="flex items-center gap-2">
          <select className="rounded-lg border border-border bg-card px-3 py-2 text-sm text-foreground">
            <option>Jan 23 - Jan 27</option>
          </select>
          <select className="rounded-lg border border-border bg-card px-3 py-2 text-sm text-foreground">
            <option>Google Analytics</option>
          </select>
        </div>
      </div>

      {/* Stats + Chart */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 mb-4">
        <div className="lg:col-span-2 grid grid-cols-1 sm:grid-cols-2 gap-4">
          <StatCard title="Total Orders" value="8,98,879" change="5.4%" icon={ShoppingBag} />
          <StatCard title="Pending Orders" value="1,13,976" change="3%" icon={Package} />
          <StatCard title="Dispatched" value="3,45,998" change="7.8%" icon={Truck} />
          <StatCard title="Revenue" value="$45,3,113" change="2.7%" icon={DollarSign} />
        </div>
        <ProductVentory />
      </div>

      {/* Bottom widgets */}
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-4">
        <CountriesWidget />
        <div className="md:col-span-1 xl:col-span-2">
          <BestSellingProducts />
        </div>
        <CalendarWidget />
      </div>
    </div>
  );
};

export default Orders;
