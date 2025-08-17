"use client";

import { useState } from "react";
import ImgWithFallback from "@/components/ui/img-with-fallback";

interface ImageGalleryProps {
  images: Array<{ src: string; alt: string }>;
  className?: string;
}

export default function ImageGallery({ images, className }: ImageGalleryProps) {
  const [selectedImage, setSelectedImage] = useState(0);

  return (
    <div className={className}>
      {/* Main Image */}
      <div className="mb-4">
        <ImgWithFallback
          src={images[selectedImage]?.src || "/images/placeholders/placeholder-800x600.jpg"}
          alt={images[selectedImage]?.alt || "Gallery image placeholder"}
          width={800}
          height={600}
          className="w-full h-64 md:h-96"
        />
      </div>

      {/* Thumbnails */}
      <div className="grid grid-cols-4 gap-2">
        {images.map((image, index) => (
          <button
            key={index}
            onClick={() => setSelectedImage(index)}
            className={`relative overflow-hidden rounded-lg ${
              selectedImage === index ? "ring-2 ring-primary" : ""
            }`}
          >
            <ImgWithFallback
              src={image.src}
              alt={image.alt}
              width={200}
              height={150}
              className="w-full h-16 object-cover"
            />
          </button>
        ))}
      </div>
    </div>
  );
}
