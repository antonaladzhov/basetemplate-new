"use client";

import { siteConfig } from "@/app/config/site-config";
import Button from "@/components/ui/button";
import Container from "@/components/ui/container";
import { usePage } from "@/lib/page-context";
import { ChevronDown, Globe, Menu, X } from "lucide-react";
import Link from "next/link";
import { useEffect, useState } from "react";

export default function Header({ tenantBase }: { tenantBase?: string }) {
  const [isLanguageOpen, setIsLanguageOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [currentLanguage, setCurrentLanguage] = useState("en");
  const [isScrolled, setIsScrolled] = useState(false);
  const { isHomePage } = usePage();

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
    <header className={`fixed top-0 left-0 right-0 z-[2000] transition-all duration-300 ${isScrolled
      ? 'surface-bg text-on-bg border-b border-border shadow-sm'
      : 'bg-transparent text-on-bg'
      }`}>
      <Container>
        <div className="flex h-16 items-center justify-between">
          {/* Logo and Language Switcher */}
          <div className="flex items-center space-x-6">
            <Link href="/" className="text-xl font-heading font-bold text-primary">
              {siteConfig.brand.name}
            </Link>

            {/* Language Switcher Dropdown */}
            <div className="relative">
              <button
                onClick={() => setIsLanguageOpen(!isLanguageOpen)}
                className={`flex items-center space-x-1 px-2 py-1 text-sm font-medium transition-colors border rounded-md ${isScrolled
                  ? 'text-on-bg hover:text-primary border-border hover:border-primary'
                  : 'text-on-bg hover:text-on-bg/80 border-white/30 hover:border-white/50'
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
                      className={`w-full px-2 py-1.5 text-left text-sm hover:surface-muted transition-colors ${currentLanguage === language.code ? "surface-muted text-on-muted font-medium" : "text-on-bg"
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
            {siteConfig.nav.main.map((item) => {
              const base = (tenantBase || '').replace(/\/$/, '');
              const href = item.label.toLowerCase().includes("properties") && base ? `${base}` : item.href;
              return (
                <Link
                  key={item.label}
                  href={href}
                  className={`text-base font-medium transition-colors ${isScrolled
                    ? 'text-on-bg hover:text-primary'
                    : 'text-on-bg hover:text-on-bg/80'
                    }`}
                >
                  {item.label}
                </Link>
              );
            })}
          </nav>

          {/* Desktop CTA */}
          <div className="hidden md:flex items-center space-x-4">
            <a
              href="tel:+1-555-123-4567"
              className={`text-sm font-medium transition-colors ${isScrolled
                ? 'text-on-bg hover:text-primary'
                : 'text-on-bg hover:text-on-bg/80'
                }`}
            >
              +1 (555) 123-4567
            </a>
            <Button href={siteConfig.nav.ctas.primary.href}>
              {siteConfig.nav.ctas.primary.label}
            </Button>
          </div>

          {/* Mobile menu button */}
          <button
            className="md:hidden p-2"
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
        <div className="md:hidden absolute top-full left-0 right-0 surface-bg border-b border-border shadow-lg z-50">
          <Container>
            <div className="py-4 space-y-4">
              {/* Mobile Navigation */}
              <nav className="space-y-2">
                {siteConfig.nav.main.map((item) => {
                  const base = (tenantBase || '').replace(/\/$/, '');
                  const href = item.label.toLowerCase().includes("properties") && base ? `${base}` : item.href;
                  return (
                    <Link
                      key={item.label}
                      href={href}
                      className="block py-2 text-base font-medium text-on-bg hover:text-primary transition-colors"
                      onClick={() => setIsMobileMenuOpen(false)}
                    >
                      {item.label}
                    </Link>
                  );
                })}
              </nav>

              {/* Mobile Contact & CTA */}
              <div className="pt-4 border-t border-border space-y-3">
                <a
                  href="tel:+1-555-123-4567"
                  className="block text-sm font-medium text-on-bg hover:text-primary transition-colors"
                >
                  +1 (555) 123-4567
                </a>
                <Button href={siteConfig.nav.ctas.primary.href} className="w-full">
                  {siteConfig.nav.ctas.primary.label}
                </Button>
              </div>
            </div>
          </Container>
        </div>
      )}
    </header>
  );
}
