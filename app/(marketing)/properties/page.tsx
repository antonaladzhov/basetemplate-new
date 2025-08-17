import { siteConfig } from "@/app/config/site-config";
import Container from "@/components/ui/container";
import PropertyFilters from "@/components/blocks/property-filters";
import PropertyGrid from "@/components/blocks/property-grid";
import Select from "@/components/ui/select";
import { siteConfig as config } from "@/app/config/site-config";

export default function PropertiesPage() {
  const properties = config.pages.home.featuredProperties.items;

  return (
    <>
      {/* Hero */}
      <section className="py-12 bg-muted">
        <Container>
          <h1 className="text-4xl font-heading mb-4">
            {siteConfig.pages.properties.hero.headline}
          </h1>
          <p className="text-lg text-muted">
            {siteConfig.pages.properties.hero.subhead}
          </p>
        </Container>
      </section>

      {/* Filters and Sort */}
      <section className="py-6 border-b border-border">
        <Container>
          <div className="flex flex-col md:flex-row gap-4 items-start md:items-center justify-between">
            <PropertyFilters />
            <div className="flex items-center gap-2">
              <span className="text-sm text-muted">Sort by:</span>
              <Select aria-label="Sort properties">
                {siteConfig.pages.properties.sort.map((option) => (
                  <option key={option} value={option.toLowerCase()}>
                    {option}
                  </option>
                ))}
              </Select>
            </div>
          </div>
        </Container>
      </section>

      {/* Properties Grid */}
      <section className="py-12">
        <Container>
          {properties.length > 0 ? (
            <PropertyGrid properties={properties} />
          ) : (
            <div className="text-center py-12">
              <p className="text-muted">{siteConfig.pages.properties.emptyState}</p>
            </div>
          )}
        </Container>
      </section>
    </>
  );
}
