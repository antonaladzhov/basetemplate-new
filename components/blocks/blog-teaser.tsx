import { siteConfig } from "@/app/config/site-config";
import Card from "@/components/ui/card";
import Link from "next/link";

export default function BlogTeaser() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {[1, 2, 3].map((i) => (
        <Link key={i} href={`/guides/guide-${i}`}>
          <Card className="hover:shadow-md transition-shadow surface-bg">
            <div className="h-32 surface-muted rounded-lg mb-4" />
            <h3 className="font-medium mb-2 text-on-bg">Blog post title placeholder {i}</h3>
            <p className="text-sm text-on-bg">
              Blog post excerpt placeholder. This would contain a brief preview of the post content.
            </p>
          </Card>
        </Link>
      ))}
    </div>
  );
}
