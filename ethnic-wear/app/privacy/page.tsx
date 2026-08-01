import React from "react";
import SectionHeading from "@/components/ui/SectionHeading";

export default function PrivacyPage() {
  return (
    <div className="bg-[#FAF6F0] min-h-screen py-16 px-4 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-4xl bg-white border border-[#E6DED6] p-8 sm:p-12 shadow-sm">
        <SectionHeading
          subtitle="Legal & Security"
          title="Privacy Policy"
          description="Your privacy and data security are paramount at AAVIRÁ."
        />
        <div className="mt-8 space-y-4 text-xs sm:text-sm text-[#786C68] leading-relaxed">
          <p>
            We collect personal information solely to process your bespoke couture orders, arrange insured courier deliveries, and provide personalized styling consultations.
          </p>
          <p>
            Your payment information is encrypted using industry-standard SSL technology and is never stored on our servers.
          </p>
        </div>
      </div>
    </div>
  );
}
