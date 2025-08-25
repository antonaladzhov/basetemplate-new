import { siteConfig } from "@/app/config/site-config";
import Container from "@/components/ui/container";

export default function AboutPage() {
  return (
    <>
      {/* Hero */}
      <section className="py-12 bg-muted">
        <Container>
          <h1 className="text-4xl font-heading mb-4">About Us</h1>
          <p className="text-lg text-muted">
            Learn more about our story, mission, and values.
          </p>
        </Container>
      </section>

      {/* Content */}
      <Container>
        <div className="py-12 max-w-4xl mx-auto space-y-12">
          {/* Story */}
          <section>
            <h2 className="text-3xl font-heading mb-6">
              {siteConfig.pages.about.storyHeading}
            </h2>
            <p className="text-muted leading-relaxed">
              About us story content placeholder. This would contain the company's founding story, 
              key milestones, and the journey that led to where we are today.
            </p>
          </section>

          {/* Mission */}
          <section>
            <h2 className="text-3xl font-heading mb-6">
              {siteConfig.pages.about.missionHeading}
            </h2>
            <p className="text-muted leading-relaxed">
              Mission statement content placeholder. This would outline our core mission, 
              what we aim to achieve, and how we plan to make a difference in the travel industry.
            </p>
          </section>

          {/* Values */}
          <section>
            <h2 className="text-3xl font-heading mb-6">
              {siteConfig.pages.about.valuesHeading}
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <h3 className="font-medium mb-2">Value 1 placeholder</h3>
                <p className="text-sm text-muted">Value description placeholder</p>
              </div>
              <div>
                <h3 className="font-medium mb-2">Value 2 placeholder</h3>
                <p className="text-sm text-muted">Value description placeholder</p>
              </div>
              <div>
                <h3 className="font-medium mb-2">Value 3 placeholder</h3>
                <p className="text-sm text-muted">Value description placeholder</p>
              </div>
              <div>
                <h3 className="font-medium mb-2">Value 4 placeholder</h3>
                <p className="text-sm text-muted">Value description placeholder</p>
              </div>
            </div>
          </section>

          {/* Numbers */}
          <section>
            <h2 className="text-3xl font-heading mb-6">
              {siteConfig.pages.about.numbersHeading}
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="text-3xl font-bold text-primary mb-2">100+</div>
                <p className="text-muted">Properties managed</p>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-primary mb-2">1000+</div>
                <p className="text-muted">Happy guests</p>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-primary mb-2">5</div>
                <p className="text-muted">Years of experience</p>
              </div>
            </div>
          </section>
        </div>
      </Container>
    </>
  );
}
