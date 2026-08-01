"use client";

import React, { useState } from "react";
import Link from "next/link";
import SectionHeading from "@/components/ui/SectionHeading";
import { useUI } from "@/lib/context/UIContext";

export default function RegisterPage() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { showToast } = useUI();

  const handleRegister = (e: React.FormEvent) => {
    e.preventDefault();
    showToast("Welcome to AAVIRÁ Couture Club!");
  };

  return (
    <div className="bg-[#FAF6F0] min-h-screen py-16 px-4 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-md bg-white border border-[#E6DED6] p-8 shadow-lg">
        <SectionHeading
          subtitle="Join Couture Club"
          title="Create Account"
          description="Enjoy bespoke fitting perks & inaugural discounts."
        />

        <form onSubmit={handleRegister} className="space-y-4 mt-6">
          <div>
            <label className="block text-xs font-semibold uppercase tracking-wider text-[#2A0812] mb-1">
              Full Name
            </label>
            <input
              type="text"
              required
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="w-full border border-[#E6DED6] px-4 py-3 text-xs focus:border-[#D4AF37] focus:outline-none"
              placeholder="Queen Maharani"
            />
          </div>

          <div>
            <label className="block text-xs font-semibold uppercase tracking-wider text-[#2A0812] mb-1">
              Email Address
            </label>
            <input
              type="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full border border-[#E6DED6] px-4 py-3 text-xs focus:border-[#D4AF37] focus:outline-none"
              placeholder="name@domain.com"
            />
          </div>

          <div>
            <label className="block text-xs font-semibold uppercase tracking-wider text-[#2A0812] mb-1">
              Password
            </label>
            <input
              type="password"
              required
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full border border-[#E6DED6] px-4 py-3 text-xs focus:border-[#D4AF37] focus:outline-none"
              placeholder="••••••••"
            />
          </div>

          <button
            type="submit"
            className="w-full bg-[#2A0812] py-3.5 text-xs font-bold uppercase tracking-widest text-[#F3E5AB] hover:bg-[#4A1525] transition"
          >
            Create Account
          </button>
        </form>

        <div className="mt-6 text-center text-xs text-[#786C68] border-t border-[#E6DED6] pt-4">
          <span>Already have an account? </span>
          <Link href="/login" className="font-semibold text-[#2A0812] underline">
            Sign In
          </Link>
        </div>
      </div>
    </div>
  );
}
