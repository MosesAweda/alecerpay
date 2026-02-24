"use client";

import { useState } from "react";
import { Eye, EyeOff, Copy, BadgeCheck, Lightbulb } from "lucide-react";

const wallets = [
  { currency: "NGN", symbol: "₦", flag: "🇳🇬", actualBalance: "₦2,500,000.00", level: "KYC Level 1", levelColor: "bg-blue-100 text-blue-800", acctNum: "****96403" },
  { currency: "USD", symbol: "$", flag: "🇺🇸", actualBalance: "$12,500.50", level: "KYC Level 2", levelColor: "bg-green-100 text-green-800", acctNum: "****96403" },
  { currency: "GBP", symbol: "£", flag: "🇬🇧", actualBalance: "£8,750.25", level: "KYC Level 2", levelColor: "bg-green-100 text-green-800", acctNum: "****96403" },
  { currency: "EUR", symbol: "€", flag: "🇪🇺", actualBalance: "€6,300.75", level: "Verified", levelColor: "bg-blue-100 text-blue-800", acctNum: "****96403" },
];

const WalletCards = () => {
  const [visibleBalances, setVisibleBalances] = useState<Record<string, boolean>>({});
  const [showAllBalances, setShowAllBalances] = useState(false);

  const toggleAllBalances = () => {
    const newState = !showAllBalances;
    setShowAllBalances(newState);
    // Set all wallets to the same state
    const newVisibleBalances: Record<string, boolean> = {};
    wallets.forEach((w) => {
      newVisibleBalances[w.currency] = newState;
    });
    setVisibleBalances(newVisibleBalances);
  };

  const toggleCardVisibility = (currency: string) => {
    setVisibleBalances((prev) => ({
      ...prev,
      [currency]: !prev[currency],
    }));
  };

  const isBalanceVisible = (currency: string) => {
    return visibleBalances[currency] === true;
  };

  return (
    <section className="w-full">
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 sm:gap-0 mb-4 sm:mb-6">
        <h2 className="text-base sm:text-lg font-semibold text-foreground">Your Wallets</h2>
        <button onClick={toggleAllBalances} className="flex items-center gap-1.5 text-xs sm:text-sm text-muted-foreground hover:text-foreground transition-colors">
          {showAllBalances ? (
            <Eye className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
          ) : (
            <EyeOff className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
          )}
          {showAllBalances ? "Hide All" : "Show All"}
        </button>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 sm:gap-4">
        {wallets.map((w) => {
          const isVisible = isBalanceVisible(w.currency);
          return (
            <div
              key={w.currency}
              className="bg-card border border-border rounded-lg sm:rounded-xl p-3 sm:p-4 relative"
            >
              <div className="flex items-center justify-between gap-2 mb-3">
                <div className="flex items-center gap-1.5 sm:gap-2 min-w-0">
                  <span className="text-base sm:text-lg flex-shrink-0">{w.flag}</span>
                  <span className="text-xs sm:text-sm font-medium text-muted-foreground truncate">{w.currency}</span>
                </div>
                <span className={`text-[9px] sm:text-[10px] font-medium px-1.5 sm:px-2  flex items-center py-0.5 rounded-full  whitespace-nowrap flex-shrink-0 ${w.levelColor}`}>
                  {w.level === "Verified" ? (
                    <BadgeCheck className="w-3.5 h-3.5 sm:w-4 sm:h-4 pr-1" />
                  ) : (
                    <Lightbulb className="w-3.5 h-3.5 sm:w-4 sm:h-4 pr-1" />
                  )}
                  {w.level}
                </span>
              </div>
              <div className="flex items-center  justify-between gap-2 mb-3 overflow-x-auto">
                <span className="text-lg sm:text-xl font-bold text-foreground truncate">
                  {w.symbol}{isVisible ? w.actualBalance.split(w.symbol)[1] : "****"}
                </span>
                <button 
                  onClick={() => toggleCardVisibility(w.currency)}
                  className="text-muted-foreground hover:text-foreground transition-colors flex-shrink-0"
                >
                  {isVisible ? (
                    <Eye className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
                  ) : (
                    <EyeOff className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
                  )}
                </button>
              </div>
              <div className="flex items-center gap-1 sm:gap-1.5 text-[10px] sm:text-xs text-muted-foreground overflow-x-auto">
                <span className="truncate">{w.acctNum}</span>
                <button className="hover:text-foreground transition-colors flex-shrink-0">
                  <Copy className="w-3 h-3" />
                </button>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default WalletCards;
