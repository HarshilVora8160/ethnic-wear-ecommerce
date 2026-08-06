"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";

const heroImages = [
  "https://images.unsplash.com/photo-1610030469983-98e550d6193c?auto=format&fit=crop&w=1600&q=80",
  "https://images.unsplash.com/photo-1583391733956-3750e0ff4e8b?auto=format&fit=crop&w=1600&q=80",
  "https://images.unsplash.com/photo-1597983073493-88cd35cf93b0?auto=format&fit=crop&w=1600&q=80",
];

const staticContent = {
  tag: "Royal Heritage 2026",
  title: "Timeless Indian",
  titleHighlight: "Couture & Grace",
  description: "Handcrafted Banarasi silk sarees & bespoke bridal lehengas inspired by India's imperial royal courts.",
  primaryCta: { label: "Explore Sarees", href: "/sarees" },
  secondaryCta: { label: "Bridal Lehengas", href: "/lehengas" },
};

export default function Hero() {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroImages.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="relative min-h-[720px] overflow-hidden lg:min-h-[860px] bg-[#120C0E]">
      {/* Background Image Carousel - Only Images Change */}
      {heroImages.map((imgUrl, idx) => (
        <div
          key={idx}
          className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
            idx === currentSlide ? "opacity-100" : "opacity-0 pointer-events-none"
          }`}
        >
          <Image
            src={imgUrl}
            alt="AAVIRÁ Royal Heritage Collection"
            fill
            priority={idx === 0}
            sizes="100vw"
            className="object-cover object-center filter brightness-90"
          />
          {/* Luxury Gradient Overlay */}
          <div className="absolute inset-0 bg-gradient-to-r from-[#120C0E]/90 via-[#120C0E]/60 to-transparent" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#120C0E] via-transparent to-[#120C0E]/30" />
        </div>
      ))}

      {/* Hero Content - Static Text */}
      <div className="relative z-10 mx-auto flex min-h-[720px] max-w-7xl items-center px-6 sm:px-8 lg:min-h-[860px] lg:px-12">
        <div className="max-w-2xl text-white py-12">
          {/* Gold Badge */}
          <div className="inline-flex items-center gap-3 border border-[#D4AF37]/50 bg-[#120C0E]/70 px-4 py-1.5 backdrop-blur-md">
            <span className="h-2 w-2 rounded-full bg-[#D4AF37] animate-ping" />
            <span className="text-[11px] font-bold uppercase tracking-[0.25em] text-[#F3E5AB]">
              ✦ {staticContent.tag}
            </span>
          </div>

          {/* Static Heading */}
          <h1 className="mt-6 font-serif text-5xl leading-[0.95] tracking-wide sm:text-7xl lg:text-8xl font-normal text-white">
            {staticContent.title}
            <br />
            <span className="text-gold-gradient italic font-serif">
              {staticContent.titleHighlight}
            </span>
          </h1>

          <p className="mt-6 max-w-lg text-sm sm:text-base leading-relaxed text-[#CDBDB2]">
            {staticContent.description}
          </p>

          {/* Action CTA Buttons */}
          <div className="mt-8 flex flex-col sm:flex-row gap-4">
            <Link
              href={staticContent.primaryCta.href}
              className="inline-flex h-13 items-center justify-center bg-gradient-to-r from-[#D4AF37] via-[#F3E5AB] to-[#B38F24] px-8 text-xs font-bold uppercase tracking-[0.2em] text-[#120C0E] shadow-xl transition hover:brightness-110 gold-glow-hover"
            >
              {staticContent.primaryCta.label} &rarr;
            </Link>

            <Link
              href={staticContent.secondaryCta.href}
              className="inline-flex h-13 items-center justify-center border border-[#F3E5AB]/40 bg-[#120C0E]/50 px-8 text-xs font-bold uppercase tracking-[0.2em] text-[#F3E5AB] backdrop-blur-md transition hover:border-[#D4AF37] hover:bg-[#D4AF37]/20"
            >
              {staticContent.secondaryCta.label}
            </Link>
          </div>

          {/* Floating Trust Pills */}
          <div className="mt-12 flex flex-wrap items-center gap-6 border-t border-[#3A2A2F] pt-6 text-xs text-[#F3E5AB]">
            <div className="flex items-center gap-2">
              <span className="text-[#D4AF37]">❖</span>
              <span>100% Certified Silk</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-[#D4AF37]">❖</span>
              <span>Bespoke Custom Fits</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-[#D4AF37]">❖</span>
              <span>Global Express Shipping</span>
            </div>
          </div>
        </div>
      </div>

      {/* Carousel Dots Indicator */}
      <div className="absolute bottom-8 right-8 z-20 flex gap-3">
        {heroImages.map((_, idx) => (
          <button
            key={idx}
            onClick={() => setCurrentSlide(idx)}
            className={`h-2 transition-all duration-300 ${
              idx === currentSlide ? "w-8 bg-[#D4AF37]" : "w-2 bg-white/40 hover:bg-white"
            }`}
            aria-label={`Slide ${idx + 1}`}
          />
        ))}
      </div>
    </section>
  );
}