"use client";

import { useState } from "react";
import { siteConfig } from "@/app/config/site-config";
import Container from "@/components/ui/container";
import PropertyFilters from "@/components/blocks/property-filters";
import Select from "@/components/ui/select";
import { siteConfig as config } from "@/app/config/site-config";
import PropertyCard from "@/components/blocks/property-card";
import Button from "@/components/ui/button";
import Reveal from "@/components/ui/reveal";

export default function PropertiesPage() {
  const properties = config.pages.home.featuredProperties.items;
  const [showMapMobile, setShowMapMobile] = useState(false);

  return (
    <>
      {/* Hero */}
      <Reveal>
        <section className="py-12 surface-muted">
          <Container>
            <h1 className="text-4xl font-heading mb-2 text-on-muted">
              {siteConfig.pages.properties.hero.headline}
            </h1>
            <p className="text-lg text-on-muted/80">
              {siteConfig.pages.properties.hero.subhead}
            </p>
          </Container>
        </section>
      </Reveal>

      {/* Main layout: List + Map */}
      <Reveal>
        <section className="py-0">
          <Container width="wide">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
              {/* Left: Filters + List (scrollable) */}
              <div className="lg:col-span-7">
                {/* Filters and Sort */}
                <div className="py-4 border-b border-border sticky top-0 bg-white z-10">
                  <div className="flex flex-col md:flex-row gap-4 items-start md:items-center justify-between">
                    <PropertyFilters />
                    <div className="flex items-center gap-2">
                      <span className="text-sm text-muted-foreground">Sort by:</span>
                      <Select aria-label="Sort properties">
                        {siteConfig.pages.properties.sort.map((option) => (
                          <option key={option} value={option.toLowerCase()}>
                            {option}
                          </option>
                        ))}
                      </Select>
                    </div>
                  </div>
                </div>

                {/* Property List */}
                <div className="lg:max-h-[calc(100vh-200px)] lg:overflow-y-auto py-6">
                  {properties.length > 0 ? (
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                      {properties.map((p) => (
                        <PropertyCard key={p.id} property={p as any} />
                      ))}
                    </div>
                  ) : (
                    <div className="text-center py-12">
                      <p className="text-muted-foreground">{siteConfig.pages.properties.emptyState}</p>
                    </div>
                  )}
                </div>
              </div>

              {/* Right: Map (hidden on mobile) */}
              <div className="lg:col-span-5 hidden lg:block">
                <div className="sticky top-4">
                  <div className="h-[calc(100vh-160px)] rounded-xl overflow-hidden border border-border">
                    {/* Simple OpenStreetMap embed centered on a city (Sofia) */}
                    <iframe
                      title="Map"
                      className="w-full h-full"
                      src="https://www.openstreetmap.org/export/embed.html?bbox=23.25%2C42.62%2C23.5%2C42.75&layer=mapnik&marker=42.6977%2C23.3219"
                    />
                  </div>
                </div>
              </div>
            </div>
          </Container>

          {/* Mobile sticky show map button */}
          <div className="lg:hidden fixed bottom-4 inset-x-4 flex justify-center z-40">
            <Button onClick={() => setShowMapMobile(true)} className="bg-white text-neutral-900 border border-border shadow-lg rounded-full px-6 py-3">
              Show map
            </Button>
          </div>

          {/* Mobile full-screen map overlay */}
          {showMapMobile && (
            <div className="fixed inset-0 z-50 bg-white">
              <div className="h-14 flex items-center justify-between px-4 border-b border-border bg-white">
                <span className="font-medium text-lg">Map</span>
                <Button onClick={() => setShowMapMobile(false)} variant="outline" className="rounded-full">
                  Hide map
                </Button>
              </div>
              <iframe
                title="Map"
                className="w-full h-[calc(100vh-56px)]"
                src="https://www.openstreetmap.org/export/embed.html?bbox=23.25%2C42.62%2C23.5%2C42.75&layer=mapnik&marker=42.6977%2C23.3219"
              />
            </div>
          )}
        </section>
      </Reveal>
    </>
  );
}
