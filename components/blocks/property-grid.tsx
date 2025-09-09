"use client";

import { Property } from "@/lib/types";
import { ArrowRight, ChevronLeft, ChevronRight } from "lucide-react";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";

interface PropertyGridProps {
  items: Property[];
  title?: string;
  description?: string;
  showExploreAll?: boolean;
  exploreHref?: string;
  hideItemLinks?: boolean;
}

export default function PropertyGrid({
  items,
  title = "Most Loved Properties",
  description = "Lorem ipsum dolor sit amet, consectetur adipiscing elit consectetur adipiscing",
  showExploreAll = true,
  exploreHref = "/site/properties",
  hideItemLinks = true,
}: PropertyGridProps) {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);
  const sliderRef = useRef<HTMLDivElement>(null);
  const lastXRef = useRef(0);
  const dragMovedRef = useRef(false);

  // Calculate how many cards to show based on screen size
  const getCardsPerView = () => {
    if (typeof window === 'undefined') return 4;
    if (window.innerWidth < 640) return 1; // mobile
    if (window.innerWidth < 768) return 2; // tablet
    if (window.innerWidth < 1280) return 4; // desktop
    return 4; // large desktop - exactly 4 cards
  };

  const [cardsPerView, setCardsPerView] = useState(4); // Default to 4 for SSR

  useEffect(() => {
    // Set initial cards per view after component mounts
    const newCardsPerView = getCardsPerView();
    setCardsPerView(newCardsPerView);

    const handleResize = () => {
      const newCardsPerView = getCardsPerView();
      setCardsPerView(newCardsPerView);
      // Reset to first slide when viewport changes
      setCurrentSlide(0);
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const totalSlides = Math.max(1, Math.ceil(items.length / cardsPerView));

  const nextSlide = () => {
    setCurrentSlide((prev) => Math.min(prev + 1, totalSlides - 1));
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => Math.max(prev - 1, 0));
  };

  const goToSlide = (index: number) => {
    setCurrentSlide(Math.max(0, Math.min(index, totalSlides - 1)));
  };

  // Touch/Drag handlers
  const handleMouseDown = (e: React.MouseEvent) => {
    setIsDragging(true);
    setStartX(e.pageX - (sliderRef.current?.offsetLeft || 0));
    setScrollLeft(sliderRef.current?.scrollLeft || 0);
    lastXRef.current = e.pageX - (sliderRef.current?.offsetLeft || 0);
    dragMovedRef.current = false;
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDragging) return;
    e.preventDefault();
    const x = e.pageX - (sliderRef.current?.offsetLeft || 0);
    const walk = (x - startX) * 2;
    if (sliderRef.current) {
      sliderRef.current.scrollLeft = scrollLeft - walk;
    }
    lastXRef.current = x;
    if (Math.abs(x - startX) > 5) dragMovedRef.current = true;
  };

  const handleMouseUp = () => {
    if (isDragging) {
      const delta = lastXRef.current - startX;
      const threshold = 40;
      if (delta > threshold) {
        prevSlide();
      } else if (delta < -threshold) {
        nextSlide();
      }
    }
    setIsDragging(false);
  };

  const handleTouchStart = (e: React.TouchEvent) => {
    setIsDragging(true);
    setStartX(e.touches[0].pageX - (sliderRef.current?.offsetLeft || 0));
    setScrollLeft(sliderRef.current?.scrollLeft || 0);
    lastXRef.current = e.touches[0].pageX - (sliderRef.current?.offsetLeft || 0);
    dragMovedRef.current = false;
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    if (!isDragging) return;
    const x = e.touches[0].pageX - (sliderRef.current?.offsetLeft || 0);
    const walk = (x - startX) * 2;
    if (sliderRef.current) {
      sliderRef.current.scrollLeft = scrollLeft - walk;
    }
    lastXRef.current = x;
    if (Math.abs(x - startX) > 5) dragMovedRef.current = true;
  };

  const handleTouchEnd = () => {
    if (isDragging) {
      const delta = lastXRef.current - startX;
      const threshold = 40;
      if (delta > threshold) {
        prevSlide();
      } else if (delta < -threshold) {
        nextSlide();
      }
    }
    setIsDragging(false);
  };

  return (
    <div className="relative overflow-hidden">
      {/* Header */}
      <div className="text-center mb-12">
        <h2 className="text-3xl font-bold text-on-bg mb-4">{title}</h2>
        {description && (
          <p className="text-lg text-on-bg/80 max-w-2xl mx-auto">{description}</p>
        )}
      </div>

      {/* Slider Container */}
      <div className="relative groslider size fixup overflow-hidden max-w-[1920px] xl:max-w-[1600px] 2xl:max-w-[1920px] mx-auto">
        <div className="w-full overflow-hidden">
          {/* Navigation Arrows */}
          {totalSlides > 1 && (
            <>
              <button
                onClick={prevSlide}
                className="absolute left-4 top-1/2 -translate-y-1/2 z-10 w-10 h-10 rounded-full surface-bg shadow-lg flex items-center justify-center text-on-bg hover:text-primary transition-colors opacity-0 group-hover:opacity-100"
                aria-label="Previous slide"
              >
                <ChevronLeft className="h-5 w-5" />
              </button>

              <button
                onClick={nextSlide}
                className="absolute right-4 top-1/2 -translate-y-1/2 z-10 w-10 h-10 rounded-full surface-bg shadow-lg flex items-center justify-center text-on-bg hover:text-primary transition-colors opacity-0 group-hover:opacity-100"
                aria-label="Next slide"
              >
                <ChevronRight className="h-5 w-5" />
              </button>
            </>
          )}

          {/* Slider Track */}
          <div
            ref={sliderRef}
            className="flex transition-transform duration-300 ease-out cursor-grab active:cursor-grabbing"
            style={{
              transform: `translateX(-${currentSlide * (100 / cardsPerView)}%)`,
            }}
            onMouseDown={handleMouseDown}
            onMouseMove={handleMouseMove}
            onMouseUp={handleMouseUp}
            onMouseLeave={handleMouseUp}
            onTouchStart={handleTouchStart}
            onTouchMove={handleTouchMove}
            onTouchEnd={handleTouchEnd}
          >
            {items.map((property) => {
              const content = (
                <div className="surface-bg rounded-lg shadow-lg overflow-hidden group/card">
                  <div className="relative h-48 overflow-hidden">
                    <img
                      src={property.imageUrl || "/images/placeholders/placeholder-800x600.svg"}
                      alt={property.imageAlt}
                      className="w-full h-full object-cover transition-transform duration-300 group-hover/card:scale-105"
                    />
                  </div>
                  <div className="p-5">
                    <h3 className="text-lg font-semibold text-on-bg mb-2">{property.title}</h3>
                    <p className="text-on-bg/70 mb-3">{property.location}</p>
                    <div className="flex items-center gap-4 text-sm text-on-bg/70 mb-4">
                      <span>{property.beds} beds</span>
                      <span>{property.baths} baths</span>
                      <span>{property.guests} guests</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <div>
                        <span className="text-sm text-on-bg/70">From</span>
                        <div className="text-xl font-bold text-on-bg">${property.priceFrom}/night</div>
                      </div>
                      {/* Intentionally no inner link to avoid nested anchors when card is wrapped */}
                    </div>
                  </div>
                </div>
              );
              const shouldWrap = !hideItemLinks && Boolean(property.href);
              const body = shouldWrap ? (
                <Link href={property.href!} className="block" onClick={(e) => { if (dragMovedRef.current) e.preventDefault(); }}>
                  {content}
                </Link>
              ) : content;

              return (
                <div
                  key={property.id}
                  className="flex-shrink-0 px-3"
                  style={{ width: `${100 / cardsPerView}%` }}
                >
                  {body}
                </div>
              );
            })}
          </div>
        </div>
      </div>

      {/* Pagination Dots */}
      {totalSlides > 1 && (
        <div className="flex justify-center mt-8 gap-2">
          {Array.from({ length: totalSlides }, (_, index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              className={`w-2 h-2 rounded-full transition-colors ${index === currentSlide ? "bg-primary" : "bg-gray-400"
                }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      )}

      {/* Explore All Button */}
      {showExploreAll && (
        <div className="text-center mt-12">
          <Link
            href={exploreHref}
            className="inline-flex items-center gap-2 px-6 py-3 surface-primary text-on-primary rounded-lg hover:surface-primary/90 transition-colors"
          >
            Explore All Properties
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      )}
    </div>
  );
}
