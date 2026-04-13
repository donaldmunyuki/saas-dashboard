import { LucideIcon, MoreVertical } from "lucide-react";

interface StatCardProps {
  title: string;
  value: string;
  change: string;
  icon: LucideIcon;
  positive?: boolean;
}

export const StatCard = ({ title, value, change, icon: Icon, positive = true }: StatCardProps) => {
  return (
    <div className="rounded-xl border border-border bg-card p-4 md:p-5">
      <div className="flex items-center justify-between mb-3">
        <div className="flex items-center gap-2">
          <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-primary text-primary-foreground">
            <Icon size={18} />
          </div>
          <button className="rounded-lg bg-primary px-3 py-1.5 text-xs font-medium text-primary-foreground">
            Report ↓
          </button>
        </div>
        <button className="text-muted-foreground hover:text-foreground">
          <MoreVertical size={16} />
        </button>
      </div>
      <p className="text-sm text-muted-foreground">{title}</p>
      <div className="mt-1 flex items-baseline gap-2">
        <span className="text-2xl font-bold text-foreground">{value}</span>
        <span className={`text-xs font-medium ${positive ? "text-success" : "text-destructive"}`}>
          ↗ {change}
        </span>
      </div>
    </div>
  );
};
