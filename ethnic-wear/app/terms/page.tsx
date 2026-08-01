import React from "react";
import SectionHeading from "@/components/ui/SectionHeading";

export default function TermsPage() {
  return (
    <div className="bg-[#FAF6F0] min-h-screen py-16 px-4 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-4xl bg-white border border-[#E6DED6] p-8 sm:p-12 shadow-sm">
        <SectionHeading
          subtitle="Terms of Service"
          title="Terms & Conditions"
          description="Guidelines governing your purchases and use of AAVIRÁ Couture services."
        />
        <div className="mt-8 space-y-4 text-xs sm:text-sm text-[#786C68] leading-relaxed">
          <p>
            All garments, imagery, designs, and branding presented on this website are protected under international copyright and trademark laws.
          </p>
          <p>
            Due to the handcrafted nature of handloom silk weaving and zardozi embroidery, subtle variations in dye lot or weave texture enhance each piece&apos;s unique authenticity.
          </p>
        </div>
      </div>
    </div>
  );
}
