"use client";

import TopBar from "@/components/TopBar";
import ComingSoon from "@/components/ComingSoon";

export default function SendMoneyPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <TopBar />
      <main className="flex-1 overflow-auto">
        <ComingSoon title="Send Money" description="Send money to anyone, anywhere" />
      </main>
    </div>
  );
}
