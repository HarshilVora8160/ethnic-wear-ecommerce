import React from "react";
import Image from "next/image";
import Link from "next/link";

export default function EditorialSection() {
  return (
    <section className="bg-[#120C0E] text-white px-6 py-20 lg:py-28 relative overflow-hidden border-b border-[#D4AF37]/30">
      {/* Background Subtle Gold Glow */}
      <div className="absolute top-1/2 left-1/4 -translate-y-1/2 h-96 w-96 rounded-full bg-[#D4AF37]/10 blur-3xl pointer-events-none" />

      <div className="mx-auto grid max-w-7xl items-center gap-12 lg:grid-cols-2 lg:gap-16">
        {/* Left: Dual Overlapping Fashion Imagery */}
        <div className="relative flex justify-center">
          <div className="relative h-[440px] sm:h-[520px] w-full max-w-md overflow-hidden border-2 border-[#D4AF37]/40 shadow-2xl">
            <Image
              src="https://images.unsplash.com/photo-1610030469983-98e550d6193c?auto=format&fit=crop&w=1000&q=80"
              alt="AAVIRÁ Heritage Silk"
              fill
              sizes="(max-width: 1024px) 100vw, 50vw"
              className="object-cover"
            />
          </div>
          {/* Overlapping Secondary Card */}
          <div className="absolute -bottom-8 -right-4 sm:-right-8 hidden sm:block h-64 w-52 overflow-hidden border-2 border-[#D4AF37] shadow-2xl bg-[#1A1215]">
            <Image
              src="https://images.unsplash.com/photo-1583391733956-3750e0ff4e8b?auto=format&fit=crop&w=800&q=80"
              alt="Artisan Embroidery"
              fill
              className="object-cover"
            />
          </div>
        </div>

        {/* Right: Editorial Narrative */}
        <div className="lg:pl-8">
          <span className="text-[11px] font-bold uppercase tracking-[0.3em] text-[#D4AF37]">
            ✦ Royal Heritage Editorial ✦
          </span>

          <h2 className="mt-4 font-serif text-4xl sm:text-5xl lg:text-6xl font-normal leading-tight text-[#F3E5AB]">
            Heritage Artistry,
            <br />
            <span className="italic font-serif text-white">Reimagined for Royalty.</span>
          </h2>

          <p className="mt-6 text-sm sm:text-base leading-relaxed text-[#CDBDB2]">
            At AAVIRÁ, we believe true Indian couture is not merely worn; it is inherited. Every Banarasi weave, hand-sewn glass pearl, and zardozi thread represents generations of master weavers from Varanasi, Kanchipuram, and Lucknow.
          </p>

          <blockquote className="mt-6 border-l-2 border-[#D4AF37] pl-4 font-serif italic text-sm text-[#F3E5AB]">
            &ldquo;Extravagance is not about ostentation; it is about preserving India&apos;s priceless craft traditions.&rdquo;
          </blockquote>

          <div className="mt-8 flex flex-wrap gap-4">
            <Link
              href="/about"
              className="inline-flex items-center gap-3 bg-gradient-to-r from-[#D4AF37] via-[#F3E5AB] to-[#B38F24] px-8 py-3.5 text-xs font-bold uppercase tracking-widest text-[#120C0E] transition hover:brightness-110"
            >
              Our Heritage Journey &rarr;
            </Link>
            <Link
              href="/embroidery"
              className="inline-flex items-center justify-center border border-[#D4AF37]/50 px-8 py-3.5 text-xs font-bold uppercase tracking-widest text-[#F3E5AB] hover:bg-[#D4AF37]/20 transition"
            >
              Explore Craftsmanship
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}