import React from "react";
import SectionHeading from "@/components/ui/SectionHeading";

export default function ReturnsPage() {
  return (
    <div className="bg-[#FAF6F0] min-h-screen py-16 px-4 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-4xl bg-white border border-[#E6DED6] p-8 sm:p-12 shadow-sm">
        <SectionHeading
          subtitle="Customer Concierge"
          title="Complimentary Returns & Exchanges"
          description="Enjoy 7-day hassle-free returns on standard garments."
        />
        <div className="mt-8 space-y-4 text-xs sm:text-sm text-[#786C68] leading-relaxed">
          <p>
            Standard non-custom garments may be returned or exchanged within 7 days of delivery in their original unworn condition with security tags intact.
          </p>
          <p>
            Bespoke made-to-measure orders undergo virtual approval fittings before dispatch to ensure 100% satisfaction.
          </p>
        </div>
      </div>
    </div>
  );
}
