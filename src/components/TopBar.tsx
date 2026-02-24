import { Bell } from "lucide-react";
import Image from "next/image";

const TopBar = () => {
  return (
    <header className="h-14 sm:h-16 flex items-center justify-end px-3 sm:px-4 md:px-6 border-b border-border bg-card">
      <div className="flex items-center gap-2 sm:gap-3 md:gap-4">
        <button className="relative text-muted-foreground hover:text-foreground transition-colors p-1 sm:p-0">
          <Bell className="w-4 sm:w-5 h-4 sm:h-5" />
        </button>
        <div className="flex items-center gap-1.5 sm:gap-2 md:gap-3">
             <Image src="/Container.png" alt="avatar" width={24} height={24} className="flex-shrink-0" />
          <span className="text-xs sm:text-sm font-medium text-foreground hidden xs:inline">Joy Keleb</span>
        </div>
      </div>
    </header>
  );
};

export default TopBar;
