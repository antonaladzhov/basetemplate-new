import Link from "next/link";
import { Property } from "@/lib/types";
import { formatPrice, formatRating } from "@/lib/utils";
import { Bed, Bath, Users, Star } from "lucide-react";
import ImgWithFallback from "@/components/ui/img-with-fallback";

interface PropertyCardProps {
  property: Property;
}

export default function PropertyCard({ property }: PropertyCardProps) {
  return (
    <Link href={property.href} className="group block">
      <div className="overflow-hidden rounded-lg border border-border transition-all group-hover:shadow-lg">
        <div className="aspect-[4/3] overflow-hidden">
          <ImgWithFallback
            src="/images/placeholders/placeholder-800x600.svg"
            alt={property.imageAlt}
            width={800}
            height={600}
            className="h-full w-full object-cover transition-transform group-hover:scale-105"
          />
        </div>
        
        <div className="p-4">
          <h3 className="font-semibold text-on-bg group-hover:text-primary transition-colors">
            {property.title}
          </h3>
          <p className="text-sm text-muted-foreground mb-3">
            {property.location}
          </p>
          
          <div className="flex items-center justify-between mb-3">
            <div className="flex items-center space-x-4 text-sm text-muted-foreground">
              <div className="flex items-center space-x-1">
                <Bed className="h-4 w-4" />
                <span>{property.beds}</span>
              </div>
              <div className="flex items-center space-x-1">
                <Bath className="h-4 w-4" />
                <span>{property.baths}</span>
              </div>
              <div className="flex items-center space-x-1">
                <Users className="h-4 w-4" />
                <span>{property.guests}</span>
              </div>
            </div>
            
            <div className="flex items-center space-x-1">
              <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
              <span className="text-sm font-medium">{formatRating(4.8)}</span>
            </div>
          </div>
          
          <div className="flex items-center justify-between">
            <span className="text-lg font-bold text-on-bg">
              From {formatPrice(property.priceFrom)}
            </span>
            <span className="text-sm text-muted-foreground">per night</span>
          </div>
        </div>
      </div>
    </Link>
  );
}
