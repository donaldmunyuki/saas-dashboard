import { Search } from "lucide-react";

const customers = [
  { name: "John Cooper", email: "john@email.com", orders: 24, spent: "$4,500", status: "Active" },
  { name: "Sarah Wilson", email: "sarah@email.com", orders: 18, spent: "$3,200", status: "Active" },
  { name: "Mike Johnson", email: "mike@email.com", orders: 12, spent: "$2,100", status: "Inactive" },
  { name: "Emma Davis", email: "emma@email.com", orders: 31, spent: "$6,800", status: "Active" },
  { name: "Chris Lee", email: "chris@email.com", orders: 8, spent: "$1,400", status: "Active" },
];

const Customers = () => (
  <div>
    <div className="mb-6 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
      <div>
        <h1 className="text-2xl font-bold text-foreground">Customers</h1>
        <p className="text-sm text-muted-foreground">Manage your customer base</p>
      </div>
      <div className="flex items-center gap-2 rounded-lg border border-border bg-card px-3 py-2">
        <Search size={16} className="text-muted-foreground" />
        <input type="text" placeholder="Search customers..." className="bg-transparent text-sm outline-none placeholder:text-muted-foreground w-40" />
      </div>
    </div>
    <div className="rounded-xl border border-border bg-card overflow-x-auto">
      <table className="w-full text-sm">
        <thead>
          <tr className="border-b border-border">
            <th className="px-4 py-3 text-left font-semibold text-muted-foreground">Name</th>
            <th className="px-4 py-3 text-left font-semibold text-muted-foreground hidden sm:table-cell">Email</th>
            <th className="px-4 py-3 text-left font-semibold text-muted-foreground">Orders</th>
            <th className="px-4 py-3 text-left font-semibold text-muted-foreground hidden md:table-cell">Spent</th>
            <th className="px-4 py-3 text-left font-semibold text-muted-foreground">Status</th>
          </tr>
        </thead>
        <tbody>
          {customers.map((c, i) => (
            <tr key={i} className="border-b border-border last:border-0 hover:bg-muted/50">
              <td className="px-4 py-3 font-medium text-foreground">{c.name}</td>
              <td className="px-4 py-3 text-muted-foreground hidden sm:table-cell">{c.email}</td>
              <td className="px-4 py-3 text-foreground">{c.orders}</td>
              <td className="px-4 py-3 text-foreground hidden md:table-cell">{c.spent}</td>
              <td className="px-4 py-3">
                <span className={`rounded-full px-2.5 py-0.5 text-xs font-medium ${c.status === "Active" ? "bg-success/10 text-success" : "bg-muted text-muted-foreground"}`}>
                  {c.status}
                </span>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  </div>
);

export default Customers;
