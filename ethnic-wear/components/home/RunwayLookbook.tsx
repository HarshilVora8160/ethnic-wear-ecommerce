"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Sparkles, ShoppingBag, ArrowRight, Eye, Check } from "lucide-react";
import { useUI } from "@/lib/context/UIContext";
import { getProductBySlug } from "@/lib/products";

type Hotspot = {
  id: string;
  x: number; // percentage
  y: number; // percentage
  title: string;
  category: string;
  price: number;
  productSlug: string;
  image: string;
  badge: string;
};

const hotspots: Hotspot[] = [
  {
    id: "saree-pallu",
    x: 48,
    y: 42,
    title: "Royal Crimson Banarasi Silk Saree",
    category: "Heritage Sarees",
    price: 6899,
    productSlug: "royal-crimson-banarasi-saree",
    image: "https://images.unsplash.com/photo-1610030469983-98e550d6193c?auto=format&fit=crop&w=600&q=80",
    badge: "24k Gold Zari",
  },
  {
    id: "zardozi-lehenga",
    x: 62,
    y: 68,
    title: "Imperial Velvet Zardozi Bridal Lehenga",
    category: "Bridal Couture",
    price: 18999,
    productSlug: "imperial-velvet-zardozi-bridal-lehenga",
    image: "https://images.unsplash.com/photo-1583391733956-3750e0ff4e8b?auto=format&fit=crop&w=600&q=80",
    badge: "Hand Embroidered",
  },
  {
    id: "groom-sherwani",
    x: 28,
    y: 35,
    title: "Imperial Raw Silk Groom Sherwani",
    category: "Groom Menswear",
    price: 12999,
    productSlug: "royal-groom-sherwani-set",
    image: "https://images.unsplash.com/photo-1597983073493-88cd35cf93b0?auto=format&fit=crop&w=600&q=80",
    badge: "Royal Groom",
  },
];

