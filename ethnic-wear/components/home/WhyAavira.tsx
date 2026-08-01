import React from "react";
import SectionHeading from "@/components/ui/SectionHeading";

const reasons = [
  {
    number: "01",
    title: "100% Authentic Handloom",
    description: "Every saree and lehenga comes with certified origin tags guaranteeing genuine Varanasi, Kanchipuram, and Chanderi weaving.",
  },
  {
    number: "02",
    title: "Artisan Direct Heritage",
    description: "We work directly with 250+ master weaver families, preserving centuries-old zardozi and kadwa zari techniques.",
  },
  {
    number: "03",
    title: "Custom Fitting Concierge",
    description: "Enjoy complimentary virtual consultations with senior tailors for custom neckline, sleeve, and waist fittings.",
  },
];

export default function WhyAavira() {
  return (
    <section className="bg-[#FAF6F0] px-4 py-20 sm:px-6 lg:px-8 lg:py-28 border-b border-[#E6DED6]">
      <div className="mx-auto max-w-7xl">
        <SectionHeading
          subtitle="The AAVIRÁ Promise"
          title="Designed to Be Remembered"
          description="We take immense pride in crafting heirloom-quality garments destined to be passed down through generations."
        />

        <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8">
          {reasons.map((r) => (
            <div
              key={r.number}
              className="border border-[#E6DED6] bg-white p-8 relative overflow-hidden transition-all duration-300 hover:border-[#D4AF37] hover:shadow-xl group"
            >
              <div className="absolute right-4 top-2 font-serif text-6xl font-bold text-[#F0E7DB] group-hover:text-[#D4AF37]/20 transition">
                {r.number}
              </div>
              <span className="text-sm text-[#D4AF37]">❖</span>
              <h3 className="mt-4 font-serif text-2xl font-medium text-[#2A0812]">
                {r.title}
              </h3>
              <p className="mt-3 text-xs leading-relaxed text-[#786C68]">
                {r.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}