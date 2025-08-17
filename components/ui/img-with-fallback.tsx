"use client";

import Image from "next/image";
import { useState } from "react";

interface ImgWithFallbackProps {
  src: string;
  alt: string;
  width: number;
  height: number;
  className?: string;
}

export default function ImgWithFallback({ 
  src, 
  alt, 
  width, 
  height, 
  className 
}: ImgWithFallbackProps) {
  const [imgSrc, setImgSrc] = useState(src);
  const [hasError, setHasError] = useState(false);

  const handleError = () => {
    if (!hasError) {
      setHasError(true);
      setImgSrc("/images/placeholders/placeholder-800x600.svg");
    }
  };

  const isSvg = src.toLowerCase().endsWith('.svg');

  return (
    <Image
      src={imgSrc}
      alt={alt}
      width={width}
      height={height}
      className={className}
      onError={handleError}
      unoptimized={isSvg}
    />
  );
}
