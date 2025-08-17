import { siteConfig } from "@/app/config/site-config";
import Button from "@/components/ui/button";

export default function OwnerInvitation() {
  return (
    <section className="py-12 bg-primary text-primaryFg">
      <div className="text-center">
        <h2 className="text-3xl font-heading mb-4">
          {siteConfig.pages.home.ownerTeaser.heading}
        </h2>
        <p className="text-lg mb-6 max-w-2xl mx-auto">
          {siteConfig.pages.home.ownerTeaser.blurb}
        </p>
        <Button href={siteConfig.pages.home.ownerTeaser.cta.href} variant="secondary">
          {siteConfig.pages.home.ownerTeaser.cta.label}
        </Button>
      </div>
    </section>
  );
}
