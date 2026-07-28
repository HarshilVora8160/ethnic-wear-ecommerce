import Image from "next/image";
import Link from "next/link";

export default function Hero() {
  return (
    <section className="relative min-h-[680px] overflow-hidden lg:min-h-[820px]">
      <Image
        src="/images/home/hero.jpg"
        alt="AAVIRÁ luxury Indian ethnic wear collection"
        fill
        priority
        sizes="100vw"
        className="object-cover object-center"
      />

      <div className="absolute inset-0 bg-gradient-to-r from-brand-primary/85 via-brand-primary/55 to-brand-primary/15" />

      <div className="absolute inset-0 bg-gradient-to-t from-brand-primary/50 via-transparent to-transparent" />

      <div className="relative z-10 mx-auto flex min-h-[680px] max-w-7xl items-center px-5 sm:px-8 lg:min-h-[820px] lg:px-12">
        <div className="max-w-3xl text-white">
          <div className="mb-6 flex items-center gap-4">
            <span className="h-px w-10 bg-brand-gold" />

            <p className="text-[10px] font-medium uppercase tracking-[0.35em] text-brand-champagne sm:text-xs">
              The New Heritage Collection
            </p>
          </div>

          <h1 className="font-serif text-5xl leading-[0.98] tracking-tight sm:text-7xl lg:text-8xl xl:text-9xl">
            Timeless
            <br />
            <span className="italic text-brand-champagne">
              Indian Elegance
            </span>
          </h1>

          <p className="mt-7 max-w-xl text-sm leading-7 text-white/80 sm:text-base">
            Discover exquisite sarees, lehengas and ethnic wear inspired by
            India&apos;s timeless artistry and crafted for the modern woman.
          </p>

          <div className="mt-9 flex flex-col gap-3 sm:flex-row">
            <Link
              href="/sarees"
              className="inline-flex h-13 items-center justify-center bg-brand-gold px-9 text-xs font-semibold uppercase tracking-[0.18em] text-brand-primary transition duration-300 hover:bg-brand-gold-light"
            >
              Shop Sarees
            </Link>

            <Link
              href="/new-arrivals"
              className="inline-flex h-13 items-center justify-center border border-white/60 px-9 text-xs font-semibold uppercase tracking-[0.18em] text-white transition duration-300 hover:border-brand-gold hover:bg-brand-gold hover:text-brand-primary"
            >
              New Arrivals
            </Link>
          </div>
        </div>
      </div>

      <div className="absolute bottom-7 left-1/2 z-10 hidden -translate-x-1/2 flex-col items-center gap-3 text-white/70 md:flex">
        <span className="text-[9px] uppercase tracking-[0.3em]">
          Discover
        </span>

        <span className="h-10 w-px bg-white/50" />
      </div>
    </section>
  );
}