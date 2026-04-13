import { useState } from "react";
import { ChevronLeft, ChevronRight, Plus } from "lucide-react";

const DAYS = ["S", "S", "M", "T", "W", "T", "F"];

export const CalendarWidget = () => {
  const [currentDate] = useState(new Date(2022, 11, 2));
  const today = 3;

  const daysInMonth = new Date(currentDate.getFullYear(), currentDate.getMonth() + 1, 0).getDate();
  const firstDay = new Date(currentDate.getFullYear(), currentDate.getMonth(), 1).getDay();

  const prevMonthDays = new Date(currentDate.getFullYear(), currentDate.getMonth(), 0).getDate();
  const cells: { day: number; current: boolean }[] = [];

  for (let i = firstDay - 1; i >= 0; i--) {
    cells.push({ day: prevMonthDays - i, current: false });
  }
  for (let i = 1; i <= daysInMonth; i++) {
    cells.push({ day: i, current: true });
  }
  const remaining = 7 - (cells.length % 7);
  if (remaining < 7) {
    for (let i = 1; i <= remaining; i++) {
      cells.push({ day: i, current: false });
    }
  }

  return (
    <div className="rounded-xl border border-border bg-card p-4 md:p-5">
      <button className="mb-4 w-full rounded-lg bg-primary py-2.5 text-sm font-semibold text-primary-foreground hover:opacity-90 flex items-center justify-center gap-2">
        <Plus size={16} />
        Add Auto Listing
      </button>

      <div className="flex items-center justify-between mb-3">
        <span className="text-sm font-semibold text-foreground">
          {currentDate.toLocaleDateString("en-US", { month: "long", day: "numeric", year: "numeric" })}
        </span>
        <div className="flex gap-1">
          <button className="p-1 text-muted-foreground hover:text-foreground"><ChevronLeft size={14} /></button>
          <button className="p-1 text-muted-foreground hover:text-foreground"><ChevronRight size={14} /></button>
        </div>
      </div>

      <div className="grid grid-cols-7 gap-1 text-center">
        {DAYS.map((d, i) => (
          <div key={i} className="text-[10px] font-medium text-muted-foreground py-1">{d}</div>
        ))}
        {cells.map((cell, i) => (
          <div
            key={i}
            className={`rounded-full py-1 text-xs ${
              !cell.current
                ? "text-muted-foreground/40"
                : cell.day === today
                ? "bg-primary text-primary-foreground font-semibold"
                : "text-foreground hover:bg-muted cursor-pointer"
            }`}
          >
            {cell.day}
          </div>
        ))}
      </div>
    </div>
  );
};
