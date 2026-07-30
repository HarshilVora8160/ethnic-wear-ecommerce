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
  ChevronLeft,
  ChevronRight,
  Star,
  Check,
} from "lucide-react";

import type { Lehenga } from "@/lib/lehengas";

interface LehengaDetailsProps {
  lehenga: Lehenga;
}

export default function LehengaDetails({
  lehenga,
}: LehengaDetailsProps) {
  const images =
    lehenga.images?.length > 0
      ? lehenga.images
      : [lehenga.image];

  const [selectedImage, setSelectedImage] = useState(
    images[0]
  );

  const [selectedSize, setSelectedSize] = useState(
    lehenga.sizes[0]
  );

  const [quantity, setQuantity] = useState(1);

  const [wishlist, setWishlist] = useState(false);

  const currentIndex = images.indexOf(selectedImage);

  const discount = lehenga.oldPrice
    ? Math.round(
        ((lehenga.oldPrice - lehenga.price) /
          lehenga.oldPrice) *
          100
      )
    : 0;

  const previousImage = () => {
    const index =
      currentIndex <= 0
        ? images.length - 1
        : currentIndex - 1;

    setSelectedImage(images[index]);
  };

  const nextImage = () => {
    const index =
      currentIndex >= images.length - 1
        ? 0
        : currentIndex + 1;

    setSelectedImage(images[index]);
  };

  return (
    <main className="min-h-screen bg-[#fbf8f3]">

      <div className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8 lg:py-14">

        {/* Breadcrumb */}
        <div className="mb-8 flex items-center gap-2 overflow-hidden text-xs text-[#8d7c72]">

          <span className="shrink-0">
            Home
          </span>

          <span>/</span>

          <span className="shrink-0">
            Lehengas
          </span>

          <span>/</span>

          <span className="truncate text-[#2c1913]">
            {lehenga.name}
          </span>

        </div>

        <div className="grid gap-10 lg:grid-cols-[1.05fr_0.95fr] lg:gap-16">

          {/* =================================================
              GALLERY
          ================================================= */}

          <div>

            <div className="grid gap-4 sm:grid-cols-[85px_1fr]">

              {/* Thumbnails */}
              <div className="order-2 flex gap-3 overflow-x-auto sm:order-1 sm:flex-col sm:overflow-visible">

                {images.map((image, index) => (
                  <button
                    key={`${image}-${index}`}
                    type="button"
                    onClick={() =>
                      setSelectedImage(image)
                    }
                    className={`relative h-24 min-w-[72px] overflow-hidden border sm:h-28 ${
                      selectedImage === image
                        ? "border-[#b08b20] ring-1 ring-[#b08b20]"
                        : "border-[#e2d8cf]"
                    }`}
                  >
                    <img
                      src={image}
                      alt={`${lehenga.name} ${index + 1}`}
                      className="h-full w-full object-cover"
                    />
                  </button>
                ))}

              </div>

              {/* Main image */}
              <div className="group relative order-1 overflow-hidden bg-[#eee5dc] sm:order-2">

                <div className="aspect-[3/4]">

                  <img
                    src={selectedImage}
                    alt={lehenga.name}
                    className="h-full w-full object-cover transition duration-700 group-hover:scale-105"
                  />

                </div>

                {/* Badge */}
                {lehenga.badge && (
                  <span className="absolute left-4 top-4 bg-[#2c1913] px-4 py-2 text-[10px] font-semibold uppercase tracking-[0.2em] text-[#f6df91]">
                    {lehenga.badge}
                  </span>
                )}

                {/* Wishlist */}
                <button
                  type="button"
                  onClick={() =>
                    setWishlist((value) => !value)
                  }
                  className="absolute right-4 top-4 flex h-11 w-11 items-center justify-center rounded-full bg-white/95 shadow-sm"
                  aria-label={
                    wishlist
                      ? "Remove from wishlist"
                      : "Add to wishlist"
                  }
                >
                  <Heart
                    size={19}
                    className={
                      wishlist
                        ? "fill-red-600 text-red-600"
                        : "text-[#2c1913]"
                    }
                  />
                </button>

                {/* Navigation */}
                {images.length > 1 && (
                  <>
                    <button
                      type="button"
                      onClick={previousImage}
                      aria-label="Previous image"
                      className="absolute left-4 top-1/2 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full bg-white/90 text-[#2c1913] opacity-0 transition group-hover:opacity-100"
                    >
                      <ChevronLeft size={18} />
                    </button>

                    <button
                      type="button"
                      onClick={nextImage}
                      aria-label="Next image"
                      className="absolute right-4 top-1/2 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full bg-white/90 text-[#2c1913] opacity-0 transition group-hover:opacity-100"
                    >
                      <ChevronRight size={18} />
                    </button>
                  </>
                )}

                {/* Counter */}
                {images.length > 1 && (
                  <div className="absolute bottom-4 right-4 bg-[#2c1913]/80 px-3 py-1.5 text-xs text-white">
                    {currentIndex + 1} / {images.length}
                  </div>
                )}

              </div>

            </div>
          </div>

          {/* =================================================
              PRODUCT INFORMATION
          ================================================= */}

          <div className="lg:sticky lg:top-24 lg:self-start">

            {/* Category */}
            <p className="text-xs font-semibold uppercase tracking-[0.28em] text-[#a1812d]">
              {lehenga.category}
            </p>

            {/* Product name */}
            <h1 className="mt-3 font-serif text-4xl leading-tight text-[#2c1913] sm:text-5xl">
              {lehenga.name}
            </h1>

            {/* Rating */}
            <div className="mt-5 flex items-center gap-3">

              <div className="flex gap-0.5">

                {[1, 2, 3, 4, 5].map((star) => (
                  <Star
                    key={star}
                    size={15}
                    className="fill-[#d4af37] text-[#d4af37]"
                  />
                ))}

              </div>

              <span className="text-xs text-[#796a61]">
                {lehenga.rating} · {lehenga.reviews} Reviews
              </span>

            </div>

            {/* Price */}
            <div className="mt-6 flex flex-wrap items-center gap-3">

              <span className="text-2xl font-semibold text-[#2c1913]">
                ₹{lehenga.price.toLocaleString("en-IN")}
              </span>

              {lehenga.oldPrice && (
                <>
                  <span className="text-base text-[#a69a91] line-through">
                    ₹{lehenga.oldPrice.toLocaleString(
                      "en-IN"
                    )}
                  </span>

                  <span className="bg-[#f4e7e1] px-2.5 py-1 text-xs font-semibold text-[#a13a2d]">
                    {discount}% OFF
                  </span>
                </>
              )}

            </div>

            <p className="mt-2 text-xs text-[#8d7c72]">
              Inclusive of all taxes
            </p>

            <div className="my-7 h-px bg-[#e3d8cf]" />

            {/* Description */}
            <div>

              <h2 className="text-sm font-semibold uppercase tracking-wider text-[#2c1913]">
                Description
              </h2>

              <p className="mt-3 text-sm leading-7 text-[#715f55]">
                {lehenga.description}
              </p>

            </div>

            {/* Product details */}
            <div className="mt-7 grid grid-cols-2 border-y border-[#e3d8cf]">

              <div className="border-b border-r border-[#e3d8cf] py-5 pr-4">
                <p className="text-[10px] uppercase tracking-[0.18em] text-[#9b8a80]">
                  Fabric
                </p>

                <p className="mt-1.5 text-sm font-medium text-[#2c1913]">
                  {lehenga.fabric}
                </p>
              </div>

              <div className="border-b border-[#e3d8cf] py-5 pl-4">
                <p className="text-[10px] uppercase tracking-[0.18em] text-[#9b8a80]">
                  Work
                </p>

                <p className="mt-1.5 text-sm font-medium text-[#2c1913]">
                  {lehenga.work}
                </p>
              </div>

              <div className="border-r border-[#e3d8cf] py-5 pr-4">
                <p className="text-[10px] uppercase tracking-[0.18em] text-[#9b8a80]">
                  Color
                </p>

                <div className="mt-1.5 flex items-center gap-2">

                  <span
                    className="h-4 w-4 rounded-full border border-black/10"
                    style={{
                      backgroundColor:
                        lehenga.colorCode,
                    }}
                  />

                  <span className="text-sm font-medium text-[#2c1913]">
                    {lehenga.color}
                  </span>

                </div>
              </div>

              <div className="py-5 pl-4">
                <p className="text-[10px] uppercase tracking-[0.18em] text-[#9b8a80]">
                  Occasion
                </p>

                <p className="mt-1.5 text-sm font-medium text-[#2c1913]">
                  {lehenga.occasion}
                </p>
              </div>

            </div>

            {/* Size */}
            <div className="mt-7">

              <div className="mb-3 flex items-center justify-between">

                <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#2c1913]">
                  Select Size
                </p>

                <button
                  type="button"
                  className="text-xs text-[#a1812d] underline underline-offset-4"
                >
                  Size Guide
                </button>

              </div>

              <div className="flex flex-wrap gap-2">

                {lehenga.sizes.map((size) => (
                  <button
                    key={size}
                    type="button"
                    onClick={() =>
                      setSelectedSize(size)
                    }
                    className={`flex h-11 min-w-12 items-center justify-center border px-4 text-sm transition ${
                      selectedSize === size
                        ? "border-[#2c1913] bg-[#2c1913] text-white"
                        : "border-[#d8ccc2] bg-white text-[#2c1913] hover:border-[#a1812d]"
                    }`}
                  >
                    {size}
                  </button>
                ))}

              </div>

            </div>

            {/* Quantity */}
            <div className="mt-7">

              <p className="mb-3 text-xs font-semibold uppercase tracking-[0.18em] text-[#2c1913]">
                Quantity
              </p>

              <div className="flex gap-3">

                <div className="flex h-12 border border-[#d8ccc2] bg-white">

                  <button
                    type="button"
                    onClick={() =>
                      setQuantity((value) =>
                        Math.max(1, value - 1)
                      )
                    }
                    className="flex w-11 items-center justify-center hover:bg-[#f5eee8]"
                    aria-label="Decrease quantity"
                  >
                    <Minus size={15} />
                  </button>

                  <span className="flex w-10 items-center justify-center text-sm font-medium">
                    {quantity}
                  </span>

                  <button
                    type="button"
                    onClick={() =>
                      setQuantity((value) =>
                        Math.min(
                          lehenga.stock,
                          value + 1
                        )
                      )
                    }
                    className="flex w-11 items-center justify-center hover:bg-[#f5eee8]"
                    aria-label="Increase quantity"
                  >
                    <Plus size={15} />
                  </button>

                </div>

                <button
                  type="button"
                  onClick={() =>
                    setWishlist((value) => !value)
                  }
                  className={`flex h-12 w-12 items-center justify-center border ${
                    wishlist
                      ? "border-red-200 bg-red-50 text-red-600"
                      : "border-[#d8ccc2] bg-white text-[#2c1913]"
                  }`}
                  aria-label="Wishlist"
                >
                  <Heart
                    size={18}
                    className={
                      wishlist ? "fill-red-600" : ""
                    }
                  />
                </button>

              </div>

            </div>

            {/* Stock */}
            <div className="mt-5 flex items-center gap-2 text-xs">

              <span className="h-2 w-2 rounded-full bg-green-600" />

              <span className="text-[#527044]">
                {lehenga.stock <= 5
                  ? `Only ${lehenga.stock} left in stock`
                  : "In stock and ready to ship"}
              </span>

            </div>

            {/* Buttons */}
            <div className="mt-5 grid gap-3 sm:grid-cols-2">

              <button
                type="button"
                className="flex h-14 items-center justify-center gap-2 border border-[#2c1913] bg-transparent text-xs font-semibold uppercase tracking-[0.16em] text-[#2c1913] transition hover:bg-[#2c1913] hover:text-white"
              >
                <ShoppingBag size={17} />
                Add to Cart
              </button>

              <button
                type="button"
                className="h-14 bg-[#2c1913] text-xs font-semibold uppercase tracking-[0.16em] text-white transition hover:bg-[#4a2c20]"
              >
                Buy It Now
              </button>

            </div>

            {/* Benefits */}
            <div className="mt-7 divide-y divide-[#e3d8cf] border-y border-[#e3d8cf]">

              <div className="flex gap-4 py-5">

                <Truck
                  size={20}
                  className="shrink-0 text-[#a1812d]"
                />

                <div>
                  <p className="text-sm font-semibold text-[#2c1913]">
                    Complimentary Shipping
                  </p>

                  <p className="mt-1 text-xs leading-5 text-[#796a61]">
                    Free delivery on eligible orders.
                  </p>
                </div>

              </div>

              <div className="flex gap-4 py-5">

                <ShieldCheck
                  size={20}
                  className="shrink-0 text-[#a1812d]"
                />

                <div>
                  <p className="text-sm font-semibold text-[#2c1913]">
                    Secure Payment
                  </p>

                  <p className="mt-1 text-xs leading-5 text-[#796a61]">
                    Your payment information is securely
                    protected.
                  </p>
                </div>

              </div>

              <div className="flex gap-4 py-5">

                <RotateCcw
                  size={20}
                  className="shrink-0 text-[#a1812d]"
                />

                <div>
                  <p className="text-sm font-semibold text-[#2c1913]">
                    Easy Returns
                  </p>

                  <p className="mt-1 text-xs leading-5 text-[#796a61]">
                    Hassle-free returns on eligible products.
                  </p>
                </div>

              </div>

            </div>

          </div>
        </div>
      </div>
    </main>
  );
}