import { cn } from "@/lib/utils";

interface SelectProps {
  children: React.ReactNode;
  className?: string;
  "aria-label"?: string;
}

export default function Select({ children, className, "aria-label": ariaLabel }: SelectProps) {
  return (
    <select
      aria-label={ariaLabel}
      className={cn(
        "w-full rounded-xl border border-border bg-[var(--background)] px-4 py-3 text-sm",
        "focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20",
        className
      )}
    >
      {children}
    </select>
  );
}
