import { siteConfig } from "@/app/config/site-config";
import Card from "@/components/ui/card";
import { Check } from "lucide-react";

export default function PricingPlans() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
      {siteConfig.pages.ownerServices.pricing.map((plan, index) => (
        <Card key={index} className="surface-bg p-6">
          <h3 className="text-xl font-heading mb-2 text-on-bg">{plan.name}</h3>
          <p className="text-on-bg mb-4">{plan.priceNote}</p>
          <ul className="space-y-2">
            {plan.includes.map((item, itemIndex) => (
              <li key={itemIndex} className="flex items-center gap-2 text-on-bg">
                <Check className="h-4 w-4 text-primary" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </Card>
      ))}
    </div>
  );
}
