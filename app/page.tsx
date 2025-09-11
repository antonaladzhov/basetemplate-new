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
import { fetchFeaturedAndLocations } from "@/lib/calry/listings";
import { getCalryEnv, hasCalryCredentials } from "@/lib/env";
import dynamic from "next/dynamic";
const FeaturedListingsSection = dynamic(
  () => import("@/components/blocks/featured-listings.server"),
  { ssr: true }
);

export default async function HomePage() {
  const home = siteConfig.pages.home;
  const canFetch = hasCalryCredentials();
  const { properties, locations } = canFetch ? await fetchFeaturedAndLocations({ listingsLimit: 10, scanLimit: 100 }) : { properties: [], locations: [] };
  const { TENANT_PUBLIC_URL } = getCalryEnv();

  return (
    <>
      <Hero locations={locations} bookingEnabled={canFetch} tenantBaseUrl={TENANT_PUBLIC_URL || ""} />
      <Reveal>
        <div className="relative z-0">
          <KeyValueStrip />
        </div>
      </Reveal>

      {/* Featured Listings - Dynamic from Calry */}
      <FeaturedListingsSection
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
