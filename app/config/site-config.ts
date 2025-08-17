import { z } from "zod";

export const NavItem = z.object({ label: z.string(), href: z.string() });
export type NavItem = z.infer<typeof NavItem>;

const faqSchema = z.object({ q: z.string(), a: z.string() });

export const siteConfigSchema = z.object({
  brand: z.object({
    name: z.string(),
    tagline: z.string(),
    logoAlt: z.string(),
  }),
  nav: z.object({
    main: z.array(NavItem),
    utility: z.array(NavItem),
    ctas: z.object({ primary: NavItem }),
  }),
  footer: z.object({
    quickLinks: z.array(NavItem),
    contact: z.object({ address: z.string(), phone: z.string(), email: z.string() }),
    social: z.array(NavItem),
    legal: z.array(NavItem),
  }),
  pages: z.object({
    home: z.object({
      hero: z.object({
        headline: z.string(),
        subhead: z.string(),
        backgroundAlt: z.string(),
        ctas: z.array(NavItem),
        showSearch: z.boolean(),
      }),
      keyValueStrip: z.array(z.object({ icon: z.string(), label: z.string(), description: z.string() })),
      featuredProperties: z.object({ heading: z.string(), items: z.array(z.object({
        id: z.string(), title: z.string(), location: z.string(), imageAlt: z.string(),
        beds: z.number(), baths: z.number(), guests: z.number(), priceFrom: z.number(), href: z.string()
      })) }),
      experiencesHighlight: z.object({ heading: z.string(), items: z.array(z.object({
        title: z.string(), blurb: z.string(), imageAlt: z.string(), href: z.string()
      })) }),
      features: z.object({ heading: z.string(), items: z.array(z.object({ title: z.string(), description: z.string(), icon: z.string() })) }),
      bookDirect: z.object({ heading: z.string(), bullets: z.array(z.string()) }),
      reviews: z.object({ heading: z.string(), items: z.array(z.object({ name: z.string(), text: z.string(), rating: z.number() })) }),
      guideTeaser: z.object({ heading: z.string(), items: z.array(z.object({ title: z.string(), href: z.string(), imageAlt: z.string() })) }),
      faq: z.object({ heading: z.string(), items: z.array(faqSchema) }),
      ownerTeaser: z.object({ heading: z.string(), blurb: z.string(), cta: NavItem }),
    }),
    properties: z.object({
      hero: z.object({ headline: z.string(), subhead: z.string() }),
      filters: z.array(z.string()),
      sort: z.array(z.string()),
      emptyState: z.string(),
    }),
    experiences: z.object({
      hero: z.object({ headline: z.string(), subhead: z.string() }),
      categories: z.array(z.object({ label: z.string(), href: z.string() })),
      featured: z.array(z.object({ title: z.string(), blurb: z.string(), href: z.string() })),
      seasonal: z.array(z.object({ title: z.string(), timeframe: z.string(), href: z.string() })),
      partnerLogosAlt: z.array(z.string()),
      cta: NavItem,
      detailTemplate: z.object({
        overviewHeading: z.string(), inclusionsHeading: z.string(), durationLabel: z.string(), locationLabel: z.string(),
        cancellationHeading: z.string(), requestCtaLabel: z.string()
      }),
      addOns: z.array(z.object({ title: z.string(), description: z.string(), href: z.string() })),
    }),
    guides: z.object({
      hub: z.object({ heroHeading: z.string(), filtersLabel: z.string(), featuredHeading: z.string() }),
      articleTemplate: z.object({
        heroAlt: z.string(),
        sections: z.array(z.object({ title: z.string(), body: z.string() })),
        inlineTeasersHeading: z.string(),
      })
    }),
    about: z.object({ storyHeading: z.string(), missionHeading: z.string(), valuesHeading: z.string(), numbersHeading: z.string() }),
    contact: z.object({ heading: z.string(), phoneLabel: z.string(), emailLabel: z.string(), hoursLabel: z.string() }),
    ownerServices: z.object({
      hero: z.object({ headline: z.string(), subhead: z.string() }),
      valuePillars: z.array(z.object({ title: z.string(), body: z.string(), icon: z.string() })),
      services: z.array(z.object({ title: z.string(), body: z.string() })),
      pricing: z.array(z.object({ name: z.string(), priceNote: z.string(), includes: z.array(z.string()) })),
      upliftClaim: z.string(),
      onboarding: z.array(z.object({ step: z.string(), description: z.string() })),
      testimonials: z.array(z.object({ name: z.string(), text: z.string() })),
      faq: z.array(faqSchema),
      cta: NavItem,
      leadForm: z.object({ heading: z.string(), submitLabel: z.string() })
    }),
    policies: z.object({ templateHeading: z.string(), lastUpdatedLabel: z.string() })
  })
});

