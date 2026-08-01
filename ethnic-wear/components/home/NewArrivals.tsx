"use client";

import React, { useState } from "react";
import Link from "next/link";
import SectionHeading from "@/components/ui/SectionHeading";
import ProductCard from "@/components/products/ProductCard";
import { products as allProducts } from "@/lib/products";

export default function NewArrivals() {
  const [activeTab, setActiveTab] = useState("All");

  const tabs = ["All", "Sarees", "Lehengas", "Kurtis", "Men"];

  const filteredProducts = activeTab === "All"
    ? allProducts
    : allProducts.filter((p) => p.category === activeTab);

  return (
    <section className="bg-[#FAF6F0] px-4 py-20 sm:px-6 lg:px-8 lg:py-28 border-b border-[#E6DED6]">
      <div className="mx-auto max-w-7xl">
        <SectionHeading
          subtitle="Just Arrived Couture"
          title="The New Heritage Drop"
          description="Fresh expressions of royal Indian artistry, handcrafted for upcoming weddings and festive celebrations."
        />

        {/* Tab Filters */}
        <div className="mt-8 flex justify-center gap-2 sm:gap-4 overflow-x-auto pb-4">
          {tabs.map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`px-5 py-2 text-xs font-semibold uppercase tracking-wider transition ${
                activeTab === tab
                  ? "bg-[#2A0812] text-[#F3E5AB] border border-[#2A0812] shadow-sm"
                  : "bg-white text-[#2A0812] border border-[#E6DED6] hover:border-[#D4AF37]"
              }`}
            >
              {tab}
            </button>
          ))}
        </div>

        {/* Product Grid */}
        <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>

        <div className="mt-14 text-center">
          <Link
            href="/new-arrivals"
            className="inline-flex items-center gap-3 bg-gradient-to-r from-[#D4AF37] via-[#F3E5AB] to-[#B38F24] px-10 py-4 text-xs font-bold uppercase tracking-[0.2em] text-[#2A0812] shadow-md transition hover:brightness-105"
          >
            <span>Explore All New Arrivals</span>
            <span>&rarr;</span>
          </Link>
        </div>
      </div>
    </section>
  );
}