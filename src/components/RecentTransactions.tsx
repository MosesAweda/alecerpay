const transactions = [
  {
    name: "John Smith",
    date: "Today, 2:30 PM",
    amount: "+$250.00",
    status: "Completed",
    statusColor: "text-success",
    amountColor: "text-success",
    avatar: "JS",
  },
  {
    name: "Sarah Johnson",
    date: "Today, 11:15 AM",
    amount: "-$180.00",
    status: "Pending",
    statusColor: "text-warning",
    amountColor: "text-foreground",
    avatar: "SJ",
  },
  {
    name: "Tech Corp Ltd",
    date: "Yesterday, 4:45 PM",
    amount: "+€500.00",
    status: "Completed",
    statusColor: "text-success",
    amountColor: "text-success",
    avatar: "TC",
  },
  {
    name: "Monthly Subscription",
    date: "Dec 28, 9:00 AM",
    amount: "-€75.50",
    status: "Reversed",
    statusColor: "text-destructive",
    amountColor: "text-foreground",
    avatar: "MS",
  },
];

const RecentTransactions = () => {
  return (
    <section>
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-lg font-semibold text-foreground">Recent Transactions</h2>
        <button className="text-sm text-primary font-medium hover:underline">View All</button>
      </div>
      <div className="bg-card border border-border rounded-xl divide-y divide-border">
        {transactions.map((tx, i) => (
          <div key={i} className="flex items-center justify-between px-5 py-4">
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-full bg-primary/10 flex items-center justify-center">
                <span className="text-xs font-semibold text-primary">{tx.avatar}</span>
              </div>
              <div>
                <p className="text-sm font-medium text-foreground">{tx.name}</p>
                <p className="text-xs text-muted-foreground">{tx.date}</p>
              </div>
            </div>
            <div className="text-right">
              <p className={`text-sm font-semibold ${tx.amountColor}`}>{tx.amount}</p>
              <p className={`text-xs font-medium ${tx.statusColor}`}>{tx.status}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default RecentTransactions;
