import { TrendingUp, TrendingDown, AlertTriangle, CheckCircle } from "lucide-react";

const creditData = [
  { label: "Credit Score", value: "742", status: "Good", icon: CheckCircle, color: "text-success" },
  { label: "Credit Utilization", value: "23%", status: "Low", icon: TrendingDown, color: "text-success" },
  { label: "Payment History", value: "98%", status: "Excellent", icon: TrendingUp, color: "text-success" },
  { label: "Open Accounts", value: "5", status: "Normal", icon: CheckCircle, color: "text-info" },
];

const history = [
  { date: "Jan 2023", score: 742, change: "+5" },
  { date: "Dec 2022", score: 737, change: "+12" },
  { date: "Nov 2022", score: 725, change: "-3" },
  { date: "Oct 2022", score: 728, change: "+8" },
];

const CreditReport = () => (
  <div>
    <h1 className="text-2xl font-bold text-foreground mb-1">Credit Report</h1>
    <p className="text-sm text-muted-foreground mb-6">Your financial health overview</p>
    <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-4 mb-6">
      {creditData.map((d, i) => (
        <div key={i} className="rounded-xl border border-border bg-card p-5">
          <div className="flex items-center justify-between mb-2">
            <p className="text-sm text-muted-foreground">{d.label}</p>
            <d.icon size={18} className={d.color} />
          </div>
          <p className="text-2xl font-bold text-foreground">{d.value}</p>
          <p className={`text-xs font-medium mt-1 ${d.color}`}>{d.status}</p>
        </div>
      ))}
    </div>
    <div className="rounded-xl border border-border bg-card p-5">
      <h3 className="text-sm font-bold text-foreground mb-4">Score History</h3>
      <div className="space-y-3">
        {history.map((h, i) => (
          <div key={i} className="flex items-center justify-between rounded-lg border border-border p-3">
            <span className="text-sm text-foreground">{h.date}</span>
            <span className="text-sm font-bold text-foreground">{h.score}</span>
            <span className={`text-xs font-medium ${h.change.startsWith("+") ? "text-success" : "text-destructive"}`}>{h.change}</span>
          </div>
        ))}
      </div>
    </div>
  </div>
);

export default CreditReport;
