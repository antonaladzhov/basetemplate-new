import { cn } from "@/lib/utils";

interface ContainerProps {
  children: React.ReactNode;
  className?: string;
  /**
   * Container width variant:
   * - "default": max-width 1200px - Standard for most content
   * - "wide": max-width 1400px - For sliders and wide content
   * - "narrow": max-width 800px - For focused content
   * - "full": max-width full - Full width, no max constraint
   */
  width?: "default" | "wide" | "narrow" | "full";
}

export default function Container({ children, className, width = "default" }: ContainerProps) {
  const containerClasses = cn(
    "container",
    width !== "full" && width,
    className
  );

  return (
    <div className={containerClasses}>
      {children}
    </div>
  );
}
