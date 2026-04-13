import { LineChart, Line, XAxis, YAxis, Tooltip, ResponsiveContainer } from "recharts";

const data = [
  { x: 21, value: 25000 },
  { x: 25, value: 30000 },
  { x: 32, value: 28000 },
  { x: 38, value: 32000 },
  { x: 44, value: 35000 },
  { x: 50, value: 40000 },
  { x: 56, value: 38000 },
  { x: 63, value: 42000 },
];

export const ProductVentory = () => {
  return (
    <div className="rounded-xl border border-border bg-card p-4 md:p-5">
      <h3 className="text-sm font-bold text-foreground">Product Ventory</h3>
      <p className="text-xs text-muted-foreground mb-4">Overall sales target and inventory report</p>
      <ResponsiveContainer width="100%" height={180}>
        <LineChart data={data}>
          <XAxis dataKey="x" axisLine={false} tickLine={false} tick={{ fontSize: 11, fill: "hsl(var(--muted-foreground))" }} />
          <YAxis axisLine={false} tickLine={false} tickFormatter={(v) => `$${v / 1000}k`} tick={{ fontSize: 11, fill: "hsl(var(--muted-foreground))" }} />
          <Tooltip formatter={(v: number) => [`$${v.toLocaleString()}`, "Value"]} />
          <Line type="monotone" dataKey="value" stroke="hsl(var(--chart-line))" strokeWidth={2} dot={{ r: 4, fill: "hsl(var(--card))", stroke: "hsl(var(--chart-dot))", strokeWidth: 2 }} activeDot={{ r: 6 }} />
        </LineChart>
      </ResponsiveContainer>
      <div className="mt-2 text-right">
        <span className="rounded-full bg-primary px-2 py-1 text-xs font-medium text-primary-foreground">
          Engagement +37%
        </span>
      </div>
    </div>
  );
};
