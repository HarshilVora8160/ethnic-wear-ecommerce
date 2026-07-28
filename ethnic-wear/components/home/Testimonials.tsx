const testimonials = [
  {
    quote:
      "The saree was even more beautiful in person. The detailing and fabric felt incredibly premium.",
    name: "Priya M.",
    location: "Mumbai",
  },
  {
    quote:
      "AAVIRÁ has such a beautiful balance between traditional Indian design and modern elegance.",
    name: "Riya S.",
    location: "Surat",
  },
  {
    quote:
      "The custom design experience made my saree feel genuinely personal. Absolutely loved it.",
    name: "Ananya P.",
    location: "Ahmedabad",
  },
];

export default function Testimonials() {
  return (
    <section className="bg-brand-cream px-5 py-20 sm:px-8 lg:px-12 lg:py-28">
      <div className="mx-auto max-w-7xl">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-[10px] font-medium uppercase tracking-[0.35em] text-brand-gold-dark">
            Customer Love
          </p>

          <h2 className="mt-5 font-serif text-4xl text-brand-primary sm:text-5xl">
            Stories Worn Beautifully
          </h2>
        </div>

        <div className="mt-14 grid gap-5 md:grid-cols-3">
          {testimonials.map((testimonial) => (
            <article
              key={testimonial.name}
              className="border border-brand-border bg-brand-ivory p-7 sm:p-9"
            >
              <div className="text-brand-gold">★★★★★</div>

              <blockquote className="mt-6 font-serif text-lg leading-8 text-brand-primary">
                “{testimonial.quote}”
              </blockquote>

              <div className="mt-7 border-t border-brand-border pt-5">
                <p className="text-xs font-semibold uppercase tracking-[0.15em] text-brand-primary">
                  {testimonial.name}
                </p>

                <p className="mt-1 text-xs text-brand-text-secondary">
                  {testimonial.location}
                </p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}