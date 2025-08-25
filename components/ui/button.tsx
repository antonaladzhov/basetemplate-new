import Link from "next/link";
import { cn } from "@/lib/utils";

interface ButtonProps {
  children: React.ReactNode;
  href?: string;
  variant?: "primary" | "secondary" | "accent" | "outline" | "ghost" | "destructive";
  size?: "sm" | "md" | "lg";
  className?: string;
  type?: "button" | "submit" | "reset";
  onClick?: () => void;
}

export default function Button({ 
  children, 
  href, 
  variant = "primary", 
  size = "md", 
  className,
  type = "button",
  onClick 
}: ButtonProps) {
  const buttonClasses = cn(
    "btn",
    `btn-${variant}`,
    size !== "md" && `btn-${size}`,
    className
  );

  if (href) {
    return (
      <Link href={href} className={buttonClasses}>
        {children}
      </Link>
    );
  }

  return (
    <button type={type} className={buttonClasses} onClick={onClick}>
      {children}
    </button>
  );
}
