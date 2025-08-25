import { cn } from "@/lib/utils";

interface CardProps {
  children: React.ReactNode;
  className?: string;
}

export default function Card({ children, className }: CardProps) {
  return (
    <div className={cn("rounded-xl border border-border bg-white p-6 shadow-sm", className)}>
      {children}
    </div>
  );
}
