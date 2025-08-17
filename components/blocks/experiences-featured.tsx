import { siteConfig } from "@/app/config/site-config";
import Card from "@/components/ui/card";
import Button from "@/components/ui/button";

export default function ExperiencesFeatured() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {siteConfig.pages.experiences.featured.map((experience, index) => (
        <Card key={index} className="text-center">
          <div className="h-32 bg-muted rounded-lg mb-4" />
          <h3 className="font-medium mb-2">{experience.title}</h3>
          <p className="text-sm text-muted mb-4">{experience.blurb}</p>
          <Button href={experience.href} variant="secondary">Learn More</Button>
        </Card>
      ))}
    </div>
  );
}