export type SiteConfig = z.infer<typeof siteConfigSchema>;

export const siteConfig: SiteConfig = siteConfigSchema.parse({
  brand: {
    name: "brand",
    tagline: "Brand tagline placeholder",
    logoAlt: "Brand logo alt text placeholder",
  },
  nav: {
    main: [
      { label: "Properties", href: "/properties" },
      { label: "Experiences", href: "/experiences" },
      { label: "Guides & Blog", href: "/guides" },
      { label: "For Owners", href: "/owner-services" },
    ],
    utility: [
      { label: "Language switcher placeholder", href: "#" },
      { label: "Contact", href: "/contact" },
    ],
    ctas: {
      primary: { label: "Book Now", href: "/properties" },
    },
  },
  footer: {
    quickLinks: [
      { label: "About us", href: "/about" },
      { label: "Contact", href: "/contact" },
      { label: "Properties", href: "/properties" },
      { label: "Experiences", href: "/experiences" },
      { label: "Guides", href: "/guides" },
    ],
    contact: { address: "Contact address placeholder", phone: "Contact phone placeholder", email: "Contact email placeholder" },
    social: [
      { label: "Instagram", href: "#" },
      { label: "Facebook", href: "#" },
    ],
    legal: [
      { label: "Terms", href: "/policies/terms" },
      { label: "Privacy", href: "/policies/privacy" },
      { label: "Cookies", href: "/policies/cookies" },
      { label: "Accessibility", href: "/policies/accessibility" },
      { label: "Sitemap", href: "/sitemap.xml" },
    ],
  },
  pages: {
    home: {
      hero: {
        headline: "Homepage hero headline placeholder",
        subhead: "Homepage hero subheading placeholder",
        backgroundAlt: "Homepage hero background alt text placeholder",
        ctas: [
          { label: "Start your search", href: "/properties" },
          { label: "List your property", href: "/owner-services" },
        ],
        showSearch: true,
      },
      keyValueStrip: [
        { icon: "shield", label: "Book direct & save", description: "Key value description placeholder" },
        { icon: "star", label: "Top‑rated homes", description: "Key value description placeholder" },
        { icon: "headset", label: "Local support", description: "Key value description placeholder" },
      ],
      featuredProperties: {
        heading: "Featured properties section heading placeholder",
        items: [
          { id: "p1", title: "Property card title placeholder", location: "Property location placeholder", imageAlt: "Property image alt placeholder", beds: 3, baths: 2, guests: 6, priceFrom: 199, href: "/properties" },
          { id: "p2", title: "Property card title placeholder", location: "Property location placeholder", imageAlt: "Property image alt placeholder", beds: 2, baths: 1, guests: 4, priceFrom: 149, href: "/properties" },
          { id: "p3", title: "Property card title placeholder", location: "Property location placeholder", imageAlt: "Property image alt placeholder", beds: 4, baths: 3, guests: 8, priceFrom: 249, href: "/properties" },
        ],
      },
      experiencesHighlight: {
        heading: "Experiences highlight section heading placeholder",
        items: [
          { title: "Experience card title placeholder", blurb: "Experience card blurb placeholder", imageAlt: "Experience image alt placeholder", href: "/experiences" },
        ],
      },
      features: {
        heading: "Key features section heading placeholder",
        items: [
          { title: "Feature title placeholder", description: "Feature description placeholder", icon: "home" },
          { title: "Feature title placeholder", description: "Feature description placeholder", icon: "wifi" },
        ],
      },
      bookDirect: { heading: "Why book direct section heading placeholder", bullets: ["Book direct benefit placeholder", "Exclusive perk placeholder"] },
      reviews: { heading: "Guest reviews section heading placeholder", items: [ { name: "Reviewer name placeholder", text: "Review text placeholder", rating: 5 } ] },
      guideTeaser: { heading: "Local guide teaser section heading placeholder", items: [ { title: "Guide teaser card title placeholder", href: "/guides", imageAlt: "Guide teaser image alt placeholder" } ] },
      faq: { heading: "Homepage FAQ section heading placeholder", items: [ { q: "FAQ question placeholder", a: "FAQ answer placeholder" } ] },
      ownerTeaser: { heading: "Owner invitation teaser heading placeholder", blurb: "Owner invitation teaser blurb placeholder", cta: { label: "Request consultation", href: "/owner-services" } },
    },
    properties: {
      hero: { headline: "All properties hero headline placeholder", subhead: "All properties hero subheading placeholder" },
      filters: ["Destination", "Price", "Bedrooms", "Baths", "Guests", "Type", "Amenities", "Pet‑friendly", "Work‑friendly", "Accessibility"],
      sort: ["Price", "Bedrooms", "Rating", "New", "Featured"],
      emptyState: "Properties empty state message placeholder",
    },
    experiences: {
      hero: { headline: "Experiences landing hero headline placeholder", subhead: "Experiences landing hero subheading placeholder" },
      categories: [ { label: "Experience category label placeholder", href: "#" } ],
      featured: [ { title: "Featured experience title placeholder", blurb: "Featured experience blurb placeholder", href: "#" } ],
      seasonal: [ { title: "Seasonal highlight title placeholder", timeframe: "Seasonal timeframe placeholder", href: "#" } ],
      partnerLogosAlt: ["Partner logo alt placeholder"],
      cta: { label: "Request concierge", href: "/contact" },
      detailTemplate: {
        overviewHeading: "Experience detail overview heading placeholder",
        inclusionsHeading: "Experience inclusions heading placeholder",
        durationLabel: "Experience duration label placeholder",
        locationLabel: "Experience location label placeholder",
        cancellationHeading: "Experience cancellation heading placeholder",
        requestCtaLabel: "Experience request CTA label placeholder",
      },
      addOns: [ { title: "Add‑on card title placeholder", description: "Add‑on card description placeholder", href: "#" } ],
    },
    guides: {
      hub: { heroHeading: "Travel guides hub hero heading placeholder", filtersLabel: "Guides filters label placeholder", featuredHeading: "Featured posts heading placeholder" },
      articleTemplate: {
        heroAlt: "Guide article hero image alt placeholder",
        sections: [
          { title: "What to do section heading placeholder", body: "What to do section body placeholder" },
          { title: "Where to eat section heading placeholder", body: "Where to eat section body placeholder" },
          { title: "Hidden gems section heading placeholder", body: "Hidden gems section body placeholder" },
          { title: "Day trips section heading placeholder", body: "Day trips section body placeholder" },
          { title: "Transport section heading placeholder", body: "Transport section body placeholder" },
          { title: "Safety section heading placeholder", body: "Safety section body placeholder" },
          { title: "Accessibility section heading placeholder", body: "Accessibility section body placeholder" },
        ],
        inlineTeasersHeading: "Inline property/experience teasers heading placeholder",
      },
    },
    about: { storyHeading: "About us story section heading placeholder", missionHeading: "Mission section heading placeholder", valuesHeading: "Values section heading placeholder", numbersHeading: "Our numbers section heading placeholder" },
    contact: { heading: "Contact page heading placeholder", phoneLabel: "Contact phone label placeholder", emailLabel: "Contact email label placeholder", hoursLabel: "Contact hours label placeholder" },
    ownerServices: {
      hero: { headline: "Owner services hero headline placeholder", subhead: "Owner services hero subheading placeholder" },
      valuePillars: [ { title: "Owner value pillar title placeholder", body: "Owner value pillar body placeholder", icon: "bar-chart" } ],
      services: [ { title: "Service item title placeholder", body: "Service item body placeholder" } ],
      pricing: [ { name: "Pricing plan name placeholder", priceNote: "Pricing plan note placeholder", includes: ["Pricing include placeholder"] } ],
      upliftClaim: "Revenue uplift claim placeholder",
      onboarding: [ { step: "Onboarding step title placeholder", description: "Onboarding step description placeholder" } ],
      testimonials: [ { name: "Owner testimonial name placeholder", text: "Owner testimonial text placeholder" } ],
      faq: [ { q: "Owner FAQ question placeholder", a: "Owner FAQ answer placeholder" } ],
      cta: { label: "Request consultation", href: "/contact" },
      leadForm: { heading: "Owner lead form heading placeholder", submitLabel: "Owner lead form submit label placeholder" },
    },
    policies: { templateHeading: "Policy template heading placeholder", lastUpdatedLabel: "Last updated label placeholder" },
  },
});
