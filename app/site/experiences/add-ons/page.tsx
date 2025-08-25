import Container from "@/components/ui/container";
import AddOnsCards from "@/components/blocks/add-ons-cards";

export default function AddOnsPage() {
  return (
    <>
      {/* Hero */}
      <section className="py-12 bg-muted">
        <Container>
          <h1 className="text-4xl font-heading mb-4">
            Add-ons page hero headline placeholder
          </h1>
          <p className="text-lg text-muted">
            Add-ons page hero subheading placeholder
          </p>
        </Container>
      </section>

      {/* Add-ons Grid */}
      <section className="py-12">
        <Container>
          <h2 className="text-3xl font-heading mb-8">Available Add-ons</h2>
          <AddOnsCards />
        </Container>
      </section>
    </>
  );
}
