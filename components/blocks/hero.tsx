import { siteConfig } from "@/app/config/site-config";
import Container from "@/components/ui/container";
import Button from "@/components/ui/button";
import ImgWithFallback from "@/components/ui/img-with-fallback";
import Input from "@/components/ui/input";
import { Search, MapPin, Calendar, Users } from "lucide-react";

export default function Hero() {
  const hero = siteConfig.pages.home.hero;
  
  return (
    <section className="relative min-h-screen flex flex-col">
      {/* Background Image */}
      <div className="absolute inset-0">
        <ImgWithFallback
          src="/images/placeholders/placeholder-1600x900.svg"
          alt={hero.backgroundAlt}
          width={1600}
          height={900}
          className="w-full h-full object-cover"
        />
      </div>
      
      {/* Content with scrim */}
      <div className="surface-image w-full flex-1 flex flex-col">
        {/* Integrated Navbar */}
        <div className="border-b border-white/20">
          <Container>
            <div className="flex h-16 items-center justify-between">
              {/* Logo and Language Switcher */}
              <div className="flex items-center space-x-6">
                <div className="text-xl font-heading font-bold text-on-inverse">
                  {siteConfig.brand.name}
                </div>
                
                {/* Language Switcher */}
                <div className="flex items-center space-x-1">
                  <button className="px-2 py-1 text-sm font-medium text-on-inverse border border-white/30 rounded">
                    en
                  </button>
                  <button className="px-2 py-1 text-sm font-medium text-on-inverse/70 hover:text-on-inverse transition-colors">
                    fr
                  </button>
                </div>
              </div>

              {/* Desktop Navigation */}
              <nav className="hidden md:flex items-center space-x-8">
                {siteConfig.nav.main.map((item) => (
                  <a
                    key={item.label}
                    href={item.href}
                    className="text-base font-medium text-on-inverse hover:text-on-inverse/80 transition-colors"
                  >
                    {item.label}
                  </a>
                ))}
              </nav>

              {/* Desktop CTA */}
              <div className="hidden md:flex items-center space-x-4">
                <a 
                  href="tel:+1-555-123-4567" 
                  className="text-sm font-medium text-on-inverse hover:text-on-inverse/80 transition-colors"
                >
                  +1 (555) 123-4567
                </a>
                <Button href={siteConfig.nav.ctas.primary.href} variant="secondary">
                  {siteConfig.nav.ctas.primary.label}
                </Button>
              </div>

              {/* Mobile menu button */}
              <button className="md:hidden p-2 text-on-inverse" aria-label="Mobile menu toggle">
                <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              </button>
            </div>
          </Container>
        </div>

        {/* Hero Content */}
        <div className="flex-1 flex items-center">
          <Container>
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-5xl md:text-7xl font-heading font-bold mb-6 text-on-inverse">
                {hero.headline}
              </h1>
              <p className="text-xl md:text-2xl mb-12 text-on-inverse/90 max-w-2xl mx-auto">
                {hero.subhead}
              </p>
              
              {/* Search Component */}
              <div className="bg-white rounded-lg shadow-xl p-6 max-w-4xl mx-auto">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                  <div className="relative">
                    <MapPin className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-muted-foreground" />
                    <Input
                      type="text"
                      placeholder="Where are you going?"
                      className="pl-10 border-0 bg-transparent text-on-bg placeholder:text-muted-foreground"
                    />
                  </div>
                  
                  <div className="relative">
                    <Calendar className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-muted-foreground" />
                    <Input
                      type="text"
                      placeholder="Dates"
                      className="pl-10 border-0 bg-transparent text-on-bg placeholder:text-muted-foreground"
                    />
                  </div>
                  
                  <div className="relative">
                    <Users className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-muted-foreground" />
                    <Input
                      type="text"
                      placeholder="Guests"
                      className="pl-10 border-0 bg-transparent text-on-bg placeholder:text-muted-foreground"
                    />
                  </div>
                  
                  <Button className="w-full md:w-auto surface-primary text-on-primary">
                    <Search className="h-4 w-4 mr-2" />
                    Search
                  </Button>
                </div>
              </div>
            </div>
          </Container>
        </div>
      </div>
    </section>
  );
}
