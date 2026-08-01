"use client";

import Image from "next/image";
import Link from "next/link";
import {
  Heart,
  Minus,
  Plus,
  ShoppingBag,
  Truck,
  RotateCcw,
  ShieldCheck,
  ChevronLeft,
  Star,
} from "lucide-react";
import { useState } from "react";

import type { SalwarSuit } from "@/lib/salwar-suits";

interface Props {
  salwarSuit: SalwarSuit;
}

export default function SalwarSuitDetails({
  salwarSuit,
}: Props) {
  const [selectedImage, setSelectedImage] =
    useState(salwarSuit.image);

  const salwarSuitSizes = salwarSuit.sizes && salwarSuit.sizes.length > 0 ? salwarSuit.sizes : ["Free Size"];

  const [selectedSize, setSelectedSize] =
    useState(salwarSuitSizes[0]);

  const [quantity, setQuantity] = useState(1);
  const [wishlist, setWishlist] = useState(false);

  const discount = salwarSuit.oldPrice
    ? Math.round(
        ((salwarSuit.oldPrice - salwarSuit.price) /
          salwarSuit.oldPrice) *
          100
      )
    : 0;

  return (
    <main className="min-h-screen bg-[#fbf8f3]">

      <div className="mx-auto max-w-7xl px-4 py-5 sm:px-6 lg:px-8">
        <Link
          href="/salwar-suits"
          className="inline-flex items-center gap-2 text-sm text-[#796a61] hover:text-[#a1812d]"
        >
          <ChevronLeft size={17} />
          Back to Salwar Suits
        </Link>
      </div>

      <section className="mx-auto max-w-7xl px-4 pb-20 sm:px-6 lg:px-8">

        <div className="grid gap-10 lg:grid-cols-2 lg:gap-16">

          <div className="grid grid-cols-[80px_1fr] gap-4">

            <div className="flex flex-col gap-3">
              {salwarSuit.images.map((image) => (
                <button
                  key={image}
                  type="button"
                  onClick={() => setSelectedImage(image)}
                  className={`relative aspect-[3/4] overflow-hidden border ${
                    selectedImage === image
                      ? "border-[#a1812d]"
                      : "border-transparent"
                  }`}
                >
                  <Image
                    src={image}
                    alt={salwarSuit.name}
                    fill
                    sizes="80px"
                    className="object-cover"
                  />
                </button>
              ))}
            </div>

            <div className="relative aspect-[3/4] overflow-hidden bg-[#eee5dc]">

              <Image
                src={selectedImage}
                alt={salwarSuit.name}
                fill
                priority
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover"
              />

              {salwarSuit.badge && (
                <span className="absolute left-4 top-4 bg-[#2c1913] px-4 py-2 text-[10px] font-semibold uppercase tracking-[0.2em] text-[#f6df91]">
                  {salwarSuit.badge}
                </span>
              )}

            </div>
          </div>

          <div className="flex flex-col justify-center">

            <p className="text-xs font-semibold uppercase tracking-[0.25em] text-[#a1812d]">
              {salwarSuit.category}
            </p>

            <h1 className="mt-3 font-serif text-4xl leading-tight text-[#2c1913] sm:text-5xl">
              {salwarSuit.name}
            </h1>

            <div className="mt-5 flex items-center gap-2">
              <div className="flex">
                {[1, 2, 3, 4, 5].map((star) => (
                  <Star
                    key={star}
                    size={15}
                    className="fill-[#d4af37] text-[#d4af37]"
                  />
                ))}
              </div>

              <span className="text-sm text-[#796a61]">
                {salwarSuit.rating} ({salwarSuit.reviews} reviews)
              </span>
            </div>

            <div className="mt-6 flex items-center gap-3">
              <span className="text-2xl font-semibold text-[#2c1913]">
                ₹{salwarSuit.price.toLocaleString("en-IN")}
              </span>

              {salwarSuit.oldPrice && (
                <>
                  <span className="text-lg text-[#a69a91] line-through">
                    ₹{salwarSuit.oldPrice.toLocaleString("en-IN")}
                  </span>

                  <span className="text-sm font-semibold text-red-700">
                    {discount}% OFF
                  </span>
                </>
              )}
            </div>

            <div className="my-7 h-px bg-[#e3d8cf]" />

            <p className="text-sm leading-7 text-[#715f55]">
              {salwarSuit.description}
            </p>

            <div className="mt-7">
              <p className="text-sm font-semibold text-[#2c1913]">
                Color:
                <span className="ml-2 font-normal text-[#796a61]">
                  {salwarSuit.color}
                </span>
              </p>

              <span
                className="mt-3 block h-7 w-7 rounded-full border border-black/10"
                style={{
                  backgroundColor:
                    salwarSuit.colorCode,
                }}
              />
            </div>

            <div className="mt-7">

              <div className="flex items-center justify-between">
                <p className="text-sm font-semibold text-[#2c1913]">
                  Select Size
                </p>

                <button
                  type="button"
                  className="text-xs text-[#a1812d] underline"
                >
                  Size Guide
                </button>
              </div>

              <div className="mt-3 flex flex-wrap gap-2">
                {salwarSuitSizes.map((size) => (
                  <button
                    key={size}
                    type="button"
                    onClick={() => setSelectedSize(size)}
                    className={`min-w-[52px] border px-4 py-3 text-sm ${
                      selectedSize === size
                        ? "border-[#2c1913] bg-[#2c1913] text-white"
                        : "border-[#d8ccc2] bg-white text-[#2c1913]"
                    }`}
                  >
                    {size}
                  </button>
                ))}
              </div>
            </div>

            <div className="mt-7">

              <p className="text-sm font-semibold text-[#2c1913]">
                Quantity
              </p>

              <div className="mt-3 flex w-fit items-center border border-[#d8ccc2] bg-white">

                <button
                  type="button"
                  onClick={() =>
                    setQuantity((value) =>
                      Math.max(1, value - 1)
                    )
                  }
                  className="p-3"
                >
                  <Minus size={15} />
                </button>

                <span className="w-10 text-center text-sm">
                  {quantity}
                </span>

                <button
                  type="button"
                  onClick={() =>
                    setQuantity((value) =>
                      Math.min(
                        salwarSuit.stock || 10,
                        value + 1
                      )
                    )
                  }
                  className="p-3"
                >
                  <Plus size={15} />
                </button>

              </div>

              <p className="mt-2 text-xs text-[#a1812d]">
                {salwarSuit.stock || 5} pieces available
              </p>

            </div>

            <div className="mt-8 flex gap-3">

              <button
                type="button"
                className="flex flex-1 items-center justify-center gap-2 bg-[#2c1913] px-6 py-4 text-sm font-semibold uppercase tracking-wider text-white"
              >
                <ShoppingBag size={18} />
                Add to Cart
              </button>

              <button
                type="button"
                onClick={() => setWishlist(!wishlist)}
                className="flex h-14 w-14 items-center justify-center border border-[#2c1913] bg-white"
              >
                <Heart
                  size={20}
                  className={
                    wishlist
                      ? "fill-red-600 text-red-600"
                      : "text-[#2c1913]"
                  }
                />
              </button>

            </div>

            <button
              type="button"
              className="mt-3 w-full bg-[#d4af37] px-6 py-4 text-sm font-semibold uppercase tracking-wider text-[#2c1913]"
            >
              Buy It Now
            </button>

            <div className="mt-8 grid grid-cols-3 border-y border-[#e3d8cf] py-6">

              <div className="flex flex-col items-center text-center">
                <Truck size={20} className="text-[#a1812d]" />
                <p className="mt-2 text-xs text-[#796a61]">
                  Fast Delivery
                </p>
              </div>

              <div className="flex flex-col items-center border-x border-[#e3d8cf] text-center">
                <RotateCcw size={20} className="text-[#a1812d]" />
                <p className="mt-2 text-xs text-[#796a61]">
                  Easy Returns
                </p>
              </div>

              <div className="flex flex-col items-center text-center">
                <ShieldCheck size={20} className="text-[#a1812d]" />
                <p className="mt-2 text-xs text-[#796a61]">
                  Secure Payment
                </p>
              </div>

            </div>

            <div className="mt-8 grid grid-cols-2 gap-y-5 border-b border-[#e3d8cf] pb-7">

              <div>
                <p className="text-xs uppercase tracking-wider text-[#a1812d]">
                  Fabric
                </p>
                <p className="mt-1 text-sm text-[#2c1913]">
                  {salwarSuit.fabric}
                </p>
              </div>

              <div>
                <p className="text-xs uppercase tracking-wider text-[#a1812d]">
                  Work
                </p>
                <p className="mt-1 text-sm text-[#2c1913]">
                  {salwarSuit.work}
                </p>
              </div>

              <div>
                <p className="text-xs uppercase tracking-wider text-[#a1812d]">
                  Occasion
                </p>
                <p className="mt-1 text-sm text-[#2c1913]">
                  {salwarSuit.occasion}
                </p>
              </div>

              <div>
                <p className="text-xs uppercase tracking-wider text-[#a1812d]">
                  Category
                </p>
                <p className="mt-1 text-sm text-[#2c1913]">
                  {salwarSuit.category}
                </p>
              </div>

            </div>

          </div>
        </div>
      </section>
    </main>
  );
}