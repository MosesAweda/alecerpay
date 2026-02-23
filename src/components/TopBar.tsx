import { Bell } from "lucide-react";

const TopBar = () => {
  return (
    <header className="h-16 flex items-center justify-end px-6 border-b border-border bg-card">
      <div className="flex items-center gap-4">
        <button className="relative text-muted-foreground hover:text-foreground transition-colors">
          <Bell className="w-5 h-5" />
        </button>
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 rounded-full bg-primary/20 flex items-center justify-center">
            <span className="text-xs font-semibold text-primary">JK</span>
          </div>
          <span className="text-sm font-medium text-foreground">Joy Keleb</span>
        </div>
      </div>
    </header>
  );
};

export default TopBar;
