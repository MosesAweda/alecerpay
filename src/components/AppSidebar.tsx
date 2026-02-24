"use client";
import Image from "next/image";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { useState } from "react";
import { 
  LayoutDashboard, Wallet, ArrowLeftRight, Send, Download, CreditCard, 
  FileText, BarChart3, Settings, LogOut, HelpCircle, Ban, Menu, X, PanelLeft, PanelRight
} from "lucide-react";
import { cn } from "@/lib/utils";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Tooltip, TooltipContent, TooltipTrigger } from "@/components/ui/tooltip";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogHeader,
  AlertDialogTitle,
} from "@/components/ui/alert-dialog";

const navSections = [
  {
    label: "MONEY TOOLS",
    items: [
      { icon: LayoutDashboard, label: "Dashboard", href: "/" },
      { icon: Wallet, label: "Wallets", href: "/wallets" },
      { icon: ArrowLeftRight, label: "Convert", href: "/convert" },
      { icon: Send, label: "Send Money", href: "/send-money" },
      { icon: Download, label: "Receive Money", href: "/receive-money" },
      { icon: Ban, label: "Withdraw", href: "/withdraw" },
    ],
  },
  {
    label: "BUSINESS",
    items: [
      { icon: CreditCard, label: "Cards", href: "/cards" },
      { icon: FileText, label: "Invoices", href: "/invoices" },
    ],
  },
  {
    label: "SUPPORT",
    items: [
      { icon: BarChart3, label: "Analytics", href: "/analytics" },
      { icon: Settings, label: "Settings", href: "/settings" },
    ],
  },
];

const SidebarContent = ({ collapsed = false, pathname, onLogoutClick }: { collapsed?: boolean; pathname: string; onLogoutClick?: () => void }) => (
  <>
    {/* Logo & Collapse Button */}
    <div className="px-3 sm:px-4 md:px-5 py-3 md:py-2 flex items-center gap-2 justify-between">
      {!collapsed && (
        <>
          <div className="flex items-center gap-2">
            <Image src="/logo.svg" alt="AlecerPay Logo" width={24} height={24} className="flex-shrink-0" />
            <span className="font-bold text-base md:text-lg truncate" style={{color:'#007BFF'}}>AlecerPay</span>
          </div>
        </>
      )}
      {collapsed && (
        <div className="w-full flex justify-center">
          <Image src="/logo.svg" alt="AlecerPay Logo" width={24} height={24} className="flex-shrink-0" />
        </div>
      )}
    </div>

    {/* Navigation */}
    <nav className="flex-1 px-2 md:px-3 mt-2">
      {navSections.map((section) => (
        <div key={section.label} className="mb-4 md:mb-5">
          {!collapsed && (
            <p className="px-2 md:px-3 mb-2 text-[9px] md:text-[11px] font-semibold tracking-wider text-sidebar-muted uppercase">
              {section.label}
            </p>
          )}
          <ul className="space-y-0.5">
            {section.items.map((item) => {
              const isActive = pathname === item.href;
              return (
                <li key={item.label}>
                  <Tooltip>
                    <TooltipTrigger asChild>
                      <Link
                        href={item.href}
                        className={cn(
                          "w-full flex items-center gap-2 md:gap-3 px-2 md:px-3 py-1.5 md:py-2 rounded-lg text-xs md:text-sm font-medium transition-colors",
                          isActive
                            ? "bg-primary text-primary-foreground shadow-sm"
                            : "text-sidebar-foreground hover:bg-sidebar-accent hover:text-sidebar-accent-foreground"
                        )}
                      >
                        <item.icon className="w-4 h-4 flex-shrink-0" />
                        {!collapsed && <span className="truncate">{item.label}</span>}
                      </Link>
                    </TooltipTrigger>
                    {collapsed && (
                      <TooltipContent side="right">
                        {item.label}
                      </TooltipContent>
                    )}
                  </Tooltip>
                </li>
              );
            })}
          </ul>
        </div>
      ))}
    </nav>

    {/* Logout */}
    <div className="px-2 md:px-3 mb-3">
      <Tooltip>
        <TooltipTrigger asChild>
          <button onClick={onLogoutClick} className="w-full flex items-center gap-2 md:gap-3 px-2 md:px-3 py-1.5 md:py-2 rounded-lg text-xs md:text-sm font-medium text-destructive hover:bg-destructive/10 transition-colors">
            <LogOut className="w-4 h-4 flex-shrink-0" />
            {!collapsed && <span className="truncate">Logout</span>}
          </button>
        </TooltipTrigger>
        {collapsed && (
          <TooltipContent side="right">
            Logout
          </TooltipContent>
        )}
      </Tooltip>
    </div>

    {/* Help Card */}
    {!collapsed && (
      <div className="mx-2 md:mx-3 mb-4 p-2.5 md:p-3 rounded-lg md:rounded-xl bg-primary text-primary-foreground">
        <div className="flex items-center gap-2 mb-1">
          <HelpCircle className="w-3.5 md:w-4 h-3.5 md:h-4 flex-shrink-0" />
          <span className="text-[10px] md:text-xs font-semibold">Need help?</span>
        </div>
        <p className="text-[9px] md:text-[11px] opacity-80 leading-tight">
          Got some questions, inquiries or need help?
        </p>
        <a href="#" className="text-[9px] md:text-[11px] underline opacity-90 mt-1 inline-block">
          Visit AlecerPay Help Desk Here
        </a>
      </div>
    )}
  </>
);

