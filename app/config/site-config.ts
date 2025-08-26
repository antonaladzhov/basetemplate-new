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
      services: z.array(z.object({ 
        title: z.string(), 
        body: z.string(),
        icon: z.string()
      })),
      pricing: z.array(z.object({ name: z.string(), priceNote: z.string(), includes: z.array(z.string()) })),
      upliftClaim: z.string(),
      onboarding: z.array(z.object({ step: z.string(), description: z.string() })),
      testimonials: z.array(z.object({ 
        name: z.string(), 
        text: z.string(), 
        role: z.string(), 
        initial: z.string() 
      })),
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
      hero: { headline: "Maximize Your Property's Potential", subhead: "Professional property management services designed to increase your revenue and reduce your stress" },
      valuePillars: [
        { 
          title: "Increased Revenue", 
          body: "Our proven strategies and market expertise help property owners achieve 20-40% higher rental income compared to self-management.", 
          icon: "trending-up" 
        },
        { 
          title: "Peace of Mind", 
          body: "24/7 professional management means you can enjoy passive income without the stress of day-to-day property operations.", 
          icon: "shield" 
        },
        { 
          title: "Premium Guest Experience", 
          body: "We maintain high standards and provide exceptional service, leading to better reviews and repeat bookings.", 
          icon: "star" 
        }
      ],
      services: [
        { 
          title: "Property Marketing & Listing", 
          body: "Professional photography, compelling descriptions, and strategic listing placement across all major platforms.", 
          icon: "camera" 
        },
        { 
          title: "Guest Communication & Support", 
          body: "24/7 guest support, automated messaging, and personalized assistance throughout their stay.", 
          icon: "message-circle" 
        },
        { 
          title: "Cleaning & Maintenance", 
          body: "Regular cleaning services, maintenance coordination, and quality control to maintain property standards.", 
          icon: "sparkles" 
        },
        { 
          title: "Revenue Optimization", 
          body: "Dynamic pricing strategies, market analysis, and yield management to maximize your rental income.", 
          icon: "trending-up" 
        },
        { 
          title: "Booking Management", 
          body: "Seamless reservation handling, calendar management, and automated booking confirmations.", 
          icon: "calendar" 
        },
        { 
          title: "Financial Reporting", 
          body: "Detailed monthly reports, expense tracking, and transparent financial management for your property.", 
          icon: "file-text" 
        },
        { 
          title: "Property Enhancement", 
          body: "Strategic recommendations for property improvements and amenities to increase guest satisfaction.", 
          icon: "home" 
        },
        { 
          title: "Legal Compliance", 
          body: "Ensure your property meets all local regulations, licensing requirements, and safety standards.", 
          icon: "shield-check" 
        }
      ],
      pricing: [
        { name: "Pricing plan name placeholder", priceNote: "Pricing plan note placeholder", includes: ["Pricing include placeholder"] },
        { name: "Pricing plan name placeholder", priceNote: "Pricing plan note placeholder", includes: ["Pricing include placeholder"] },
        { name: "Pricing plan name placeholder", priceNote: "Pricing plan note placeholder", includes: ["Pricing include placeholder"] }
      ],
      upliftClaim: "Revenue uplift claim placeholder",
      onboarding: [
        { 
          step: "Step 1", 
          description: "Get a free property audit and market analysis to understand your property's potential." 
        },
        { 
          step: "Step 2", 
          description: "We help you build your rental strategy using our comprehensive property management solution." 
        },
        { 
          step: "Step 3", 
          description: "You're empowered to earn more with full visibility and tools that are easy to use." 
        }
      ],
      testimonials: [
        { 
          name: "Sarah Johnson", 
          text: "Since partnering with this management team, my rental income has increased by 35% in just 6 months. Their professional approach and attention to detail have made all the difference. I finally have peace of mind knowing my property is in expert hands.",
          role: "Property Owner",
          initial: "S"
        },
        { 
          name: "Michael Chen", 
          text: "The level of service is exceptional. They handle everything from guest communication to maintenance, and the financial reporting is crystal clear. My property has never been more profitable or well-maintained.",
          role: "Real Estate Investor",
          initial: "M"
        },
        { 
          name: "Emily Rodriguez", 
          text: "I was hesitant about property management services, but this team exceeded all my expectations. They've transformed my vacation home into a thriving rental business. The ROI has been incredible.",
          role: "Vacation Home Owner",
          initial: "E"
        },
        { 
          name: "David Thompson", 
          text: "Professional, reliable, and results-driven. They've helped me maximize my property's potential while taking all the stress out of property management. Highly recommend their services.",
          role: "Property Portfolio Owner",
          initial: "D"
        },
        { 
          name: "Lisa Park", 
          text: "The marketing strategies they implemented have brought in higher-quality guests and increased my bookings significantly. Their 24/7 support gives me complete confidence in their service.",
          role: "Luxury Property Owner",
          initial: "L"
        }
      ],
      faq: [
        { 
          q: "What percentage of my rental income do you take as commission?", 
          a: "Our commission structure is transparent and competitive. We typically charge 15-20% of gross rental income, which includes all our management services. This covers marketing, guest communication, cleaning, maintenance coordination, and 24/7 support. We provide detailed monthly reports so you always know exactly what you're earning." 
        },
        { 
          q: "How do you handle property maintenance and repairs?", 
          a: "We have a network of trusted, licensed contractors and maintenance professionals. For minor issues, we handle them immediately to ensure guest satisfaction. For major repairs, we'll contact you for approval and coordinate the work. We also conduct regular property inspections to catch potential issues early." 
        },
        { 
          q: "What happens if a guest damages my property?", 
          a: "We require all guests to provide a security deposit and have comprehensive insurance coverage. If damage occurs, we document everything thoroughly, work with our insurance partners, and ensure repairs are completed promptly. You'll be kept informed throughout the process and won't be responsible for any costs." 
        },
        { 
          q: "How do you market my property to attract quality guests?", 
          a: "We use a multi-channel marketing approach including professional photography, compelling descriptions, strategic pricing, and listings on all major platforms. Our team continuously optimizes listings based on market trends and guest feedback to maximize your property's visibility and bookings." 
        },
        { 
          q: "Can I still use my property for personal stays?", 
          a: "Absolutely! We work with you to block out dates for your personal use. You can reserve your property for family vacations, holidays, or any other personal needs. We'll ensure these dates are marked as unavailable for bookings and coordinate cleaning and preparation for your arrival." 
        },
        { 
          q: "How quickly can you start managing my property?", 
          a: "We can typically start managing your property within 1-2 weeks of signing our agreement. This includes setting up listings, taking professional photos, establishing cleaning and maintenance protocols, and implementing our management systems. We'll work with your schedule to ensure a smooth transition." 
        },
        { 
          q: "What kind of financial reporting do you provide?", 
          a: "We provide detailed monthly reports including income, expenses, occupancy rates, and performance metrics. You'll receive transparent accounting with all receipts and documentation. Our online dashboard gives you real-time access to your property's financial performance and booking calendar." 
        },
        { 
          q: "Do you handle all guest communication and support?", 
          a: "Yes, we provide 24/7 guest support including pre-arrival communication, check-in assistance, and ongoing support during their stay. Our team handles all guest inquiries, issues, and requests, so you don't have to worry about being available around the clock." 
        },
        { 
          q: "What if I'm not satisfied with your services?", 
          a: "We offer a 30-day satisfaction guarantee. If you're not completely satisfied with our services within the first month, we'll work to address any concerns or you can terminate our agreement without penalty. Our goal is to build long-term partnerships based on trust and results." 
        },
        { 
          q: "How do you ensure my property stays competitive in the market?", 
          a: "We continuously monitor market trends, competitor pricing, and guest feedback to keep your property competitive. Our dynamic pricing strategies adjust rates based on demand, seasonality, and local events. We also provide recommendations for property improvements to enhance guest satisfaction and increase bookings." 
        }
      ],
      cta: { label: "Request consultation", href: "/site/contact" },
      leadForm: { heading: "Ready to Get Started?", submitLabel: "Request Consultation" },
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
