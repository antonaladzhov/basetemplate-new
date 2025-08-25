import Link from "next/link";
import { siteConfig } from "@/app/config/site-config";
import Container from "@/components/ui/container";
import Button from "@/components/ui/button";

export default function Footer() {
  return (
    <footer className="bg-neutral-900 text-white border-t border-neutral-800">
      <Container>
        <div className="py-12">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {/* Brand */}
            <div>
              <h3 className="text-lg font-heading font-bold text-white mb-4">
                {siteConfig.brand.name}
              </h3>
              <p className="text-sm text-gray-300 mb-6">
                {siteConfig.brand.footerDescription}
              </p>
              {/* List Your Property CTA */}
              <div className="mb-6">
                <Button 
                  href="/owner-services" 
                  variant="secondary"
                  className="w-full md:w-auto bg-white text-neutral-900 hover:bg-gray-100"
                >
                  List Your Property
                </Button>
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="font-medium mb-4 text-white">Quick Links</h4>
              <ul className="space-y-2">
                {siteConfig.footer.quickLinks.map((link) => (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      className="text-sm text-gray-300 hover:text-white transition-colors"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact */}
            <div>
              <h4 className="font-medium mb-4 text-white">Contact</h4>
              <div className="space-y-2 text-sm text-gray-300">
                <p>{siteConfig.footer.contact.address}</p>
                <p>{siteConfig.footer.contact.phone}</p>
                <p>{siteConfig.footer.contact.email}</p>
              </div>
            </div>

            {/* Legal */}
            <div>
              <h4 className="font-medium mb-4 text-gray-300">Legal</h4>
              <ul className="space-y-2">
                {siteConfig.footer.legal.map((link) => (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      className="text-xs text-gray-400 hover:text-gray-300 transition-colors"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="mt-8 pt-8 border-t border-neutral-800 text-center text-sm text-gray-400">
            <p>&copy; 2024 {siteConfig.brand.name}. All rights reserved.</p>
          </div>
        </div>
      </Container>
    </footer>
  );
}
