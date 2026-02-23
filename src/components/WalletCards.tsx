import { Eye, EyeOff, Copy } from "lucide-react";

const wallets = [
  { currency: "NGN", symbol: "₦", flag: "🇳🇬", balance: "****", level: "KYC Level 1", levelColor: "bg-primary", acctNum: "****96403" },
  { currency: "USD", symbol: "$", flag: "🇺🇸", balance: "****", level: "KYC Level 2", levelColor: "bg-success", acctNum: "****96403" },
  { currency: "GBP", symbol: "£", flag: "🇬🇧", balance: "****", level: "KYC Level 2", levelColor: "bg-success", acctNum: "****96403" },
  { currency: "EUR", symbol: "€", flag: "🇪🇺", balance: "****", level: "Verified", levelColor: "bg-success", acctNum: "****96403" },
];

const WalletCards = () => {
  return (
    <section>
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-lg font-semibold text-foreground">Your Wallets</h2>
        <button className="flex items-center gap-1.5 text-sm text-muted-foreground hover:text-foreground transition-colors">
          <Eye className="w-4 h-4" />
          Show
        </button>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {wallets.map((w) => (
          <div
            key={w.currency}
            className="bg-card border border-border rounded-xl p-4 relative"
          >
            <div className="flex items-center justify-between mb-3">
              <div className="flex items-center gap-2">
                <span className="text-lg">{w.flag}</span>
                <span className="text-sm font-medium text-muted-foreground">{w.currency}</span>
              </div>
              <span className={`text-[10px] font-medium px-2 py-0.5 rounded-full text-primary-foreground ${w.levelColor}`}>
                {w.level}
              </span>
            </div>
            <div className="flex items-center gap-2 mb-3">
              <span className="text-xl font-bold text-foreground">
                {w.symbol}{w.balance}
              </span>
              <button className="text-muted-foreground hover:text-foreground">
                <EyeOff className="w-4 h-4" />
              </button>
            </div>
            <div className="flex items-center gap-1.5 text-xs text-muted-foreground">
              <span>{w.acctNum}</span>
              <button className="hover:text-foreground">
                <Copy className="w-3 h-3" />
              </button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default WalletCards;
