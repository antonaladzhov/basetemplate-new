import { siteConfig } from "@/app/config/site-config";
import Card from "@/components/ui/card";
import Link from "next/link";

export default function AddOnsCards() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {siteConfig.pages.experiences.addOns.map((addon, index) => (
        <Link key={index} href={addon.href}>
          <Card className="hover:shadow-md transition-shadow surface-bg">
            <h3 className="font-medium mb-2 text-on-bg">{addon.title}</h3>
            <p className="text-sm text-on-bg mb-4">{addon.description}</p>
          </Card>
        </Link>
      ))}
    </div>
  );
}
