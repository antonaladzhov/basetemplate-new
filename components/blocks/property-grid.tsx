import { Property } from "@/lib/types";
import PropertyCard from "./property-card";

interface PropertyGridProps {
  properties: Property[];
  className?: string;
}

export default function PropertyGrid({ properties, className }: PropertyGridProps) {
  return (
    <div className={`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 ${className}`}>
      {properties.map((property) => (
        <PropertyCard key={property.id} property={property} />
      ))}
    </div>
  );
}
