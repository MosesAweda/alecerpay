import { ArrowRightLeft } from "lucide-react";

const transactions = [
  {
    name: "John Smith",
    date: "Today, 2:30 PM",
    amount: "+$250.00",
    status: "Completed",
    statusColor: "text-success",
    amountColor: "text-success",
    type: "incoming",
    avatarBg: "bg-green-100",
    iconColor: "text-green-500",
    flag: "🇺🇸",
  },
  {
    name: "Sarah Johnson",
    date: "Today, 11:15 AM",
    amount: "-$180.00",
    status: "Pending",
    statusColor: "text-warning",
    amountColor: "text-foreground",
    type: "outgoing",
    avatarBg: "bg-red-100",
    iconColor: "text-red-400",
    flag: "🇬🇧",
  },
  {
    name: "Payment Reversal",
    date: "Today, 9:20 AM",
    amount: "+$75.00",
    status: "Completed",
    statusColor: "text-success",
    amountColor: "text-success",
    type: "reversal",
    avatarBg: "bg-blue-100",
    iconColor: "text-blue-500",
    flag: "",
  },
 
  {
    name: "Monthly Subscription",
    date: "Dec 28, 9:00 AM",
    amount: "-€75.50",
    status: "Completed",
    statusColor: "text-success",
    amountColor: "text-foreground",
    type: "incoming",
    avatarBg: "bg-green-100",
    iconColor: "text-green-500",
    flag: "🇳🇬",
  },
];

const IncomingIcon = ({ className }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
    <line x1="17" y1="7" x2="7" y2="17" />
    <polyline points="17 17 7 17 7 7" />
  </svg>
);

const OutgoingIcon = ({ className }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
    <line x1="7" y1="17" x2="17" y2="7" />
    <polyline points="7 7 17 7 17 17" />
  </svg>
);



const AvatarIcon = ({
  type,
  avatarBg,
  iconColor,
  flag,
}: {
  type: string;
  avatarBg: string;
  iconColor: string;
  flag: string;
}) => {
  const iconClass = `w-4 h-4 ${iconColor}`;
  return (
    <div className="relative flex-shrink-0 w-10 h-10">
      {/* Main circle */}
      <div className={`w-10 h-10 rounded-full ${avatarBg} flex items-center justify-center`}>
        {type === "incoming" && <IncomingIcon className={iconClass} />}
        {type === "outgoing" && <OutgoingIcon className={iconClass} />}
        {type === "reversal" && <ArrowRightLeft className={`w-4 h-4 ${iconColor}`} />}
      </div>
      {/* Flag badge — bottom-right corner */}
      <span
        className="absolute -bottom-0.5 -right-1 flex items-center justify-center w-5 h-5 rounded-full text-[11px] leading-none"
      >
        {flag}
      </span>
    </div>
  );
};

const RecentTransactions = () => {
  return (
    <section className="w-full">
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 sm:gap-0 mb-4 sm:mb-6">
        <h2 className="text-base sm:text-lg font-semibold text-foreground">Recent Transactions</h2>
        <button className="text-xs sm:text-sm text-primary font-medium hover:underline text-left sm:text-right">
          View All
        </button>
      </div>
      <div className="bg-card border border-border rounded-lg sm:rounded-xl divide-y divide-border overflow-hidden">
        {transactions.map((tx, i) => (
          <div key={i} className="flex items-center justify-between gap-2 px-3 sm:px-4 md:px-5 py-3 sm:py-4">
            <div className="flex items-center gap-3 min-w-0 flex-1">
              <AvatarIcon
                type={tx.type}
                avatarBg={tx.avatarBg}
                iconColor={tx.iconColor}
                flag={tx.flag}
              />
              <div className="min-w-0 flex-1">
                <p className="text-xs sm:text-sm font-medium text-foreground truncate">{tx.name}</p>
                <p className="text-[10px] sm:text-xs text-muted-foreground truncate">{tx.date}</p>
              </div>
            </div>
            <div className="text-right flex-shrink-0">
              <p className={`text-xs sm:text-sm font-semibold ${tx.amountColor}`}>{tx.amount}</p>
              <p className={`text-[10px] sm:text-xs font-medium ${tx.statusColor}`}>{tx.status}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default RecentTransactions;