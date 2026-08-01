"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { useUI } from "@/lib/context/UIContext";
import SectionHeading from "@/components/ui/SectionHeading";

export default function CartPage() {
  const { cart, removeFromCart, updateQuantity, cartTotal, showToast } = useUI();
  const [promo, setPromo] = useState("");
  const [discount, setDiscount] = useState(0);

  const handleApplyPromo = (e: React.FormEvent) => {
    e.preventDefault();
    if (promo.toUpperCase() === "ROYAL10" || promo.toUpperCase() === "AAVIRA10") {
      setDiscount(0.1);
      showToast("10% Royal Discount Applied!");
    } else {
      showToast("Invalid Promo Code (Try: ROYAL10)");
    }
  };

  const shipping = cartTotal >= 2999 || cartTotal === 0 ? 0 : 199;
  const finalTotal = Math.round(cartTotal * (1 - discount)) + shipping;

  return (
    <div className="bg-[#FAF6F0] min-h-screen py-16 px-4 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <SectionHeading
          subtitle="Review Your Order"
          title="Shopping Bag Summary"
          description="Complimentary made-to-measure fitting & insured express shipping included."
        />

        {cart.length === 0 ? (
          <div className="mt-8 border border-[#E6DED6] bg-white p-12 text-center max-w-lg mx-auto shadow-xs">
            <div className="flex h-16 w-16 items-center justify-center rounded-full bg-[#FAF6F0] text-3xl mx-auto text-[#9A7653]">
              🛍️
            </div>
            <h3 className="mt-4 font-serif text-2xl text-[#2A0812]">Your Bag is Currently Empty</h3>
            <p className="mt-2 text-xs text-[#786C68]">
              Explore our timeless heritage collection and handcrafted pieces.
            </p>
            <Link
              href="/sarees"
              className="mt-6 inline-block bg-[#2A0812] px-8 py-3 text-xs font-bold uppercase tracking-widest text-[#F3E5AB] hover:bg-[#4A1525]"
            >
              Explore Collection
            </Link>
          </div>
        ) : (
          <div className="mt-8 grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Left Items Table */}
            <div className="lg:col-span-2 space-y-4">
              {cart.map((item) => (
                <div
                  key={`${item.product.id}-${item.size}`}
                  className="flex gap-4 border border-[#E6DED6] bg-white p-4 items-center justify-between shadow-xs"
                >
                  <div className="flex items-center gap-4">
                    <div className="relative h-24 w-20 bg-[#F0E7DB] shrink-0 border border-[#E6DED6]">
                      <Image src={item.product.image} alt={item.product.name} fill className="object-cover" />
                    </div>
                    <div>
                      <h4 className="font-serif text-base font-medium text-[#2A0812]">
                        {item.product.name}
                      </h4>
                      <p className="text-xs text-[#9A7653] mt-0.5">
                        Category: {item.product.category} | Size: {item.size}
                      </p>
                      <p className="text-xs font-semibold text-[#2A0812] mt-2">
                        ₹{item.product.price.toLocaleString("en-IN")}
                      </p>
                    </div>
                  </div>

                  <div className="flex items-center gap-6">
                    <div className="flex items-center border border-[#E6DED6]">
                      <button
                        onClick={() => updateQuantity(item.product.id, item.size, item.quantity - 1)}
                        className="px-3 py-1 text-xs hover:bg-[#FAF6F0]"
                      >
                        -
                      </button>
                      <span className="px-3 text-xs font-bold text-[#2A0812]">{item.quantity}</span>
                      <button
                        onClick={() => updateQuantity(item.product.id, item.size, item.quantity + 1)}
                        className="px-3 py-1 text-xs hover:bg-[#FAF6F0]"
                      >
                        +
                      </button>
                    </div>

                    <button
                      onClick={() => removeFromCart(item.product.id, item.size)}
                      className="text-xs text-[#786C68] hover:text-[#B91C1C]"
                    >
                      ✕
                    </button>
                  </div>
                </div>
              ))}
            </div>

            {/* Right Summary Sidebar */}
            <div className="border border-[#E6DED6] bg-white p-6 h-fit shadow-md space-y-4">
              <h3 className="font-serif text-lg font-semibold text-[#2A0812] border-b border-[#E6DED6] pb-3">
                Order Summary
              </h3>

              <form onSubmit={handleApplyPromo} className="flex gap-2">
                <input
                  type="text"
                  placeholder="Promo (ROYAL10)"
                  value={promo}
                  onChange={(e) => setPromo(e.target.value)}
                  className="flex-1 border border-[#E6DED6] px-3 py-2 text-xs uppercase focus:border-[#D4AF37] focus:outline-none"
                />
                <button
                  type="submit"
                  className="bg-[#2A0812] px-4 py-2 text-xs font-medium text-[#F3E5AB] uppercase tracking-wider hover:bg-[#4A1525]"
                >
                  Apply
                </button>
              </form>

              <div className="space-y-2 text-xs text-[#786C68]">
                <div className="flex justify-between">
                  <span>Bag Subtotal</span>
                  <span className="font-medium text-[#2A0812]">₹{cartTotal.toLocaleString("en-IN")}</span>
                </div>
                {discount > 0 && (
                  <div className="flex justify-between text-emerald-700">
                    <span>Discount (10%)</span>
                    <span>-₹{Math.round(cartTotal * discount).toLocaleString("en-IN")}</span>
                  </div>
                )}
                <div className="flex justify-between">
                  <span>Insured Shipping</span>
                  <span className="font-medium text-[#2A0812]">
                    {shipping === 0 ? "FREE" : "₹199"}
                  </span>
                </div>
                <div className="flex justify-between border-t border-[#E6DED6] pt-3 text-base font-semibold text-[#2A0812]">
                  <span className="font-serif">Total</span>
                  <span className="font-serif text-[#2A0812]">₹{finalTotal.toLocaleString("en-IN")}</span>
                </div>
              </div>

              <button
                onClick={() => showToast("Redirecting to Secure Royal Gateway...")}
                className="w-full bg-gradient-to-r from-[#D4AF37] via-[#F3E5AB] to-[#B38F24] py-3.5 text-xs font-bold uppercase tracking-widest text-[#2A0812] shadow-md hover:brightness-105"
              >
                Proceed to Checkout
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
