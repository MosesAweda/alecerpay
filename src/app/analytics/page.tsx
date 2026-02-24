"use client";

import TopBar from "@/components/TopBar";
import ComingSoon from "@/components/ComingSoon";

export default function AnalyticsPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <TopBar />
      <main className="flex-1 overflow-auto">
        <ComingSoon title="Analytics" description="View your financial analytics and insights" />
      </main>
    </div>
  );
}
