import AppSidebar from "@/components/AppSidebar";
import TopBar from "@/components/TopBar";
import WalletCards from "@/components/WalletCards";
import QuickActions from "@/components/QuickActions";
import RecentTransactions from "@/components/RecentTransactions";

const Index = () => {
  return (
    <div className="flex min-h-screen bg-background">
      <AppSidebar />
      <div className="flex-1 flex flex-col">
        <TopBar />
        <main className="flex-1 p-6 overflow-auto">
          <div className="max-w-5xl">
            <h1 className="text-2xl font-bold text-foreground mb-1">Welcome back, Joy!</h1>
            <p className="text-muted-foreground mb-8">Here's your financial overview</p>

            <div className="space-y-6">
              <WalletCards />
              <QuickActions />
              <RecentTransactions />
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};

export default Index;
