import React from "react";
import Image from "next/image";
import Link from "next/link";
import SectionHeading from "@/components/ui/SectionHeading";

const craftDetails = [
  { name: "Hand Zardozi", desc: "Gold & silver metallic wire embroidery historically favored by Mughal royals." },
  { name: "Gota Patti", desc: "Traditional Rajasthani ribbon work creating luminous geometric motifs." },
  { name: "Lucknowi Chikankari", desc: "Delicate shadow work hand-stitched on pure georgette & muslin." },
  { name: "Pearl & Cutdana", desc: "Glass pearls and micro-beads sewn for shimmering evening silhouettes." },
];

export default function EmbroideryShowcase() {
  return (
    <section className="bg-[#FAF6F0] px-4 py-20 sm:px-6 lg:px-8 lg:py-28 border-b border-[#E6DED6]">
      <div className="mx-auto max-w-7xl">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left Text */}
          <div>
            <SectionHeading
              centered={false}
              subtitle="Master Handwork"
              title="The Heritage Art of Hand Embroidery"
              description="Each AAVIRÁ garment passes through the hands of master artisans who spend over 120 hours meticulously embroidering intricate royal motifs."
            />

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-8">
              {craftDetails.map((c) => (
                <div key={c.name} className="border-l-2 border-[#D4AF37] bg-white p-4 shadow-xs">
                  <h4 className="font-serif text-base font-semibold text-[#2A0812]">{c.name}</h4>
                  <p className="text-xs text-[#786C68] mt-1 leading-relaxed">{c.desc}</p>
                </div>
              ))}
            </div>

            <div className="mt-8">
              <Link
                href="/embroidery"
                className="inline-flex items-center justify-center bg-[#2A0812] px-8 py-3.5 text-xs font-bold uppercase tracking-widest text-[#F3E5AB] hover:bg-[#4A1525] transition"
              >
                Explore Embroidery Atelier &rarr;
              </Link>
            </div>
          </div>

          {/* Right Image */}
          <div className="relative aspect-square w-full overflow-hidden border-2 border-[#D4AF37]/30 shadow-2xl">
            <Image
              src="/images/home/embroidery.jpg"
              alt="Artisan embroidery craftsmanship"
              fill
              sizes="(max-width: 1024px) 100vw, 50vw"
              className="object-cover transition-transform duration-700 hover:scale-105"
            />
          </div>
        </div>
      </div>
    </section>
  );
}