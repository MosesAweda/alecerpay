"use client";

import TopBar from "@/components/TopBar";
import WalletCards from "@/components/WalletCards";
import QuickActions from "@/components/QuickActions";
import RecentTransactions from "@/components/RecentTransactions";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <TopBar />
      <main className="flex-1 p-4 sm:p-5 md:p-6 overflow-auto">
        <div className="">
          <h1 className="text-xl sm:text-2xl font-bold text-foreground mb-1">Welcome back, Joy!</h1>
          <p className="text-xs sm:text-base text-muted-foreground mb-6 sm:mb-8">Here's your financial overview</p>

          <div className="space-y-4 sm:space-y-6">
            <WalletCards />
            <QuickActions />
            <RecentTransactions />
          </div>
        </div>
      </main>
    </div>
  );
}
