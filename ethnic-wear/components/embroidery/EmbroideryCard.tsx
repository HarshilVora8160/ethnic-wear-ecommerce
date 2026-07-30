"use client";

import Image from "next/image";
import Link from "next/link";
import { Heart, ArrowUpRight } from "lucide-react";
import { useState } from "react";

import type { Embroidery } from "@/lib/embroidery";

interface EmbroideryCardProps {
  embroidery: Embroidery;
}

export default function EmbroideryCard({
  embroidery,
}: EmbroideryCardProps) {
  const [wishlist, setWishlist] = useState(false);

  const discount = embroidery.originalPrice
    ? Math.round(
        ((embroidery.originalPrice - embroidery.price) /
          embroidery.originalPrice) *
          100
      )
    : 0;

  return (
    <article className="group">
      {/* Image */}
      <div className="relative overflow-hidden bg-[#f2ebe4]">
        <Link
          href={`/embroidery/${embroidery.slug}`}
          className="relative block aspect-[4/5]"
        >
          <Image
            src={embroidery.image}
            alt={embroidery.name}
            fill
            sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw"
            className="object-cover transition-transform duration-700 group-hover:scale-105"
          />
        </Link>

        {/* Badge */}
        <div className="absolute left-4 top-4 flex flex-col gap-2">
          {embroidery.newArrival && (
            <span className="bg-[#2c1913] px-3 py-1.5 text-[9px] uppercase tracking-[0.2em] text-white">
              New
            </span>
          )}

          {discount > 0 && (
            <span className="w-fit bg-white px-3 py-1.5 text-[9px] uppercase tracking-[0.15em]">
              {discount}% Off
            </span>
          )}
        </div>

        {/* Wishlist */}
        <button
          type="button"
          aria-label="Add to wishlist"
          onClick={() => setWishlist((value) => !value)}
          className="absolute right-4 top-4 flex h-10 w-10 items-center justify-center rounded-full bg-white shadow-sm transition hover:scale-105"
        >
          <Heart
            size={16}
            className={
              wishlist
                ? "fill-[#2c1913] text-[#2c1913]"
                : "text-[#2c1913]"
            }
          />
        </button>

        {/* View button */}
        <Link
          href={`/embroidery/${embroidery.slug}`}
          className="absolute bottom-4 right-4 flex h-11 w-11 translate-y-16 items-center justify-center rounded-full bg-[#2c1913] text-white opacity-0 transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100"
          aria-label={`View ${embroidery.name}`}
        >
          <ArrowUpRight size={18} />
        </Link>
      </div>

      {/* Content */}
      <div className="pt-4">
        <div className="flex items-start justify-between gap-4">
          <div className="min-w-0">
            <p className="text-[9px] uppercase tracking-[0.2em] text-[#a27b4d]">
              {embroidery.technique}
            </p>

            <h3 className="mt-1 truncate text-sm font-medium text-[#2c1913]">
              {embroidery.name}
            </h3>
          </div>

          <div className="shrink-0 text-right">
            <p className="text-sm font-semibold">
              ₹{embroidery.price.toLocaleString("en-IN")}
            </p>

            {embroidery.originalPrice && (
              <p className="text-xs text-gray-400 line-through">
                ₹
                {embroidery.originalPrice.toLocaleString(
                  "en-IN"
                )}
              </p>
            )}
          </div>
        </div>

        <div className="mt-3 flex items-center gap-2">
          <span className="border border-[#e0d4ca] px-2 py-1 text-[8px] uppercase tracking-wider text-gray-500">
            {embroidery.style}
          </span>

          <span className="border border-[#e0d4ca] px-2 py-1 text-[8px] uppercase tracking-wider text-gray-500">
            {embroidery.color}
          </span>
        </div>
      </div>
    </article>
  );
}