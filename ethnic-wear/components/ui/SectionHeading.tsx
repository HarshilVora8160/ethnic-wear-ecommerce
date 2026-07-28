interface SectionHeadingProps {
  eyebrow: string;
  title: string;
  description?: string;
}

export default function SectionHeading({
  eyebrow,
  title,
  description,
}: SectionHeadingProps) {
  return (
    <div className="mx-auto max-w-2xl text-center">
      <div className="flex items-center justify-center gap-4">
        <span className="h-px w-8 bg-brand-gold" />

        <p className="text-[10px] font-medium uppercase tracking-[0.3em] text-brand-gold-dark sm:text-xs">
          {eyebrow}
        </p>

        <span className="h-px w-8 bg-brand-gold" />
      </div>

      <h2 className="mt-5 font-serif text-4xl leading-tight text-brand-primary sm:text-5xl lg:text-6xl">
        {title}
      </h2>

      {description && (
        <p className="mt-5 text-sm leading-7 text-brand-text-secondary sm:text-base">
          {description}
        </p>
      )}
    </div>
  );
}