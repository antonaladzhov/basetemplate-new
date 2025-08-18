"use client";

import { siteConfig } from "@/app/config/site-config";
import Container from "@/components/ui/container";
import { useState } from "react";
import { Minus, Plus } from "lucide-react";

interface FAQAccordionProps {
  path?: string;
}

export default function FAQAccordion({ path }: FAQAccordionProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(0); // First item open by default
  
  let heading: string;
  let items: { q: string; a: string }[];

  if (path === "/owner-services") {
    heading = "Owner Services FAQ";
    items = siteConfig.pages.ownerServices.faq;
  } else {
    heading = siteConfig.pages.home.faq.heading;
    items = siteConfig.pages.home.faq.items;
  }

  const toggleItem = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="surface-bg text-on-bg py-16">
      <Container>
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-heading font-bold mb-4 text-on-bg">
              {heading}
            </h2>
            <p className="text-lg text-on-bg/70">
              From tenant screening to maintenance and rent collection — we handle it all so you don&apos;t have to.
            </p>
          </div>
          
          <div className="space-y-0">
            {items.map((item, index) => (
              <div key={index} className="border-b border-gray-200 last:border-b-0">
                <button
                  onClick={() => toggleItem(index)}
                  className="flex w-full items-center justify-between py-6 text-left hover:text-primary transition-colors"
                >
                  <span className="text-lg font-medium">{item.q}</span>
                  <div className="ml-4 flex-shrink-0">
                    {openIndex === index ? (
                      <Minus className="h-5 w-5 transition-transform duration-200" />
                    ) : (
                      <Plus className="h-5 w-5 transition-transform duration-200" />
                    )}
                  </div>
                </button>
                
                <div
                  className={`overflow-hidden transition-all duration-300 ease-in-out ${
                    openIndex === index ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
                  }`}
                >
                  <div className="pb-6 text-on-bg/80 leading-relaxed">
                    {item.a}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
