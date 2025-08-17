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
      <section className="surface-muted text-on-muted py-12">
        <Container>
          <h2 className="text-3xl font-heading mb-8 text-on-muted">{home.featuredProperties.heading}</h2>
          <PropertyGrid properties={home.featuredProperties.items} />
        </Container>
      </section>

      {/* Experiences Highlight */}
      <section className="surface-bg text-on-bg py-12">
        <Container>
          <h2 className="text-3xl font-heading mb-8 text-on-bg">{home.experiencesHighlight.heading}</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {home.experiencesHighlight.items.map((item, index) => (
              <Card key={index} className="text-center surface-bg">
                <div className="h-32 surface-muted rounded-lg mb-4" />
                <h3 className="font-medium mb-2 text-on-bg">{item.title}</h3>
                <p className="text-sm text-on-bg mb-4">{item.blurb}</p>
                <Button href={item.href} variant="secondary">Learn More</Button>
              </Card>
            ))}
          </div>
        </Container>
      </section>

      {/* Features */}
      <section className="surface-muted text-on-muted py-12">
        <Container>
          <h2 className="text-3xl font-heading mb-8 text-on-muted">{home.features.heading}</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {home.features.items.map((feature, index) => {
              const Icon = feature.icon === "home" ? Home : Wifi;
              return (
                <Card key={index} className="text-center surface-bg">
                  <div className="flex justify-center mb-4">
                    <Icon className="h-8 w-8 text-primary" />
                  </div>
                  <h3 className="font-medium mb-2 text-on-bg">{feature.title}</h3>
                  <p className="text-sm text-on-bg">{feature.description}</p>
                </Card>
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
      <section className="surface-muted text-on-muted py-12">
        <Container>
          <h2 className="text-3xl font-heading mb-8 text-on-muted">{home.reviews.heading}</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {home.reviews.items.map((review, index) => (
              <Card key={index} className="surface-bg">
                <div className="flex items-center gap-1 mb-3">
                  {[...Array(review.rating)].map((_, i) => (
                    <Star key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                <p className="text-on-bg mb-3">"{review.text}"</p>
                <p className="font-medium text-on-bg">{review.name}</p>
              </Card>
            ))}
          </div>
        </Container>
      </section>

      {/* Guide Teaser */}
      <section className="surface-bg text-on-bg py-12">
        <Container>
          <h2 className="text-3xl font-heading mb-8 text-on-bg">{home.guideTeaser.heading}</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {home.guideTeaser.items.map((item, index) => (
              <Card key={index} className="text-center surface-bg">
                <div className="h-32 surface-muted rounded-lg mb-4" />
                <h3 className="font-medium mb-4 text-on-bg">{item.title}</h3>
                <Button href={item.href} variant="secondary">Read Guide</Button>
              </Card>
            ))}
          </div>
        </Container>
      </section>

      {/* FAQ */}
      <FAQAccordion path="home" />

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
