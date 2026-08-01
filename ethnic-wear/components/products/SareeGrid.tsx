import React from "react";
import ProductCard from "./ProductCard";
import type { Saree } from "@/lib/sarees";

interface SareeGridProps {
  sarees: Saree[];
}

export default function SareeGrid({ sarees }: SareeGridProps) {
  if (!sarees || sarees.length === 0) {
    return (
      <div className="flex min-h-[300px] items-center justify-center">
        <div className="text-center">
          <h3 className="font-serif text-2xl text-[#2c1913]">
            No Sarees Found
          </h3>
          <p className="mt-2 text-sm text-[#796a61]">
            We couldn&apos;t find any sarees in this collection.
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
      {sarees.map((saree) => (
        <ProductCard key={saree.id} product={saree} />
      ))}
    </div>
  );
}