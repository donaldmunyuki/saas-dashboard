import { ExternalLink } from "lucide-react";

const countries = [
  { name: "United States", value: "1,40,987", pct: 40 },
  { name: "Canada", value: "3,47,153", pct: 55 },
  { name: "Mexico", value: "5,98,500", pct: 70 },
  { name: "Brazil", value: "2,98,485", pct: 45 },
];

export const CountriesWidget = () => {
  return (
    <div className="rounded-xl border border-border bg-card p-4 md:p-5">
      <div className="flex items-center justify-between mb-4">
        <h3 className="text-sm font-bold text-foreground">Countries</h3>
        <ExternalLink size={14} className="text-muted-foreground" />
      </div>
      <div className="space-y-4">
        {countries.map((c) => (
          <div key={c.name}>
            <div className="flex items-center justify-between mb-1">
              <span className="text-sm text-foreground">{c.name}</span>
              <span className="text-sm font-medium text-foreground">{c.value}</span>
            </div>
            <div className="h-1.5 rounded-full bg-muted">
              <div className="h-1.5 rounded-full bg-primary" style={{ width: `${c.pct}%` }} />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
