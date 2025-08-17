"use client";

import { siteConfig } from "@/app/config/site-config";
import Container from "@/components/ui/container";
import Accordion from "@/components/ui/accordion";

interface FAQAccordionProps {
  path?: string;
}

export default function FAQAccordion({ path }: FAQAccordionProps) {
  let heading: string;
  let items: { q: string; a: string }[];

  if (path === "/owner-services") {
    heading = "Owner Services FAQ";
    items = siteConfig.pages.ownerServices.faq;
  } else {
    heading = siteConfig.pages.home.faq.heading;
    items = siteConfig.pages.home.faq.items;
  }

  return (
    <section className="surface-bg text-on-bg py-16">
      <Container>
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl font-heading font-bold text-center mb-12 text-on-bg">
            {heading}
          </h2>
          <Accordion
            type="single"
            collapsible
            className="space-y-4"
          >
            {items.map((item, index) => (
              <Accordion.Item key={index} value={`item-${index}`}>
                <Accordion.Trigger className="text-left text-on-bg hover:text-primary transition-colors">
                  {item.q}
                </Accordion.Trigger>
                <Accordion.Content className="text-on-bg">
                  {item.a}
                </Accordion.Content>
              </Accordion.Item>
            ))}
          </Accordion>
        </div>
      </Container>
    </section>
  );
}
