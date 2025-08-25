import Container from "@/components/ui/container";
import Button from "@/components/ui/button";
import ImgWithFallback from "@/components/ui/img-with-fallback";
import Link from "next/link";
import Reveal from "@/components/ui/reveal";

interface PostItem {
  title: string;
  date: string; // already formatted label
  excerpt: string;
  href: string;
  imageAlt: string;
}

export default function LatestStories() {
  const posts: PostItem[] = [
    {
      title: "Explore unmatched insights in the upscale property market.",
      date: "16 January 2025",
      excerpt:
        "From tenant screening to maintenance and rent collection — we handle it all so you don’t have to.",
      href: "/guides/luxury-market-insights",
      imageAlt: "Modern luxury bedroom with panoramic windows",
    },
    {
      title:
        "Enjoy the best in high‑end home expertise customized for you.",
      date: "16 January 2025",
      excerpt:
        "Tailored concierge, maintenance and rental strategies for discerning homeowners and guests.",
      href: "/guides/personalized-home-expertise",
      imageAlt: "Minimalist bedroom bathed in natural light",
    },
    {
      title:
        "Reveal the mysteries of luxurious living with our regional experts.",
      date: "16 January 2025",
      excerpt:
        "Insider guidance on destinations, neighborhoods and amenities to elevate every stay.",
      href: "/guides/luxury-living-regional-experts",
      imageAlt: "Open-plan suite with designer furnishings",
    },
  ];

  return (
    <section className="py-20 bg-neutral-900">
      <Container>
        <Reveal>
          <div className="mb-10 flex items-center justify-between">
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-white">Latest stories</h2>
            <Button
              href="/guides"
              variant="outline"
              className="bg-white text-neutral-900 border-white hover:bg-white/90"
            >
              See All Posts
            </Button>
          </div>
        </Reveal>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {posts.map((post, idx) => (
            <Reveal key={idx}>
              <Link href={post.href} className="group block">
                <div className="rounded-2xl overflow-hidden">
                  <div className="overflow-hidden rounded-2xl">
                    <ImgWithFallback
                      src="/images/placeholders/placeholder-1600x900.svg"
                      alt={post.imageAlt}
                      width={1600}
                      height={900}
                      className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-105"
                    />
                  </div>

                  <div className="pt-6">
                    <p className="text-xs tracking-wider uppercase text-white/60">{post.date}</p>
                    <h3 className="mt-3 text-2xl font-semibold text-white group-hover:text-white/90 transition-colors">
                      {post.title}
                    </h3>
                    <p className="mt-4 text-white/70">
                      {post.excerpt}
                    </p>
                    <span className="mt-6 inline-flex items-center text-white font-medium group-hover:underline transition-all">
                      Read More →
                    </span>
                  </div>
                </div>
              </Link>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}


