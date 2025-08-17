import { siteConfig } from "@/app/config/site-config";
import Container from "@/components/ui/container";

interface PolicyPageProps {
  params: Promise<{ slug: string }>;
}

export default async function PolicyPage({ params }: PolicyPageProps) {
  const { slug } = await params;
  const lastUpdated = "January 1, 2024"; // This would come from CMS or config

  return (
    <>
      {/* Hero */}
      <section className="py-12 bg-muted">
        <Container>
          <h1 className="text-4xl font-heading mb-4">
            {siteConfig.pages.policies.templateHeading} - {slug}
          </h1>
          <p className="text-muted">
            {siteConfig.pages.policies.lastUpdatedLabel}: {lastUpdated}
          </p>
        </Container>
      </section>

      {/* Content */}
      <Container>
        <div className="py-12 max-w-4xl mx-auto">
          <div className="prose prose-lg max-w-none">
            <p className="text-muted leading-relaxed">
              Policy content placeholder for {slug}. This would contain the actual policy text, 
              terms and conditions, privacy policy details, or other legal content depending on the policy type.
            </p>
            
            <h2>Section 1</h2>
            <p className="text-muted leading-relaxed">
              Policy section content placeholder. This would contain detailed information about the specific policy, 
              including all relevant terms, conditions, and legal requirements.
            </p>
            
            <h2>Section 2</h2>
            <p className="text-muted leading-relaxed">
              Additional policy content placeholder. This would continue with more detailed information 
              about the policy, including any specific requirements, procedures, or guidelines.
            </p>
            
            <h2>Contact Information</h2>
            <p className="text-muted leading-relaxed">
              If you have any questions about this policy, please contact us at the information provided 
              in our contact page.
            </p>
          </div>
        </div>
      </Container>
    </>
  );
}
