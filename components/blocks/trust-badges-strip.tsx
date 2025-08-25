import Container from "@/components/ui/container";
import { Shield, Award, Users, Star } from "lucide-react";

export default function TrustBadgesStrip() {
  const badges = [
    { icon: Shield, label: "Trust badge 1 alt placeholder", text: "Secure Booking" },
    { icon: Award, label: "Trust badge 2 alt placeholder", text: "Award Winner" },
    { icon: Users, label: "Trust badge 3 alt placeholder", text: "10K+ Guests" },
    { icon: Star, label: "Trust badge 4 alt placeholder", text: "4.9/5 Rating" },
  ];

  return (
    <section className="py-8 bg-[var(--background)] border-t border-border">
      <Container>
        <div className="flex justify-center items-center gap-8">
          {badges.map((badge, index) => {
            const IconComponent = badge.icon;
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
