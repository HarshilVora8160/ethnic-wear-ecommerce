import React from "react";

const trustItems = [
  {
    icon: "👑",
    title: "100% Certified Handloom",
    description: "Authentic Varanasi & Kanchipuram silk mark certified",
  },
  {
    icon: "✨",
    title: "Bespoke Made-to-Measure",
    description: "Tailored to your exact silhouette & sleeve requirements",
  },
  {
    icon: "✈️",
    title: "Global Express Delivery",
    description: "Insured door-to-door courier to 150+ countries",
  },
  {
    icon: "🛡️",
    title: "Complimentary Exchanges",
    description: "7-day hassle-free luxury concierge returns",
  },
];

export default function TrustBar() {
  return (
    <section className="border-y border-[#D4AF37]/30 bg-[#2A0812] text-[#F3E5AB]">
      <div className="mx-auto grid max-w-7xl grid-cols-1 divide-y divide-[#3A2A2F] sm:grid-cols-2 md:grid-cols-4 sm:divide-y-0 sm:divide-x">
        {trustItems.map((item) => (
          <div
            key={item.title}
            className="flex items-center gap-4 px-6 py-6 transition hover:bg-[#3A101C]"
          >
            <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-[#120C0E] border border-[#D4AF37]/40 text-xl">
              {item.icon}
            </div>
            <div>
              <h3 className="font-serif text-sm font-semibold tracking-wide text-[#F3E5AB]">
                {item.title}
              </h3>
              <p className="mt-0.5 text-[11px] leading-tight text-[#CDBDB2]">
                {item.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}