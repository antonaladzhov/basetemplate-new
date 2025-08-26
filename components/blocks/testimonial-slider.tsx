"use client";

import { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { siteConfig } from "@/app/config/site-config";

export default function TestimonialSlider() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const testimonials = siteConfig.pages.ownerServices.testimonials;

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  const currentTestimonial = testimonials[currentIndex];

  return (
    <div className="relative">
      {/* Header with title and navigation */}
      <div className="flex items-center justify-between mb-8">
        <h2 className="text-3xl font-heading font-bold text-on-bg">
          What Our Owners Say
        </h2>
        
        {/* Navigation arrows */}
        <div className="flex gap-3">
          <button
            onClick={prevTestimonial}
            className="w-12 h-12 rounded-full bg-gray-100 hover:bg-gray-200 transition-colors duration-200 flex items-center justify-center"
            aria-label="Previous testimonial"
          >
            <ChevronLeft className="w-5 h-5 text-gray-700" />
          </button>
          <button
            onClick={nextTestimonial}
            className="w-12 h-12 rounded-full bg-gray-100 hover:bg-gray-200 transition-colors duration-200 flex items-center justify-center"
            aria-label="Next testimonial"
          >
            <ChevronRight className="w-5 h-5 text-gray-700" />
          </button>
        </div>
      </div>

      {/* Testimonial card */}
      <div className="bg-white rounded-2xl p-8 md:p-12 relative overflow-hidden shadow-lg">
        <div className="flex flex-col md:flex-row items-start gap-8">
          {/* User avatar section */}
          <div className="flex-shrink-0">
            <div className="w-20 h-20 md:w-24 md:h-24 rounded-xl bg-yellow-400 flex items-center justify-center">
              <span className="text-2xl md:text-3xl font-bold text-white">
                {currentTestimonial.initial}
              </span>
            </div>
          </div>

          {/* Testimonial content */}
          <div className="flex-1">
            <blockquote className="text-lg md:text-xl italic text-gray-800 mb-6 leading-relaxed">
              "{currentTestimonial.text}"
            </blockquote>
            
            <div className="flex items-center gap-3">
              <span className="text-3xl font-bold text-orange-500">
                {currentTestimonial.initial}
              </span>
              <div>
                <p className="font-semibold text-gray-900 text-lg">
                  {currentTestimonial.name}
                </p>
                <p className="text-gray-600 text-sm">
                  {currentTestimonial.role}
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Progress indicators */}
        <div className="flex justify-center gap-2 mt-8">
          {testimonials.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`w-2 h-2 rounded-full transition-colors duration-200 ${
                index === currentIndex ? "bg-orange-500" : "bg-gray-300"
              }`}
              aria-label={`Go to testimonial ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
