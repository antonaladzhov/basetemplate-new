"use client";

import { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import ImgWithFallback from "@/components/ui/img-with-fallback";

interface ImageGalleryProps {
  images?: Array<{ src: string; alt: string }>;
  className?: string;
}

export default function ImageGallery({ images = [], className = "" }: ImageGalleryProps) {
  const [selectedImage, setSelectedImage] = useState(0);

  const defaultImages = [
    { src: "/images/placeholders/placeholder-800x600.svg", alt: "Gallery image 1" },
    { src: "/images/placeholders/placeholder-800x600.svg", alt: "Gallery image 2" },
    { src: "/images/placeholders/placeholder-800x600.svg", alt: "Gallery image 3" },
  ];

  const displayImages = images.length > 0 ? images : defaultImages;

  const nextImage = () => {
    setSelectedImage((prev) => (prev + 1) % displayImages.length);
  };

  const prevImage = () => {
    setSelectedImage((prev) => (prev - 1 + displayImages.length) % displayImages.length);
  };

  return (
    <div className={`relative ${className}`}>
      {/* Main Image */}
      <div className="aspect-[4/3] overflow-hidden rounded-lg">
        <ImgWithFallback
          src={displayImages[selectedImage]?.src || "/images/placeholders/placeholder-800x600.svg"}
          alt={displayImages[selectedImage]?.alt || "Gallery image"}
          width={800}
          height={600}
          className="h-full w-full object-cover"
        />
      </div>

      {/* Navigation Arrows */}
      {displayImages.length > 1 && (
        <>
          <button
            onClick={prevImage}
            className="absolute left-2 top-1/2 -translate-y-1/2 rounded-full bg-[var(--foreground)]/50 p-2 text-[var(--background)] hover:bg-[var(--foreground)]/70 transition-colors"
            aria-label="Previous image"
          >
            <ChevronLeft className="h-5 w-5" />
          </button>
          <button
            onClick={nextImage}
            className="absolute right-2 top-1/2 -translate-y-1/2 rounded-full bg-[var(--foreground)]/50 p-2 text-[var(--background)] hover:bg-[var(--foreground)]/70 transition-colors"
            aria-label="Next image"
          >
            <ChevronRight className="h-5 w-5" />
          </button>
        </>
      )}

      {/* Thumbnail Navigation */}
      {displayImages.length > 1 && (
        <div className="mt-4 flex gap-2 overflow-x-auto">
          {displayImages.map((image, index) => (
            <button
              key={index}
              onClick={() => setSelectedImage(index)}
              className={`flex-shrink-0 aspect-square w-16 overflow-hidden rounded-md border-2 transition-colors ${
                index === selectedImage ? "border-primary" : "border-border"
              }`}
            >
              <ImgWithFallback
                src={image.src}
                alt={image.alt}
                width={64}
                height={64}
                className="h-full w-full object-cover"
              />
            </button>
          ))}
        </div>
      )}
    </div>
  );
}
