"use client";

import Image from "next/image";
import Link from "next/link";
import { Heart, Minus, Plus, ShoppingBag } from "lucide-react";
import { useState } from "react";

import type { Embroidery } from "@/lib/embroidery";

interface EmbroideryDetailsProps {
  embroidery: Embroidery;
}

export default function EmbroideryDetails({
  embroidery,
}: EmbroideryDetailsProps) {
  const [activeImage, setActiveImage] = useState(0);
  const [quantity, setQuantity] = useState(1);
  const [wishlist, setWishlist] = useState(false);

  return (
    <main className="min-h-screen bg-[#fffaf6] text-[#2c1913]">
      <div className="mx-auto max-w-[1440px] px-5 py-8 md:px-8 md:py-12">
        {/* Breadcrumb */}
        <div className="mb-8 flex flex-wrap gap-2 text-[9px] uppercase tracking-[0.2em] text-gray-400">
          <Link href="/" className="hover:text-black">
            Home
          </Link>

          <span>/</span>

          <Link
            href="/embroidery"
            className="hover:text-black"
          >
            Embroidery
          </Link>

          <span>/</span>

          <span>{embroidery.name}</span>
        </div>

        <div className="grid gap-10 lg:grid-cols-[1.1fr_0.9fr] xl:gap-20">
          {/* Gallery */}
          <div className="grid gap-4 md:grid-cols-[90px_1fr]">
            {/* Thumbnails */}
            <div className="order-2 flex gap-3 overflow-x-auto md:order-1 md:flex-col">
              {embroidery.images.map((image, index) => (
                <button
                  key={`${image}-${index}`}
                  type="button"
                  onClick={() => setActiveImage(index)}
                  className={`relative h-24 w-20 shrink-0 overflow-hidden border ${
                    activeImage === index
                      ? "border-[#2c1913]"
                      : "border-transparent opacity-60"
                  }`}
                >
                  <Image
                    src={image}
                    alt={`${embroidery.name} ${index + 1}`}
                    fill
                    sizes="80px"
                    className="object-cover"
                  />
                </button>
              ))}
            </div>

            {/* Main Image */}
            <div className="relative aspect-[4/5] overflow-hidden bg-[#f0e8df]">
              <Image
                src={embroidery.images[activeImage]}
                alt={embroidery.name}
                fill
                priority
                sizes="(max-width: 1024px) 100vw, 60vw"
                className="object-cover"
              />

              <button
                type="button"
                onClick={() =>
                  setWishlist((value) => !value)
                }
                className="absolute right-5 top-5 flex h-11 w-11 items-center justify-center rounded-full bg-white"
              >
                <Heart
                  size={17}
                  className={
                    wishlist
                      ? "fill-[#2c1913] text-[#2c1913]"
                      : ""
                  }
                />
              </button>
            </div>
          </div>

          {/* Product Information */}
          <div className="lg:pt-5">
            <p className="text-[10px] uppercase tracking-[0.3em] text-[#a27b4d]">
              AAVIRÁ Embroidery Studio
            </p>

            <h1 className="mt-4 font-serif text-4xl leading-tight md:text-5xl">
              {embroidery.name}
            </h1>

            <div className="mt-5 flex items-center gap-3">
              <span className="text-2xl font-semibold">
                ₹{embroidery.price.toLocaleString("en-IN")}
              </span>

              {embroidery.originalPrice && (
                <span className="text-sm text-gray-400 line-through">
                  ₹
                  {embroidery.originalPrice.toLocaleString(
                    "en-IN"
                  )}
                </span>
              )}
            </div>

            <p className="mt-6 text-sm leading-7 text-gray-600">
              {embroidery.description}
            </p>

            {/* Information */}
            <div className="mt-8 border-y border-[#e2d7ce]">
              <InfoRow
                label="Category"
                value={embroidery.category}
              />

              <InfoRow
                label="Technique"
                value={embroidery.technique}
              />

              <InfoRow
                label="Style"
                value={embroidery.style}
              />

              <InfoRow
                label="Color"
                value={embroidery.color}
              />
            </div>

            {/* Quantity */}
            <div className="mt-8">
              <p className="mb-3 text-[10px] uppercase tracking-[0.2em]">
                Quantity
              </p>

              <div className="flex h-12 w-fit items-center border border-[#ddd2c9] bg-white">
                <button
                  type="button"
                  onClick={() =>
                    setQuantity((value) =>
                      Math.max(1, value - 1)
                    )
                  }
                  className="flex h-full w-12 items-center justify-center"
                >
                  <Minus size={14} />
                </button>

                <span className="w-8 text-center text-sm">
                  {quantity}
                </span>

                <button
                  type="button"
                  onClick={() =>
                    setQuantity((value) =>
                      Math.min(10, value + 1)
                    )
                  }
                  className="flex h-full w-12 items-center justify-center"
                >
                  <Plus size={14} />
                </button>
              </div>
            </div>

            {/* Add to cart */}
            <button
              type="button"
              className="mt-6 flex h-14 w-full items-center justify-center gap-3 bg-[#2c1913] text-xs uppercase tracking-[0.2em] text-white transition hover:bg-[#452d23]"
            >
              <ShoppingBag size={17} />
              Add to Collection
            </button>

            <button
              type="button"
              className="mt-3 h-14 w-full border border-[#2c1913] text-xs uppercase tracking-[0.2em] transition hover:bg-[#2c1913] hover:text-white"
            >
              Request Custom Design
            </button>

            {/* Extra information */}
            <div className="mt-8 grid grid-cols-2 gap-3">
              <div className="bg-white p-4 text-center">
                <p className="text-[9px] uppercase tracking-[0.15em] text-gray-400">
                  Craftsmanship
                </p>

                <p className="mt-2 text-xs font-medium">
                  Premium Detail
                </p>
              </div>

              <div className="bg-white p-4 text-center">
                <p className="text-[9px] uppercase tracking-[0.15em] text-gray-400">
                  Customization
                </p>

                <p className="mt-2 text-xs font-medium">
                  Available
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}

function InfoRow({
  label,
  value,
}: {
  label: string;
  value: string;
}) {
  return (
    <div className="flex items-center justify-between border-b border-[#e2d7ce] py-4 last:border-b-0">
      <span className="text-[9px] uppercase tracking-[0.2em] text-gray-500">
        {label}
      </span>

      <span className="text-sm font-medium">
        {value}
      </span>
    </div>
  );
}