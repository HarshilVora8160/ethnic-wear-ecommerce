"use client";

import React from "react";
import Link from "next/link";
import { useUI } from "@/lib/context/UIContext";
import { products } from "@/lib/products";
import ProductCard from "@/components/products/ProductCard";
import SectionHeading from "@/components/ui/SectionHeading";

export default function WishlistPage() {
  const { wishlist } = useUI();

  const savedProducts = products.filter((p) => wishlist.includes(p.id));

  return (
    <div className="bg-[#FAF6F0] min-h-screen py-16 px-4 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <SectionHeading
          subtitle="Saved Couture"
          title="Your Wishlist Favorites"
          description="Keep track of your favorite Banarasi sarees, bridal lehengas, and festive ensembles."
        />

        {savedProducts.length === 0 ? (
          <div className="mt-8 border border-[#E6DED6] bg-white p-12 text-center max-w-lg mx-auto shadow-xs">
            <div className="flex h-16 w-16 items-center justify-center rounded-full bg-[#FAF6F0] text-3xl mx-auto text-[#D4AF37]">
              ♥
            </div>
            <h3 className="mt-4 font-serif text-2xl text-[#2A0812]">Your Wishlist is Empty</h3>
            <p className="mt-2 text-xs text-[#786C68]">
              Click the heart icon on any garment to save it to your personal wishlist.
            </p>
            <Link
              href="/sarees"
              className="mt-6 inline-block bg-[#2A0812] px-8 py-3 text-xs font-bold uppercase tracking-widest text-[#F3E5AB] hover:bg-[#4A1525]"
            >
              Discover Saree Collection
            </Link>
          </div>
        ) : (
          <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {savedProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
