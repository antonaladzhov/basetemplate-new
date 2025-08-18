import Link from "next/link";
import { cn } from "@/lib/utils";

interface ButtonProps {
  children: React.ReactNode;
  href?: string;
  variant?: "default" | "secondary" | "outline" | "ghost";
  size?: "sm" | "md" | "lg";
  className?: string;
  type?: "button" | "submit" | "reset";
  onClick?: () => void;
}

export default function Button({ 
  children, 
  href, 
  variant = "default", 
  size = "md", 
  className,
  type = "button",
  onClick 
}: ButtonProps) {
  const baseClasses = "inline-flex items-center justify-center font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 rounded-md";
  
  const variants = {
    default: "surface-primary text-on-primary hover:opacity-90",
    secondary: "surface-secondary text-on-secondary hover:opacity-90",
    outline: "border border-border surface-bg text-on-bg hover:bg-gray-50",
    ghost: "surface-bg text-on-bg hover:bg-gray-50",
  };
  
  const sizes = {
    sm: "h-8 px-3 text-sm",
    md: "h-10 px-4 py-2",
    lg: "h-12 px-8 text-lg",
  };

  const classes = cn(baseClasses, variants[variant], sizes[size], className);

  if (href) {
    return (
      <Link href={href} className={classes} style={{ textDecoration: 'none' }}>
        {children}
      </Link>
    );
  }

  return (
    <button type={type} className={classes} onClick={onClick}>
      {children}
    </button>
  );
}
