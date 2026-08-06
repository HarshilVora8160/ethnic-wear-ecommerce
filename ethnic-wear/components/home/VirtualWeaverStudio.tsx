"use client";

import React, { useState } from "react";
import Image from "next/image";
import { Sparkles, Sun, Moon, Layers, ShieldCheck, Check } from "lucide-react";

type ZariType = {
  id: string;
  name: string;
  metal: string;
  colorCode: string;
  image: string;
  description: string;
  shineClass: string;
};

const zariTypes: ZariType[] = [
  {
    id: "gold-kadwa",
    name: "Pure 24k Gold Kadwa Zari",
    metal: "24k Gold Thread",
    colorCode: "#D4AF37",
    image: "https://images.unsplash.com/photo-1610030469983-98e550d6193c?auto=format&fit=crop&w=1000&q=80",
    description: "Hand-woven gold zari motifs embossed directly on rich crimson Banarasi silk using traditional wooden looms.",
    shineClass: "from-[#D4AF37]/40 via-[#F3E5AB]/60 to-[#B38F24]/40",
  },
  {
    id: "silver-temple",
    name: "Antique Silver Zari Weave",
    metal: "925 Pure Silver Thread",
    colorCode: "#C0C0C0",
    image: "https://images.unsplash.com/photo-1609357605129-26f69add5d6e?auto=format&fit=crop&w=1000&q=80",
    description: "Cool silver metallic threads woven into Kanjipuram temple borders with radiant contrast brocade.",
    shineClass: "from-[#E0E0E0]/50 via-white/70 to-[#A0A0A0]/40",
  },
  {
    id: "rose-gold-mirror",
    name: "Rose Gold Abhla Mirrorwork",
    metal: "Copper & Mirror Accents",
    colorCode: "#B76E79",
    image: "https://images.unsplash.com/photo-1595777457583-95e059d581b8?auto=format&fit=crop&w=1000&q=80",
    description: "Luminous rose gold dori embroidery combined with real glass hand-set mirrors for sangeet galas.",
    shineClass: "from-[#B76E79]/50 via-[#FFB6C1]/60 to-[#8B4513]/40",
  },
  {
    id: "zardozi-dabka",
    name: "Master Zardozi & Dabka Craft",
    metal: "Heavy Metallic Wire",
    colorCode: "#E5C158",
    image: "https://images.unsplash.com/photo-1600185365483-26d7a4cc7519?auto=format&fit=crop&w=1000&q=80",
    description: "Three-dimensional heavy bullion embroidery stitched with dabka wire, cutdana, and glass pearls.",
    shineClass: "from-[#E5C158]/50 via-[#FFF8DC]/70 to-[#B8860B]/40",
  },
];

