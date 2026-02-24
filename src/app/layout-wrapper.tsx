"use client";

import { usePathname } from "next/navigation";
import AppSidebar from "@/components/AppSidebar";

export function LayoutWrapper({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const isSignInPage = pathname === "/sign-in";

  if (isSignInPage) {
    return <div className="min-h-screen bg-background">{children}</div>;
  }

  return (
    <div className="flex min-h-screen bg-background">
      <AppSidebar />
      <div className="flex-1">{children}</div>
    </div>
  );
}
