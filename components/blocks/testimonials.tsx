import { siteConfig } from "@/app/config/site-config";
import Card from "@/components/ui/card";

export default function Testimonials() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {siteConfig.pages.ownerServices.testimonials.map((testimonial, index) => (
        <Card key={index}>
          <p className="text-muted mb-4">"{testimonial.text}"</p>
          <p className="font-medium">{testimonial.name}</p>
        </Card>
      ))}
    </div>
  );
}
