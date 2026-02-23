import { 
  LayoutDashboard, Wallet, ArrowLeftRight, Send, Download, CreditCard, 
  FileText, BarChart3, Settings, LogOut, HelpCircle, Ban
} from "lucide-react";
import { cn } from "@/lib/utils";

const navSections = [
  {
    label: "MONEY TOOLS",
    items: [
      { icon: LayoutDashboard, label: "Dashboard", active: true },
      { icon: Wallet, label: "Wallets" },
      { icon: ArrowLeftRight, label: "Convert" },
      { icon: Send, label: "Send Money" },
      { icon: Download, label: "Receive Money" },
      { icon: Ban, label: "Withdraw" },
    ],
  },
  {
    label: "BUSINESS",
    items: [
      { icon: CreditCard, label: "Cards" },
      { icon: FileText, label: "Invoices" },
    ],
  },
  {
    label: "SUPPORT",
    items: [
      { icon: BarChart3, label: "Analytics" },
      { icon: Settings, label: "Settings" },
    ],
  },
];

const AppSidebar = () => {
  return (
    <aside className="w-[220px] min-h-screen bg-sidebar border-r border-sidebar-border flex flex-col">
      {/* Logo */}
      <div className="px-5 py-5 flex items-center gap-2">
        <div className="w-8 h-8 rounded-lg bg-primary flex items-center justify-center">
          <span className="text-primary-foreground font-bold text-sm">A</span>
        </div>
        <span className="font-bold text-lg text-foreground">AlecerPay</span>
      </div>

      {/* Navigation */}
      <nav className="flex-1 px-3 mt-2">
        {navSections.map((section) => (
          <div key={section.label} className="mb-5">
            <p className="px-3 mb-2 text-[11px] font-semibold tracking-wider text-sidebar-muted uppercase">
              {section.label}
            </p>
            <ul className="space-y-0.5">
              {section.items.map((item) => (
                <li key={item.label}>
                  <button
                    className={cn(
                      "w-full flex items-center gap-3 px-3 py-2 rounded-lg text-sm font-medium transition-colors",
                      item.active
                        ? "bg-primary text-primary-foreground shadow-sm"
                        : "text-sidebar-foreground hover:bg-sidebar-accent hover:text-sidebar-accent-foreground"
                    )}
                  >
                    <item.icon className="w-4 h-4" />
                    {item.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </nav>

      {/* Logout */}
      <div className="px-3 mb-3">
        <button className="w-full flex items-center gap-3 px-3 py-2 rounded-lg text-sm font-medium text-destructive hover:bg-destructive/10 transition-colors">
          <LogOut className="w-4 h-4" />
          Logout
        </button>
      </div>

      {/* Help Card */}
      <div className="mx-3 mb-4 p-3 rounded-xl bg-primary text-primary-foreground">
        <div className="flex items-center gap-2 mb-1">
          <HelpCircle className="w-4 h-4" />
          <span className="text-xs font-semibold">Need help?</span>
        </div>
        <p className="text-[11px] opacity-80 leading-tight">
          Got some questions, inquiries or need help?
        </p>
        <a href="#" className="text-[11px] underline opacity-90 mt-1 inline-block">
          Visit AlecerPay Help Desk Here
        </a>
      </div>
    </aside>
  );
};

export default AppSidebar;
