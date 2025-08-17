import { siteConfig } from "@/app/config/site-config";
import Carousel from "@/components/ui/carousel";
import Card from "@/components/ui/card";
import { Star } from "lucide-react";

export default function ReviewsCarousel() {
  return (
    <section className="surface-muted text-on-muted py-12">
      <div className="text-center mb-8">
        <h2 className="text-3xl font-heading mb-4 text-on-muted">
          {siteConfig.pages.home.reviews.heading}
        </h2>
      </div>
      <Carousel>
        {siteConfig.pages.home.reviews.items.map((review, index) => (
          <Card key={index} className="min-w-[300px] surface-bg">
            <div className="flex items-center gap-1 mb-3">
              {[...Array(review.rating)].map((_, i) => (
                <Star key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
              ))}
            </div>
            <p className="text-on-bg mb-3">"{review.text}"</p>
            <p className="font-medium text-on-bg">{review.name}</p>
          </Card>
        ))}
      </Carousel>
    </section>
  );
}
