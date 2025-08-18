import { cn } from "@/lib/utils";

interface ContainerProps {
  children: React.ReactNode;
  className?: string;
  /** 
   * Container width variant:
   * - "default": max-w-7xl (1280px) - Standard for most content
   * - "wide": max-w-9xl (1536px) - For sliders and wide content
   * - "full": max-w-full - Full width, no max constraint
   */
  width?: "default" | "wide" | "full";
}

export default function Container({ children, className, width = "default" }: ContainerProps) {
  const widthClasses = {
    default: "max-w-7xl",
    wide: "max-w-9xl", 
    full: "max-w-full"
  };

  return (
    <div className={cn("mx-auto px-4 sm:px-6 lg:px-8", widthClasses[width], className)}>
      {children}
    </div>
  );
}
