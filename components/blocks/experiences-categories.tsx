import { siteConfig } from "@/app/config/site-config";
import Link from "next/link";
import Badge from "@/components/ui/badge";

export default function ExperiencesCategories() {
  return (
    <div className="flex flex-wrap gap-3">
      {siteConfig.pages.experiences.categories.map((category) => (
        <Link key={category.key} href={category.href}>
          <Badge className="hover:bg-primary hover:text-primaryFg transition-colors cursor-pointer">
            {category.name}
          </Badge>
        </Link>
      ))}
    </div>
  );
}