export default function RunwayLookbook() {
  const [activeHotspot, setActiveHotspot] = useState<Hotspot>(hotspots[0]);
  const { addToCart, setQuickViewProduct } = useUI();

  const activeProduct = getProductBySlug(activeHotspot.productSlug);

  return (
    <section className="relative bg-[#120C0E] py-20 lg:py-28 overflow-hidden text-white border-b border-[#D4AF37]/30">
      {/* Background Radial Lights */}
      <div className="absolute top-0 right-0 h-[600px] w-[600px] rounded-full bg-[#D4AF37]/10 blur-[120px] pointer-events-none" />
      <div className="absolute bottom-0 left-0 h-[500px] w-[500px] rounded-full bg-[#2A0812] blur-[100px] pointer-events-none" />

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 rounded-full border border-[#D4AF37]/40 bg-[#2A0812]/80 px-4 py-1.5 backdrop-blur-md mb-3">
            <Sparkles size={14} className="text-[#F3E5AB] animate-pulse" />
            <span className="text-[10px] font-bold uppercase tracking-[0.3em] text-[#F3E5AB]">
              Interactive Runway Lookbook
            </span>
          </div>

          <h2 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-normal text-white leading-tight">
            Shop The <span className="text-gold-gradient italic">Runway 2026</span>
          </h2>

          <p className="mt-4 text-xs sm:text-sm text-[#CDBDB2] leading-relaxed">
            Click on the glowing gold markers on our court models to discover & instantly shop individual couture creations.
          </p>
        </div>

        {/* Main Stage Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          {/* LEFT: INTERACTIVE IMAGE WITH HOTSPOTS (7 COLS) */}
          <div className="lg:col-span-7">
            <div className="relative aspect-[4/5] w-full overflow-hidden rounded-2xl border-2 border-[#D4AF37]/40 shadow-2xl bg-[#1A1215] group">
              <Image
                src="https://images.unsplash.com/photo-1610030469983-98e550d6193c?auto=format&fit=crop&w=1400&q=80"
                alt="AAVIRÁ Haute Couture Runway Showcase"
                fill
                priority
                sizes="(max-width: 1024px) 100vw, 60vw"
                className="object-cover object-center transition-transform duration-1000 group-hover:scale-105"
              />

              {/* Gradient Scrim */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#120C0E]/90 via-transparent to-transparent pointer-events-none" />

              {/* Hotspot Markers */}
              {hotspots.map((spot) => {
                const isActive = activeHotspot.id === spot.id;
                return (
                  <button
                    key={spot.id}
                    type="button"
                    onClick={() => setActiveHotspot(spot)}
                    style={{ left: `${spot.x}%`, top: `${spot.y}%` }}
                    className={`absolute -translate-x-1/2 -translate-y-1/2 z-20 flex h-10 w-10 items-center justify-center rounded-full transition-all duration-300 ${
                      isActive
                        ? "scale-125 bg-[#D4AF37] text-[#120C0E] shadow-[0_0_25px_rgba(212,175,55,0.9)] ring-4 ring-[#F3E5AB]/60"
                        : "bg-[#120C0E]/80 text-[#F3E5AB] border border-[#D4AF37] hover:scale-110 hover:bg-[#D4AF37] hover:text-[#120C0E]"
                    }`}
                    aria-label={`View ${spot.title}`}
                  >
                    <span className="relative flex h-3 w-3">
                      <span
                        className={`absolute inline-flex h-full w-full rounded-full opacity-75 animate-ping ${
                          isActive ? "bg-[#120C0E]" : "bg-[#D4AF37]"
                        }`}
                      />
                      <span
                        className={`relative inline-flex h-3 w-3 rounded-full ${
                          isActive ? "bg-[#120C0E]" : "bg-[#F3E5AB]"
                        }`}
                      />
                    </span>
                  </button>
                );
              })}

              {/* Bottom Tag */}
              <div className="absolute bottom-6 left-6 z-10 rounded-md border border-[#D4AF37]/40 bg-[#120C0E]/85 p-3 backdrop-blur-md">
                <span className="text-[10px] font-bold uppercase tracking-widest text-[#F3E5AB] block">
                  Haute Couture Runway Presentation
                </span>
                <span className="text-xs text-[#CDBDB2]">
                  Select glowing gold pins to inspect outfit pieces
                </span>
              </div>
            </div>
          </div>

          {/* RIGHT: DYNAMIC HOTSPOT PRODUCT CARD (5 COLS) */}
          <div className="lg:col-span-5">
            <div className="relative overflow-hidden rounded-2xl border border-[#D4AF37]/50 bg-gradient-to-b from-[#1E1418] to-[#120C0E] p-6 sm:p-8 shadow-2xl backdrop-blur-xl">
              {/* Top Category Badge */}
              <div className="flex items-center justify-between mb-4">
                <span className="text-[10px] font-bold uppercase tracking-[0.25em] text-[#D4AF37]">
                  {activeHotspot.category}
                </span>
                <span className="rounded-full bg-[#2A0812] px-3 py-1 text-[10px] font-bold uppercase tracking-wider text-[#F3E5AB] border border-[#D4AF37]/30">
                  {activeHotspot.badge}
                </span>
              </div>

              {/* Product Thumbnail & Details */}
              <div className="relative aspect-[4/3] w-full overflow-hidden rounded-xl border border-[#D4AF37]/30 mb-6 bg-[#1A1215]">
                <Image
                  src={activeHotspot.image}
                  alt={activeHotspot.title}
                  fill
                  sizes="400px"
                  className="object-cover transition-transform duration-700 hover:scale-105"
                />
              </div>

              <h3 className="font-serif text-2xl sm:text-3xl font-medium text-[#F3E5AB]">
                {activeHotspot.title}
              </h3>

              <div className="mt-3 flex items-baseline gap-3">
                <span className="font-serif text-2xl font-bold text-white">
                  ₹{activeHotspot.price.toLocaleString("en-IN")}
                </span>
                <span className="text-xs text-emerald-400 font-semibold flex items-center gap-1">
                  <Check size={12} />
                  Ready to Ship
                </span>
              </div>

              <p className="mt-3 text-xs leading-relaxed text-[#CDBDB2]">
                Crafted by senior weavers using 100% certified pure silk and antique handwork. Custom sizing and blouse tailoring available.
              </p>

              {/* Action Buttons */}
              <div className="mt-8 grid grid-cols-2 gap-3">
                {activeProduct && (
                  <button
                    type="button"
                    onClick={() => setQuickViewProduct(activeProduct)}
                    className="flex h-12 items-center justify-center gap-2 rounded-md border border-[#D4AF37]/50 bg-transparent text-xs font-bold uppercase tracking-widest text-[#F3E5AB] hover:bg-[#D4AF37]/20 transition"
                  >
                    <Eye size={16} />
                    Quick View
                  </button>
                )}

                <button
                  type="button"
                  onClick={() => {
                    if (activeProduct) {
                      addToCart(activeProduct);
                    }
                  }}
                  className={`flex h-12 items-center justify-center gap-2 rounded-md bg-gradient-to-r from-[#D4AF37] via-[#F3E5AB] to-[#B38F24] text-xs font-bold uppercase tracking-widest text-[#120C0E] shadow-md hover:brightness-110 active:scale-95 transition ${
                    !activeProduct ? "col-span-2" : ""
                  }`}
                >
                  <ShoppingBag size={16} />
                  Add To Bag
                </button>
              </div>

              <div className="mt-6 border-t border-[#3A2A2F] pt-4 text-center">
                <Link
                  href={`/products/${activeHotspot.productSlug}`}
                  className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-[#D4AF37] hover:text-white transition"
                >
                  View Full Product Details
                  <ArrowRight size={14} />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
