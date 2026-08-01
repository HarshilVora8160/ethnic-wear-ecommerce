import React from "react";
import SectionHeading from "@/components/ui/SectionHeading";

export default function ShippingPage() {
  return (
    <div className="bg-[#FAF6F0] min-h-screen py-16 px-4 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-4xl bg-white border border-[#E6DED6] p-8 sm:p-12 shadow-sm">
        <SectionHeading
          subtitle="Global Delivery"
          title="Worldwide Shipping Information"
          description="Insured door-to-door express delivery to over 150 countries."
        />
        <div className="mt-8 space-y-4 text-xs sm:text-sm text-[#786C68] leading-relaxed">
          <p>
            Domestic orders within India ship complimentary via Express Air and arrive within 3-5 business days.
          </p>
          <p>
            International express shipping (DHL / FedEx Express) arrives within 4-7 business days with full online tracking and transit insurance.
          </p>
        </div>
      </div>
    </div>
  );
}
