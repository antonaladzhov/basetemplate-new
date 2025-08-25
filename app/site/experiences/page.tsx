"use client";

import { siteConfig } from "@/app/config/site-config";
import Container from "@/components/ui/container";
import Button from "@/components/ui/button";
import Reveal from "@/components/ui/reveal";
import ExperiencesHighlight from "@/components/blocks/experiences-highlight";
import ImgWithFallback from "@/components/ui/img-with-fallback";
import Link from "next/link";
import { useState } from "react";

export default function ExperiencesPage() {
  const [activeCategory, setActiveCategory] = useState("beach");
  
  // Experience data by category
  const experiencesByCategory = {
    beach: [
      { title: "Sunset Sail", blurb: "Private catamaran with onboard drinks", href: "/site/experiences", image: "/images/placeholders/placeholder-800x600.svg" },
      { title: "Hidden Coves", blurb: "Boat tour to secluded beaches", href: "/site/experiences", image: "/images/placeholders/placeholder-800x600.svg" },
      { title: "Coastal E-Bikes", blurb: "Guided ride along the shoreline", href: "/site/experiences", image: "/images/placeholders/placeholder-800x600.svg" },
    ],
    mountain: [
      { title: "Summit Hike", blurb: "Guided trek with panoramic views", href: "/site/experiences", image: "/images/placeholders/placeholder-800x600.svg" },
      { title: "Alpine Picnic", blurb: "Private chef lunch at lookout point", href: "/site/experiences", image: "/images/placeholders/placeholder-800x600.svg" },
      { title: "Stargazing", blurb: "Night sky session with telescope", href: "/site/experiences", image: "/images/placeholders/placeholder-800x600.svg" },
    ],
    city: [
      { title: "Architecture Walk", blurb: "Design highlights with local guide", href: "/site/experiences", image: "/images/placeholders/placeholder-800x600.svg" },
      { title: "Street Art Tour", blurb: "Murals and hidden ateliers", href: "/site/experiences", image: "/images/placeholders/placeholder-800x600.svg" },
      { title: "Rooftop Mixology", blurb: "Cocktail class at sunset", href: "/site/experiences", image: "/images/placeholders/placeholder-800x600.svg" },
    ],
    food: [
      { title: "Chef's Table", blurb: "Multi-course tasting in-villa", href: "/site/experiences", image: "/images/placeholders/placeholder-800x600.svg" },
      { title: "Vineyard Tour", blurb: "Private tastings with sommelier", href: "/site/experiences", image: "/images/placeholders/placeholder-800x600.svg" },
      { title: "Market to Table", blurb: "Shop, cook, and dine with a chef", href: "/site/experiences", image: "/images/placeholders/placeholder-800x600.svg" },
    ],
    water: [
      { title: "Kayak & Caves", blurb: "Explore sea caves with a guide", href: "/site/experiences", image: "/images/placeholders/placeholder-800x600.svg" },
      { title: "Dive Intro", blurb: "Beginner-friendly reef dive", href: "/site/experiences", image: "/images/placeholders/placeholder-800x600.svg" },
      { title: "Paddle at Dawn", blurb: "Serene sunrise SUP session", href: "/site/experiences", image: "/images/placeholders/placeholder-800x600.svg" },
    ],
    cultural: [
      { title: "Old Town Stories", blurb: "History walk with local expert", href: "/site/experiences", image: "/images/placeholders/placeholder-800x600.svg" },
      { title: "Gallery Hopping", blurb: "Curated contemporary art trail", href: "/site/experiences", image: "/images/placeholders/placeholder-800x600.svg" },
      { title: "Craft Workshop", blurb: "Hands-on ceramics or textiles", href: "/site/experiences", image: "/images/placeholders/placeholder-800x600.svg" },
    ],
  };

  const categories = siteConfig.pages.experiences.categories;
  const activeExperiences = experiencesByCategory[activeCategory as keyof typeof experiencesByCategory] || [];

  return (
    <>
      {/* Hero */}
      <section className="relative flex items-center">
        {/* Background Image */}
        <div className="absolute inset-0">
          <ImgWithFallback
            src="/images/placeholders/placeholder-1600x900.svg"
            alt="Experiences hero background"
            width={1600}
            height={900}
            className="w-full h-full object-cover"
          />
        </div>
        
        {/* Content with overlay */}
        <div className="relative w-full">
          <div className="absolute inset-0 bg-black/40" />
          
          <div className="py-16 md:py-24 lg:py-32 relative">
            <Container>
              <div className="text-center max-w-4xl mx-auto">
                <h1 className="text-4xl md:text-5xl font-heading mb-4 text-on-inverse">
                  {siteConfig.pages.experiences.hero.headline}
                </h1>
                <p className="text-lg md:text-xl text-on-inverse/90 mb-8">
                  {siteConfig.pages.experiences.hero.subhead}
                </p>
                <Button href="/site/contact" variant="secondary">
                  Plan Your Experience
                </Button>
              </div>
            </Container>
          </div>
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
            <h2 className="text-3xl font-heading mb-4">{siteConfig.pages.experiences.exploreByCategory.heading}</h2>
            <p className="max-w-2xl mx-auto">{siteConfig.pages.experiences.exploreByCategory.description}</p>
          </div>

          {/* Tabs */}
          <div className="flex flex-wrap justify-center gap-2 md:gap-3 mb-8 px-4">
            {categories.map((cat) => (
              <button
                key={cat.key}
                onClick={() => setActiveCategory(cat.key)}
                className={`px-3 md:px-4 py-2 rounded-full border transition-colors text-sm md:text-base whitespace-nowrap ${
                  activeCategory === cat.key
                    ? "bg-neutral-900 text-white border-neutral-900"
                    : "bg-white text-neutral-900 border-border hover:bg-gray-50"
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
                    <div className="absolute inset-0 bg-black/10" />
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
            <p className="text-sm text-muted-foreground">{siteConfig.pages.experiences.partners.heading}</p>
          </div>
          <div className="flex items-center justify-center gap-8 md:gap-12 lg:gap-16 flex-wrap">
            {siteConfig.pages.experiences.partners.logos.map((name) => (
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
      <section className="py-12 bg-neutral-900 text-white">
        <Container>
          <div className="text-center">
            <h2 className="text-2xl font-heading mb-4 text-white">{siteConfig.pages.experiences.customExperience.heading}</h2>
            <p className="text-white/80 mb-6">{siteConfig.pages.experiences.customExperience.description}</p>
            <Button href={siteConfig.pages.experiences.cta.href} variant="secondary">
              {siteConfig.pages.experiences.cta.label}
            </Button>
          </div>
        </Container>
      </section>
    </>
  );
}
