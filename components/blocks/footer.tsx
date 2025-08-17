import Link from "next/link";
import { siteConfig } from "@/app/config/site-config";
import Container from "@/components/ui/container";
import Button from "@/components/ui/button";

export default function Footer() {
  return (
    <footer className="surface-muted text-on-muted border-t border-border">
      <Container>
        <div className="py-12">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {/* Brand */}
            <div>
              <h3 className="text-lg font-heading font-bold text-primary mb-4">
                {siteConfig.brand.name}
              </h3>
              <p className="text-sm text-on-muted mb-6">
                {siteConfig.brand.tagline}
              </p>
              {/* List Your Property CTA */}
              <div className="mb-6">
                <Button href="/owner-services" className="w-full md:w-auto">
                  List Your Property
                </Button>
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="font-medium mb-4 text-on-muted">Quick Links</h4>
              <ul className="space-y-2">
                {siteConfig.footer.quickLinks.map((link) => (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      className="text-sm text-on-muted hover:text-primary transition-colors"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact */}
            <div>
              <h4 className="font-medium mb-4 text-on-muted">Contact</h4>
              <div className="space-y-2 text-sm text-on-muted">
                <p>{siteConfig.footer.contact.address}</p>
                <p>{siteConfig.footer.contact.phone}</p>
                <p>{siteConfig.footer.contact.email}</p>
              </div>
            </div>

            {/* Legal */}
            <div>
              <h4 className="font-medium mb-4 text-on-muted">Legal</h4>
              <ul className="space-y-2">
                {siteConfig.footer.legal.map((link) => (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      className="text-sm text-on-muted hover:text-primary transition-colors"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="mt-8 pt-8 border-t border-border text-center text-sm text-on-muted">
            <p>&copy; 2024 {siteConfig.brand.name}. All rights reserved.</p>
          </div>
        </div>
      </Container>
    </footer>
  );
}
