# Property Management Next.js Blueprint

A barebones, configurable Next.js app for property management sites. All visible copy comes from a single config file, theme is centralized, and reusable blocks live in `/components`.

## Features

- **Config-driven content**: All text content managed through `app/config/site-config.ts`
- **Centralized theming**: Colors, fonts, and spacing controlled via `app/config/theme-config.mjs`
- **Reusable components**: Organized UI primitives and section blocks
- **TypeScript**: Full type safety with Zod schema validation
- **Responsive design**: Mobile-first approach with Tailwind CSS
- **Accessibility**: Semantic HTML and ARIA labels throughout

## Tech Stack

- **Next.js 15** (App Router, TypeScript, ESLint, Prettier)
- **Tailwind CSS** (PostCSS + autoprefixer)
- **Lucide React** for icons
- **Zod** for config schema safety
- **clsx + tailwind-merge** for conditional styling

## Project Structure

```
app/
  layout.tsx                 # Root layout with theme vars
  globals.css               # Global styles with CSS variables
  config/
    site-config.ts          # All content and copy
    theme-config.mjs        # Colors, fonts, spacing
    theme.d.ts              # TypeScript declarations
  (marketing)/              # All public pages
    page.tsx                # Homepage
    properties/page.tsx     # Property listings
    experiences/            # Experiences section
    guides/                 # Blog/guides section
    about/page.tsx          # About page
    contact/page.tsx        # Contact page
    owner-services/page.tsx # Owner services
    policies/[slug]/page.tsx # Legal pages
  sitemap.xml/route.ts      # Static sitemap

components/
  ui/                       # Reusable UI primitives
    container.tsx
    button.tsx
    card.tsx
    badge.tsx
    input.tsx
    select.tsx
    textarea.tsx
    accordion.tsx
    stepper.tsx
    carousel.tsx
    img-with-fallback.tsx
  blocks/                   # Section components
    header.tsx
    footer.tsx
    promo-bar.tsx
    hero.tsx
    property-card.tsx
    property-grid.tsx
    faq-accordion.tsx
    # ... and many more

lib/
  types.ts                  # TypeScript type definitions
  theme.ts                  # Theme utilities
  utils.ts                  # Common utilities

public/
  images/placeholders/      # Placeholder images
  icons/                    # Icon assets
```

## Getting Started

1. **Install dependencies**:
   ```bash
   npm install
   ```

2. **Start development server**:
   ```bash
   npm run dev
   ```

3. **Build for production**:
   ```bash
   npm run build
   ```

## Configuration

### Content Management

All text content is managed through `app/config/site-config.ts`. The file uses Zod for schema validation and includes:

- Brand information
- Navigation structure
- Page-specific content
- FAQ items
- Contact information
- Legal links

### Theming

Colors, fonts, and spacing are controlled via `app/config/theme-config.mjs`:

```js
export default {
  colors: {
    primary: "#0F766E",
    secondary: "#334155",
    // ... more colors
  },
  fonts: {
    heading: "ui-sans-serif, system-ui, ...",
    body: "ui-sans-serif, system-ui, ...",
  },
  radii: { base: "0.75rem" },
  spacingScale: 1,
};
```

## Pages

### Homepage (`/`)
- Hero section with search
- Key value propositions
- Featured properties grid
- Experiences highlight
- Features showcase
- Book direct benefits
- Reviews carousel
- Blog teaser
- FAQ accordion
- Owner invitation

### Properties (`/properties`)
- Hero section
- Filter chips
- Sort dropdown
- Property grid
- Empty state

### Experiences (`/experiences`)
- Hero section
- Category filters
- Featured experiences
- Seasonal highlights
- CTA section

### Guides (`/guides`)
- Hero section
- Featured posts grid
- Article template with sections

### Owner Services (`/owner-services`)
- Hero section
- Value pillars
- Services overview
- Pricing plans
- Revenue uplift claim
- Onboarding timeline
- Testimonials
- FAQ section
- Lead form

