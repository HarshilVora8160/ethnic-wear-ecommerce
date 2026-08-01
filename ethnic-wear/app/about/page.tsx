import React from "react";
import Image from "next/image";
import SectionHeading from "@/components/ui/SectionHeading";

export default function AboutPage() {
  return (
    <div className="bg-[#FAF6F0] min-h-screen">
      {/* Hero Header */}
      <section className="relative h-96 w-full overflow-hidden bg-gradient-to-r from-[#2D0312] via-[#4A0C22] to-[#1F020B] border-b-2 border-[#D4AF37]/40 shadow-xl">
        <Image
          src="/images/home/hero.jpg"
          alt="AAVIRÁ Heritage Atelier"
          fill
          priority
          className="object-cover opacity-35 mix-blend-overlay filter brightness-95"
        />
        {/* Radial Gold Silk Spotlight Overlay */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-[#D4AF37]/30 via-[#3D091B]/85 to-[#120C0E]/95" />
        
        {/* Metallic Gold Thread Line at Bottom */}
        <div className="absolute bottom-0 inset-x-0 h-[2px] bg-gradient-to-r from-transparent via-[#D4AF37] to-transparent" />

        <div className="relative z-10 mx-auto flex h-full max-w-5xl flex-col items-center justify-center px-4 text-center">
          <span className="text-[11px] font-bold uppercase tracking-[0.3em] text-[#F3E5AB] drop-shadow-sm">
            ✦ Three Decades of Craft ✦
          </span>
          <h1 className="mt-2 font-serif text-5xl sm:text-6xl text-gold-gradient font-normal tracking-wide drop-shadow-lg">
            The Heritage of AAVIRÁ
          </h1>
          <p className="mt-3 max-w-xl text-xs sm:text-sm text-[#F0E7DB] leading-relaxed font-medium">
            Honoring royal Indian weaving traditions, master zardozi embroidery, and modern couture elegance.
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="mx-auto max-w-5xl px-6 py-20">
        <SectionHeading
          subtitle="Our Legacy"
          title="Preserving Priceless Craft Traditions"
          description="Founded in 1994, AAVIRÁ began as a small atelier in Varanasi dedicated to authentic Kadhwa Banarasi silk weaving. Today, we work directly with over 250 master weaver families across India."
        />

        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="relative h-96 w-full overflow-hidden border-2 border-[#D4AF37]/30 shadow-xl">
            <Image
              src="/images/home/embroidery.jpg"
              alt="Artisan at work"
              fill
              className="object-cover"
            />
          </div>
          <div className="space-y-4 text-xs sm:text-sm leading-relaxed text-[#786C68]">
            <h3 className="font-serif text-2xl font-medium text-[#2A0812]">
              Sustaining Artisan Families
            </h3>
            <p>
              Every garment created at AAVIRÁ is an authentic work of art. Our weavers use 100% pure silk and genuine zari metallic threads passed down through generations.
            </p>
            <p>
              By cutting out middlemen, we ensure fair artisan wages and preserve handloom weaving traditions that are rapidly disappearing in the modern era.
            </p>
            <div className="border-l-2 border-[#D4AF37] pl-4 font-serif italic text-sm text-[#2A0812] pt-2">
              &ldquo;When you wear AAVIRÁ, you carry forward the soul of Indian heritage.&rdquo;
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
