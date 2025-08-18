import Container from "@/components/ui/container";
import Card from "@/components/ui/card";
import Reveal from "@/components/ui/reveal";
import { Star } from "lucide-react";

export default function Reviews() {
  const reviews = [
    {
      name: "Sarah Johnson",
      rating: 5,
      text: "Absolutely amazing experience! The property was immaculate and the service was exceptional. Will definitely book again.",
      location: "New York, NY"
    },
    {
      name: "Michael Chen",
      rating: 5,
      text: "Perfect location and stunning views. The amenities exceeded our expectations. Highly recommend!",
      location: "San Francisco, CA"
    },
    {
      name: "Emily Rodriguez",
      rating: 5,
      text: "The attention to detail was incredible. From check-in to check-out, everything was seamless and luxurious.",
      location: "Miami, FL"
    },
    {
      name: "David Thompson",
      rating: 5,
      text: "Best vacation rental experience we&apos;ve ever had. The property was beautiful and the host was incredibly helpful.",
      location: "Seattle, WA"
    }
  ];

  return (
    <section className="py-16 surface-bg">
      <Container>
        <Reveal>
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-on-bg mb-4">What Our Guests Say</h2>
            <p className="text-lg text-on-bg/80 max-w-2xl mx-auto">
              Don&apos;t just take our word for it - hear from our satisfied guests.
            </p>
          </div>
        </Reveal>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {reviews.map((review, index) => (
            <Reveal key={index}>
              <Card className="p-6 rounded-lg transition-all hover:shadow-lg">
                <div className="flex items-center mb-4">
                  {[...Array(review.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                <p className="text-on-bg mb-4 italic">&ldquo;{review.text}&rdquo;</p>
                <div>
                  <p className="font-semibold text-on-bg">{review.name}</p>
                  <p className="text-sm text-muted-foreground">{review.location}</p>
                </div>
              </Card>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
