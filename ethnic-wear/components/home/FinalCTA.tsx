import React from "react";
import Link from "next/link";

export default function FinalCTA() {
  return (
    <section className="relative overflow-hidden bg-[#2A0812] px-6 py-24 text-center text-white lg:py-32 border-t border-[#D4AF37]/30">
      <div className="mx-auto max-w-3xl relative z-10">
        <span className="text-[11px] font-bold uppercase tracking-[0.3em] text-[#D4AF37]">
          ✦ Your Celebration Awaits ✦
        </span>

        <h2 className="mt-4 font-serif text-5xl sm:text-6xl lg:text-7xl font-normal leading-tight text-[#F3E5AB]">
          Wear Imperial History.
          <br />
          <span className="italic font-serif text-white">Embrace Timeless Grace.</span>
        </h2>

        <p className="mt-6 text-sm text-[#CDBDB2] max-w-lg mx-auto leading-relaxed">
          From heirloom Banarasi silks to bespoke royal bridal lehengas, discover India&apos;s finest handcrafted couture.
        </p>

        <div className="mt-10 flex flex-col sm:flex-row justify-center gap-4">
          <Link
            href="/sarees"
            className="inline-flex h-13 items-center justify-center bg-gradient-to-r from-[#D4AF37] via-[#F3E5AB] to-[#B38F24] px-10 text-xs font-bold uppercase tracking-[0.2em] text-[#2A0812] shadow-xl hover:brightness-110"
          >
            Shop Saree Collection
          </Link>
          <Link
            href="/custom-design"
            className="inline-flex h-13 items-center justify-center border border-[#F3E5AB]/40 px-10 text-xs font-bold uppercase tracking-[0.2em] text-[#F3E5AB] hover:bg-[#D4AF37]/20 transition"
          >
            Bespoke Made-to-Order
          </Link>
        </div>
      </div>
    </section>
  );
}