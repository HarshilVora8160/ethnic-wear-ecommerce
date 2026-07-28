export default function BrandIntro() {
  return (
    <section className="border-b border-brand-border bg-brand-cream">
      <div className="mx-auto max-w-4xl px-5 py-20 text-center sm:px-8 lg:py-28">
        <p className="text-[10px] font-medium uppercase tracking-[0.35em] text-brand-gold-dark sm:text-xs">
          Welcome to AAVIRÁ
        </p>

        <h2 className="mt-5 font-serif text-4xl leading-tight text-brand-primary sm:text-5xl lg:text-6xl">
          Where Tradition Meets{" "}
          <span className="italic text-brand-gold-dark">
            Contemporary Luxury
          </span>
        </h2>

        <p className="mx-auto mt-7 max-w-2xl text-sm leading-8 text-brand-text-secondary sm:text-base">
          AAVIRÁ celebrates the beauty of Indian craftsmanship through
          thoughtfully designed ethnic wear. From handpicked sarees to
          statement lehengas, every piece is created to make your special
          moments unforgettable.
        </p>
      </div>
    </section>
  );
}