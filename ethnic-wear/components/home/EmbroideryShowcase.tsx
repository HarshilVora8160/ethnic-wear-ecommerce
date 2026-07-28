import Image from "next/image";
import Link from "next/link";

export default function EmbroideryShowcase() {
  return (
    <section className="bg-brand-cream px-5 py-20 sm:px-8 lg:px-12 lg:py-28">
      <div className="mx-auto grid max-w-7xl items-center gap-12 lg:grid-cols-2 lg:gap-20">
        <div className="order-2 lg:order-1">
          <p className="text-[10px] font-medium uppercase tracking-[0.35em] text-brand-gold-dark">
            The Art of Detail
          </p>

          <h2 className="mt-5 font-serif text-4xl leading-tight text-brand-primary sm:text-5xl lg:text-6xl">
            Crafted with
            <br />
            <span className="italic text-brand-gold-dark">
              Intricate Detail
            </span>
          </h2>

          <p className="mt-7 max-w-lg text-sm leading-8 text-brand-text-secondary sm:text-base">
            From delicate floral motifs to statement embroidery, discover
            designs created to bring richness, depth and individuality to every
            garment.
          </p>

          <div className="mt-8 grid grid-cols-2 gap-4">
            {[
              "Hand-inspired Motifs",
              "Statement Borders",
              "Fine Embroidery",
              "Custom Patterns",
            ].map((item) => (
              <div
                key={item}
                className="border-t border-brand-gold pt-4 text-xs font-medium uppercase tracking-[0.12em] text-brand-primary"
              >
                {item}
              </div>
            ))}
          </div>

          <Link
            href="/embroidery"
            className="mt-9 inline-flex border border-brand-gold-dark px-8 py-3.5 text-[10px] font-semibold uppercase tracking-[0.2em] text-brand-primary transition hover:bg-brand-gold"
          >
            Explore Embroidery
          </Link>
        </div>

        <div className="relative order-1 aspect-square overflow-hidden lg:order-2">
          <Image
            src="/images/home/embroidery.jpg"
            alt="Intricate AAVIRÁ embroidery craftsmanship"
            fill
            sizes="(max-width: 1024px) 100vw, 50vw"
            className="object-cover transition duration-700 hover:scale-105"
          />
        </div>
      </div>
    </section>
  );
}