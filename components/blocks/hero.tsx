"use client";

import { siteConfig } from "@/app/config/site-config";
import Container from "@/components/ui/container";
import Button from "@/components/ui/button";
import ImgWithFallback from "@/components/ui/img-with-fallback";
import Input from "@/components/ui/input";
import { Search, MapPin, Calendar, Users, ChevronDown, Globe, Menu, X } from "lucide-react";
import { useState, useEffect } from "react";

export default function Hero() {
  const [isLanguageOpen, setIsLanguageOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [currentLanguage, setCurrentLanguage] = useState("en");
  const [isScrolled, setIsScrolled] = useState(false);
  const hero = siteConfig.pages.home.hero;

  const languages = [
    { code: "en", name: "English" },
    { code: "fr", name: "Français" },
    { code: "es", name: "Español" },
    { code: "de", name: "Deutsch" },
    { code: "it", name: "Italiano" },
  ];

  const handleLanguageChange = (code: string) => {
    setCurrentLanguage(code);
    setIsLanguageOpen(false);
  };

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      setIsScrolled(scrollTop > 10);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  
  return (
    <>
      {/* Fixed Navbar */}
      <div className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled 
          ? 'surface-bg text-on-bg border-b border-border shadow-sm' 
          : 'bg-transparent border-b border-white/20'
      }`}>
        <Container>
          <div className="flex h-16 items-center justify-between">
            {/* Logo and Language Switcher */}
            <div className="flex items-center space-x-6">
              <div className="text-xl font-heading font-bold text-on-inverse">
                {siteConfig.brand.name}
              </div>
              
              {/* Language Switcher Dropdown */}
              <div className="relative">
                <button
                  onClick={() => setIsLanguageOpen(!isLanguageOpen)}
                  className={`flex items-center space-x-1 px-2 py-1 text-sm font-medium transition-colors border rounded-md ${
                    isScrolled
                      ? 'text-on-bg hover:text-primary border-border hover:border-primary'
                      : 'text-on-inverse hover:text-on-inverse/80 border-white/30 hover:border-white/50'
                  }`}
                >
                  <Globe className="h-3 w-3" />
                  <span>{currentLanguage.toUpperCase()}</span>
                  <ChevronDown className="h-3 w-3" />
                </button>
                
                {isLanguageOpen && (
                  <div className="absolute top-full left-0 mt-1 w-28 surface-bg border border-border rounded-md shadow-lg z-50">
                    {languages.map((language) => (
                      <button
                        key={language.code}
                        onClick={() => handleLanguageChange(language.code)}
                        className={`w-full px-2 py-1.5 text-left text-sm hover:surface-muted transition-colors ${
                          currentLanguage === language.code ? "surface-muted text-on-muted font-medium" : "text-on-bg"
                        }`}
                      >
                        {language.name}
                      </button>
                    ))}
                  </div>
                )}
              </div>
            </div>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center space-x-8">
              {siteConfig.nav.main.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  className={`text-base font-medium transition-colors ${
                    isScrolled
                      ? 'text-on-bg hover:text-primary'
                      : 'text-on-inverse hover:text-on-inverse/80'
                  }`}
                >
                  {item.label}
                </a>
              ))}
            </nav>

            {/* Desktop CTA */}
            <div className="hidden md:flex items-center space-x-4">
              <a 
                href="tel:+1-555-123-4567" 
                className={`text-sm font-medium transition-colors ${
                  isScrolled
                    ? 'text-on-bg hover:text-primary'
                    : 'text-on-inverse hover:text-on-inverse/80'
                }`}
              >
                +1 (555) 123-4567
              </a>
              <Button href={siteConfig.nav.ctas.primary.href} variant="secondary">
                {siteConfig.nav.ctas.primary.label}
              </Button>
            </div>

            {/* Mobile menu button */}
            <button 
              className={`md:hidden p-2 transition-colors ${
                isScrolled ? 'text-on-bg' : 'text-on-inverse'
              }`}
              aria-label="Mobile menu toggle"
              onClick={toggleMobileMenu}
            >
              {isMobileMenuOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </button>
          </div>
        </Container>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden absolute top-full left-0 right-0 bg-black/90 backdrop-blur-sm border-b border-white/20 z-50">
            <Container>
              <div className="py-4 space-y-4">
                {/* Mobile Navigation */}
                <nav className="space-y-2">
                  {siteConfig.nav.main.map((item) => (
                    <a
                      key={item.label}
                      href={item.href}
                      className="block py-2 text-base font-medium text-on-inverse hover:text-on-inverse/80 transition-colors"
                      onClick={() => setIsMobileMenuOpen(false)}
                    >
                      {item.label}
                    </a>
                  ))}
                </nav>

                {/* Mobile Contact & CTA */}
                <div className="pt-4 border-t border-white/20 space-y-3">
                  <a 
                    href="tel:+1-555-123-4567" 
                    className="block text-sm font-medium text-on-inverse hover:text-on-inverse/80 transition-colors"
                  >
                    +1 (555) 123-4567
                  </a>
                  <Button href={siteConfig.nav.ctas.primary.href} variant="secondary" className="w-full">
                    {siteConfig.nav.ctas.primary.label}
                  </Button>
                </div>
              </div>
            </Container>
          </div>
        )}
      </div>

      {/* Hero Section */}
      <section className="relative min-h-screen flex flex-col slide-down-enter slide-down-enter-active">
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
                <div className="bg-white rounded-lg shadow-xl p-4 md:p-6 max-w-4xl mx-auto">
                  <div className="grid grid-cols-1 md:grid-cols-4 gap-3 md:gap-4">
                    <div className="relative">
                      <MapPin className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 md:h-5 md:w-5 text-muted-foreground" />
                      <Input
                        type="text"
                        placeholder="Where are you going?"
                        className="pl-9 md:pl-10 border-0 bg-transparent text-on-bg placeholder:text-muted-foreground text-sm md:text-base"
                      />
                    </div>
                    
                    <div className="relative">
                      <Calendar className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 md:h-5 md:w-5 text-muted-foreground" />
                      <Input
                        type="text"
                        placeholder="Dates"
                        className="pl-9 md:pl-10 border-0 bg-transparent text-on-bg placeholder:text-muted-foreground text-sm md:text-base"
                      />
                    </div>
                    
                    <div className="relative">
                      <Users className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 md:h-5 md:w-5 text-muted-foreground" />
                      <Input
                        type="text"
                        placeholder="Guests"
                        className="pl-9 md:pl-10 border-0 bg-transparent text-on-bg placeholder:text-muted-foreground text-sm md:text-base"
                      />
                    </div>
                    
                    <Button className="w-full md:w-auto surface-primary text-on-primary text-sm md:text-base">
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
    </>
  );
}
