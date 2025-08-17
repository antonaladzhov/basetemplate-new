import { siteConfig } from "@/app/config/site-config";
import Container from "@/components/ui/container";
import Button from "@/components/ui/button";
import { Clock, MapPin, Check } from "lucide-react";

interface ExperienceDetailPageProps {
  params: Promise<{ slug: string }>;
}

export default async function ExperienceDetailPage({ params }: ExperienceDetailPageProps) {
  const { slug } = await params;
  const template = siteConfig.pages.experiences.detailTemplate;

  return (
    <>
      {/* Hero Image */}
      <section className="h-64 bg-muted relative">
        <Container className="absolute inset-0 flex items-center">
          <h1 className="text-4xl font-heading text-white">
            Experience detail title placeholder
          </h1>
        </Container>
      </section>

      <Container>
        <div className="py-12 grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-8">
            {/* Overview */}
            <section>
              <h2 className="text-2xl font-heading mb-4">{template.overviewHeading}</h2>
              <p className="text-muted">
                Experience overview content placeholder. This would contain detailed information about the experience, what guests can expect, and any important details.
              </p>
            </section>

            {/* Inclusions */}
            <section>
              <h2 className="text-2xl font-heading mb-4">{template.inclusionsHeading}</h2>
              <ul className="space-y-2">
                <li className="flex items-center gap-2">
                  <Check className="h-4 w-4 text-success" />
                  <span>Inclusion item placeholder 1</span>
                </li>
                <li className="flex items-center gap-2">
                  <Check className="h-4 w-4 text-success" />
                  <span>Inclusion item placeholder 2</span>
                </li>
                <li className="flex items-center gap-2">
                  <Check className="h-4 w-4 text-success" />
                  <span>Inclusion item placeholder 3</span>
                </li>
              </ul>
            </section>

            {/* Cancellation */}
            <section>
              <h2 className="text-2xl font-heading mb-4">{template.cancellationHeading}</h2>
              <p className="text-muted">
                Cancellation policy placeholder. This would contain information about cancellation terms, refund policies, and any applicable fees.
              </p>
            </section>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Meta Info */}
            <div className="bg-muted p-6 rounded-xl space-y-4">
              <div className="flex items-center gap-2">
                <Clock className="h-5 w-5 text-primary" />
                <div>
                  <p className="text-sm text-muted">{template.durationLabel}</p>
                  <p className="font-medium">4 hours</p>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <MapPin className="h-5 w-5 text-primary" />
                <div>
                  <p className="text-sm text-muted">{template.locationLabel}</p>
                  <p className="font-medium">Location placeholder</p>
                </div>
              </div>
            </div>

            {/* Request CTA */}
            <Button href="/contact" className="w-full">
              {template.requestCtaLabel}
            </Button>
          </div>
        </div>
      </Container>
    </>
  );
}
