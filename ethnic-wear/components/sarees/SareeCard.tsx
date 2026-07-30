"use client";

import Link from "next/link";
import { Heart, Eye, ShoppingBag } from "lucide-react";
import { useState } from "react";

import type { Saree } from "@/lib/sarees";

interface SareeCardProps {
  saree: Saree;
}

export default function SareeCard({
  saree,
}: SareeCardProps) {
  const [wishlist, setWishlist] = useState(false);

  const discount = saree.oldPrice
    ? Math.round(
        ((saree.oldPrice - saree.price) /
          saree.oldPrice) *
          100
      )
    : 0;

  return (
    <article className="group">

      {/* Image */}
      <div className="relative aspect-[3/4] overflow-hidden bg-[#eee5dc]">

        <Link href={`/sarees/${saree.slug}`}>
          <img
            src={saree.image}
            alt={saree.name}
            className="h-full w-full object-cover transition duration-700 group-hover:scale-105"
          />
        </Link>

        {/* Badge */}
        {saree.badge && (
          <span className="absolute left-3 top-3 bg-[#2c1913] px-3 py-1.5 text-[10px] font-semibold uppercase tracking-[0.15em] text-[#f6df91]">
            {saree.badge}
          </span>
        )}

        {/* Wishlist */}
        <button
          type="button"
          onClick={() => setWishlist(!wishlist)}
          aria-label="Add to wishlist"
          className="absolute right-3 top-3 flex h-9 w-9 items-center justify-center rounded-full bg-white/90 backdrop-blur-sm transition hover:bg-white"
        >
          <Heart
            size={17}
            className={
              wishlist
                ? "fill-red-700 text-red-700"
                : "text-[#4d3930]"
            }
          />
        </button>

        {/* Hover Actions */}
        <div className="absolute bottom-0 left-0 right-0 translate-y-full bg-[#2c1913]/95 p-3 transition duration-300 group-hover:translate-y-0">

          <div className="flex gap-2">

            <Link
              href={`/sarees/${saree.slug}`}
              className="flex flex-1 items-center justify-center gap-2 bg-[#d4af37] py-3 text-xs font-semibold uppercase tracking-wider text-[#2c1913]"
            >
              <Eye size={15} />
              View Saree
            </Link>

            <button
              type="button"
              aria-label="Add to cart"
              className="flex h-11 w-11 items-center justify-center border border-[#d4af37] text-[#d4af37] transition hover:bg-[#d4af37] hover:text-[#2c1913]"
            >
              <ShoppingBag size={17} />
            </button>

          </div>

        </div>

      </div>

      {/* Details */}
      <div className="pt-4">

        <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-[#a1812d]">
          {saree.category}
        </p>

        <Link href={`/sarees/${saree.slug}`}>
          <h3 className="mt-1.5 line-clamp-1 font-serif text-lg text-[#2c1913] transition hover:text-[#a17c1c]">
            {saree.name}
          </h3>
        </Link>

        {/* Price */}
        <div className="mt-2 flex flex-wrap items-center gap-2">

          <span className="font-semibold text-[#2c1913]">
            ₹{saree.price.toLocaleString("en-IN")}
          </span>

          {saree.oldPrice && (
            <>
              <span className="text-sm text-[#a69a91] line-through">
                ₹{saree.oldPrice.toLocaleString("en-IN")}
              </span>

              <span className="text-xs font-medium text-red-700">
                {discount}% OFF
              </span>
            </>
          )}

        </div>

        {/* Color */}
        <div className="mt-3 flex items-center gap-2">
          <span className="h-3 w-3 rounded-full bg-[#8a2635]" />

          <span className="text-xs text-[#8c7b71]">
            {saree.color}
          </span>
        </div>

      </div>

    </article>
  );
}