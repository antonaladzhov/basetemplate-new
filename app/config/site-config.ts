import { z } from "zod";

export const NavItem = z.object({ label: z.string(), href: z.string() });
export type NavItem = z.infer<typeof NavItem>;

const faqSchema = z.object({ q: z.string(), a: z.string() });

export const siteConfigSchema = z.object({
  brand: z.object({
    name: z.string(),
    tagline: z.string(),
    logoAlt: z.string(),
    footerDescription: z.string(),
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
      featuredProperties: z.object({ 
        heading: z.string(), 
        title: z.string(),
        description: z.string(),
        items: z.array(z.object({
          id: z.string(), title: z.string(), location: z.string(), imageAlt: z.string(),
          beds: z.number(), baths: z.number(), guests: z.number(), priceFrom: z.number(), href: z.string()
        })) 
      }),
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
      categories: z.array(z.object({ key: z.string(), name: z.string(), href: z.string() })),
      featured: z.array(z.object({ title: z.string(), blurb: z.string(), href: z.string() })),
      seasonal: z.array(z.object({ title: z.string(), timeframe: z.string(), href: z.string() })),
      partnerLogosAlt: z.array(z.string()),
      cta: NavItem,
      detailTemplate: z.object({
        overviewHeading: z.string(), inclusionsHeading: z.string(), durationLabel: z.string(), locationLabel: z.string(),
        cancellationHeading: z.string(), requestCtaLabel: z.string()
      }),
      addOns: z.array(z.object({ title: z.string(), description: z.string(), href: z.string() })),
      exploreByCategory: z.object({
        heading: z.string(),
        description: z.string(),
      }),
      partners: z.object({
        heading: z.string(),
        logos: z.array(z.string()),
      }),
      customExperience: z.object({
        heading: z.string(),
        description: z.string(),
      }),
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
    contact: z.object({ 
      heading: z.string(), 
      phoneLabel: z.string(), 
      emailLabel: z.string(), 
      hoursLabel: z.string(),
      form: z.object({
        nameLabel: z.string(),
        emailLabel: z.string(),
        phoneLabel: z.string(),
        messageLabel: z.string(),
        namePlaceholder: z.string(),
        emailPlaceholder: z.string(),
        phonePlaceholder: z.string(),
        messagePlaceholder: z.string(),
        submitLabel: z.string(),
      }),
    }),
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
      leadForm: z.object({ heading: z.string(), submitLabel: z.string() }),
      onboardingProcess: z.object({
        heading: z.string(),
      }),
    }),
    policies: z.object({ templateHeading: z.string(), lastUpdatedLabel: z.string() }),
    trustBadges: z.array(z.object({ 
      icon: z.string(), 
      label: z.string(), 
      text: z.string() 
    })),
  })
});

export type SiteConfig = z.infer<typeof siteConfigSchema>;

