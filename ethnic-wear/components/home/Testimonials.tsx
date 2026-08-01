import React from "react";
import SectionHeading from "@/components/ui/SectionHeading";

const testimonials = [
  {
    quote:
      "My bridal Banarasi saree arrived in London within 4 days. The weight of the silk, the 24k gold zari shine, and custom blouse fitting were beyond extraordinary!",
    name: "Dr. Radhika Sharma",
    location: "London, UK",
    outfit: "Royal Banarasi Silk Saree",
  },
  {
    quote:
      "AAVIRÁ designed my entire bridal lehenga troupe. Their master artisans in Lucknow spent 3 months on the zardozi detail. Everyone at the reception was spellbound.",
    name: "Ananya Patel-Shah",
    location: "Mumbai, India",
    outfit: "Imperial Velvet Zardozi Lehenga",
  },
  {
    quote:
      "The fit of the groom's sherwani was flawless. Their virtual measurement session was incredibly detailed. Exceptional luxury experience!",
    name: "Vikramaditya Kapoor",
    location: "New York, USA",
    outfit: "Raw Silk Groom Sherwani",
  },
];

export default function Testimonials() {
  return (
    <section className="bg-[#FAF6F0] px-4 py-20 sm:px-6 lg:px-8 lg:py-28 border-b border-[#E6DED6]">
      <div className="mx-auto max-w-7xl">
        <SectionHeading
          subtitle="Couture Reviews"
          title="Stories Worn with Royal Elegance"
          description="Read real experiences from brides, grooms, and patrons across the globe."
        />

        <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((t) => (
            <div
              key={t.name}
              className="border border-[#E6DED6] bg-white p-8 relative flex flex-col justify-between transition hover:border-[#D4AF37] hover:shadow-xl"
            >
              <div>
                <div className="flex items-center justify-between text-xs text-[#D4AF37]">
                  <span>★★★★★</span>
                  <span className="bg-[#FAF6F0] text-[#2A0812] px-2 py-0.5 text-[9px] font-bold uppercase tracking-widest border border-[#E6DED6]">
                    Verified Buyer
                  </span>
                </div>

                <blockquote className="mt-4 font-serif text-sm leading-relaxed text-[#2A0812]">
                  &ldquo;{t.quote}&rdquo;
                </blockquote>
              </div>

              <div className="mt-6 border-t border-[#E6DED6] pt-4">
                <h4 className="font-serif text-base font-semibold text-[#2A0812]">{t.name}</h4>
                <div className="flex justify-between text-[11px] text-[#9A7653] mt-0.5">
                  <span>{t.location}</span>
                  <span className="font-medium">{t.outfit}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}