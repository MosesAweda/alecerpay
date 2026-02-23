import { Plus, ArrowLeftRight, Send, FileText } from "lucide-react";

const actions = [
  { icon: Plus, label: "Add Money", color: "text-primary" },
  { icon: ArrowLeftRight, label: "Convert", color: "text-primary" },
  { icon: Send, label: "Send", color: "text-primary" },
  { icon: FileText, label: "Create Invoice", color: "text-primary" },
];

const QuickActions = () => {
  return (
    <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
      {actions.map((action) => (
        <button
          key={action.label}
          className="flex flex-col items-center gap-2 py-5 bg-card border border-dashed border-primary/30 rounded-xl hover:bg-primary/5 transition-colors group"
        >
          <action.icon className={`w-5 h-5 ${action.color} group-hover:scale-110 transition-transform`} />
          <span className="text-sm font-medium text-primary">{action.label}</span>
        </button>
      ))}
    </div>
  );
};

export default QuickActions;
