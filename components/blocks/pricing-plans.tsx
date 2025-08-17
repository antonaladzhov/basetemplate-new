import { siteConfig } from "@/app/config/site-config";
import Card from "@/components/ui/card";
import { Check } from "lucide-react";

export default function PricingPlans() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {siteConfig.pages.ownerServices.pricing.map((plan, index) => (
        <Card key={index} className="text-center">
          <h3 className="text-xl font-heading mb-2">{plan.name}</h3>
          <p className="text-muted mb-4">{plan.priceNote}</p>
          <ul className="space-y-2 text-left">
            {plan.includes.map((item, i) => (
              <li key={i} className="flex items-center gap-2">
                <Check className="h-4 w-4 text-success" />
                <span className="text-sm">{item}</span>
              </li>
            ))}
          </ul>
        </Card>
      ))}
    </div>
  );
}
