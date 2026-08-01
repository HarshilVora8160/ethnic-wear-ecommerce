"use client";

import React, { useState } from "react";
import Image from "next/image";
import ProductCard from "@/components/products/ProductCard";
import SectionHeading from "@/components/ui/SectionHeading";
import { Product } from "@/lib/products";

type CategoryPageLayoutProps = {
  title: string;
  subtitle: string;
  description: string;
  bannerImage: string;
  products: Product[];
};

export default function CategoryPageLayout({
  title,
  subtitle,
  description,
  bannerImage,
  products,
}: CategoryPageLayoutProps) {
  const [selectedFabric, setSelectedFabric] = useState("All");
  const [sortBy, setSortBy] = useState("featured");
  const [isFilterDrawerOpen, setIsFilterDrawerOpen] = useState(false);

  // Extract unique fabrics
  const fabrics = ["All", ...Array.from(new Set(products.map((p) => p.fabric).filter(Boolean)))];

  // Filter
  let filtered = selectedFabric === "All"
    ? products
    : products.filter((p) => p.fabric === selectedFabric);

  // Sort
  if (sortBy === "price-low") {
    filtered = [...filtered].sort((a, b) => a.price - b.price);
  } else if (sortBy === "price-high") {
    filtered = [...filtered].sort((a, b) => b.price - a.price);
  }

  return (
    <div className="bg-[#FAF6F0] min-h-screen">
      {/* Category Banner with Textile Market Metallic Silk Gradient */}
      <div className="relative h-64 sm:h-80 w-full overflow-hidden bg-gradient-to-r from-[#2D0312] via-[#4A0C22] to-[#1F020B] border-b-2 border-[#D4AF37]/40 shadow-xl">
        <Image
          src={bannerImage}
          alt={title}
          fill
          priority
          className="object-cover opacity-35 mix-blend-overlay filter brightness-95"
        />
        {/* Radial Gold Silk Spotlight Overlay */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-[#D4AF37]/30 via-[#3D091B]/85 to-[#120C0E]/95" />
        
        {/* Metallic Gold Thread Line at Bottom */}
        <div className="absolute bottom-0 inset-x-0 h-[2px] bg-gradient-to-r from-transparent via-[#D4AF37] to-transparent" />

        <div className="relative z-10 mx-auto flex h-full max-w-7xl flex-col items-center justify-center px-4 text-center">
          <span className="text-[11px] font-bold uppercase tracking-[0.3em] text-[#F3E5AB] drop-shadow-sm">
            ✦ {subtitle} ✦
          </span>
          <h1 className="mt-2 font-serif text-4xl sm:text-5xl lg:text-6xl text-gold-gradient font-normal tracking-wide drop-shadow-lg">
            {title}
          </h1>
          <p className="mt-3 max-w-lg text-xs sm:text-sm text-[#F0E7DB] leading-relaxed font-medium">
            {description}
          </p>
        </div>
      </div>

      {/* Main Content Container */}
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12">
        {/* Toolbar & Filters */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between border-y border-[#E6DED6] py-4 gap-4 mb-8">
          <div className="flex items-center gap-3">
            <button
              onClick={() => setIsFilterDrawerOpen(!isFilterDrawerOpen)}
              className="flex items-center gap-2 border border-[#2A0812] bg-white px-4 py-2 text-xs font-semibold uppercase tracking-wider text-[#2A0812] hover:bg-[#2A0812] hover:text-[#F3E5AB] transition"
            >
              <span>⚙ Filters</span>
              {selectedFabric !== "All" && (
                <span className="flex h-4 w-4 items-center justify-center rounded-full bg-[#D4AF37] text-[10px] text-[#2A0812]">
                  1
                </span>
              )}
            </button>

            {/* Quick Fabric Chips */}
            <div className="hidden md:flex gap-2 overflow-x-auto">
              {fabrics.map((fab) => (
                <button
                  key={fab}
                  onClick={() => setSelectedFabric(fab)}
                  className={`px-3 py-1.5 text-xs border transition ${
                    selectedFabric === fab
                      ? "border-[#2A0812] bg-[#2A0812] text-[#F3E5AB]"
                      : "border-[#E6DED6] bg-white text-[#2A0812] hover:border-[#D4AF37]"
                  }`}
                >
                  {fab}
                </button>
              ))}
            </div>
          </div>

          {/* Right Controls */}
          <div className="flex items-center justify-between sm:justify-end gap-4 text-xs">
            <span className="text-[#786C68]">Showing {filtered.length} Items</span>
            <div className="flex items-center gap-2">
              <label htmlFor="sort-select" className="text-[#786C68] font-medium">Sort By:</label>
              <select
                id="sort-select"
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                className="border border-[#E6DED6] bg-white px-3 py-2 text-xs text-[#2A0812] focus:border-[#D4AF37] focus:outline-none"
              >
                <option value="featured">Featured</option>
                <option value="price-low">Price: Low to High</option>
                <option value="price-high">Price: High to Low</option>
              </select>
            </div>
          </div>
        </div>

        {/* Mobile Filter Drawer */}
        {isFilterDrawerOpen && (
          <div className="mb-8 border border-[#D4AF37]/40 bg-white p-6 shadow-lg animate-in fade-in">
            <div className="flex justify-between items-center border-b border-[#E6DED6] pb-3 mb-4">
              <h3 className="font-serif text-sm font-bold uppercase tracking-wider text-[#2A0812]">
                Filter by Fabric
              </h3>
              <button
                onClick={() => setIsFilterDrawerOpen(false)}
                className="text-xs text-[#786C68] hover:text-[#2A0812]"
              >
                ✕ Close
              </button>
            </div>
            <div className="flex flex-wrap gap-2">
              {fabrics.map((fab) => (
                <button
                  key={fab}
                  onClick={() => {
                    setSelectedFabric(fab);
                    setIsFilterDrawerOpen(false);
                  }}
                  className={`px-4 py-2 text-xs border transition ${
                    selectedFabric === fab
                      ? "border-[#2A0812] bg-[#2A0812] text-[#F3E5AB]"
                      : "border-[#E6DED6] bg-white text-[#2A0812] hover:border-[#D4AF37]"
                  }`}
                >
                  {fab}
                </button>
              ))}
            </div>
          </div>
        )}

        {/* Product Grid */}
        {filtered.length === 0 ? (
          <div className="text-center py-20 bg-white border border-[#E6DED6] p-8">
            <h3 className="font-serif text-xl text-[#2A0812]">No garments match your filter</h3>
            <p className="text-xs text-[#786C68] mt-2">Try clearing your fabric filter or selecting another option.</p>
            <button
              onClick={() => setSelectedFabric("All")}
              className="mt-4 bg-[#2A0812] px-6 py-2.5 text-xs text-[#F3E5AB] uppercase tracking-wider"
            >
              Reset Filters
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {filtered.map((item) => (
              <ProductCard key={item.id} product={item} />
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
