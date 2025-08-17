import { cn } from "@/lib/utils";

interface CarouselProps {
  children: React.ReactNode;
  className?: string;
}

export default function Carousel({ children, className }: CarouselProps) {
  return (
    <div className={cn("overflow-x-auto", className)}>
      <div className="flex gap-4 pb-4">
        {children}
      </div>
    </div>
  );
}
