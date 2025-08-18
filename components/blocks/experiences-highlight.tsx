"use client";

import { siteConfig } from "@/app/config/site-config";
import Link from "next/link";
import { ArrowRight, ChevronLeft, ChevronRight } from "lucide-react";
import Container from "@/components/ui/container";
import { useState, useEffect } from "react";

interface ExperiencesHighlightProps {
  heading?: string;
  showFooter?: boolean;
}

export default function ExperiencesHighlight({ heading, showFooter = true }: ExperiencesHighlightProps) {
  const experiences = siteConfig.pages.home.experiencesHighlight;
  const [currentIndex, setCurrentIndex] = useState(0);
  
  // Calculate cards per view based on screen size
  const getCardsPerView = () => {
    if (typeof window === 'undefined') return 3;
    if (window.innerWidth < 640) return 1; // mobile
    if (window.innerWidth < 768) return 2; // small tablet
    if (window.innerWidth < 1024) return 2; // tablet
    return 3; // desktop and up
  };

  const [cardsPerView, setCardsPerView] = useState(3); // Default to 3 for SSR

  useEffect(() => {
    // Set initial cards per view after component mounts
    setCardsPerView(getCardsPerView());
    
    const handleResize = () => {
      setCardsPerView(getCardsPerView());
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);
  const totalSlides = Math.ceil(experiences.items.length / cardsPerView);
  
  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % totalSlides);
  };
  
  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + totalSlides) % totalSlides);
  };

  return (
    <section className="py-16 surface-bg">
      <Container>
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-on-bg mb-4">{heading || experiences.heading}</h2>
          <p className="text-lg text-on-bg/80 max-w-2xl mx-auto">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          </p>
        </div>

        {/* Experiences Grid with Navigation */}
        <div className="relative group">
          {/* Navigation Arrows */}
          {totalSlides > 1 && (
            <>
              <button
                onClick={prevSlide}
                className="absolute left-4 top-1/2 -translate-y-1/2 z-10 w-10 h-10 rounded-full surface-bg shadow-lg flex items-center justify-center text-on-bg hover:text-primary transition-colors opacity-0 group-hover:opacity-100"
                aria-label="Previous experiences"
              >
                <ChevronLeft className="h-5 w-5" />
              </button>

              <button
                onClick={nextSlide}
                className="absolute right-4 top-1/2 -translate-y-1/2 z-10 w-10 h-10 rounded-full surface-bg shadow-lg flex items-center justify-center text-on-bg hover:text-primary transition-colors opacity-0 group-hover:opacity-100"
                aria-label="Next experiences"
              >
                <ChevronRight className="h-5 w-5" />
              </button>
            </>
          )}

          {/* Experiences Container */}
          <div className="overflow-hidden">
            <div 
              className="flex transition-transform duration-300 ease-out"
              style={{
                transform: `translateX(-${currentIndex * (100 / cardsPerView)}%)`,
              }}
            >
              {experiences.items.map((experience, index) => (
                <div
                  key={index}
                  className="flex-shrink-0 px-4"
                  style={{ width: `${100 / cardsPerView}%` }}
                >
                  <Link href={experience.href} className="group/card block">
                    <div className="relative h-64 md:h-80 lg:h-[620px] rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300">
                      {/* Background Image */}
                      <div className="absolute inset-0">
                        <img
                          src="/images/placeholders/placeholder-800x600.svg"
                          alt={experience.imageAlt}
                          className="w-full h-full object-cover transition-transform duration-300 group-hover/card:scale-105"
                        />
                        {/* Dark overlay for text readability */}
                        <div className="absolute inset-0 bg-black/30 group-hover:bg-black/40 transition-colors duration-300" />
                      </div>

                      {/* Content Overlay */}
                      <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                        <h3 className="text-xl font-bold mb-2">{experience.title}</h3>
                        <p className="text-sm opacity-90 mb-3">{experience.blurb}</p>
                        <div className="flex items-center text-sm opacity-75">
                          <span>Amenity</span>
                          <span className="mx-2">•</span>
                          <span>Amenity</span>
                          <span className="mx-2">•</span>
                          <span>Amenity</span>
                        </div>
                      </div>
                    </div>
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Pagination Dots */}
        {totalSlides > 1 && (
          <div className="flex justify-center mt-8 gap-2">
            {Array.from({ length: totalSlides }, (_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-2 h-2 rounded-full transition-colors ${
                  index === currentIndex ? "surface-primary" : "surface-muted"
                }`}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
        )}

        {/* Footer */}
        {showFooter && (
          <div className="text-center mt-12">
            <p className="text-on-bg/70 mb-6 max-w-2xl mx-auto">
              Various versions have evolved over the years, sometimes by accident, sometimes on purpose injected humour and the like.
            </p>
            <Link
              href="/experiences"
              className="inline-flex items-center gap-2 px-6 py-3 surface-primary text-on-primary rounded-lg hover:surface-primary/90 transition-colors"
            >
              Explore All
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        )}
      </Container>
    </section>
  );
}
