"use client";

import { useState, useRef, useEffect } from "react";
import { Property } from "@/lib/types";
import PropertyCard from "@/components/blocks/property-card";
import { ChevronLeft, ChevronRight, Star } from "lucide-react";
import { formatPrice, formatRating } from "@/lib/utils";

interface PropertyGridProps {
  properties: Property[];
  title?: string;
  description?: string;
  showExploreAll?: boolean;
}

export default function PropertyGrid({ 
  properties, 
  title = "Most Loved Properties",
  description = "Lorem ipsum dolor sit amet, consectetur adipiscing elit consectetur adipiscing",
  showExploreAll = true 
}: PropertyGridProps) {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);
  const sliderRef = useRef<HTMLDivElement>(null);

  // Calculate how many cards to show based on screen size
  const getCardsPerView = () => {
    if (typeof window === 'undefined') return 3;
    if (window.innerWidth < 640) return 1; // mobile
    if (window.innerWidth < 1024) return 2; // tablet
    return 3; // desktop
  };

  const [cardsPerView, setCardsPerView] = useState(getCardsPerView());

  useEffect(() => {
    const handleResize = () => {
      setCardsPerView(getCardsPerView());
      setCurrentSlide(0);
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const totalSlides = Math.ceil(properties.length / cardsPerView);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % totalSlides);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + totalSlides) % totalSlides);
  };

  const goToSlide = (index: number) => {
    setCurrentSlide(index);
  };

  // Touch/Drag handlers
  const handleMouseDown = (e: React.MouseEvent) => {
    setIsDragging(true);
    setStartX(e.pageX - (sliderRef.current?.offsetLeft || 0));
    setScrollLeft(sliderRef.current?.scrollLeft || 0);
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDragging) return;
    e.preventDefault();
    const x = e.pageX - (sliderRef.current?.offsetLeft || 0);
    const walk = (x - startX) * 2;
    if (sliderRef.current) {
      sliderRef.current.scrollLeft = scrollLeft - walk;
    }
  };

  const handleMouseUp = () => {
    setIsDragging(false);
  };

  const handleTouchStart = (e: React.TouchEvent) => {
    setIsDragging(true);
    setStartX(e.touches[0].pageX - (sliderRef.current?.offsetLeft || 0));
    setScrollLeft(sliderRef.current?.scrollLeft || 0);
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    if (!isDragging) return;
    const x = e.touches[0].pageX - (sliderRef.current?.offsetLeft || 0);
    const walk = (x - startX) * 2;
    if (sliderRef.current) {
      sliderRef.current.scrollLeft = scrollLeft - walk;
    }
  };

  const handleTouchEnd = () => {
    setIsDragging(false);
  };

  return (
    <div className="relative">
      {/* Header */}
      <div className="text-center mb-8">
        <h2 className="text-3xl font-heading font-bold mb-4 text-on-muted">{title}</h2>
        <p className="text-on-muted max-w-2xl mx-auto">{description}</p>
      </div>

      {/* Slider Container */}
      <div className="relative group">
        {/* Navigation Arrows */}
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

        {/* Slider */}
        <div
          ref={sliderRef}
          className="overflow-hidden"
          onMouseDown={handleMouseDown}
          onMouseMove={handleMouseMove}
          onMouseUp={handleMouseUp}
          onMouseLeave={handleMouseUp}
          onTouchStart={handleTouchStart}
          onTouchMove={handleTouchMove}
          onTouchEnd={handleTouchEnd}
          style={{ cursor: isDragging ? 'grabbing' : 'grab' }}
        >
          <div 
            className="flex transition-transform duration-300 ease-in-out"
            style={{
              transform: `translateX(-${currentSlide * (100 / cardsPerView)}%)`,
              width: `${(properties.length / cardsPerView) * 100}%`
            }}
          >
            {properties.map((property, index) => (
              <div 
                key={property.id} 
                className="flex-shrink-0 px-2"
                style={{ width: `${100 / properties.length}%` }}
              >
                <div className="bg-white rounded-lg shadow-lg overflow-hidden">
                  {/* Property Image */}
                  <div className="aspect-[4/3] overflow-hidden">
                    <img
                      src="/images/placeholders/placeholder-800x600.svg"
                      alt={property.imageAlt}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  
                  {/* Property Info */}
                  <div className="p-4">
                    <div className="flex items-center justify-between mb-2">
                      <h3 className="font-semibold text-on-bg">{property.title}</h3>
                      <div className="flex items-center space-x-1">
                        <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                        <span className="text-sm font-medium">{formatRating(4.8)}</span>
                      </div>
                    </div>
                    
                    <p className="text-sm text-muted-foreground mb-2">{property.location}</p>
                    
                    <div className="flex items-center justify-between text-sm text-muted-foreground mb-3">
                      <span>3 beds • 2 baths • 6 guests</span>
                    </div>
                    
                    <div className="flex items-center justify-between">
                      <span className="text-lg font-bold text-on-bg">
                        €{property.priceFrom} night
                      </span>
                      <span className="text-sm text-muted-foreground">
                        €542 total
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Pagination Dots */}
      {totalSlides > 1 && (
        <div className="flex justify-center mt-6 space-x-2">
          {Array.from({ length: totalSlides }, (_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`w-2 h-2 rounded-full transition-colors ${
                index === currentSlide 
                  ? 'surface-primary' 
                  : 'surface-muted hover:surface-primary/50'
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      )}

      {/* Explore All Button */}
      {showExploreAll && (
        <div className="text-center mt-8">
          <button className="surface-primary text-on-primary px-6 py-3 rounded-lg font-medium hover:opacity-90 transition-opacity flex items-center space-x-2 mx-auto">
            <span>Explore All</span>
            <ChevronRight className="h-4 w-4" />
          </button>
        </div>
      )}
    </div>
  );
}
