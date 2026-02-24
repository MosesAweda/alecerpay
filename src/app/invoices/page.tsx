"use client";

import TopBar from "@/components/TopBar";
import ComingSoon from "@/components/ComingSoon";

export default function InvoicesPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <TopBar />
      <main className="flex-1 overflow-auto">
        <ComingSoon title="Invoices" description="Create and manage your invoices" />
      </main>
    </div>
  );
}
