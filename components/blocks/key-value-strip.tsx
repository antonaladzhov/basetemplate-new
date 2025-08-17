import { siteConfig } from "@/app/config/site-config";
import Container from "@/components/ui/container";
import { Shield, Star, Headset } from "lucide-react";

const icons = {
  shield: Shield,
  star: Star,
  headset: Headset,
};

export default function KeyValueStrip() {
  const items = siteConfig.pages.home.keyValueStrip;
  
  return (
    <section className="surface-muted text-on-muted py-12">
      <Container>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {items.map((item, index) => {
            const Icon = icons[item.icon as keyof typeof icons];
            return (
              <div key={index} className="text-center">
                <div className="flex justify-center mb-4">
                  <Icon className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-lg font-semibold mb-2 text-on-muted">
                  {item.label}
                </h3>
                <p className="text-sm text-on-muted">
                  {item.description}
                </p>
              </div>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
