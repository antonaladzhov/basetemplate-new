import Link from "next/link";
import { Property } from "@/lib/types";
import { formatPrice } from "@/lib/utils";
import { Bed, Bath, Users } from "lucide-react";
import ImgWithFallback from "@/components/ui/img-with-fallback";

interface PropertyCardProps {
  property: Property;
  className?: string;
}

export default function PropertyCard({ property, className }: PropertyCardProps) {
  return (
    <Link href={property.href} className={`block group ${className}`}>
      <div className="rounded-xl border border-border bg-white overflow-hidden shadow-sm hover:shadow-md transition-shadow">
        <ImgWithFallback
          src="/images/placeholders/placeholder-800x600.jpg"
          alt={property.imageAlt}
          width={800}
          height={600}
          className="w-full h-48"
        />
        <div className="p-4">
          <h3 className="font-medium mb-1 group-hover:text-primary transition-colors">
            {property.title}
          </h3>
          <p className="text-sm text-muted mb-3">{property.location}</p>
          <div className="flex items-center gap-4 text-sm text-muted mb-3">
            <div className="flex items-center gap-1">
              <Bed className="h-4 w-4" />
              <span>{property.beds}</span>
            </div>
            <div className="flex items-center gap-1">
              <Bath className="h-4 w-4" />
              <span>{property.baths}</span>
            </div>
            <div className="flex items-center gap-1">
              <Users className="h-4 w-4" />
              <span>{property.guests}</span>
            </div>
          </div>
          <p className="font-medium text-primary">
            From {formatPrice(property.priceFrom)} / night
          </p>
        </div>
      </div>
    </Link>
  );
}
