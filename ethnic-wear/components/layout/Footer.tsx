"use client";

import React, { useState } from "react";
import Link from "next/link";
import { useUI } from "@/lib/context/UIContext";

export default function Footer() {
  const [email, setEmail] = useState("");
  const { showToast } = useUI();

  const handleNewsletterSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      showToast("Thank you for joining AAVIRÁ VIP Couture Club!");
      setEmail("");
    }
  };

  return (
    <footer className="bg-[#120C0E] text-[#CDBDB2] border-t-2 border-[#D4AF37]/40 pt-16 pb-8">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-12 sm:grid-cols-2 lg:grid-cols-4 pb-12 border-b border-[#3A2A2F]">
          {/* Column 1: Brand Info */}
          <div>
            <Link href="/" className="inline-block">
              <span className="font-serif text-3xl font-bold tracking-[0.2em] text-[#F3E5AB]">
                AAVIRÁ
              </span>
              <span className="block text-[8px] font-bold tracking-[0.4em] text-[#D4AF37] uppercase mt-0.5">
                ETHNIC COUTURE
              </span>
            </Link>
            <p className="mt-4 text-xs leading-relaxed text-[#9B8B7C]">
              Embodying the timeless elegance of Indian heritage handlooms, bespoke bridal couture, and fine handcrafted embroidery since 1994.
            </p>
            <div className="mt-6 flex gap-4 text-lg text-[#F3E5AB]">
              <a href="#" className="hover:text-[#D4AF37] transition" aria-label="Instagram">📸</a>
              <a href="#" className="hover:text-[#D4AF37] transition" aria-label="Pinterest">📌</a>
              <a href="#" className="hover:text-[#D4AF37] transition" aria-label="Facebook">📘</a>
              <a href="#" className="hover:text-[#D4AF37] transition" aria-label="YouTube">▶️</a>
            </div>
          </div>

          {/* Column 2: Exclusive Collections */}
          <div>
            <h4 className="font-serif text-sm font-semibold tracking-wider text-[#F3E5AB] uppercase border-b border-[#3A2A2F] pb-2">
              Collections
            </h4>
            <ul className="mt-4 space-y-2 text-xs">
              <li>
                <Link href="/sarees" className="hover:text-[#F3E5AB] transition">Banarasi Silk Sarees</Link>
              </li>
              <li>
                <Link href="/lehengas" className="hover:text-[#F3E5AB] transition">Royal Bridal Lehengas</Link>
              </li>
              <li>
                <Link href="/kurtis" className="hover:text-[#F3E5AB] transition">Festive Anarkali Kurtis</Link>
              </li>
              <li>
                <Link href="/salwar-suits" className="hover:text-[#F3E5AB] transition">Hand-Embroidered Suits</Link>
              </li>
              <li>
                <Link href="/men" className="hover:text-[#F3E5AB] transition">Groom Sherwanis & Kurtas</Link>
              </li>
              <li>
                <Link href="/custom-design" className="hover:text-[#F3E5AB] transition text-[#D4AF37]">Bespoke Made-to-Measure</Link>
              </li>
            </ul>
          </div>

          {/* Column 3: Customer Concierge */}
          <div>
            <h4 className="font-serif text-sm font-semibold tracking-wider text-[#F3E5AB] uppercase border-b border-[#3A2A2F] pb-2">
              Concierge Services
            </h4>
            <ul className="mt-4 space-y-2 text-xs">
              <li>
                <Link href="/about" className="hover:text-[#F3E5AB] transition">Our Artisan Heritage</Link>
              </li>
              <li>
                <Link href="/shipping" className="hover:text-[#F3E5AB] transition">Worldwide Shipping Info</Link>
              </li>
              <li>
                <Link href="/returns" className="hover:text-[#F3E5AB] transition">Complimentary Returns</Link>
              </li>
              <li>
                <Link href="/privacy" className="hover:text-[#F3E5AB] transition">Privacy & Authenticity</Link>
              </li>
              <li>
                <Link href="/terms" className="hover:text-[#F3E5AB] transition">Terms & Conditions</Link>
              </li>
            </ul>
          </div>

          {/* Column 4: Newsletter */}
          <div>
            <h4 className="font-serif text-sm font-semibold tracking-wider text-[#F3E5AB] uppercase border-b border-[#3A2A2F] pb-2">
              VIP Couture Club
            </h4>
            <p className="mt-4 text-xs text-[#9B8B7C]">
              Subscribe to receive private invitations to new bridal drops & 10% off your inaugural couture piece.
            </p>
            <form onSubmit={handleNewsletterSubmit} className="mt-4 space-y-2">
              <input
                type="email"
                required
                placeholder="Enter your email address"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full border border-[#3A2A2F] bg-[#1A1215] px-3 py-2.5 text-xs text-[#F3E5AB] placeholder:text-[#786C68] focus:border-[#D4AF37] focus:outline-none"
              />
              <button
                type="submit"
                className="w-full bg-gradient-to-r from-[#D4AF37] to-[#B38F24] py-2.5 text-xs font-bold uppercase tracking-widest text-[#120C0E] hover:brightness-110"
              >
                Join VIP Club
              </button>
            </form>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-8 flex flex-col items-center justify-between gap-4 text-center sm:flex-row sm:text-left text-[11px] text-[#786C68]">
          <p>&copy; {new Date().getFullYear()} AAVIRÁ Ethnic Couture. All rights reserved. Handcrafted in India.</p>

          {/* Secure Payment Badges */}
          <div className="flex items-center gap-3 text-xs text-[#D4AF37]">
            <span className="border border-[#3A2A2F] px-2 py-0.5 rounded-none bg-[#1A1215]">VISA</span>
            <span className="border border-[#3A2A2F] px-2 py-0.5 rounded-none bg-[#1A1215]">MASTERCARD</span>
            <span className="border border-[#3A2A2F] px-2 py-0.5 rounded-none bg-[#1A1215]">UPI</span>
            <span className="border border-[#3A2A2F] px-2 py-0.5 rounded-none bg-[#1A1215]">APPLE PAY</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
