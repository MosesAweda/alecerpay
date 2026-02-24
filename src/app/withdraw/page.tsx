"use client";

import TopBar from "@/components/TopBar";
import ComingSoon from "@/components/ComingSoon";

export default function WithdrawPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <TopBar />
      <main className="flex-1 overflow-auto">
        <ComingSoon title="Withdraw" description="Withdraw your funds with ease" />
      </main>
    </div>
  );
}
