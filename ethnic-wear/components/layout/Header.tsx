"use client";

import { useState } from "react";
import Link from "next/link";

const navItems = [
  { name: "New Arrivals", href: "/new-arrivals" },
  { name: "Sarees", href: "/sarees" },
  { name: "Lehengas", href: "/lehengas" },
  { name: "Kurtis", href: "/kurtis" },
  { name: "Salwar Suits", href: "/salwar-suits" },
  { name: "Men", href: "/men" },
  { name: "Kids", href: "/kids" },
  { name: "Embroidery", href: "/embroidery" },
  { name: "Custom Design", href: "/custom-design" },
  { name: "Sale", href: "/sale" },
];

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-brand-cream shadow-sm">
      {/* ========================================
          Announcement Bar
      ======================================== */}
      <div className="bg-brand-primary px-4 py-2 text-center text-xs font-medium tracking-wide text-white">
        ✨ Free Shipping on Orders Above ₹999 &nbsp; | &nbsp; Easy Returns
      </div>

      {/* ========================================
          Main Header
      ======================================== */}
      <div className="border-b border-brand-border">
        <div className="mx-auto flex h-20 max-w-7xl items-center justify-between gap-6 px-4 sm:px-6 lg:px-8">
          {/* Mobile Menu Button */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="rounded-md p-2 text-brand-primary transition hover:bg-brand-cream-dark lg:hidden"
            aria-label="Toggle menu"
            aria-expanded={menuOpen}
          >
            <svg
              className="h-6 w-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              {menuOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={1.8}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={1.8}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>

          {/* ========================================
              Logo
          ======================================== */}
          <Link
            href="/"
            className="shrink-0 text-center"
            aria-label="AAVIRÁ Ethnic"
          >
            <span className="block font-serif text-2xl font-semibold tracking-[0.18em] text-brand-primary">
              AAVIRÁ
            </span>

            <span className="hidden text-[9px] tracking-[0.35em] text-brand-secondary sm:block">
              ETHNIC COUTURE
            </span>
          </Link>

          {/* ========================================
              Desktop Search
          ======================================== */}
          <div className="hidden max-w-md flex-1 md:block">
            <div className="relative">
              <input
                type="search"
                placeholder="Search sarees, lehengas, kurtis..."
                className="w-full border-b border-brand-border-dark bg-transparent px-2 py-3 pr-10 text-sm text-brand-primary outline-none placeholder:text-brand-text-muted focus:border-brand-primary"
              />

              <button
                type="button"
                className="absolute right-2 top-1/2 -translate-y-1/2 text-brand-primary transition hover:text-brand-secondary"
                aria-label="Search"
              >
                <svg
                  className="h-5 w-5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <circle cx="11" cy="11" r="7" strokeWidth="1.7" />

                  <path
                    strokeLinecap="round"
                    strokeWidth="1.7"
                    d="m20 20-4-4"
                  />
                </svg>
              </button>
            </div>
          </div>

          {/* ========================================
              Header Actions
          ======================================== */}
          <div className="flex items-center gap-2 sm:gap-4">
            {/* Account */}
            <Link
              href="/account"
              className="hidden text-brand-primary transition hover:text-brand-secondary sm:block"
              aria-label="Account"
            >
              <svg
                className="h-6 w-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <circle cx="12" cy="8" r="3.5" strokeWidth="1.5" />

                <path
                  strokeLinecap="round"
                  strokeWidth="1.5"
                  d="M5 20c.8-3.3 3.2-5 7-5s6.2 1.7 7 5"
                />
              </svg>
            </Link>

            {/* Wishlist */}
            <Link
              href="/wishlist"
              className="relative text-brand-primary transition hover:text-brand-secondary"
              aria-label="Wishlist"
            >
              <svg
                className="h-6 w-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="1.5"
                  d="M20.8 8.7c0 5-8.8 10.3-8.8 10.3S3.2 13.7 3.2 8.7A4.7 4.7 0 0112 6.3a4.7 4.7 0 018.8 2.4z"
                />
              </svg>

              <span className="absolute -right-2 -top-2 flex h-4 w-4 items-center justify-center rounded-full bg-brand-secondary text-[9px] text-white">
                0
              </span>
            </Link>

            {/* Cart */}
            <Link
              href="/cart"
              className="relative text-brand-primary transition hover:text-brand-secondary"
              aria-label="Shopping cart"
            >
              <svg
                className="h-6 w-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="1.5"
                  d="M3 4h2l2.2 11.2a2 2 0 002 1.6h7.9a2 2 0 002-1.6L21 7H6"
                />

                <circle cx="10" cy="20" r="1" />
                <circle cx="18" cy="20" r="1" />
              </svg>

              <span className="absolute -right-2 -top-2 flex h-4 w-4 items-center justify-center rounded-full bg-brand-secondary text-[9px] text-white">
                0
              </span>
            </Link>
          </div>
        </div>
      </div>

      {/* ========================================
          Desktop Navigation
      ======================================== */}
      <nav className="hidden border-b border-brand-border bg-brand-cream lg:block">
        <div className="mx-auto flex max-w-7xl items-center justify-center gap-7 px-4 py-4">
          {navItems.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className={`text-xs font-medium uppercase tracking-[0.08em] transition ${
                item.name === "Sale"
                  ? "text-brand-sale hover:text-brand-primary"
                  : "text-brand-text hover:text-brand-secondary"
              }`}
            >
              {item.name}
            </Link>
          ))}
        </div>
      </nav>

      {/* ========================================
          Mobile Navigation
      ======================================== */}
      {menuOpen && (
        <div className="border-b border-brand-border bg-brand-cream lg:hidden">
          <div className="px-5 py-5">
            {/* Mobile Search */}
            <div className="mb-5">
              <div className="relative">
                <input
                  type="search"
                  placeholder="Search products..."
                  className="w-full border border-brand-border-dark bg-brand-white px-4 py-3 pr-10 text-sm text-brand-primary outline-none placeholder:text-brand-text-muted focus:border-brand-primary"
                />

                <button
                  type="button"
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-brand-primary"
                  aria-label="Search"
                >
                  <svg
                    className="h-5 w-5"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <circle cx="11" cy="11" r="7" strokeWidth="1.7" />

                    <path
                      strokeLinecap="round"
                      strokeWidth="1.7"
                      d="m20 20-4-4"
                    />
                  </svg>
                </button>
              </div>
            </div>

            {/* Mobile Nav Links */}
            <nav className="flex flex-col">
              {navItems.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  onClick={() => setMenuOpen(false)}
                  className={`border-b border-brand-border py-3 text-sm font-medium transition ${
                    item.name === "Sale"
                      ? "text-brand-sale"
                      : "text-brand-primary hover:text-brand-secondary"
                  }`}
                >
                  {item.name}
                </Link>
              ))}

              {/* Account */}
              <Link
                href="/account"
                onClick={() => setMenuOpen(false)}
                className="py-3 text-sm font-medium text-brand-primary transition hover:text-brand-secondary"
              >
                My Account
              </Link>
            </nav>
          </div>
        </div>
      )}
    </header>
  );
}
