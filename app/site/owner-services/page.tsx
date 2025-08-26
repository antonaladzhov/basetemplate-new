import { siteConfig } from "@/app/config/site-config";
import Container from "@/components/ui/container";
import Button from "@/components/ui/button";
import Card from "@/components/ui/card";
import { BarChart3, CheckCircle, Camera, MessageCircle, Sparkles, TrendingUp, Calendar, FileText, Home, ShieldCheck, Shield, Star } from "lucide-react";
import PricingPlans from "@/components/blocks/pricing-plans";
import OnboardingTimeline from "@/components/blocks/onboarding-timeline";
import TestimonialSlider from "@/components/blocks/testimonial-slider";
import FAQAccordion from "@/components/blocks/faq-accordion";
import ContactForm from "@/components/blocks/contact-form";
import Reveal from "@/components/ui/reveal";

export default function OwnerServicesPage() {
  const ownerServices = siteConfig.pages.ownerServices;

  const iconMap = {
    camera: Camera,
    "message-circle": MessageCircle,
    sparkles: Sparkles,
    "trending-up": TrendingUp,
    calendar: Calendar,
    "file-text": FileText,
    home: Home,
    "shield-check": ShieldCheck,
    "check-circle": CheckCircle,
    shield: Shield,
    star: Star,
  };

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
            
            {/* Number Accents */}
            <div className="mt-12 pt-8 border-t border-primary/20">
              <div className="grid grid-cols-3 gap-8">
                <div className="text-center">
                  <div className="text-3xl md:text-4xl font-bold text-on-primary mb-2">100M+</div>
                  <div className="text-sm text-on-primary/80">Booking Revenue</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl md:text-4xl font-bold text-on-primary mb-2">250,000+</div>
                  <div className="text-sm text-on-primary/80">Guests</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl md:text-4xl font-bold text-on-primary mb-2">30,000+</div>
                  <div className="text-sm text-on-primary/80">Stays</div>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* Value Pillars */}
      <section className="surface-bg text-on-bg py-16">
        <Container>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {ownerServices.valuePillars.map((pillar, index) => {
              const IconComponent = iconMap[pillar.icon as keyof typeof iconMap] || TrendingUp;
              return (
                <Card key={index} className="text-center surface-bg">
                  <div className="flex justify-center mb-4">
                    <IconComponent className="h-8 w-8 text-primary" />
                  </div>
                  <h3 className="text-xl font-heading mb-3 text-on-bg">{pillar.title}</h3>
                  <p className="text-on-bg">{pillar.body}</p>
                </Card>
              );
            })}
          </div>
        </Container>
      </section>

      {/* Services */}
      <section className="surface-muted text-on-muted py-16">
        <Container>
          <Reveal>
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-heading mb-4 text-on-muted">Our Services</h2>
              <p className="text-lg text-on-muted/80 max-w-2xl mx-auto">
                Comprehensive property management services designed to maximize your rental income and minimize your workload.
              </p>
            </div>
          </Reveal>

          <Reveal>
            <div className="bg-white rounded-2xl shadow-2xl p-8 md:p-12">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {ownerServices.services.map((service, index) => {
                  const IconComponent = iconMap[service.icon as keyof typeof iconMap] || CheckCircle;
                  return (
                    <Reveal key={index}>
                      <div className="text-center">
                        <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-gray-100 flex items-center justify-center">
                          <IconComponent className="w-8 h-8 text-gray-700" />
                        </div>
                        <h3 className="text-lg font-semibold mb-2 text-gray-900">{service.title}</h3>
                        <p className="text-sm text-gray-600">{service.body}</p>
                      </div>
                    </Reveal>
                  );
                })}
              </div>
            </div>
          </Reveal>
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
          <TestimonialSlider />
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
      
   {/* Trusted Partners (reused from Experiences) */}
   <Reveal>
      <section className="py-12 bg-gray-100">
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

    </>
  );
}
