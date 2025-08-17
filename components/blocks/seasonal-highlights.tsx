import { siteConfig } from "@/app/config/site-config";
import Card from "@/components/ui/card";
import Link from "next/link";

export default function SeasonalHighlights() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {siteConfig.pages.experiences.seasonal.map((highlight, index) => (
        <Link key={index} href={highlight.href}>
          <Card className="hover:shadow-md transition-shadow">
            <div className="h-32 bg-muted rounded-lg mb-4" />
            <h3 className="font-medium mb-2">{highlight.title}</h3>
            <p className="text-sm text-muted">{highlight.timeframe}</p>
          </Card>
        </Link>
      ))}
    </div>
  );
}
