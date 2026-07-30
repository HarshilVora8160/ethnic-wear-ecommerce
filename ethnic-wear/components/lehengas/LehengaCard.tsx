"use client";

import Link from "next/link";
import { Heart, ShoppingBag, Eye, Star } from "lucide-react";
import { useState } from "react";

import type { Lehenga } from "@/lib/lehengas";

interface LehengaCardProps {
  lehenga: Lehenga;
}

export default function LehengaCard({
  lehenga,
}: LehengaCardProps) {
  const [wishlist, setWishlist] = useState(false);

  const discount = lehenga.oldPrice
    ? Math.round(
        ((lehenga.oldPrice - lehenga.price) /
          lehenga.oldPrice) *
          100
      )
    : 0;

  return (
    <article className="group">

      {/* Image */}
      <div className="relative aspect-[3/4] overflow-hidden bg-[#eee5dc]">

        <Link
          href={`/lehengas/${lehenga.slug}`}
          className="block h-full w-full"
        >
          <img
            src={lehenga.image}
            alt={lehenga.name}
            className="h-full w-full object-cover transition duration-700 ease-out group-hover:scale-105"
          />
        </Link>

        {/* Badge */}
        {lehenga.badge && (
          <span className="absolute left-3 top-3 bg-[#2c1913] px-3 py-1.5 text-[10px] font-semibold uppercase tracking-[0.18em] text-[#f6df91]">
            {lehenga.badge}
          </span>
        )}

        {/* Wishlist */}
        <button
          type="button"
          onClick={() =>
            setWishlist((value) => !value)
          }
          aria-label={
            wishlist
              ? "Remove from wishlist"
              : "Add to wishlist"
          }
          className="absolute right-3 top-3 flex h-10 w-10 items-center justify-center rounded-full bg-white/95 shadow-sm transition hover:scale-105"
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

        {/* Hover Action */}
        <div className="absolute bottom-0 left-0 right-0 translate-y-full bg-[#2c1913]/95 p-3 transition duration-300 group-hover:translate-y-0">

          <div className="flex gap-2">

            <Link
              href={`/lehengas/${lehenga.slug}`}
              className="flex flex-1 items-center justify-center gap-2 bg-[#d4af37] py-3 text-xs font-semibold uppercase tracking-wider text-[#2c1913]"
            >
              <Eye size={15} />
              View
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

      {/* Information */}
      <div className="pt-4">

        <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-[#a1812d]">
          {lehenga.category}
        </p>

        <Link href={`/lehengas/${lehenga.slug}`}>
          <h3 className="mt-1.5 line-clamp-1 font-serif text-lg text-[#2c1913] transition hover:text-[#a1812d]">
            {lehenga.name}
          </h3>
        </Link>

        {/* Rating */}
        <div className="mt-2 flex items-center gap-1.5">

          <div className="flex">
            {[1, 2, 3, 4, 5].map((star) => (
              <Star
                key={star}
                size={12}
                className="fill-[#d4af37] text-[#d4af37]"
              />
            ))}
          </div>

          <span className="text-[11px] text-[#8d7c72]">
            ({lehenga.reviews})
          </span>

        </div>

        {/* Price */}
        <div className="mt-2 flex flex-wrap items-center gap-2">

          <span className="font-semibold text-[#2c1913]">
            ₹{lehenga.price.toLocaleString("en-IN")}
          </span>

          {lehenga.oldPrice && (
            <>
              <span className="text-sm text-[#a69a91] line-through">
                ₹{lehenga.oldPrice.toLocaleString("en-IN")}
              </span>

              <span className="text-xs font-medium text-red-700">
                {discount}% OFF
              </span>
            </>
          )}

        </div>

        {/* Color */}
        <div className="mt-3 flex items-center gap-2">

          <span
            className="h-3 w-3 rounded-full border border-black/10"
            style={{
              backgroundColor: lehenga.colorCode,
            }}
          />

          <span className="text-xs text-[#8c7b71]">
            {lehenga.color}
          </span>

        </div>

      </div>
    </article>
  );
}