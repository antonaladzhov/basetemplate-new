import { siteConfig } from "@/app/config/site-config";
import Card from "@/components/ui/card";
import Link from "next/link";

export default function ExperiencesFeatured() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {siteConfig.pages.experiences.featured.map((experience, index) => (
        <Link key={index} href={experience.href}>
          <Card className="hover:shadow-md transition-shadow surface-bg">
            <div className="h-32 surface-muted rounded-lg mb-4" />
            <h3 className="font-medium mb-2 text-on-bg">{experience.title}</h3>
            <p className="text-sm text-on-bg mb-4">{experience.blurb}</p>
          </Card>
        </Link>
      ))}
    </div>
  );
}
