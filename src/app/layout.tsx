import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import AppSidebar from "@/components/AppSidebar";
import "@/app/globals.css";
import { Providers } from "./providers";


export const metadata = {
  title: "AlecerPay - Financial Overview Dashboard",
  description: "Your financial overview dashboard",
 icons: {
    icon: "/logo.svg",
  },

}
export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <Providers>
          <TooltipProvider>
            <Toaster />
            <Sonner />
            <div className="flex min-h-screen bg-background">
              <AppSidebar />
              <div className="flex-1">
                {children}
              </div>
            </div>
          </TooltipProvider>
        </Providers>
      </body>
    </html>
  );
}
