import React from "react";
import Link from "next/link";
import SectionHeading from "@/components/ui/SectionHeading";
import ProductCard from "@/components/products/ProductCard";
import { products } from "@/lib/products";

export default function FeaturedCollection() {
  const featured = products.slice(0, 3);

  return (
    <section className="bg-[#FAF6F0] px-4 py-20 sm:px-6 lg:px-8 lg:py-28 border-b border-[#E6DED6]">
      <div className="mx-auto max-w-7xl">
        <SectionHeading
          subtitle="Handpicked Masterpieces"
          title="Featured Royal Collection"
          description="A curated selection of our finest Zardozi bridal lehengas, pure Banarasi silk drapes, and bespoke menswear ensembles."
        />

        <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {featured.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>

        <div className="mt-14 text-center">
          <Link
            href="/sarees"
            className="inline-flex items-center justify-center border-2 border-[#2A0812] bg-white px-9 py-3.5 text-xs font-bold uppercase tracking-[0.2em] text-[#2A0812] transition hover:bg-[#2A0812] hover:text-[#F3E5AB]"
          >
            View Entire Couture Line
          </Link>
        </div>
      </div>
    </section>
  );
}