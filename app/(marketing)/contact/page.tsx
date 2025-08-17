import { siteConfig } from "@/app/config/site-config";
import Container from "@/components/ui/container";
import ContactForm from "@/components/blocks/contact-form";
import { Phone, Mail, Clock } from "lucide-react";

export default function ContactPage() {
  return (
    <>
      {/* Hero */}
      <section className="py-12 bg-muted">
        <Container>
          <h1 className="text-4xl font-heading mb-4">
            {siteConfig.pages.contact.heading}
          </h1>
          <p className="text-lg text-muted">
            Get in touch with us for any questions or support.
          </p>
        </Container>
      </section>

      {/* Contact Info and Form */}
      <Container>
        <div className="py-12 grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Info */}
          <div className="space-y-8">
            <div>
              <h2 className="text-2xl font-heading mb-6">Get in Touch</h2>
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <Phone className="h-5 w-5 text-primary" />
                  <div>
                    <p className="text-sm text-muted">{siteConfig.pages.contact.phoneLabel}</p>
                    <p className="font-medium">+1 (555) 123-4567</p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <Mail className="h-5 w-5 text-primary" />
                  <div>
                    <p className="text-sm text-muted">{siteConfig.pages.contact.emailLabel}</p>
                    <p className="font-medium">hello@example.com</p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <Clock className="h-5 w-5 text-primary" />
                  <div>
                    <p className="text-sm text-muted">{siteConfig.pages.contact.hoursLabel}</p>
                    <p className="font-medium">Mon-Fri: 9AM-6PM</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div>
            <h2 className="text-2xl font-heading mb-6">Send us a Message</h2>
            <ContactForm />
          </div>
        </div>
      </Container>
    </>
  );
}
