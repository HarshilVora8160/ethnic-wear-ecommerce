"use client";

import React, { useState } from "react";
import { useUI } from "@/lib/context/UIContext";

export default function Newsletter() {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const { showToast } = useUI();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      setSubmitted(true);
      showToast("Welcomed to AAVIRÁ VIP Couture!");
    }
  };

  return (
    <section className="bg-[#120C0E] text-white px-6 py-20 lg:py-24 border-b border-[#D4AF37]/30">
      <div className="mx-auto max-w-3xl text-center">
        <span className="text-[11px] font-bold uppercase tracking-[0.3em] text-[#D4AF37]">
          ✦ The AAVIRÁ Privé Circle ✦
        </span>
        <h2 className="mt-4 font-serif text-4xl sm:text-5xl font-normal text-[#F3E5AB]">
          Unlock VIP Access to Private Bridal Drops
        </h2>
        <p className="mt-4 text-xs sm:text-sm text-[#CDBDB2] max-w-xl mx-auto leading-relaxed">
          Receive exclusive invitations to private trunk shows, bespoke fitting appointments, and 10% off your first couture piece.
        </p>

        {submitted ? (
          <div className="mt-8 border border-[#D4AF37] bg-[#1A1215] p-6 text-sm text-[#F3E5AB] gold-glow">
            ✨ Welcome to the Private Atelier Circle. Your welcome gift code has been dispatched.
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="mt-8 flex flex-col sm:flex-row gap-3 max-w-lg mx-auto">
            <input
              type="email"
              required
              placeholder="Enter your email address"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="flex-1 border border-[#3A2A2F] bg-[#1A1215] px-4 py-3.5 text-xs text-[#F3E5AB] placeholder:text-[#786C68] focus:border-[#D4AF37] focus:outline-none"
            />
            <button
              type="submit"
              className="bg-gradient-to-r from-[#D4AF37] via-[#F3E5AB] to-[#B38F24] px-8 py-3.5 text-xs font-bold uppercase tracking-widest text-[#120C0E] hover:brightness-110 shadow-lg"
            >
              Subscribe
            </button>
          </form>
        )}
      </div>
    </section>
  );
}