import React from "react";
import Image from "next/image";
import Link from "next/link";

const customSteps = [
  { step: "01", title: "Select Fabric & Color", desc: "Choose pure Banarasi silk, velvet, chanderi, or organza." },
  { step: "02", title: "Pick Embroidery Motif", desc: "Select zardozi, gota patti, dabka, pearl, or threadwork." },
  { step: "03", title: "Virtual Fit Consultation", desc: "Our master tailors take 14 precise silhouette measurements." },
  { step: "04", title: "Handmade & Delivered", desc: "Crafted by hand and delivered to your doorstep worldwide." },
];

export default function CustomDesign() {
  return (
    <section className="bg-[#FAF6F0] text-[#2A0812] overflow-hidden border-b border-[#E6DED6]">
      <div className="mx-auto grid max-w-7xl lg:grid-cols-2">
        {/* Left: Atelier Showcase Image */}
        <div className="relative min-h-[480px] lg:min-h-[640px]">
          <Image
            src="/images/home/custom-design.jpg"
            alt="AAVIRÁ Bespoke Atelier"
            fill
            sizes="(max-width: 1024px) 100vw, 50vw"
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-[#FAF6F0]/30 to-[#FAF6F0]" />
          <div className="absolute bottom-6 left-6 z-10 border border-[#D4AF37]/50 bg-[#120C0E]/85 p-4 backdrop-blur-md">
            <p className="font-serif text-sm font-semibold text-[#F3E5AB]">Bespoke Made-to-Measure</p>
            <p className="text-[11px] text-[#CDBDB2]">Tailored by Master Artisans in Varanasi & Lucknow</p>
          </div>
        </div>

        {/* Right: Bespoke Creation Process */}
        <div className="flex flex-col justify-center px-6 py-16 sm:px-12 lg:px-16">
          <span className="text-[11px] font-bold uppercase tracking-[0.25em] text-[#9A7653]">
            ✦ Custom Couture Studio ✦
          </span>

          <h2 className="mt-3 font-serif text-4xl sm:text-5xl font-normal leading-tight text-[#2A0812]">
            Your Vision.
            <br />
            <span className="italic font-serif text-[#9A7653]">Our Master Craftsmen.</span>
          </h2>

          <p className="mt-4 text-xs sm:text-sm text-[#786C68] leading-relaxed">
            Whether for your wedding day or a grand gala, design a one-of-a-kind ensemble crafted strictly to your aesthetic and proportions.
          </p>

          {/* 4 Steps Grid */}
          <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-4">
            {customSteps.map((s) => (
              <div key={s.step} className="border border-[#E6DED6] bg-white p-4 transition hover:border-[#D4AF37] hover:shadow-md">
                <span className="font-serif text-lg font-bold text-[#D4AF37] block">{s.step}</span>
                <h4 className="font-serif text-sm font-semibold text-[#2A0812] mt-1">{s.title}</h4>
                <p className="text-[11px] text-[#786C68] mt-1 leading-snug">{s.desc}</p>
              </div>
            ))}
          </div>

          <div className="mt-8">
            <Link
              href="/custom-design"
              className="inline-flex items-center gap-3 bg-[#2A0812] px-8 py-3.5 text-xs font-bold uppercase tracking-[0.2em] text-[#F3E5AB] shadow-lg hover:bg-[#4A1525] transition"
            >
              Book Bespoke Consultation &rarr;
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}