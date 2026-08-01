import React from "react";

type SectionHeadingProps = {
  subtitle?: string;
  title: string;
  description?: string;
  centered?: boolean;
  className?: string;
};

export default function SectionHeading({
  subtitle,
  title,
  description,
  centered = true,
  className = "",
}: SectionHeadingProps) {
  return (
    <div className={`mb-12 ${centered ? "text-center" : "text-left"} ${className}`}>
      {subtitle && (
        <span className="inline-block text-[11px] font-bold uppercase tracking-[0.25em] text-[#9A7653]">
          ✦ {subtitle} ✦
        </span>
      )}
      <h2 className="mt-2 font-serif text-3xl sm:text-4xl lg:text-5xl font-medium tracking-wide text-[#2A0812]">
        {title}
      </h2>
      
      {/* Decorative Gold Diamond Divider */}
      <div className={`mt-4 flex items-center justify-center gap-2 ${centered ? "mx-auto" : ""}`}>
        <div className="h-[1px] w-12 bg-gradient-to-r from-transparent to-[#D4AF37]" />
        <span className="text-[#D4AF37] text-xs">❖</span>
        <div className="h-[1px] w-12 bg-gradient-to-l from-transparent to-[#D4AF37]" />
      </div>

      {description && (
        <p className="mt-4 mx-auto max-w-2xl text-xs sm:text-sm text-[#786C68] leading-relaxed">
          {description}
        </p>
      )}
    </div>
  );
}