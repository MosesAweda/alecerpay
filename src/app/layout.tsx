import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import "@/app/globals.css";
import { Providers } from "./providers";
import { LayoutWrapper } from "./layout-wrapper";


export const metadata = {
  title: "AlecerPay - Financial Overview Dashboard",
  description: "Your financial overview dashboard",
  icons: {
    icon: "/logo.svg",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <Providers>
          <TooltipProvider>
            <Toaster />
            <Sonner />
            <LayoutWrapper>{children}</LayoutWrapper>
          </TooltipProvider>
        </Providers>
      </body>
    </html>
  );
}
