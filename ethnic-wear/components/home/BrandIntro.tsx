import React from "react";
import SectionHeading from "@/components/ui/SectionHeading";

export default function BrandIntro() {
  return (
    <section className="relative overflow-hidden bg-[#FAF6F0] py-20 lg:py-28 bg-motif-pattern">
      <div className="mx-auto max-w-5xl px-6 sm:px-8 text-center relative z-10">
        <SectionHeading
          subtitle="Our Artisan Philosophy"
          title="Where Royal Indian Tradition Meets Contemporary Luxury"
          description="AAVIRÁ celebrates three decades of opulent Indian handlooms and zardozi craftsmanship. From Banarasi gold kadwa weaves to bespoke bridal lehengas, each piece is handcrafted to honor royalty."
        />

        {/* Heritage Stats Row */}
        <div className="mt-12 grid grid-cols-2 gap-6 md:grid-cols-4 border-t border-[#E6DED6] pt-10">
          <div className="p-4 border-r border-[#E6DED6] last:border-r-0">
            <span className="font-serif text-3xl sm:text-4xl font-semibold text-[#2A0812] block">30+</span>
            <span className="text-[11px] uppercase tracking-widest text-[#9A7653] font-semibold">Years Heritage</span>
          </div>
          <div className="p-4 border-r border-[#E6DED6] last:border-r-0">
            <span className="font-serif text-3xl sm:text-4xl font-semibold text-[#2A0812] block">15K+</span>
            <span className="text-[11px] uppercase tracking-widest text-[#9A7653] font-semibold">Custom Fittings</span>
          </div>
          <div className="p-4 border-r border-[#E6DED6] last:border-r-0">
            <span className="font-serif text-3xl sm:text-4xl font-semibold text-[#2A0812] block">100%</span>
            <span className="text-[11px] uppercase tracking-widest text-[#9A7653] font-semibold">Silk Mark Verified</span>
          </div>
          <div className="p-4">
            <span className="font-serif text-3xl sm:text-4xl font-semibold text-[#2A0812] block">4.9★</span>
            <span className="text-[11px] uppercase tracking-widest text-[#9A7653] font-semibold">Global Reviews</span>
          </div>
        </div>
      </div>
    </section>
  );
}