### Contact (`/contact`)
- Hero section
- Contact information
- Contact form

### About (`/about`)
- Story section
- Mission statement
- Values
- Numbers/metrics

### Policies (`/policies/[slug]`)
- Template for legal pages
- Dynamic content based on slug

## Components

### UI Primitives

All UI components are built with accessibility in mind and accept standard props:

- `Container`: Max-width wrapper with responsive padding
- `Button`: Primary/secondary variants with href support
- `Card`: Content container with shadow and border
- `Badge`: Status indicators with variants
- `Input`: Form input with focus states
- `Select`: Dropdown component
- `Textarea`: Multi-line text input
- `Accordion`: FAQ-style expandable content
- `Stepper`: Timeline/onboarding component
- `Carousel`: Horizontal scroll container
- `ImgWithFallback`: Image with error handling

### Block Components

Section-level components that consume site config:

- `Header`: Navigation with CTAs
- `Footer`: Links, contact, legal
- `Hero`: Page hero with background
- `PropertyCard`: Property display card
- `PropertyGrid`: Responsive property grid
- `FAQAccordion`: FAQ section with accordion
- `ReviewsCarousel`: Customer reviews
- `ContactForm`: Contact form with validation
- And many more...

## Customization

### Adding New Content

1. Update the Zod schema in `site-config.ts`
2. Add the content to the config object
3. Use the content in your components

### Adding New Pages

1. Create the page file in `app/(marketing)/`
2. Add page content to `site-config.ts`
3. Update navigation if needed

### Adding New Components

1. Create the component in `components/ui/` or `components/blocks/`
2. Import from site config where needed
3. Add TypeScript types if required

## Future Integrations

The blueprint is designed to be easily extended with:

- **Booking engine**: Search + property data source
- **Map provider**: Mapbox/Google Maps integration
- **Forms**: API routes, email services, CRM
- **i18n**: Internationalization support
- **CMS**: Content management system
- **Analytics**: Google Analytics, etc.
- **Payment processing**: Stripe integration

## Environment Variables

Copy `env.example` to `.env.local` and configure:

```bash
# Database
DATABASE_URL="postgresql://..."

# Authentication
NEXTAUTH_SECRET="your-secret"
NEXTAUTH_URL="http://localhost:3000"

# Email Service
EMAIL_SERVER_HOST="smtp.example.com"
EMAIL_SERVER_PORT=587
EMAIL_SERVER_USER="your-email@example.com"
EMAIL_SERVER_PASSWORD="your-password"

# Map Provider
MAPBOX_ACCESS_TOKEN="your-mapbox-token"
GOOGLE_MAPS_API_KEY="your-google-maps-key"

# Payment Processing
STRIPE_SECRET_KEY="sk_test_..."
STRIPE_PUBLISHABLE_KEY="pk_test_..."
```

### Calry OTA (Dynamic Most Loved Properties)

Add these optional variables to enable fetching listings from Calry OTA. If `CALRY_API_URL` or `CALRY_API_KEY` are not set, the “Most Loved Properties” section will be hidden automatically.

```
CALRY_API_URL="https://api.calry.app" # Base API URL
CALRY_API_KEY="your-api-key"          # Workspace API key
CALRY_TENANT_ID="tenant-id"           # Optional tenant id to scope requests
CALRY_DISPLAY_CURRENCY="USD"          # Optional ISO 4217 currency code
```

## Scripts

- `npm run dev`: Start development server
- `npm run build`: Build for production
- `npm run start`: Start production server
- `npm run lint`: Run ESLint
- `npm run type-check`: Run TypeScript check

## Contributing

1. Follow the existing code structure
2. Use TypeScript for all new files
3. Add proper TypeScript types
4. Follow the naming conventions
5. Test your changes thoroughly

## License

This project is licensed under the MIT License.
