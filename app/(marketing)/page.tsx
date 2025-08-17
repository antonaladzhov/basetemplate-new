import { siteConfig } from "@/app/config/site-config";
import Container from "@/components/ui/container";
import Hero from "@/components/blocks/hero";
import KeyValueStrip from "@/components/blocks/key-value-strip";
import PropertyGrid from "@/components/blocks/property-grid";
import FAQAccordion from "@/components/blocks/faq-accordion";
import Button from "@/components/ui/button";
import Card from "@/components/ui/card";
import { Star, Home, Wifi } from "lucide-react";

export default function HomePage() {
  const home = siteConfig.pages.home;

  return (
    <>
      <Hero />
      <KeyValueStrip />
      
      {/* Featured Properties */}
      <section className="py-12 bg-muted">
        <Container>
          <h2 className="text-3xl font-heading mb-8">{home.featuredProperties.heading}</h2>
          <PropertyGrid properties={home.featuredProperties.items} />
        </Container>
      </section>

      {/* Experiences Highlight */}
      <section className="py-12">
        <Container>
          <h2 className="text-3xl font-heading mb-8">{home.experiencesHighlight.heading}</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {home.experiencesHighlight.items.map((item, index) => (
              <Card key={index} className="text-center">
                <div className="h-32 bg-muted rounded-lg mb-4" />
                <h3 className="font-medium mb-2">{item.title}</h3>
                <p className="text-sm text-muted mb-4">{item.blurb}</p>
                <Button href={item.href} variant="secondary">Learn More</Button>
              </Card>
            ))}
          </div>
        </Container>
      </section>

      {/* Features */}
      <section className="py-12 bg-muted">
        <Container>
          <h2 className="text-3xl font-heading mb-8">{home.features.heading}</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {home.features.items.map((item, index) => {
              const IconComponent = item.icon === "home" ? Home : Wifi;
              return (
                <div key={index} className="flex gap-4">
                  <IconComponent className="h-8 w-8 text-primary flex-shrink-0" />
                  <div>
                    <h3 className="font-medium mb-2">{item.title}</h3>
                    <p className="text-muted">{item.description}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </Container>
      </section>

      {/* Book Direct */}
      <section className="py-12">
        <Container>
          <h2 className="text-3xl font-heading mb-6">{home.bookDirect.heading}</h2>
          <ul className="space-y-3 mb-6">
            {home.bookDirect.bullets.map((bullet, index) => (
              <li key={index} className="flex items-center gap-2">
                <div className="h-2 w-2 bg-primary rounded-full" />
                {bullet}
              </li>
            ))}
          </ul>
          <Button href="/properties">Book Direct</Button>
        </Container>
      </section>

      {/* Reviews */}
      <section className="py-12 bg-muted">
        <Container>
          <h2 className="text-3xl font-heading mb-8">{home.reviews.heading}</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {home.reviews.items.map((review, index) => (
              <Card key={index}>
                <div className="flex items-center gap-1 mb-3">
                  {[...Array(review.rating)].map((_, i) => (
                    <Star key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                <p className="text-muted mb-3">"{review.text}"</p>
                <p className="font-medium">{review.name}</p>
              </Card>
            ))}
          </div>
        </Container>
      </section>

      {/* Guide Teaser */}
      <section className="py-12">
        <Container>
          <h2 className="text-3xl font-heading mb-8">{home.guideTeaser.heading}</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {home.guideTeaser.items.map((item, index) => (
              <Card key={index} className="text-center">
                <div className="h-32 bg-muted rounded-lg mb-4" />
                <h3 className="font-medium mb-4">{item.title}</h3>
                <Button href={item.href} variant="secondary">Read Guide</Button>
              </Card>
            ))}
          </div>
        </Container>
      </section>

      {/* FAQ */}
      <FAQAccordion path="home" />

      {/* Owner Teaser */}
      <section className="py-12 bg-primary text-primaryFg">
        <Container>
          <div className="text-center">
            <h2 className="text-3xl font-heading mb-4">{home.ownerTeaser.heading}</h2>
            <p className="text-lg mb-6 max-w-2xl mx-auto">{home.ownerTeaser.blurb}</p>
            <Button href={home.ownerTeaser.cta.href} variant="secondary">
              {home.ownerTeaser.cta.label}
            </Button>
          </div>
        </Container>
      </section>
    </>
  );
}
