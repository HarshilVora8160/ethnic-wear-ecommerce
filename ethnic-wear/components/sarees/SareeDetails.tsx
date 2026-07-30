"use client";

import { useState } from "react";
import {
  Heart,
  ShoppingBag,
  Minus,
  Plus,
  Truck,
  ShieldCheck,
  RotateCcw,
} from "lucide-react";

import type { Saree } from "@/lib/sarees";

interface SareeDetailsProps {
  saree: Saree;
}

export default function SareeDetails({
  saree,
}: SareeDetailsProps) {
  const [selectedImage, setSelectedImage] = useState(
    saree.image
  );

  const [quantity, setQuantity] = useState(1);
  const [wishlist, setWishlist] = useState(false);

  const discount = saree.oldPrice
    ? Math.round(
        ((saree.oldPrice - saree.price) /
          saree.oldPrice) *
          100
      )
    : 0;

  return (
    <section className="mx-auto max-w-7xl px-6 py-12 lg:px-8">

      <div className="grid gap-12 lg:grid-cols-2">

        {/* =================================
            LEFT - PRODUCT IMAGES
        ================================== */}

        <div className="grid gap-4 sm:grid-cols-[90px_1fr]">

          {/* Thumbnails */}
          <div className="order-2 flex gap-3 sm:order-1 sm:flex-col">

            {saree.images.map((image, index) => (
              <button
                key={`${image}-${index}`}
                type="button"
                onClick={() => setSelectedImage(image)}
                className={`h-20 w-16 overflow-hidden border ${
                  selectedImage === image
                    ? "border-[#b08b20]"
                    : "border-[#e1d7ce]"
                }`}
              >
                <img
                  src={image}
                  alt={`${saree.name} ${index + 1}`}
                  className="h-full w-full object-cover"
                />
              </button>
            ))}

          </div>

          {/* Main Image */}
          <div className="order-1 overflow-hidden bg-[#eee5dc] sm:order-2">

            <img
              src={selectedImage}
              alt={saree.name}
              className="aspect-[3/4] h-full w-full object-cover"
            />

          </div>

        </div>

        {/* =================================
            RIGHT - PRODUCT INFORMATION
        ================================== */}

        <div className="flex flex-col justify-center">

          {/* Category */}
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-[#a1812d]">
            {saree.category}
          </p>

          {/* Name */}
          <h1 className="mt-3 font-serif text-4xl leading-tight text-[#2c1913] md:text-5xl">
            {saree.name}
          </h1>

          {/* Price */}
          <div className="mt-5 flex flex-wrap items-center gap-3">

            <span className="text-2xl font-semibold text-[#2c1913]">
              ₹{saree.price.toLocaleString("en-IN")}
            </span>

            {saree.oldPrice && (
              <>
                <span className="text-lg text-[#a69a91] line-through">
                  ₹{saree.oldPrice.toLocaleString("en-IN")}
                </span>

                <span className="text-sm font-semibold text-red-700">
                  {discount}% OFF
                </span>
              </>
            )}

          </div>

          <div className="my-7 h-px bg-[#e3d8cf]" />

          {/* Description */}
          <p className="leading-7 text-[#715f55]">
            {saree.description}
          </p>

          {/* Product Information */}
          <div className="mt-7 grid grid-cols-2 gap-5 border-y border-[#e3d8cf] py-6">

            <div>
              <p className="text-xs uppercase tracking-wider text-[#9b8a80]">
                Fabric
              </p>

              <p className="mt-1 text-sm font-medium">
                {saree.fabric}
              </p>
            </div>

            <div>
              <p className="text-xs uppercase tracking-wider text-[#9b8a80]">
                Work
              </p>

              <p className="mt-1 text-sm font-medium">
                {saree.work}
              </p>
            </div>

            <div>
              <p className="text-xs uppercase tracking-wider text-[#9b8a80]">
                Color
              </p>

              <p className="mt-1 text-sm font-medium">
                {saree.color}
              </p>
            </div>

            <div>
              <p className="text-xs uppercase tracking-wider text-[#9b8a80]">
                Occasion
              </p>

              <p className="mt-1 text-sm font-medium">
                {saree.occasion}
              </p>
            </div>

          </div>

          {/* Quantity + Wishlist */}
          <div className="mt-7 flex gap-3">

            <div className="flex h-12 items-center border border-[#d8ccc2]">

              <button
                type="button"
                onClick={() =>
                  setQuantity(Math.max(1, quantity - 1))
                }
                className="flex h-full w-11 items-center justify-center hover:bg-[#f5eee8]"
              >
                <Minus size={15} />
              </button>

              <span className="w-8 text-center text-sm">
                {quantity}
              </span>

              <button
                type="button"
                onClick={() =>
                  setQuantity(quantity + 1)
                }
                className="flex h-full w-11 items-center justify-center hover:bg-[#f5eee8]"
              >
                <Plus size={15} />
              </button>

            </div>

            <button
              type="button"
              onClick={() => setWishlist(!wishlist)}
              className="flex h-12 w-12 items-center justify-center border border-[#d8ccc2]"
              aria-label="Add to wishlist"
            >
              <Heart
                size={18}
                className={
                  wishlist
                    ? "fill-red-700 text-red-700"
                    : ""
                }
              />
            </button>

          </div>

          {/* Add To Cart */}
          <button
            type="button"
            className="mt-4 flex h-14 w-full items-center justify-center gap-3 bg-[#2c1913] text-sm font-semibold uppercase tracking-wider text-white transition hover:bg-[#4a2c20]"
          >
            <ShoppingBag size={18} />
            Add to Cart
          </button>

          {/* Benefits */}
          <div className="mt-8 space-y-5 border-t border-[#e3d8cf] pt-7">

            <div className="flex gap-4">
              <Truck
                size={20}
                className="mt-1 text-[#a1812d]"
              />

              <div>
                <p className="text-sm font-semibold">
                  Free Shipping
                </p>

                <p className="mt-1 text-xs text-[#796a61]">
                  Complimentary shipping on eligible orders.
                </p>
              </div>
            </div>

            <div className="flex gap-4">
              <ShieldCheck
                size={20}
                className="mt-1 text-[#a1812d]"
              />

              <div>
                <p className="text-sm font-semibold">
                  Secure Payment
                </p>

                <p className="mt-1 text-xs text-[#796a61]">
                  Your payment information is protected.
                </p>
              </div>
            </div>

            <div className="flex gap-4">
              <RotateCcw
                size={20}
                className="mt-1 text-[#a1812d]"
              />

              <div>
                <p className="text-sm font-semibold">
                  Easy Returns
                </p>

                <p className="mt-1 text-xs text-[#796a61]">
                  Simple and convenient return experience.
                </p>
              </div>
            </div>

          </div>

        </div>

      </div>

    </section>
  );
}