import { siteConfig } from "@/app/config/site-config";
import ExperiencesHighlight from "@/components/blocks/experiences-highlight";
import FAQ from "@/components/blocks/faq";
import FeaturesHighlight from "@/components/blocks/features-highlight";
import Hero from "@/components/blocks/hero";
import KeyValueStrip from "@/components/blocks/key-value-strip";
import LatestStories from "@/components/blocks/latest-stories";
import Reviews from "@/components/blocks/reviews";
import Button from "@/components/ui/button";
import Container from "@/components/ui/container";
import Reveal from "@/components/ui/reveal";
import dynamic from "next/dynamic";
const MostLovedPropertiesSection = dynamic(
  () => import("@/components/blocks/most-loved-properties.server"),
  { ssr: true }
);

export default function HomePage() {
  const home = siteConfig.pages.home;

  return (
    <>
      <Hero />
      <Reveal>
        <KeyValueStrip />
      </Reveal>

      {/* Featured Properties - Dynamic from Calry */}
      <MostLovedPropertiesSection
        title={home.featuredProperties.title}
        description={home.featuredProperties.description}
        exploreHref={"/site/properties"}
        limit={10}
      />

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
