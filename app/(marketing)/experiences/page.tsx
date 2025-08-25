"use client";

import { siteConfig } from "@/app/config/site-config";
import Container from "@/components/ui/container";
import ExperiencesCategories from "@/components/blocks/experiences-categories";
import ExperiencesHighlight from "@/components/blocks/experiences-highlight";
import Button from "@/components/ui/button";
import ImgWithFallback from "@/components/ui/img-with-fallback";
import Link from "next/link";
import { useState } from "react";
import Reveal from "@/components/ui/reveal";

export default function ExperiencesPage() {
  const categories = [
    { key: "beach", name: "Beach Getaways" },
    { key: "mountain", name: "Mountain Adventures" },
    { key: "city", name: "City Experiences" },
    { key: "food", name: "Wine & Dining" },
    { key: "water", name: "Water Sports" },
    { key: "cultural", name: "Cultural Tours" },
  ];

  const experiencesByCategory: Record<string, Array<{ title: string; blurb: string; href: string; image: string }>> = {
    beach: [
      { title: "Sunset Sail", blurb: "Private catamaran with onboard drinks", href: "/experiences", image: "/images/placeholders/placeholder-800x600.svg" },
      { title: "Hidden Coves", blurb: "Boat tour to secluded beaches", href: "/experiences", image: "/images/placeholders/placeholder-800x600.svg" },
      { title: "Coastal E-Bikes", blurb: "Guided ride along the shoreline", href: "/experiences", image: "/images/placeholders/placeholder-800x600.svg" },
    ],
    mountain: [
      { title: "Summit Hike", blurb: "Guided trek with panoramic views", href: "/experiences", image: "/images/placeholders/placeholder-800x600.svg" },
      { title: "Alpine Picnic", blurb: "Private chef lunch at lookout point", href: "/experiences", image: "/images/placeholders/placeholder-800x600.svg" },
      { title: "Stargazing", blurb: "Night sky session with telescope", href: "/experiences", image: "/images/placeholders/placeholder-800x600.svg" },
    ],
    city: [
      { title: "Architecture Walk", blurb: "Design highlights with local guide", href: "/experiences", image: "/images/placeholders/placeholder-800x600.svg" },
      { title: "Street Art Tour", blurb: "Murals and hidden ateliers", href: "/experiences", image: "/images/placeholders/placeholder-800x600.svg" },
      { title: "Rooftop Mixology", blurb: "Cocktail class at sunset", href: "/experiences", image: "/images/placeholders/placeholder-800x600.svg" },
    ],
    food: [
      { title: "Chef&apos;s Table", blurb: "Multi-course tasting in-villa", href: "/experiences", image: "/images/placeholders/placeholder-800x600.svg" },
      { title: "Vineyard Tour", blurb: "Private tastings with sommelier", href: "/experiences", image: "/images/placeholders/placeholder-800x600.svg" },
      { title: "Market to Table", blurb: "Shop, cook, and dine with a chef", href: "/experiences", image: "/images/placeholders/placeholder-800x600.svg" },
    ],
    water: [
      { title: "Kayak & Caves", blurb: "Explore sea caves with a guide", href: "/experiences", image: "/images/placeholders/placeholder-800x600.svg" },
      { title: "Dive Intro", blurb: "Beginner-friendly reef dive", href: "/experiences", image: "/images/placeholders/placeholder-800x600.svg" },
      { title: "Paddle at Dawn", blurb: "Serene sunrise SUP session", href: "/experiences", image: "/images/placeholders/placeholder-800x600.svg" },
    ],
    cultural: [
      { title: "Old Town Stories", blurb: "History walk with local expert", href: "/experiences", image: "/images/placeholders/placeholder-800x600.svg" },
      { title: "Gallery Hopping", blurb: "Curated contemporary art trail", href: "/experiences", image: "/images/placeholders/placeholder-800x600.svg" },
      { title: "Craft Workshop", blurb: "Hands-on ceramics or textiles", href: "/experiences", image: "/images/placeholders/placeholder-800x600.svg" },
    ],
  };

  const [activeCategory, setActiveCategory] = useState<string>(categories[0].key);
  const activeExperiences = experiencesByCategory[activeCategory] || [];

  return (
    <>
      {/* Hero */}
      <section className="relative flex items-center">
        {/* Background Image */}
        <div className="absolute inset-0">
          <ImgWithFallback
            src="/images/placeholders/placeholder-1600x900.svg"
            alt={siteConfig.pages.experiences.hero.headline}
            width={1600}
            height={900}
            className="w-full h-full object-cover"
          />
        </div>

        {/* Scrim + Content */}
        <div className="relative w-full">
          <div className="absolute inset-0 bg-[var(--foreground)]/40" />
          <Container>
            <div className="py-16 md:py-24 lg:py-32 relative">
              <h1 className="text-4xl md:text-5xl font-heading mb-4 text-on-inverse">
                {siteConfig.pages.experiences.hero.headline}
              </h1>
              <p className="text-lg md:text-xl text-on-inverse/90 mb-8">
                {siteConfig.pages.experiences.hero.subhead}
              </p>
            </div>
          </Container>
        </div>
      </section>

      {/* Featured Experiences - reuse homepage component */}
      <Reveal>
        <ExperiencesHighlight heading="Featured Experiences" showFooter={false} />
      </Reveal>

      {/* Categories as Tabs + Experiences List */}
      <Reveal>
      <section className="py-16">
        <Container>
          <div className="text-center mb-8">
            <h2 className="text-3xl font-heading mb-4">Explore by Category</h2>
            <p className="max-w-2xl mx-auto">Discover curated experiences tailored to your interests and travel style</p>
          </div>

          {/* Tabs */}
          <div className="flex flex-wrap justify-center gap-2 md:gap-3 mb-8 px-4">
            {categories.map((cat) => (
              <button
                key={cat.key}
                onClick={() => setActiveCategory(cat.key)}
                className={`px-3 md:px-4 py-2 rounded-full border transition-colors text-sm md:text-base whitespace-nowrap ${
                  activeCategory === cat.key
                    ? "bg-[var(--primary)] text-[var(--primary-foreground)] border-[var(--primary)]"
: "bg-[var(--background)] text-[var(--foreground)] border-border hover:bg-[var(--muted)]"
                }`}
                aria-pressed={activeCategory === cat.key}
              >
                {cat.name}
              </button>
            ))}
          </div>

          {/* Experiences grid for active tab */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {activeExperiences.map((exp, idx) => (
              <Link key={`${activeCategory}-${idx}`} href={exp.href} className="group block">
                <div className="rounded-xl overflow-hidden border border-border shadow-sm hover:shadow-md transition-shadow">
                  <div className="relative h-48">
                    <img
                      src={exp.image}
                      alt={exp.title}
                      className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-[var(--foreground)]/10" />
                  </div>
                  <div className="p-4">
                    <h3 className="font-semibold text-on-bg">{exp.title}</h3>
                    <p className="text-sm text-muted-foreground mt-1">{exp.blurb}</p>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </Container>
      </section>
      </Reveal>

      {/* Partners Logos */}
      <Reveal>
      <section className="py-12 border-t border-border">
        <Container>
          <div className="text-center mb-8">
            <p className="text-sm text-muted-foreground">Trusted by leading partners</p>
          </div>
          <div className="flex items-center justify-center gap-8 md:gap-12 lg:gap-16 flex-wrap">
            {["Partner 1","Partner 2","Partner 3","Partner 4","Partner 5"].map((name) => (
              <div key={name} className="flex items-center justify-center">
                <img
                  src="/images/placeholders/placeholder-800x600.svg"
                  alt={name}
                  className="h-8 md:h-10 opacity-60 hover:opacity-100 transition-opacity duration-300 filter brightness-0"
                />
              </div>
            ))}
          </div>
        </Container>
      </section>
      </Reveal>

      {/* CTA */}
      <section className="py-12 bg-[var(--primary)] text-[var(--primary-foreground)]">
        <Container>
          <div className="text-center">
            <h2 className="text-2xl font-heading mb-4 text-[var(--primary-foreground)]">Need a custom experience?</h2>
            <p className="text-[var(--primary-foreground)]/80 mb-6">Our concierge team can help you plan the perfect adventure.</p>
            <Button href={siteConfig.pages.experiences.cta.href} variant="secondary">
              {siteConfig.pages.experiences.cta.label}
            </Button>
          </div>
        </Container>
      </section>
    </>
  );
}
