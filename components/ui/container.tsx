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
   * - "ultra-wide": max-width 2400px - For ultra-wide sliders on large desktops
   */
  width?: "default" | "wide" | "narrow" | "full" | "ultra-wide";
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