const AppSidebar = ({ onOpenChange }: { onOpenChange?: (open: boolean) => void }) => {
  const pathname = usePathname();
  const router = useRouter();
  const [open, setOpen] = useState(false);
  const [collapsed, setCollapsed] = useState(false);
  const [logoutConfirm, setLogoutConfirm] = useState(false);

  const handleOpenChange = (newOpen: boolean) => {
    setOpen(newOpen);
    onOpenChange?.(newOpen);
  };

  const handleLogout = () => {
    // Close the dialog
    setLogoutConfirm(false);
    // Close mobile menu if open
    setOpen(false);
    // Redirect to sign-in page
    router.push("/sign-in");
  };

  return (
    <>
      {/* Desktop Sidebar */}
      <aside className={cn(
        "hidden md:flex md:min-h-screen bg-sidebar border-r border-sidebar-border flex-col transition-all duration-300",
        collapsed ? "md:w-[80px]" : "md:w-[220px]"
      )}>
        <div className="flex justify-end p-2">
          <Tooltip>
            <TooltipTrigger asChild>
              <button
                onClick={() => setCollapsed(!collapsed)}
                className="p-1.5 hover:bg-sidebar-accent rounded-lg transition-colors"
              >
                {collapsed ? (
                  <PanelRight className="w-4 h-4 text-sidebar-foreground" />
                ) : (
                  <PanelLeft className="w-4 h-4 text-sidebar-foreground" />
                )}
              </button>
            </TooltipTrigger>
            <TooltipContent side="right">
              {collapsed ? "Expand" : "Collapse"}
            </TooltipContent>
          </Tooltip>
        </div>
        <SidebarContent collapsed={collapsed} pathname={pathname} onLogoutClick={() => setLogoutConfirm(true)} />
      </aside>

      {/* Mobile Sidebar */}
      <div className="md:hidden">
        <Sheet open={open} onOpenChange={handleOpenChange}>
          <SheetTrigger asChild>
            <button className="fixed top-4 left-4 z-40 p-2 text-muted-foreground hover:text-foreground transition-colors md:hidden">
              <Menu className="w-5 h-5" />
            </button>
          </SheetTrigger>
          <SheetContent side="left" className="w-[220px] bg-sidebar border-r border-sidebar-border p-0 flex flex-col">
            <div className="flex-1 flex flex-col h-full">
              <SidebarContent collapsed={false} pathname={pathname} onLogoutClick={() => setLogoutConfirm(true)} />
            </div>
          </SheetContent>
        </Sheet>
      </div>

      {/* Logout Confirmation Dialog */}
      <AlertDialog open={logoutConfirm} onOpenChange={setLogoutConfirm}>
        <AlertDialogContent>
          <AlertDialogHeader>
            <AlertDialogTitle>Logout</AlertDialogTitle>
            <AlertDialogDescription>
              Are you sure you want to log out?
            </AlertDialogDescription>
          </AlertDialogHeader>
          <div className="flex gap-3 justify-end">
            <AlertDialogCancel>Cancel</AlertDialogCancel>
            <AlertDialogAction 
              onClick={handleLogout}
              className="bg-destructive hover:bg-destructive/90"
            >
              Logout
            </AlertDialogAction>
          </div>
        </AlertDialogContent>
      </AlertDialog>
    </>
  );
};

export default AppSidebar;
