"use client";

import TopBar from "@/components/TopBar";
import ComingSoon from "@/components/ComingSoon";

export default function SettingsPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <TopBar />
      <main className="flex-1 overflow-auto">
        <ComingSoon title="Settings" description="Customize your account preferences" />
      </main>
    </div>
  );
}
