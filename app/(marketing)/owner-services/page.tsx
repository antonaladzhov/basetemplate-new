import { siteConfig } from "@/app/config/site-config";
import Container from "@/components/ui/container";
import Button from "@/components/ui/button";
import Card from "@/components/ui/card";
import { BarChart3, CheckCircle } from "lucide-react";
import PricingPlans from "@/components/blocks/pricing-plans";
import OnboardingTimeline from "@/components/blocks/onboarding-timeline";
import Testimonials from "@/components/blocks/testimonials";
import FAQAccordion from "@/components/blocks/faq-accordion";
import ContactForm from "@/components/blocks/contact-form";

export default function OwnerServicesPage() {
  const ownerServices = siteConfig.pages.ownerServices;

  return (
    <>
      {/* Hero */}
      <section className="surface-primary text-on-primary py-16">
        <Container>
          <div className="text-center max-w-3xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-heading mb-6 text-on-primary">
              {ownerServices.hero.headline}
            </h1>
            <p className="text-xl mb-8 text-on-primary">
              {ownerServices.hero.subhead}
            </p>
            <Button href={ownerServices.cta.href} variant="secondary">
              {ownerServices.cta.label}
            </Button>
          </div>
        </Container>
      </section>

      {/* Value Pillars */}
      <section className="surface-bg text-on-bg py-16">
        <Container>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {ownerServices.valuePillars.map((pillar, index) => (
              <Card key={index} className="text-center surface-bg">
                <div className="flex justify-center mb-4">
                  <BarChart3 className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-xl font-heading mb-3 text-on-bg">{pillar.title}</h3>
                <p className="text-on-bg">{pillar.body}</p>
              </Card>
            ))}
          </div>
        </Container>
      </section>

      {/* Services */}
      <section className="surface-muted text-on-muted py-12">
        <Container>
          <h2 className="text-3xl font-heading mb-8 text-on-muted">Our Services</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {ownerServices.services.map((service, index) => (
              <div key={index}>
                <h3 className="text-xl font-heading mb-3 text-on-muted">{service.title}</h3>
                <p className="text-on-muted">{service.body}</p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* Pricing */}
      <section className="surface-bg text-on-bg py-12">
        <Container>
          <h2 className="text-3xl font-heading mb-8 text-on-bg">Pricing Plans</h2>
          <PricingPlans />
        </Container>
      </section>

      {/* Uplift Claim */}
      <section className="surface-primary text-on-primary py-12">
        <Container>
          <div className="text-center">
            <h2 className="text-3xl font-heading mb-4 text-on-primary">Revenue Uplift</h2>
            <p className="text-xl text-on-primary">{ownerServices.upliftClaim}</p>
          </div>
        </Container>
      </section>

      {/* Onboarding */}
      <section className="surface-bg text-on-bg py-12">
        <Container>
          <OnboardingTimeline />
        </Container>
      </section>

      {/* Testimonials */}
      <section className="surface-muted text-on-muted py-12">
        <Container>
          <h2 className="text-3xl font-heading mb-8 text-on-muted">What Our Owners Say</h2>
          <Testimonials />
        </Container>
      </section>

      {/* FAQ */}
      <FAQAccordion path="/owner-services" />

      {/* Lead Form */}
      <section className="surface-bg text-on-bg py-12">
        <Container>
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-3xl font-heading mb-4 text-on-bg">
              {ownerServices.leadForm.heading}
            </h2>
            <ContactForm />
          </div>
        </Container>
      </section>
    </>
  );
}
