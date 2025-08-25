import { siteConfig } from "@/app/config/site-config";
import Container from "@/components/ui/container";
import Reveal from "@/components/ui/reveal";
import Card from "@/components/ui/card";
import { Shield, Star, Lock, Heart, MapPin, Calendar, Headphones, BadgeCheck } from "lucide-react";

export default function FeaturesHighlight() {
  const features = [
    {
      icon: Shield,
      title: "Verified Properties",
      description: "All properties are thoroughly vetted and verified for quality and safety standards"
    },
    {
      icon: Star,
      title: "Premium Experience",
      description: "Enjoy luxury amenities and exceptional service at every property"
    },
    {
      icon: Lock,
      title: "Secure Booking",
      description: "Safe and secure payment processing with full booking protection"
    },
    {
      icon: Heart,
      title: "Personalized Service",
      description: "Tailored recommendations and support throughout your stay"
    },
    {
      icon: MapPin,
      title: "Prime Locations",
      description: "Hand‑picked destinations close to beaches, dining, and top attractions"
    },
    {
      icon: Calendar,
      title: "Flexible Stays",
      description: "Choose the dates and durations that suit your plans with ease"
    },
    {
      icon: Headphones,
      title: "Local Support",
      description: "Friendly guest support with on‑the‑ground knowledge when you need it"
    },
    {
      icon: BadgeCheck,
      title: "Quality Assured",
      description: "Consistent standards for comfort, cleanliness, and amenities across stays"
    }
  ];

  return (
    <section className="relative">
      {/* Background Bar - Short Height, Dark so light text has contrast */}
      <div className="relative h-64 bg-neutral-900">
        {/* Content on Background */}
        <div className="relative z-10 h-full flex flex-col justify-center items-center text-center text-[var(--background)] px-4">
          <h2 className="text-4xl font-bold mb-4">Amenities You&apos;ll Love</h2>
          <p className="text-xl max-w-2xl">
            Enjoy a wide array of top-rated amenities designed with your comfort in mind:
          </p>
        </div>
      </div>

      {/* Features Container - Extends Beyond Background */}
      <div className="relative -mt-16 px-4">
        <Container>
          <Reveal>
            <div className="bg-[var(--background)] rounded-2xl shadow-2xl p-8 md:p-12">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {features.map((feature, index) => (
                  <Reveal key={index}>
                    <div className="text-center">
                      <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-gray-100 flex items-center justify-center">
                        <feature.icon className="w-8 h-8 text-gray-700" />
                      </div>
                      <h3 className="text-lg font-semibold mb-2 text-gray-900">{feature.title}</h3>
                      <p className="text-sm text-gray-600">{feature.description}</p>
                    </div>
                  </Reveal>
                ))}
              </div>
            </div>
          </Reveal>
        </Container>
      </div>
    </section>
  );
}
