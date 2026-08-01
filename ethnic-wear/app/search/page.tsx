"use client";

import React, { useState } from "react";
import ProductCard from "@/components/products/ProductCard";
import SectionHeading from "@/components/ui/SectionHeading";
import { products } from "@/lib/products";

export default function SearchPage() {
  const [query, setQuery] = useState("");

  const filtered = query.trim() === ""
    ? products
    : products.filter(
        (p) =>
          p.name.toLowerCase().includes(query.toLowerCase()) ||
          p.category.toLowerCase().includes(query.toLowerCase()) ||
          p.fabric.toLowerCase().includes(query.toLowerCase())
      );

  return (
    <div className="bg-[#FAF6F0] min-h-screen py-16 px-4 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <SectionHeading
          subtitle="Search Couture"
          title="Find Your Perfect Ensemble"
          description="Search across Banarasi silk sarees, bridal lehengas, kurtis, and royal menswear."
        />

        <div className="mx-auto max-w-2xl mb-12">
          <div className="relative flex items-center border-b-2 border-[#2A0812]">
            <input
              type="text"
              placeholder="Type to search (e.g. Saree, Silk, Velvet, Red)..."
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              className="w-full bg-transparent font-serif text-xl text-[#2A0812] placeholder:text-[#786C68] py-3 focus:outline-none"
            />
            {query && (
              <button
                onClick={() => setQuery("")}
                className="text-xs text-[#786C68] hover:text-[#2A0812]"
              >
                Clear
              </button>
            )}
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filtered.map((item) => (
            <ProductCard key={item.id} product={item} />
          ))}
        </div>
      </div>
    </div>
  );
}