export const siteConfig: SiteConfig = siteConfigSchema.parse({
  brand: {
    name: "brand",
    tagline: "Premium Property Management",
    logoAlt: "Brand logo",
    footerDescription: "Your trusted partner in premium property management and curated experiences",
  },
  nav: {
    main: [
      { label: "Properties", href: "/site/properties" },
      { label: "Experiences", href: "/site/experiences" },
      { label: "Guides & Blog", href: "/site/guides" },
      { label: "For Owners", href: "/site/owner-services" },
    ],
    utility: [
      { label: "Language switcher placeholder", href: "#" },
      { label: "Contact", href: "/site/contact" },
    ],
    ctas: {
      primary: { label: "Book Now", href: "/site/properties" },
    },
  },
  footer: {
    quickLinks: [
      { label: "About us", href: "/site/about" },
      { label: "Contact", href: "/site/contact" },
      { label: "Properties", href: "/site/properties" },
      { label: "Experiences", href: "/site/experiences" },
      { label: "Guides", href: "/site/guides" },
    ],
    contact: { address: "123 Market Street, Suite 400, San Francisco, CA", phone: "+1 (555) 123-4567", email: "hello@brand.com" },
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
        headline: "Discover Exceptional Properties & Experiences",
        subhead: "Your trusted partner in premium property management and curated experiences",
        backgroundAlt: "Luxury property with scenic view",
        ctas: [
          { label: "Start your search", href: "/site/properties" },
          { label: "List your property", href: "/site/owner-services" },
        ],
        showSearch: true,
      },
      keyValueStrip: [
        { icon: "shield", label: "Book direct & save", description: "Save up to 15% when you book directly with us" },
        { icon: "star", label: "Top‑rated homes", description: "All properties verified and rated 4.8+ stars" },
        { icon: "headset", label: "Local support", description: "24/7 local support throughout your stay" },
      ],
      featuredProperties: {
        heading: "Featured Properties",
        title: "Most Loved Properties",
        description: "Discover our most popular properties, handpicked for exceptional experiences",
        items: [
          { id: "p1", title: "Luxury Villa with Ocean View", location: "Miami Beach, FL", imageAlt: "Luxury villa with ocean view", beds: 4, baths: 3, guests: 8, priceFrom: 299, href: "/site/properties" },
          { id: "p2", title: "Cozy Mountain Cabin", location: "Aspen, CO", imageAlt: "Cozy mountain cabin", beds: 3, baths: 2, guests: 6, priceFrom: 199, href: "/site/properties" },
          { id: "p3", title: "Modern City Apartment", location: "New York, NY", imageAlt: "Modern city apartment", beds: 2, baths: 2, guests: 4, priceFrom: 249, href: "/site/properties" },
          { id: "p4", title: "Beachfront Condo", location: "Malibu, CA", imageAlt: "Beachfront condo", beds: 3, baths: 2, guests: 6, priceFrom: 349, href: "/site/properties" },
          { id: "p5", title: "Historic Townhouse", location: "Charleston, SC", imageAlt: "Historic townhouse", beds: 4, baths: 3, guests: 8, priceFrom: 279, href: "/site/properties" },
          { id: "p6", title: "Desert Oasis Villa", location: "Palm Springs, CA", imageAlt: "Desert oasis villa", beds: 3, baths: 2, guests: 6, priceFrom: 189, href: "/site/properties" },
          { id: "p7", title: "Lakefront Cottage", location: "Lake Tahoe, CA", imageAlt: "Lakefront cottage", beds: 2, baths: 1, guests: 4, priceFrom: 159, href: "/site/properties" },
          { id: "p8", title: "Ski-in Chalet", location: "Vail, CO", imageAlt: "Ski-in chalet", beds: 5, baths: 4, guests: 10, priceFrom: 399, href: "/site/properties" },
        ],
      },
      experiencesHighlight: {
        heading: "Curated Experiences",
        items: [
          { title: "Wine Tasting & Vineyard Tour", blurb: "Explore local vineyards and sample award-winning wines with expert sommeliers", imageAlt: "Wine tasting experience in vineyard", href: "/site/experiences" },
          { title: "Private Chef Experience", blurb: "Enjoy a personalized dining experience with a private chef in your vacation home", imageAlt: "Private chef cooking in kitchen", href: "/site/experiences" },
          { title: "Adventure Photography Workshop", blurb: "Capture stunning landscapes and memories with professional photography guidance", imageAlt: "Photography workshop in scenic location", href: "/site/experiences" },
        ],
      },
      features: {
        heading: "Why Choose Us",
        items: [
          { title: "Verified Properties", description: "All properties are thoroughly vetted and verified for quality and safety standards", icon: "shield" },
          { title: "Premium Experience", description: "Enjoy luxury amenities and exceptional service at every property", icon: "star" },
          { title: "Secure Booking", description: "Safe and secure payment processing with full booking protection", icon: "lock" },
          { title: "Personalized Service", description: "Tailored recommendations and support throughout your stay", icon: "heart" },
          { title: "Prime Locations", description: "Hand‑picked destinations close to beaches, dining, and top attractions", icon: "map-pin" },
          { title: "Flexible Stays", description: "Choose the dates and durations that suit your plans with ease", icon: "calendar" },
          { title: "Local Support", description: "Friendly guest support with on‑the‑ground knowledge when you need it", icon: "headphones" },
          { title: "Quality Assured", description: "Consistent standards for comfort, cleanliness, and amenities across stays", icon: "badge-check" },
        ],
      },
      bookDirect: { heading: "Why book direct section heading placeholder", bullets: ["Book direct benefit placeholder", "Exclusive perk placeholder"] },
      reviews: { heading: "Guest reviews section heading placeholder", items: [ { name: "Reviewer name placeholder", text: "Review text placeholder", rating: 5 } ] },
      guideTeaser: { heading: "Local guide teaser section heading placeholder", items: [ { title: "Guide teaser card title placeholder", href: "/site/guides", imageAlt: "Guide teaser image alt placeholder" } ] },
      faq: { 
        heading: "Frequently Asked Questions", 
        items: [
          { 
            q: "What is included in the cleaning service?", 
            a: "Our comprehensive cleaning service includes dusting, vacuuming, mopping, bathroom sanitization, kitchen deep cleaning, fresh linens, and restocking of essential amenities. We also offer additional services like laundry and dishwashing upon request." 
          },
          { 
            q: "How do I check in and check out?", 
            a: "Check-in is available from 3 PM onwards with a seamless digital process. You'll receive detailed instructions and access codes 24 hours before arrival. Check-out is at 11 AM, and we offer flexible late check-out options when available." 
          },
          { 
            q: "Are pets allowed in the properties?", 
            a: "Many of our properties are pet-friendly with prior approval. We have a pet policy that includes a small additional fee and guidelines to ensure the comfort of all guests. Please contact us to confirm pet availability for your chosen property." 
          },
          { 
            q: "What happens if I need to cancel my booking?", 
            a: "We offer flexible cancellation policies that vary by property and booking type. Most bookings can be cancelled up to 7 days before arrival for a full refund. Please review the specific cancellation policy for your chosen property during booking." 
          },
          { 
            q: "Is there 24/7 customer support available?", 
            a: "Yes, our dedicated support team is available 24/7 to assist with any questions or issues. You can reach us via phone, email, or through our mobile app for immediate assistance during your stay." 
          },
          { 
            q: "Do you offer long-term rental options?", 
            a: "Absolutely! We offer extended stay options for guests staying 30 days or longer, with special rates and additional amenities. Our long-term rentals are perfect for business travelers, digital nomads, or those relocating to the area." 
          }
        ] 
      },
      ownerTeaser: { heading: "List Your Property with Us", blurb: "Join our network of premium property owners and start earning more with our professional management services", cta: { label: "Request consultation", href: "/site/owner-services" } },
    },
    properties: {
      hero: { headline: "All properties hero headline placeholder", subhead: "All properties hero subheading placeholder" },
      filters: ["Destination", "Price", "Bedrooms", "Baths", "Guests", "Type", "Amenities", "Pet‑friendly", "Work‑friendly", "Accessibility"],
      sort: ["Price", "Bedrooms", "Rating", "New", "Featured"],
      emptyState: "Properties empty state message placeholder",
    },
    experiences: {
      hero: { headline: "Curated Experiences", subhead: "Discover unique adventures and unforgettable moments" },
      categories: [
        { key: "beach", name: "Beach Getaways", href: "#" },
        { key: "mountain", name: "Mountain Adventures", href: "#" },
        { key: "city", name: "City Experiences", href: "#" },
        { key: "food", name: "Wine & Dining", href: "#" },
        { key: "water", name: "Water Sports", href: "#" },
        { key: "cultural", name: "Cultural Tours", href: "#" },
      ],
      featured: [ { title: "Featured experience title placeholder", blurb: "Featured experience blurb placeholder", href: "#" } ],
      seasonal: [ { title: "Seasonal highlight title placeholder", timeframe: "Seasonal timeframe placeholder", href: "#" } ],
      partnerLogosAlt: ["Partner logo alt placeholder"],
      cta: { label: "Request concierge", href: "/site/contact" },
      detailTemplate: {
        overviewHeading: "Experience detail overview heading placeholder",
        inclusionsHeading: "Experience inclusions heading placeholder",
        durationLabel: "Experience duration label placeholder",
        locationLabel: "Experience location label placeholder",
        cancellationHeading: "Experience cancellation heading placeholder",
        requestCtaLabel: "Experience request CTA label placeholder",
      },
      addOns: [ { title: "Add‑on card title placeholder", description: "Add‑on card description placeholder", href: "#" } ],
      exploreByCategory: {
        heading: "Explore by Category",
        description: "Discover curated experiences tailored to your interests and travel style",
      },
      partners: {
        heading: "Trusted by leading partners",
        logos: ["Partner 1", "Partner 2", "Partner 3", "Partner 4", "Partner 5"],
      },
      customExperience: {
        heading: "Need a custom experience?",
        description: "Our concierge team can help you plan the perfect adventure.",
      },
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
    contact: { 
      heading: "Get in Touch", 
      phoneLabel: "Contact phone label placeholder", 
      emailLabel: "Contact email label placeholder", 
      hoursLabel: "Contact hours label placeholder",
      form: {
        nameLabel: "Name",
        emailLabel: "Email",
        phoneLabel: "Phone",
        messageLabel: "Message",
        namePlaceholder: "Your name",
        emailPlaceholder: "your.email@example.com",
        phonePlaceholder: "Your phone number",
        messagePlaceholder: "Your message",
        submitLabel: "Send Message",
      },
    },
    ownerServices: {
      hero: { headline: "Owner services hero headline placeholder", subhead: "Owner services hero subheading placeholder" },
      valuePillars: [ { title: "Owner value pillar title placeholder", body: "Owner value pillar body placeholder", icon: "bar-chart" } ],
      services: [ { title: "Service item title placeholder", body: "Service item body placeholder" } ],
      pricing: [ { name: "Pricing plan name placeholder", priceNote: "Pricing plan note placeholder", includes: ["Pricing include placeholder"] } ],
      upliftClaim: "Revenue uplift claim placeholder",
      onboarding: [ { step: "Onboarding step title placeholder", description: "Onboarding step description placeholder" } ],
      testimonials: [ { name: "Owner testimonial name placeholder", text: "Owner testimonial text placeholder" } ],
      faq: [ { q: "Owner FAQ question placeholder", a: "Owner FAQ answer placeholder" } ],
      cta: { label: "Request consultation", href: "/site/contact" },
      leadForm: { heading: "Owner lead form heading placeholder", submitLabel: "Owner lead form submit label placeholder" },
      onboardingProcess: {
        heading: "Onboarding Process",
      },
    },
    policies: { templateHeading: "Policy template heading placeholder", lastUpdatedLabel: "Last updated label placeholder" },
    trustBadges: [
      { icon: "shield", label: "Trust badge 1 alt placeholder", text: "Secure Booking" },
      { icon: "award", label: "Trust badge 2 alt placeholder", text: "Award Winner" },
      { icon: "users", label: "Trust badge 3 alt placeholder", text: "10K+ Guests" },
      { icon: "star", label: "Trust badge 4 alt placeholder", text: "4.9/5 Rating" },
    ],
  },
});
