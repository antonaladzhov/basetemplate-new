import Container from "@/components/ui/container";

export default function MapEmbed() {
  return (
    <Container>
      <div className="h-96 bg-muted rounded-xl flex items-center justify-center">
        <div className="text-center">
          <p className="text-muted mb-2">Map placeholder</p>
          <p className="text-sm text-muted">TODO: Integrate map provider (Mapbox/Google Maps)</p>
        </div>
      </div>
    </Container>
  );
}
