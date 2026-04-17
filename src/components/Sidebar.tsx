import { NavLink, useLocation } from "react-router-dom";
import {
  LayoutGrid,
  BarChart3,
  ShoppingBag,
  Users,
  DollarSign,
  MessageSquare,
  Bell,
  FileText,
  Settings,
  X,
  Rocket,
} from "lucide-react";

const menuItems = [
  { label: "Dashboard", icon: LayoutGrid, path: "/" },
  { label: "Analytics", icon: BarChart3, path: "/analytics" },
  { label: "Orders", icon: ShoppingBag, path: "/orders" },
  { label: "Customers", icon: Users, path: "/customers" },
  { label: "Sales", icon: DollarSign, path: "/sales" },
  { label: "Messages", icon: MessageSquare, path: "/messages", badge: 23 },
  { label: "Notification", icon: Bell, path: "/notifications" },
];

const accountItems = [
  { label: "Credit Report", icon: FileText, path: "/credit-report" },
  { label: "Settings", icon: Settings, path: "/settings" },
];

interface SidebarProps {
  onClose: () => void;
}

export const Sidebar = ({ onClose }: SidebarProps) => {
  const location = useLocation();

  const linkClass = (path: string) => {
    const active = location.pathname === path;
    return `flex items-center gap-3 px-4 py-2.5 rounded-lg text-sm font-medium border border-transparent ${
      active
        ? "liquid-glass-active text-sidebar-active-fg"
        : "text-sidebar-fg liquid-glass-hover"
    }`;
  };

  return (
    <div className="flex h-full flex-col bg-sidebar-bg sidebar-scrollbar overflow-y-auto">
      {/* Logo */}
      <div className="flex items-center justify-between px-6 py-6">
        <span className="text-xl font-bold text-sidebar-fg">SaasCa.</span>
        <button onClick={onClose} className="text-sidebar-fg lg:hidden">
          <X size={20} />
        </button>
      </div>

      {/* Menu */}
      <div className="px-4">
        <p className="mb-2 px-4 text-xs font-semibold uppercase tracking-wider text-sidebar-heading">
          Menu
        </p>
        <nav className="flex flex-col gap-1">
          {menuItems.map((item) => (
            <NavLink key={item.path} to={item.path} className={linkClass(item.path)} onClick={onClose}>
              <item.icon size={18} />
              <span className="flex-1">{item.label}</span>
              {item.badge && (
                <span className="flex h-5 min-w-5 items-center justify-center rounded-full bg-sidebar-active text-xs text-sidebar-active-fg">
                  {item.badge}
                </span>
              )}
            </NavLink>
          ))}
        </nav>
      </div>

      {/* Account */}
      <div className="mt-6 px-4">
        <p className="mb-2 px-4 text-xs font-semibold uppercase tracking-wider text-sidebar-heading">
          Account
        </p>
        <nav className="flex flex-col gap-1">
          {accountItems.map((item) => (
            <NavLink key={item.path} to={item.path} className={linkClass(item.path)} onClick={onClose}>
              <item.icon size={18} />
              <span>{item.label}</span>
            </NavLink>
          ))}
        </nav>
      </div>

      {/* Upgrade */}
      <div className="mt-auto p-4">
        <div className="flex flex-col items-center rounded-xl bg-sidebar-hover p-4">
          <Rocket size={40} className="mb-2 text-sidebar-active" />
          <button className="mt-2 w-full rounded-lg bg-sidebar-active py-2.5 text-sm font-semibold text-sidebar-active-fg hover:opacity-90 transition-opacity">
            Upgrade to Pro
          </button>
        </div>
      </div>
    </div>
  );
};
