import { siteConfig } from "@/app/config/site-config";
import Container from "@/components/ui/container";
import Hero from "@/components/blocks/hero";
import Reveal from "@/components/ui/reveal";
import KeyValueStrip from "@/components/blocks/key-value-strip";
import PropertyGrid from "@/components/blocks/property-grid";
import ExperiencesHighlight from "@/components/blocks/experiences-highlight";
import FeaturesHighlight from "@/components/blocks/features-highlight";
import Reviews from "@/components/blocks/reviews";
import LatestStories from "@/components/blocks/latest-stories";
import FAQ from "@/components/blocks/faq";
import Button from "@/components/ui/button";
import Card from "@/components/ui/card";

export default function HomePage() {
  const home = siteConfig.pages.home;

  return (
    <>
      <Hero />
      <Reveal>
        <KeyValueStrip />
      </Reveal>
      
      {/* Featured Properties */}
      <Reveal>
        <section className="surface-muted text-on-muted py-12">
          <Container width="wide">
            <PropertyGrid 
              items={home.featuredProperties.items}
              title={home.featuredProperties.title}
              description={home.featuredProperties.description}
              showExploreAll={true}
            />
          </Container>
        </section>
      </Reveal>

      {/* Experiences Highlight */}
      <Reveal>
        <ExperiencesHighlight />
      </Reveal>

      {/* Features Highlight */}
      <Reveal>
        <FeaturesHighlight />
      </Reveal>

      {/* Reviews */}
      <Reveal>
        <Reviews />
      </Reveal>

      {/* Latest Stories (Blog & Guides) */}
      <Reveal>
        <LatestStories />
      </Reveal>

      {/* FAQ */}
      <Reveal>
        <FAQ />
      </Reveal>

      {/* Owner Teaser */}
      <section className="surface-primary text-on-primary py-12">
        <Container>
          <div className="text-center">
            <h2 className="text-3xl font-heading mb-4 text-on-primary">{home.ownerTeaser.heading}</h2>
            <p className="text-lg mb-6 text-on-primary">{home.ownerTeaser.blurb}</p>
            <Button href={home.ownerTeaser.cta.href} variant="secondary">
              {home.ownerTeaser.cta.label}
            </Button>
          </div>
        </Container>
      </section>
    </>
  );
}
