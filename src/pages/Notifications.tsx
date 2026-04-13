import { Bell, Package, CreditCard, AlertCircle } from "lucide-react";

const notifications = [
  { icon: Package, title: "Order #1234 shipped", desc: "Your order has been dispatched successfully", time: "5 min ago", read: false },
  { icon: CreditCard, title: "Payment received", desc: "Payment of $2,400 from John Cooper", time: "1 hour ago", read: false },
  { icon: AlertCircle, title: "Low inventory alert", desc: "iPhone 14 Pro Max stock below 10 units", time: "2 hours ago", read: true },
  { icon: Bell, title: "New review posted", desc: "Sarah Wilson left a 5-star review", time: "4 hours ago", read: true },
  { icon: Package, title: "Return requested", desc: "Return request for order #1189", time: "6 hours ago", read: true },
];

const Notifications = () => (
  <div>
    <h1 className="text-2xl font-bold text-foreground mb-1">Notifications</h1>
    <p className="text-sm text-muted-foreground mb-6">Stay updated with your latest alerts</p>
    <div className="space-y-3">
      {notifications.map((n, i) => (
        <div key={i} className={`flex items-start gap-4 rounded-xl border border-border bg-card p-4 ${!n.read ? "border-l-4 border-l-primary" : ""}`}>
          <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-primary/10 text-primary">
            <n.icon size={18} />
          </div>
          <div className="flex-1 min-w-0">
            <p className="text-sm font-semibold text-foreground">{n.title}</p>
            <p className="text-xs text-muted-foreground mt-0.5">{n.desc}</p>
          </div>
          <span className="text-[10px] text-muted-foreground whitespace-nowrap">{n.time}</span>
        </div>
      ))}
    </div>
  </div>
);

export default Notifications;
