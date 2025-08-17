"use client";

import Link from "next/link";
import { siteConfig } from "@/app/config/site-config";
import Container from "@/components/ui/container";
import Button from "@/components/ui/button";
import { Menu, ChevronDown, Globe } from "lucide-react";
import { useState } from "react";

export default function Header() {
  const [isLanguageOpen, setIsLanguageOpen] = useState(false);
  const [currentLanguage, setCurrentLanguage] = useState("en");

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

  return (
    <header className="surface-bg text-on-bg border-b border-border">
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
                className="flex items-center space-x-1 px-2 py-1 text-sm font-medium text-on-bg hover:text-primary transition-colors border border-border rounded-md hover:border-primary"
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
              <Link
                key={item.label}
                href={item.href}
                className="text-base font-medium text-on-bg hover:text-primary transition-colors"
              >
                {item.label}
              </Link>
            ))}
          </nav>

          {/* Desktop CTA */}
          <div className="hidden md:flex items-center space-x-4">
            <a 
              href="tel:+1-555-123-4567" 
              className="text-sm font-medium text-on-bg hover:text-primary transition-colors"
            >
              +1 (555) 123-4567
            </a>
            <Button href={siteConfig.nav.ctas.primary.href}>
              {siteConfig.nav.ctas.primary.label}
            </Button>
          </div>

          {/* Mobile menu button */}
          <button className="md:hidden p-2" aria-label="Mobile menu toggle">
            <Menu className="h-6 w-6" />
          </button>
        </div>
      </Container>
    </header>
  );
}
