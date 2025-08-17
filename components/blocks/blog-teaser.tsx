import { siteConfig } from "@/app/config/site-config";
import Card from "@/components/ui/card";
import Link from "next/link";

export default function BlogTeaser() {
  return (
    <section className="py-12">
      <div className="text-center mb-8">
        <h2 className="text-3xl font-heading mb-4">
          {siteConfig.pages.home.guideTeaser.heading}
        </h2>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {siteConfig.pages.home.guideTeaser.items.map((item, index) => (
          <Link key={index} href={item.href}>
            <Card className="hover:shadow-md transition-shadow">
              <div className="h-32 bg-muted rounded-lg mb-4" />
              <h3 className="font-medium mb-2">{item.title}</h3>
              <p className="text-sm text-muted">
                Blog teaser excerpt placeholder. This would contain a brief preview of the blog post content.
              </p>
            </Card>
          </Link>
        ))}
      </div>
    </section>
  );
}
