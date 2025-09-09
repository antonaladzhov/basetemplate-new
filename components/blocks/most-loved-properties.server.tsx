import { siteConfig } from "@/app/config/site-config";
import PropertyGrid from "@/components/blocks/property-grid";
import Container from "@/components/ui/container";
import Reveal from "@/components/ui/reveal";
import { fetchMostLovedListings } from "@/lib/calry/listings";
import { getCalryEnv, hasCalryCredentials } from "@/lib/env";
import "server-only";

type Props = {
    title?: string;
    description?: string;
    exploreHref?: string;
    limit?: number;
};

export default async function MostLovedPropertiesSection({
    title = siteConfig.pages.home.featuredProperties.title,
    description = siteConfig.pages.home.featuredProperties.description,
    exploreHref = "/site/properties",
    limit = 10,
}: Props) {
    if (!hasCalryCredentials()) return null;

    const items = await fetchMostLovedListings(limit);
    if (!items || items.length === 0) return null;

    const { TENANT_PUBLIC_URL } = getCalryEnv();
    const base = TENANT_PUBLIC_URL?.replace(/\/$/, "") || "";
    const explore = base ? base : exploreHref;

    return (
        <Reveal>
            <section className="surface-muted text-on-muted py-12">
                <Container width="ultra-wide">
                    <PropertyGrid
                        items={items}
                        title={title}
                        description={description}
                        showExploreAll={true}
                        exploreHref={explore}
                        hideItemLinks={false}
                    />
                </Container>
            </section>
        </Reveal>
    );
}


