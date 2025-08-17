import { siteConfig } from "@/app/config/site-config";

export default function GuideSections() {
  const sections = siteConfig.pages.guides.articleTemplate.sections;

  return (
    <div className="space-y-8">
      {sections.map((section, index) => (
        <section key={index}>
          <h2 className="text-2xl font-heading mb-4">{section.title}</h2>
          <p className="text-muted leading-relaxed">{section.body}</p>
        </section>
      ))}
    </div>
  );
}
