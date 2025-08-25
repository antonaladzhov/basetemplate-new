import Container from "@/components/ui/container";
import { Shield, Award, Users, Star } from "lucide-react";
import { siteConfig } from "@/app/config/site-config";

export default function TrustBadgesStrip() {
  const iconMap = {
    shield: Shield,
    award: Award,
    users: Users,
    star: Star,
  };

  return (
    <section className="py-8 bg-white border-t border-border">
      <Container>
        <div className="flex justify-center items-center gap-8">
          {siteConfig.pages.trustBadges.map((badge, index) => {
            const IconComponent = iconMap[badge.icon as keyof typeof iconMap] || Shield;
            return (
              <div key={index} className="flex items-center gap-2 text-muted">
                <IconComponent className="h-5 w-5" />
                <span className="text-sm font-medium">{badge.text}</span>
              </div>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
