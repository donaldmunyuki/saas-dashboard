import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer, PieChart, Pie, Cell } from "recharts";

const barData = [
  { name: "Mon", value: 4000 }, { name: "Tue", value: 3000 }, { name: "Wed", value: 5000 },
  { name: "Thu", value: 4500 }, { name: "Fri", value: 6000 }, { name: "Sat", value: 3500 }, { name: "Sun", value: 4200 },
];

const pieData = [
  { name: "Direct", value: 400 }, { name: "Social", value: 300 },
  { name: "Referral", value: 200 }, { name: "Organic", value: 278 },
];
const COLORS = ["hsl(245,50%,28%)", "hsl(245,50%,55%)", "hsl(210,80%,55%)", "hsl(145,60%,45%)"];

const Analytics = () => (
  <div>
    <h1 className="text-2xl font-bold text-foreground mb-1">Analytics</h1>
    <p className="text-sm text-muted-foreground mb-6">Your traffic and engagement metrics</p>
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
      <div className="rounded-xl border border-border bg-card p-5">
        <h3 className="text-sm font-bold text-foreground mb-4">Weekly Traffic</h3>
        <ResponsiveContainer width="100%" height={250}>
          <BarChart data={barData}>
            <XAxis dataKey="name" axisLine={false} tickLine={false} tick={{ fontSize: 11, fill: "hsl(var(--muted-foreground))" }} />
            <YAxis axisLine={false} tickLine={false} tick={{ fontSize: 11, fill: "hsl(var(--muted-foreground))" }} />
            <Tooltip />
            <Bar dataKey="value" fill="hsl(var(--primary))" radius={[6, 6, 0, 0]} />
          </BarChart>
        </ResponsiveContainer>
      </div>
      <div className="rounded-xl border border-border bg-card p-5">
        <h3 className="text-sm font-bold text-foreground mb-4">Traffic Sources</h3>
        <ResponsiveContainer width="100%" height={250}>
          <PieChart>
            <Pie data={pieData} cx="50%" cy="50%" innerRadius={60} outerRadius={90} paddingAngle={4} dataKey="value">
              {pieData.map((_, i) => <Cell key={i} fill={COLORS[i]} />)}
            </Pie>
            <Tooltip />
          </PieChart>
        </ResponsiveContainer>
        <div className="flex flex-wrap gap-3 mt-2 justify-center">
          {pieData.map((d, i) => (
            <div key={i} className="flex items-center gap-1.5 text-xs text-muted-foreground">
              <div className="h-2.5 w-2.5 rounded-full" style={{ backgroundColor: COLORS[i] }} />
              {d.name}
            </div>
          ))}
        </div>
      </div>
    </div>
  </div>
);

export default Analytics;
