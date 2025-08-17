interface SeoTextBlockProps {
  title: string;
  content: string;
  className?: string;
}

export default function SeoTextBlock({ title, content, className }: SeoTextBlockProps) {
  return (
    <section className={`py-8 ${className}`}>
      <div className="max-w-4xl mx-auto">
        <h2 className="text-2xl font-heading mb-4">{title}</h2>
        <div className="prose prose-lg max-w-none text-muted">
          <p>{content}</p>
        </div>
      </div>
    </section>
  );
}
