import { siteConfig } from "@/app/config/site-config";
import Container from "@/components/ui/container";
import Button from "@/components/ui/button";
import ImgWithFallback from "@/components/ui/img-with-fallback";

export default function Hero() {
  const hero = siteConfig.pages.home.hero;
  
  return (
    <section className="relative min-h-[60vh] flex items-center">
      {/* Background Image */}
      <div className="absolute inset-0">
        <ImgWithFallback
          src="/images/placeholders/placeholder-1600x900.svg"
          alt={hero.backgroundAlt}
          width={1600}
          height={900}
          className="w-full h-full object-cover"
        />
      </div>
      
      {/* Content with scrim */}
      <div className="surface-image w-full">
        <Container>
          <div className="py-16 md:py-24">
            <div className="max-w-2xl">
              <h1 className="text-4xl md:text-6xl font-heading font-bold mb-6">
                {hero.headline}
              </h1>
              <p className="text-xl md:text-2xl mb-8 opacity-90">
                {hero.subhead}
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                {hero.ctas.map((cta) => (
                  <Button key={cta.label} href={cta.href} variant={cta.label.includes("search") ? "default" : "secondary"}>
                    {cta.label}
                  </Button>
                ))}
              </div>
            </div>
          </div>
        </Container>
      </div>
    </section>
  );
}
