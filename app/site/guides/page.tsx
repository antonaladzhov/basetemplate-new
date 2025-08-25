import { siteConfig } from "@/app/config/site-config";
import Container from "@/components/ui/container";
import Card from "@/components/ui/card";
import Link from "next/link";

export default function GuidesPage() {
  return (
    <>
      {/* Hero */}
      <section className="surface-muted text-on-muted py-12">
        <Container>
          <h1 className="text-4xl font-heading mb-4 text-on-muted">
            {siteConfig.pages.guides.hub.heroHeading}
          </h1>
          <p className="text-lg text-on-muted mb-8">
            Discover local insights, hidden gems, and travel tips from our expert guides.
          </p>
        </Container>
      </section>

      {/* Featured Posts */}
      <section className="surface-bg text-on-bg py-12">
        <Container>
          <h2 className="text-3xl font-heading mb-8 text-on-bg">
            {siteConfig.pages.guides.hub.featuredHeading}
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[1, 2, 3].map((i) => (
              <Link key={i} href={`/guides/guide-${i}`}>
                <Card className="hover:shadow-md transition-shadow surface-bg">
                  <div className="h-48 surface-muted rounded-lg mb-4" />
                  <h3 className="font-medium mb-2 text-on-bg">Guide article title placeholder {i}</h3>
                  <p className="text-sm text-on-bg">
                    Guide article excerpt placeholder. This would contain a brief preview of the article content.
                  </p>
                </Card>
              </Link>
            ))}
          </div>
        </Container>
      </section>
    </>
  );
}
