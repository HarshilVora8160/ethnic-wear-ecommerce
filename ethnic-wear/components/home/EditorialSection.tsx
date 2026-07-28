import Image from "next/image";
import Link from "next/link";

export default function EditorialSection() {
  return (
    <section className="bg-brand-primary px-5 py-20 sm:px-8 lg:px-12 lg:py-28">
      <div className="mx-auto grid max-w-7xl items-center gap-12 lg:grid-cols-[1.15fr_0.85fr] lg:gap-20">
        <div className="relative aspect-[4/5] overflow-hidden">
          <Image
            src="/images/home/hero.jpg"
            alt="AAVIRÁ heritage inspired fashion"
            fill
            sizes="(max-width: 1024px) 100vw, 55vw"
            className="object-cover"
          />

          <div className="absolute inset-0 ring-1 ring-inset ring-white/10" />
        </div>

        <div className="text-white">
          <p className="text-[10px] font-medium uppercase tracking-[0.35em] text-brand-gold">
            The AAVIRÁ Story
          </p>

          <h2 className="mt-5 font-serif text-4xl leading-tight sm:text-5xl lg:text-6xl">
            Heritage,
            <br />
            <span className="italic text-brand-champagne">
              Reimagined.
            </span>
          </h2>

          <p className="mt-7 text-sm leading-8 text-white/70 sm:text-base">
            We believe Indian fashion should feel both deeply rooted and
            effortlessly modern. AAVIRÁ brings together traditional artistry,
            refined silhouettes and thoughtful details to create pieces that
            become part of your story.
          </p>

          <Link
            href="/about"
            className="mt-9 inline-flex border border-brand-gold px-8 py-3.5 text-[10px] font-semibold uppercase tracking-[0.2em] text-brand-champagne transition hover:bg-brand-gold hover:text-brand-primary"
          >
            Discover Our Story
          </Link>
        </div>
      </div>
    </section>
  );
}