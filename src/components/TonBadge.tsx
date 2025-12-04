import { cn } from "@/lib/utils";

interface TonBadgeProps {
  amount: string;
  className?: string;
}

export const TonBadge = ({ amount, className }: TonBadgeProps) => {
  return (
    <div
      className={cn(
        "inline-flex items-center justify-center",
        "bg-accent rounded-pill",
        "px-4 py-2",
        "border-2 border-badge-border",
        "shadow-badge",
        "transform rotate-12",
        "animate-badge-bounce",
        className
      )}
    >
      <span className="text-accent-foreground font-bold text-sm whitespace-nowrap">
        {amount}
      </span>
    </div>
  );
};
