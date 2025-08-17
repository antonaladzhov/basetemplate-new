"use client";

import Image from "next/image";
import { cn } from "@/lib/utils";

interface ImgWithFallbackProps {
  src: string;
  alt: string;
  width: number;
  height: number;
  className?: string;
  fallbackSrc?: string;
}

export default function ImgWithFallback({ 
  src, 
  alt, 
  width, 
  height, 
  className,
  fallbackSrc = "/images/placeholders/placeholder-800x600.jpg"
}: ImgWithFallbackProps) {
  return (
    <div className={cn("relative overflow-hidden rounded-xl bg-muted", className)}>
      <Image
        src={src}
        alt={alt}
        width={width}
        height={height}
        className="object-cover"
        onError={(e) => {
          const target = e.target as HTMLImageElement;
          target.src = fallbackSrc;
        }}
      />
    </div>
  );
}
