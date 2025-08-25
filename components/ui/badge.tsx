import { cn } from "@/lib/utils";

interface BadgeProps {
  children: React.ReactNode;
  variant?: "default" | "success" | "warning" | "danger";
  className?: string;
}

export default function Badge({ children, variant = "default", className }: BadgeProps) {
  const variants = {
    default: "bg-muted text-text",
    success: "bg-[var(--accent)] text-[var(--accent-foreground)]",
warning: "bg-[var(--destructive)] text-[var(--destructive-foreground)]",
danger: "bg-[var(--destructive)] text-[var(--destructive-foreground)]"
  };

  return (
    <span className={cn(
      "inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-medium",
      variants[variant],
      className
    )}>
      {children}
    </span>
  );
}
