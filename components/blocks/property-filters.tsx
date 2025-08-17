import { siteConfig } from "@/app/config/site-config";
import Badge from "@/components/ui/badge";

export default function PropertyFilters() {
  return (
    <div className="flex flex-wrap gap-2">
      {siteConfig.pages.properties.filters.map((filter) => (
        <Badge key={filter} className="cursor-pointer hover:bg-primary hover:text-primaryFg transition-colors">
          {filter}
        </Badge>
      ))}
    </div>
  );
}
