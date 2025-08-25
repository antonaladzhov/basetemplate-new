import { siteConfig } from "@/app/config/site-config";
import Container from "@/components/ui/container";
import GuideSections from "@/components/blocks/guide-sections";

interface GuideArticlePageProps {
  params: Promise<{ slug: string }>;
}

export default async function GuideArticlePage({ params }: GuideArticlePageProps) {
  const { slug } = await params;
  return (
    <>
      {/* Hero */}
      <section className="h-64 bg-muted relative">
        <Container className="absolute inset-0 flex items-center">
          <h1 className="text-4xl font-heading text-white">
            Guide article title placeholder
          </h1>
        </Container>
      </section>

      {/* Content */}
      <Container>
        <div className="py-12 max-w-4xl mx-auto">
          <GuideSections />
          
          {/* Inline Teasers */}
          <section className="mt-12 pt-8 border-t border-border">
            <h2 className="text-2xl font-heading mb-6">
              {siteConfig.pages.guides.articleTemplate.inlineTeasersHeading}
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-muted p-4 rounded-lg">
                <h3 className="font-medium mb-2">Related property teaser placeholder</h3>
                <p className="text-sm text-muted">Property description placeholder</p>
              </div>
              <div className="bg-muted p-4 rounded-lg">
                <h3 className="font-medium mb-2">Related experience teaser placeholder</h3>
                <p className="text-sm text-muted">Experience description placeholder</p>
              </div>
            </div>
          </section>
        </div>
      </Container>
    </>
  );
}
