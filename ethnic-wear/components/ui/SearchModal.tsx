"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { useUI } from "@/lib/context/UIContext";
import { products, Product } from "@/lib/products";

export default function SearchModal() {
  const { isSearchOpen, setIsSearchOpen, setQuickViewProduct } = useUI();
  const [query, setQuery] = useState("");

  if (!isSearchOpen) return null;

  const popularTags = [
    "Banarasi Silk",
    "Bridal Lehenga",
    "Organza Saree",
    "Embroidered Kurti",
    "Zardozi",
    "Pastel Pink",
    "Sherwani",
  ];

  const filteredProducts: Product[] = query.trim() === ""
    ? []
    : products.filter(
        (p) =>
          p.name.toLowerCase().includes(query.toLowerCase()) ||
          p.category.toLowerCase().includes(query.toLowerCase()) ||
          p.fabric.toLowerCase().includes(query.toLowerCase()) ||
          p.color.toLowerCase().includes(query.toLowerCase())
      );

  return (
    <div className="fixed inset-0 z-[100] flex items-start justify-center pt-16 sm:pt-24 px-4">
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-black/75 backdrop-blur-xs transition-opacity"
        onClick={() => setIsSearchOpen(false)}
      />

      {/* Search Card */}
      <div className="relative z-10 w-full max-w-3xl overflow-hidden bg-[#FAF6F0] shadow-2xl border border-[#D4AF37]/40 p-6 sm:p-8">
        {/* Search Bar Input */}
        <div className="relative flex items-center border-b-2 border-[#2A0812] pb-2">
          <svg className="h-6 w-6 text-[#9A7653] mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <circle cx="11" cy="11" r="7" strokeWidth="1.8" />
            <path strokeLinecap="round" strokeWidth="1.8" d="m20 20-4-4" />
          </svg>
          <input
            type="text"
            placeholder="Search luxury sarees, bridal lehengas, kurtis, silk..."
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            autoFocus
            className="w-full bg-transparent font-serif text-lg sm:text-xl text-[#2A0812] placeholder:text-[#786C68] focus:outline-none"
          />
          <button
            onClick={() => setIsSearchOpen(false)}
            className="text-xs uppercase tracking-widest text-[#2A0812] hover:text-[#9A7653] ml-2 font-semibold"
          >
            ESC
          </button>
        </div>

        {/* Popular Trending Suggestions */}
        {query.trim() === "" && (
          <div className="mt-6">
            <h4 className="text-xs font-semibold uppercase tracking-widest text-[#9A7653]">
              Popular Search Topics
            </h4>
            <div className="mt-3 flex flex-wrap gap-2">
              {popularTags.map((tag) => (
                <button
                  key={tag}
                  onClick={() => setQuery(tag)}
                  className="border border-[#E6DED6] bg-white px-3 py-1.5 text-xs text-[#2A0812] transition hover:border-[#D4AF37] hover:bg-[#F0E7DB]"
                >
                  {tag}
                </button>
              ))}
            </div>
          </div>
        )}

        {/* Search Results List */}
        {query.trim() !== "" && (
          <div className="mt-6 max-h-96 overflow-y-auto space-y-3 pr-2">
            {filteredProducts.length === 0 ? (
              <p className="text-center py-8 text-sm text-[#786C68]">
                No couture pieces found matching &ldquo;{query}&rdquo;. Try another term like &ldquo;Saree&rdquo; or &ldquo;Silk&rdquo;.
              </p>
            ) : (
              filteredProducts.map((item) => (
                <div
                  key={item.id}
                  className="flex items-center justify-between border border-[#E6DED6] bg-white p-3 hover:border-[#D4AF37] transition"
                >
                  <div className="flex items-center gap-4">
                    <div className="relative h-14 w-12 bg-[#F0E7DB] shrink-0">
                      <Image src={item.image} alt={item.name} fill className="object-cover" />
                    </div>
                    <div>
                      <h5 className="font-serif text-sm font-medium text-[#2A0812]">{item.name}</h5>
                      <p className="text-xs text-[#9A7653]">{item.category} &bull; {item.fabric}</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <span className="font-serif text-sm font-semibold text-[#2A0812]">
                      ₹{item.price.toLocaleString("en-IN")}
                    </span>
                    <button
                      onClick={() => {
                        setIsSearchOpen(false);
                        setQuickViewProduct(item);
                      }}
                      className="bg-[#2A0812] px-3 py-1.5 text-[10px] uppercase tracking-wider text-[#F3E5AB] hover:bg-[#4A1525]"
                    >
                      Quick View
                    </button>
                  </div>
                </div>
              ))
            )}
          </div>
        )}
      </div>
    </div>
  );
}
