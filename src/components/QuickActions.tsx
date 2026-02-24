import { Plus, ArrowLeftRight, ArrowUpRight, FileText } from "lucide-react";

const actions = [
  { icon: Plus, label: "Add Money", color: "text-primary" },
  { icon: ArrowLeftRight, label: "Convert", color: "text-primary" },
  { icon: ArrowUpRight, label: "Send Money", color: "text-primary" },
  { icon: FileText, label: "Create Invoice", color: "text-primary" },
];

const QuickActions = () => {
  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-2 sm:gap-3 md:gap-4">
      {actions.map((action) => (
        <button
          key={action.label}
          className="flex flex-col items-center justify-center gap-1.5 sm:gap-2 py-3 sm:py-4 md:py-5 px-2 sm:px-3 bg-card border border-border border-primary/30 rounded-lg sm:rounded-xl hover:bg-primary/5 transition-colors group"
        >
          <action.icon className={`w-4 sm:w-5 h-4 sm:h-5 ${action.color} group-hover:scale-110 transition-transform`} />
          <span className="text-[10px] sm:text-sm font-medium text-primary text-center leading-tight">{action.label}</span>
        </button>
      ))}
    </div>
  );
};

export default QuickActions;