export default function VirtualWeaverStudio() {
  const [selectedZari, setSelectedZari] = useState<ZariType>(zariTypes[0]);
  const [lighting, setLighting] = useState<"day" | "night">("night");

  return (
    <section className="bg-[#0E090B] py-20 lg:py-28 relative overflow-hidden text-white border-b border-[#D4AF37]/30">
      {/* Dynamic Lighting Backdrop */}
      <div
        className={`absolute inset-0 transition-opacity duration-1000 pointer-events-none ${
          lighting === "night"
            ? "bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-[#3D091B]/60 via-[#0E090B] to-[#0E090B]"
            : "bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-[#D4AF37]/20 via-[#0E090B] to-[#0E090B]"
        }`}
      />

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6 border-b border-[#3A2A2F] pb-8">
          <div>
            <div className="inline-flex items-center gap-2 rounded-full border border-[#D4AF37]/40 bg-[#2A0812] px-4 py-1.5 mb-3">
              <Layers size={14} className="text-[#D4AF37]" />
              <span className="text-[10px] font-bold uppercase tracking-[0.3em] text-[#F3E5AB]">
                Interactive Zari & Weave Simulator
              </span>
            </div>
            <h2 className="font-serif text-4xl sm:text-5xl font-medium text-white">
              The Master Weaver&apos;s <span className="text-gold-gradient italic">Atelier</span>
            </h2>
            <p className="mt-2 text-xs sm:text-sm text-[#CDBDB2] max-w-xl">
              Inspect the metallic shimmer of authentic Indian Zari under natural courtyard sunlight or warm palace candlelight.
            </p>
          </div>

          {/* Lighting Mode Toggle */}
          <div className="flex items-center gap-2 bg-[#1E1418] p-1.5 rounded-full border border-[#D4AF37]/40 shadow-inner">
            <button
              type="button"
              onClick={() => setLighting("day")}
              className={`flex items-center gap-2 rounded-full px-4 py-2 text-xs font-bold uppercase tracking-wider transition-all ${
                lighting === "day"
                  ? "bg-gradient-to-r from-[#D4AF37] to-[#B38F24] text-[#120C0E] shadow-md"
                  : "text-[#CDBDB2] hover:text-white"
              }`}
            >
              <Sun size={14} />
              Courtyard Light
            </button>
            <button
              type="button"
              onClick={() => setLighting("night")}
              className={`flex items-center gap-2 rounded-full px-4 py-2 text-xs font-bold uppercase tracking-wider transition-all ${
                lighting === "night"
                  ? "bg-gradient-to-r from-[#D4AF37] to-[#B38F24] text-[#120C0E] shadow-md"
                  : "text-[#CDBDB2] hover:text-white"
              }`}
            >
              <Moon size={14} />
              Royal Candlelight
            </button>
          </div>
        </div>

        {/* Interactive Studio Stage */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          {/* LEFT: ZARI SELECTOR LIST (4 COLS) */}
          <div className="lg:col-span-4 space-y-3">
            <span className="text-[10px] font-bold uppercase tracking-[0.25em] text-[#D4AF37] block mb-2">
              Select Zari Specimen
            </span>
            {zariTypes.map((zari) => {
              const isSelected = selectedZari.id === zari.id;
              return (
                <button
                  key={zari.id}
                  type="button"
                  onClick={() => setSelectedZari(zari)}
                  className={`w-full flex items-center justify-between rounded-xl border p-4 text-left transition-all duration-300 ${
                    isSelected
                      ? "border-[#D4AF37] bg-gradient-to-r from-[#2A0812] to-[#1E1418] shadow-lg ring-1 ring-[#D4AF37]/50"
                      : "border-[#3A2A2F] bg-[#120C0E]/80 hover:border-[#D4AF37]/50"
                  }`}
                >
                  <div className="flex items-center gap-3">
                    <span
                      className="h-6 w-6 rounded-full border border-white/20 shadow-inner shrink-0"
                      style={{ backgroundColor: zari.colorCode }}
                    />
                    <div>
                      <h4 className="font-serif text-base font-semibold text-white">
                        {zari.name}
                      </h4>
                      <p className="text-[11px] text-[#D4AF37] font-medium">
                        {zari.metal}
                      </p>
                    </div>
                  </div>
                  {isSelected && <Check size={18} className="text-[#F3E5AB]" />}
                </button>
              );
            })}
          </div>

          {/* RIGHT: VIRTUAL METALLIC FABRIC VIEWPORT (8 COLS) */}
          <div className="lg:col-span-8">
            <div className="relative aspect-[16/10] w-full overflow-hidden rounded-2xl border-2 border-[#D4AF37]/50 shadow-2xl bg-[#1A1215]">
              {/* Fabric Image */}
              <Image
                src={selectedZari.image}
                alt={selectedZari.name}
                fill
                priority
                sizes="(max-width: 1024px) 100vw, 65vw"
                className={`object-cover transition-all duration-700 ${
                  lighting === "night" ? "brightness-90 contrast-110" : "brightness-105 contrast-100"
                }`}
              />

              {/* Dynamic Metallic Sweep Overlay */}
              <div
                className={`absolute inset-0 bg-gradient-to-r ${selectedZari.shineClass} mix-blend-color-dodge transition-opacity duration-1000 ${
                  lighting === "night" ? "opacity-60" : "opacity-40"
                }`}
              />

              {/* Top Authentic Certification Pill */}
              <div className="absolute top-4 left-4 z-10 flex items-center gap-2 rounded-full border border-[#D4AF37]/60 bg-[#120C0E]/90 px-4 py-1.5 backdrop-blur-md shadow-md">
                <ShieldCheck size={15} className="text-[#D4AF37]" />
                <span className="text-[10px] font-bold uppercase tracking-widest text-[#F3E5AB]">
                  Certified Pure Handloom Weave
                </span>
              </div>

              {/* Bottom Information Glass Box */}
              <div className="absolute bottom-6 left-6 right-6 z-10 rounded-xl border border-[#D4AF37]/40 bg-[#120C0E]/85 p-5 backdrop-blur-md">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-bold uppercase tracking-widest text-[#D4AF37]">
                    {selectedZari.metal} Specification
                  </span>
                  <span className="text-[10px] text-[#F3E5AB]">
                    Lighting: {lighting === "night" ? "Palace Candlelight ✦" : "Courtyard Sunlight ☀"}
                  </span>
                </div>
                <p className="mt-2 text-xs text-[#CDBDB2] leading-relaxed">
                  {selectedZari.description}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
