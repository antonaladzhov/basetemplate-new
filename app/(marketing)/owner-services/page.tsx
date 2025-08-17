import { siteConfig } from "@/app/config/site-config";
import Container from "@/components/ui/container";
import Button from "@/components/ui/button";
import PricingPlans from "@/components/blocks/pricing-plans";
import OnboardingTimeline from "@/components/blocks/onboarding-timeline";
import Testimonials from "@/components/blocks/testimonials";
import FAQAccordion from "@/components/blocks/faq-accordion";
import Input from "@/components/ui/input";
import Select from "@/components/ui/select";
import { BarChart3 } from "lucide-react";

export default function OwnerServicesPage() {
  const ownerServices = siteConfig.pages.ownerServices;

  return (
    <>
      {/* Hero */}
      <section className="py-12 bg-muted">
        <Container>
          <h1 className="text-4xl font-heading mb-4">
            {ownerServices.hero.headline}
          </h1>
          <p className="text-lg text-muted">
            {ownerServices.hero.subhead}
          </p>
        </Container>
      </section>

      {/* Value Pillars */}
      <section className="py-12">
        <Container>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {ownerServices.valuePillars.map((pillar, index) => (
              <div key={index} className="text-center">
                <BarChart3 className="h-12 w-12 mx-auto mb-4 text-primary" />
                <h3 className="text-xl font-heading mb-3">{pillar.title}</h3>
                <p className="text-muted">{pillar.body}</p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* Services */}
      <section className="py-12 bg-muted">
        <Container>
          <h2 className="text-3xl font-heading mb-8">Our Services</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {ownerServices.services.map((service, index) => (
              <div key={index}>
                <h3 className="text-xl font-heading mb-3">{service.title}</h3>
                <p className="text-muted">{service.body}</p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* Pricing */}
      <section className="py-12">
        <Container>
          <h2 className="text-3xl font-heading mb-8">Pricing Plans</h2>
          <PricingPlans />
        </Container>
      </section>

      {/* Uplift Claim */}
      <section className="py-12 bg-primary text-primaryFg">
        <Container>
          <div className="text-center">
            <h2 className="text-3xl font-heading mb-4">Revenue Uplift</h2>
            <p className="text-xl">{ownerServices.upliftClaim}</p>
          </div>
        </Container>
      </section>

      {/* Onboarding */}
      <section className="py-12">
        <Container>
          <OnboardingTimeline />
        </Container>
      </section>

      {/* Testimonials */}
      <section className="py-12 bg-muted">
        <Container>
          <h2 className="text-3xl font-heading mb-8">What Our Owners Say</h2>
          <Testimonials />
        </Container>
      </section>

      {/* FAQ */}
      <FAQAccordion path="owner" />

      {/* Lead Form */}
      <section className="py-12">
        <Container>
          <div className="max-w-2xl mx-auto">
            <h2 className="text-3xl font-heading mb-6 text-center">
              {ownerServices.leadForm.heading}
            </h2>
            <form className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <Input placeholder="Property name" aria-label="Property name input" />
                <Input placeholder="Location" aria-label="Location input" />
              </div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <Select aria-label="Bedrooms select">
                  <option>Bedrooms</option>
                  <option>1</option>
                  <option>2</option>
                  <option>3</option>
                  <option>4+</option>
                </Select>
                <Select aria-label="Bathrooms select">
                  <option>Bathrooms</option>
                  <option>1</option>
                  <option>2</option>
                  <option>3</option>
                  <option>4+</option>
                </Select>
                <Input type="date" aria-label="Start date input" />
              </div>
              <Button type="submit" className="w-full">
                {ownerServices.leadForm.submitLabel}
              </Button>
            </form>
          </div>
        </Container>
      </section>
    </>
  );
}
