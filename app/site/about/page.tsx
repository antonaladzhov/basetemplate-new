import { siteConfig } from "@/app/config/site-config";
import Container from "@/components/ui/container";
import Reveal from "@/components/ui/reveal";

export default function AboutPage() {
  return (
    <>
      {/* Hero */}
      <section className="surface-primary text-on-primary py-16">
        <Container>
          <div className="text-center max-w-3xl mx-auto">
            <Reveal>
              <h1 className="text-4xl md:text-5xl font-heading mb-6 text-on-primary">About Us</h1>
              <p className="text-xl text-on-primary/80 leading-relaxed text-on-primary">
                Learn more about our story, mission, and the values that drive us forward.
              </p>
            </Reveal>
          </div>
        </Container>
      </section>

      {/* Our Story */}
      <section className="surface-bg text-on-bg py-16">
        <Container>
          <div className="max-w-4xl mx-auto">
            <Reveal>
              <h2 className="text-3xl md:text-4xl font-heading mb-8 text-center">
                {siteConfig.pages.about.storyHeading}
              </h2>
              <div className="prose prose-lg mx-auto text-on-bg/80">
                <p className="text-lg leading-relaxed mb-6">
                  About us story content placeholder. This would contain the company's founding story, 
                  key milestones, and the journey that led to where we are today. Our story begins with 
                  a simple vision: to make exceptional travel experiences accessible to everyone.
                </p>
                <p className="text-lg leading-relaxed">
                  From our humble beginnings to becoming a trusted name in property management, 
                  we've remained committed to our core values and the communities we serve.
                </p>
              </div>
            </Reveal>
          </div>
        </Container>
      </section>

      {/* Our Mission */}
      <section className="surface-muted text-on-muted py-16">
        <Container>
          <div className="max-w-4xl mx-auto">
            <Reveal>
              <h2 className="text-3xl md:text-4xl font-heading mb-8 text-center">
                {siteConfig.pages.about.missionHeading}
              </h2>
              <div className="bg-white rounded-2xl shadow-lg p-8 md:p-12">
                <p className="text-xl leading-relaxed text-gray-800 text-center">
                  Mission statement content placeholder. This would outline our core mission, 
                  what we aim to achieve, and how we plan to make a difference in the travel industry.
                </p>
              </div>
            </Reveal>
          </div>
        </Container>
      </section>

      {/* Our Values */}
      <section className="surface-bg text-on-bg py-16">
        <Container>
          <Reveal>
            <h2 className="text-3xl md:text-4xl font-heading mb-12 text-center">
              {siteConfig.pages.about.valuesHeading}
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-primary/10 flex items-center justify-center">
                  <span className="text-2xl">💎</span>
                </div>
                <h3 className="text-xl font-semibold mb-3 text-on-bg">Excellence</h3>
                <p className="text-on-bg/70">We strive for excellence in every aspect of our service, from property selection to guest experience.</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-primary/10 flex items-center justify-center">
                  <span className="text-2xl">🤝</span>
                </div>
                <h3 className="text-xl font-semibold mb-3 text-on-bg">Trust</h3>
                <p className="text-on-bg/70">Building lasting relationships through transparency, reliability, and consistent quality service.</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-primary/10 flex items-center justify-center">
                  <span className="text-2xl">🌱</span>
                </div>
                <h3 className="text-xl font-semibold mb-3 text-on-bg">Innovation</h3>
                <p className="text-on-bg/70">Continuously improving our services and embracing new technologies to enhance guest experiences.</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-primary/10 flex items-center justify-center">
                  <span className="text-2xl">❤️</span>
                </div>
                <h3 className="text-xl font-semibold mb-3 text-on-bg">Community</h3>
                <p className="text-on-bg/70">Supporting local communities and creating positive impacts in the destinations we serve.</p>
              </div>
            </div>
          </Reveal>
        </Container>
      </section>

      {/* Numbers/Stats */}
      <section className="surface-primary text-on-primary py-16">
        <Container>
          <Reveal>
            <h2 className="text-3xl md:text-4xl font-heading mb-12 text-center">
              {siteConfig.pages.about.numbersHeading}
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="text-4xl md:text-5xl font-bold text-on-primary mb-4">100+</div>
                <p className="text-xl text-on-primary/80">Properties Managed</p>
              </div>
              <div className="text-center">
                <div className="text-4xl md:text-5xl font-bold text-on-primary mb-4">1,000+</div>
                <p className="text-xl text-on-primary/80">Happy Guests</p>
              </div>
              <div className="text-center">
                <div className="text-4xl md:text-5xl font-bold text-on-primary mb-4">5+</div>
                <p className="text-xl text-on-primary/80">Years of Experience</p>
              </div>
            </div>
          </Reveal>
        </Container>
      </section>

      {/* Team/Leadership */}
      <section className="surface-bg text-on-bg py-16">
        <Container>
          <div className="max-w-4xl mx-auto">
            <Reveal>
              <h2 className="text-3xl md:text-4xl font-heading mb-8 text-center">
                Our Leadership Team
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="text-center">
                  <div className="w-24 h-24 mx-auto mb-4 rounded-full bg-gray-200 flex items-center justify-center">
                    <span className="text-2xl font-bold text-gray-600">JD</span>
                  </div>
                  <h3 className="text-xl font-semibold mb-2 text-on-bg">John Doe</h3>
                  <p className="text-on-bg/70 mb-3">Founder & CEO</p>
                  <p className="text-sm text-on-bg/60">
                    With over 15 years in the hospitality industry, John leads our mission to revolutionize 
                    property management and guest experiences.
                  </p>
                </div>
                <div className="text-center">
                  <div className="w-24 h-24 mx-auto mb-4 rounded-full bg-gray-200 flex items-center justify-center">
                    <span className="text-2xl font-bold text-gray-600">JS</span>
                  </div>
                  <h3 className="text-xl font-semibold mb-2 text-on-bg">Jane Smith</h3>
                  <p className="text-on-bg/70 mb-3">Chief Operations Officer</p>
                  <p className="text-sm text-on-bg/60">
                    Jane oversees all operational aspects, ensuring seamless service delivery and 
                    maintaining our high standards across all properties.
                  </p>
                </div>
              </div>
            </Reveal>
          </div>
        </Container>
      </section>
    </>
  );
}
