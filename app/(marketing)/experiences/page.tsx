import { siteConfig } from "@/app/config/site-config";
import Container from "@/components/ui/container";
import ExperiencesCategories from "@/components/blocks/experiences-categories";
import ExperiencesFeatured from "@/components/blocks/experiences-featured";
import SeasonalHighlights from "@/components/blocks/seasonal-highlights";
import Button from "@/components/ui/button";

export default function ExperiencesPage() {
  return (
    <>
      {/* Hero */}
      <section className="py-12 bg-muted">
        <Container>
          <h1 className="text-4xl font-heading mb-4">
            {siteConfig.pages.experiences.hero.headline}
          </h1>
          <p className="text-lg text-muted mb-8">
            {siteConfig.pages.experiences.hero.subhead}
          </p>
          <ExperiencesCategories />
        </Container>
      </section>

      {/* Featured Experiences */}
      <section className="py-12">
        <Container>
          <h2 className="text-3xl font-heading mb-8">Featured Experiences</h2>
          <ExperiencesFeatured />
        </Container>
      </section>

      {/* Seasonal Highlights */}
      <section className="py-12 bg-muted">
        <Container>
          <h2 className="text-3xl font-heading mb-8">Seasonal Highlights</h2>
          <SeasonalHighlights />
        </Container>
      </section>

      {/* CTA */}
      <section className="py-12">
        <Container>
          <div className="text-center">
            <h2 className="text-2xl font-heading mb-4">Need a custom experience?</h2>
            <p className="text-muted mb-6">Our concierge team can help you plan the perfect adventure.</p>
            <Button href={siteConfig.pages.experiences.cta.href}>
              {siteConfig.pages.experiences.cta.label}
            </Button>
          </div>
        </Container>
      </section>
    </>
  );
}
