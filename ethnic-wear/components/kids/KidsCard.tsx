"use client";

import Link from "next/link";
import {
  Heart,
  ShoppingBag,
  Eye,
  Star,
} from "lucide-react";
import { useState } from "react";

import type { KidsProduct } from "@/lib/kids";

interface Props {
  product: KidsProduct;
}

export default function KidsCard({ product }: Props) {
  const [wishlist, setWishlist] = useState(false);

  const discount = product.oldPrice
    ? Math.round(
        ((product.oldPrice - product.price) /
          product.oldPrice) *
          100
      )
    : 0;

  return (
    <article className="group">

      <div className="relative aspect-[3/4] overflow-hidden bg-[#eee5dc]">

        <Link
          href={`/kids/${product.slug}`}
          className="block h-full"
        >
          <img
            src={product.image}
            alt={product.name}
            className="h-full w-full object-cover transition duration-700 group-hover:scale-105"
          />
        </Link>

        {product.badge && (
          <span className="absolute left-3 top-3 bg-[#2c1913] px-3 py-1.5 text-[10px] uppercase tracking-[0.18em] text-[#f6df91]">
            {product.badge}
          </span>
        )}

        <button
          type="button"
          onClick={() => setWishlist(!wishlist)}
          className="absolute right-3 top-3 flex h-10 w-10 items-center justify-center rounded-full bg-white"
          aria-label="Wishlist"
        >
          <Heart
            size={17}
            className={
              wishlist
                ? "fill-red-600 text-red-600"
                : "text-[#2c1913]"
            }
          />
        </button>

        <div className="absolute bottom-0 left-0 right-0 translate-y-full bg-[#2c1913]/95 p-3 transition group-hover:translate-y-0">

          <div className="flex gap-2">

            <Link
              href={`/kids/${product.slug}`}
              className="flex flex-1 items-center justify-center gap-2 bg-[#d4af37] py-3 text-xs font-semibold uppercase"
            >
              <Eye size={15} />
              View
            </Link>

            <button
              type="button"
              className="flex h-11 w-11 items-center justify-center border border-[#d4af37] text-[#d4af37]"
            >
              <ShoppingBag size={17} />
            </button>

          </div>

        </div>
      </div>

      <div className="pt-4">

        <p className="text-[10px] uppercase tracking-[0.2em] text-[#a1812d]">
          {product.category}
        </p>

        <Link href={`/kids/${product.slug}`}>
          <h3 className="mt-1.5 line-clamp-1 font-serif text-lg text-[#2c1913]">
            {product.name}
          </h3>
        </Link>

        <div className="mt-2 flex items-center gap-1">

          {[1, 2, 3, 4, 5].map((star) => (
            <Star
              key={star}
              size={12}
              className="fill-[#d4af37] text-[#d4af37]"
            />
          ))}

          <span className="ml-1 text-[11px] text-[#8d7c72]">
            ({product.reviews})
          </span>

        </div>

        <div className="mt-2 flex flex-wrap items-center gap-2">

          <span className="font-semibold">
            ₹{product.price.toLocaleString("en-IN")}
          </span>

          {product.oldPrice && (
            <>
              <span className="text-sm text-[#a69a91] line-through">
                ₹{product.oldPrice.toLocaleString("en-IN")}
              </span>

              <span className="text-xs text-red-700">
                {discount}% OFF
              </span>
            </>
          )}

        </div>

        <div className="mt-3 flex items-center gap-2">

          <span
            className="h-3 w-3 rounded-full border"
            style={{
              backgroundColor: product.colorCode,
            }}
          />

          <span className="text-xs text-[#8c7b71]">
            {product.color}
          </span>

        </div>

      </div>
    </article>
  );
}