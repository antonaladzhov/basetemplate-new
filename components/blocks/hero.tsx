"use client";

import { siteConfig } from "@/app/config/site-config";
import Button from "@/components/ui/button";
import Container from "@/components/ui/container";
import DateRangePicker from "@/components/ui/date-range";
import ImgWithFallback from "@/components/ui/img-with-fallback";
import { Calendar, ChevronDown, Globe, MapPin, Menu, Search, Users, X } from "lucide-react";
import { useEffect, useState } from "react";

type LocationOption = { label: string; lat?: number; lng?: number };

export default function Hero({ locations = [], bookingEnabled = true, tenantBaseUrl = "" }: { locations?: LocationOption[]; bookingEnabled?: boolean; tenantBaseUrl?: string }) {
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

  const [locOpen, setLocOpen] = useState(false);
  const [dateOpen, setDateOpen] = useState(false);
  const [guestsOpen, setGuestsOpen] = useState(false);
  const [selectedLocation, setSelectedLocation] = useState<LocationOption | null>(null);
  const [checkIn, setCheckIn] = useState<string>("");
  const [checkOut, setCheckOut] = useState<string>("");
  const [guests, setGuests] = useState<number>(2);

  const handleSearch = () => {
    if (!bookingEnabled) return;
    const base = tenantBaseUrl.replace(/\/$/, "");
    const params = new URLSearchParams();
    params.set('limit', '25');
    if (checkIn) params.set('checkInDate', checkIn);
    if (checkOut) params.set('checkOutDate', checkOut);
    if (guests) params.set('guests', String(guests));
    if (selectedLocation?.lat && selectedLocation?.lng) {
      params.set('location', `${selectedLocation.lat},${selectedLocation.lng}`);
      params.set('radius', '90');
      params.set('zoom', '9');
    }
    const url = `${base || '/site/properties'}?${params.toString()}`;
    window.open(url, '_blank', 'noopener,noreferrer');
  };

  return (
    <>
      {/* Fixed Navbar */}
      <div className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled
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
                  className={`flex items-center space-x-1 px-2 py-1 text-sm font-medium transition-colors border rounded-md ${isScrolled
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
                const base = (tenantBaseUrl || '').replace(/\/$/, '');
                const href = item.label.toLowerCase().includes('properties') && base ? `${base}` : item.href;
                return (
                  <a
                    key={item.label}
                    href={href}
                    className={`text-base font-medium transition-colors ${isScrolled
                      ? 'text-on-bg hover:text-primary'
                      : 'text-on-inverse hover:text-on-inverse/80'
                      }`}
                  >
                    {item.label}
                  </a>
                );
              })}
            </nav>

            {/* Desktop CTA */}
            <div className="hidden md:flex items-center space-x-4">
              <a
                href="tel:+1-555-123-4567"
                className={`text-sm font-medium transition-colors ${isScrolled
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
              className={`md:hidden p-2 transition-colors ${isScrolled ? 'text-on-bg' : 'text-on-inverse'
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
                  {siteConfig.nav.main.map((item) => {
                    const base = (tenantBaseUrl || '').replace(/\/$/, '');
                    const href = item.label.toLowerCase().includes('properties') && base ? `${base}` : item.href;
                    return (
                      <a
                        key={item.label}
                        href={href}
                        className="block py-2 text-base font-medium text-on-inverse hover:text-on-inverse/80 transition-colors"
                        onClick={() => setIsMobileMenuOpen(false)}
                      >
                        {item.label}
                      </a>
                    );
                  })}
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
      <section className="relative z-[999] min-h-screen flex flex-col slide-down-enter slide-down-enter-active">
        {/* Background Image */}
        <div className="absolute inset-0">
          <ImgWithFallback
            src="/images/placeholders/placeholder-1600x900.svg"
            alt={hero.backgroundAlt}
            width={1600}
            height={900}
            className="w-full h-full object-cover"
          />
          {/* Darker overlay */}
          <div className="absolute inset-0 bg-black/40"></div>
        </div>

        {/* Content with scrim */}
        <div className="surface-image w-full flex-1 flex flex-col">
          {/* Hero Content */}
          <div className="flex-1 flex items-center relative z-40">
            <Container>
              <div className="max-w-4xl mx-auto text-center">
                <h1 className="text-5xl md:text-7xl font-heading font-bold mb-6 text-on-inverse">
                  {hero.headline}
                </h1>
                <p className="text-xl md:text-2xl mb-12 text-on-inverse/90 max-w-2xl mx-auto">
                  {hero.subhead}
                </p>

                {/* Search Component */}
                {bookingEnabled && (
                  <div className="rounded-2xl bg-white text-black shadow-[0_10px_30px_-10px_rgba(0,0,0,0.3)] p-2 md:p-3 max-w-5xl mx-auto text-left ring-1 ring-black/10 relative z-50">
                    <div className="grid grid-cols-1 md:grid-cols-4 gap-2 md:gap-2 items-stretch">
                      {/* Location */}
                      <div className="relative">
                        <button type="button" onClick={() => { setLocOpen(!locOpen); setDateOpen(false); setGuestsOpen(false); }} className="w-full h-12 text-left pl-9 md:pl-10 pr-3 rounded-xl border border-black/10 bg-white text-black placeholder:text-gray-500 text-sm md:text-base focus:outline-none focus:ring-2 focus:ring-primary/40 truncate">
                          <MapPin className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 md:h-5 md:w-5 text-muted-foreground" />
                          {selectedLocation?.label || 'Where are you going?'}
                        </button>
                        {locOpen && (
                          <div className="absolute z-50 mt-2 w-full max-h-72 overflow-auto rounded-xl shadow-xl ring-1 ring-black/10 bg-white">
                            <div className="p-2 border-b border-black/10">
                              <input type="text" placeholder="Search location" className="w-full h-9 px-3 rounded-lg border border-black/10 text-sm" onChange={(e) => {
                                const q = e.target.value.toLowerCase();
                                const list = Array.from(document.querySelectorAll<HTMLButtonElement>("[data-loc-option]"));
                                list.forEach(btn => {
                                  const label = btn.getAttribute("data-label")?.toLowerCase() || "";
                                  btn.style.display = label.includes(q) ? "block" : "none";
                                });
                              }} />
                            </div>
                            {locations.length === 0 && (
                              <div className="p-3 text-sm text-muted-foreground">No locations available</div>
                            )}
                            {locations.map((opt) => (
                              <button key={opt.label} data-loc-option data-label={opt.label} onClick={() => { setSelectedLocation(opt); setLocOpen(false); }} className="w-full text-left px-3 py-2 hover:bg-black/5 text-sm">
                                <span className="text-black">{opt.label}</span>
                              </button>
                            ))}
                          </div>
                        )}
                      </div>

                      {/* Dates */}
                      <div className="relative">
                        <button type="button" onClick={() => { setDateOpen(!dateOpen); setLocOpen(false); setGuestsOpen(false); }} className="w-full h-12 text-left pl-9 md:pl-10 pr-3 rounded-xl border border-black/10 bg-white text-black placeholder:text-gray-500 text-sm md:text-base focus:outline-none focus:ring-2 focus:ring-primary/40">
                          <Calendar className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 md:h-5 md:w-5 text-muted-foreground" />
                          {checkIn && checkOut ? new Date(checkIn).toLocaleDateString(undefined, { day: '2-digit', month: 'short' }) + ' - ' + new Date(checkOut).toLocaleDateString(undefined, { day: '2-digit', month: 'short' }) : 'Dates'}
                        </button>
                        {dateOpen && (
                          <div className="absolute z-50 mt-2 left-0 w-[min(92vw,38rem)] max-w-[92vw] bg-white text-black border border-black/10 rounded-2xl shadow-xl overflow-hidden">
                            <DateRangePicker
                              start={checkIn}
                              end={checkOut}
                              onChange={({ start, end }) => {
                                setCheckIn(start || "");
                                setCheckOut(end || "");
                              }}
                            />
                          </div>
                        )}
                      </div>

                      {/* Guests */}
                      <div className="relative">
                        <button type="button" onClick={() => { setGuestsOpen(!guestsOpen); setLocOpen(false); setDateOpen(false); }} className="w-full h-12 text-left pl-9 md:pl-10 pr-3 rounded-xl border border-black/10 bg-white text-black placeholder:text-gray-500 text-sm md:text-base focus:outline-none focus:ring-2 focus:ring-primary/40">
                          <Users className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 md:h-5 md:w-5 text-muted-foreground" />
                          {guests ? `${guests} guest${guests > 1 ? 's' : ''}` : 'Guests'}
                        </button>
                        {guestsOpen && (
                          <div className="absolute z-50 mt-2 w-60 rounded-xl shadow-xl p-3 ring-1 ring-black/10 bg-white text-black">
                            <div className="flex items-center justify-between">
                              <span className="text-sm">Guests</span>
                              <div className="flex items-center gap-2">
                                <button onClick={() => setGuests(Math.max(1, guests - 1))} className="px-2 py-1 border border-black/10 rounded hover:bg-black/5">-</button>
                                <span>{guests}</span>
                                <button onClick={() => setGuests(guests + 1)} className="px-2 py-1 border border-black/10 rounded hover:bg-black/5">+</button>
                              </div>
                            </div>
                          </div>
                        )}
                      </div>

                      <Button onClick={handleSearch} className="w-full md:w-auto h-12 surface-primary text-on-primary text-sm md:text-base rounded-xl">
                        <Search className="h-4 w-4 mr-2" />
                        Search
                      </Button>
                    </div>
                  </div>
                )}
              </div>
            </Container>
          </div>
        </div>
      </section>
    </>
  );
}
