import { Menu, Search } from "lucide-react";

interface TopBarProps {
  onMenuClick: () => void;
}

export const TopBar = ({ onMenuClick }: TopBarProps) => {
  return (
    <div className="flex items-center justify-between border-b border-border bg-card px-4 py-3 md:px-6">
      <div className="flex items-center gap-3">
        <button onClick={onMenuClick} className="text-foreground lg:hidden">
          <Menu size={22} />
        </button>
        <div className="hidden sm:flex items-center gap-2 rounded-lg border border-border bg-secondary px-3 py-2">
          <Search size={16} className="text-muted-foreground" />
          <input
            type="text"
            placeholder="Search Anything"
            className="bg-transparent text-sm outline-none placeholder:text-muted-foreground w-40 md:w-56"
          />
        </div>
      </div>
      <div className="flex items-center gap-3">
        <div className="h-9 w-9 rounded-full bg-primary flex items-center justify-center text-primary-foreground text-sm font-semibold">
          SD
        </div>
        <div className="hidden sm:block">
          <p className="text-sm font-semibold text-foreground">D. Munyuki</p>
          <p className="text-xs text-muted-foreground">hello@munyuki.co.za</p>
        </div>
      </div>
    </div>
  );
};
