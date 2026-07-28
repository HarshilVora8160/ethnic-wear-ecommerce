import Link from "next/link";

export default function FinalCTA() {
  return (
    <section className="relative overflow-hidden bg-brand-primary px-5 py-24 text-center sm:px-8 lg:py-32">
      <div className="absolute left-1/2 top-0 h-px w-32 -translate-x-1/2 bg-brand-gold" />

      <div className="relative mx-auto max-w-3xl">
        <p className="text-[10px] font-medium uppercase tracking-[0.4em] text-brand-gold">
          Your Next Occasion Awaits
        </p>

        <h2 className="mt-6 font-serif text-5xl leading-tight text-white sm:text-6xl lg:text-7xl">
          Dress in
          <span className="italic text-brand-champagne"> Tradition.</span>
          <br />
          Live in Luxury.
        </h2>

        <p className="mx-auto mt-7 max-w-xl text-sm leading-7 text-brand-text-light sm:text-base">
          Explore our latest collection of sarees, lehengas and timeless ethnic
          wear.
        </p>

        <div className="mt-9 flex flex-col justify-center gap-3 sm:flex-row">
          <Link
            href="/new-arrivals"
            className="inline-flex h-13 items-center justify-center bg-brand-gold px-9 text-[10px] font-semibold uppercase tracking-[0.2em] text-brand-primary transition hover:bg-brand-gold-light"
          >
            Shop New Arrivals
          </Link>

          <Link
            href="/custom-design"
            className="inline-flex h-13 items-center justify-center border border-white/40 px-9 text-[10px] font-semibold uppercase tracking-[0.2em] text-white transition hover:border-brand-gold hover:bg-brand-gold hover:text-brand-primary"
          >
            Create Your Saree
          </Link>
        </div>
      </div>
    </section>
  );
}