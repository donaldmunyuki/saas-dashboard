import { Filter } from "lucide-react";

const products = [
  { name: "iPhone 14 Pro Max", price: "$2400 X 3", date: "12 Dec 2022", stock: true, pending: true },
  { name: "Leotech Bluetooth Headphone", price: "$2400 X 3", date: "8 Dec 2022", stock: true, pending: true },
  { name: "iPhone 14 Pro Max", price: "$2400 X 3", date: "6 Dec 2022", stock: true, pending: true },
];

export const BestSellingProducts = () => {
  return (
    <div className="rounded-xl border border-border bg-card p-4 md:p-5">
      <div className="flex items-center justify-between mb-4">
        <h3 className="text-sm font-bold text-foreground">Best Selling Products</h3>
        <button className="flex items-center gap-1.5 rounded-lg border border-border px-3 py-1.5 text-xs text-muted-foreground hover:text-foreground">
          <Filter size={12} />
          Filter
        </button>
      </div>
      <div className="space-y-3">
        {products.map((p, i) => (
          <div key={i} className="flex items-center gap-3 rounded-lg border border-border p-3">
            <div className="h-10 w-10 rounded-lg bg-muted flex items-center justify-center text-xs font-bold text-muted-foreground">
              📱
            </div>
            <div className="flex-1 min-w-0">
              <p className="text-sm font-medium text-foreground truncate">{p.name}</p>
              <p className="text-xs text-muted-foreground">{p.price}</p>
            </div>
            <div className="hidden sm:block text-right">
              <p className="text-xs text-muted-foreground">{p.date}</p>
              <div className="mt-1 flex gap-1.5">
                <span className="rounded-full bg-success/10 px-2 py-0.5 text-[10px] font-medium text-success">● In Stock</span>
                <span className="rounded-full bg-warning/10 px-2 py-0.5 text-[10px] font-medium text-warning">Pending</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
