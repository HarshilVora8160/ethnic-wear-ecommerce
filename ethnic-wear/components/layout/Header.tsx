"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { useUI } from "@/lib/context/UIContext";

const navItems = [
  {
    name: "New Arrivals",
    href: "/new-arrivals",
    mega: [
      { name: "Banarasi Heritage", href: "/sarees" },
      { name: "Royal Bridal Lehengas", href: "/lehengas" },
      { name: "Festive Velvet Kurtis", href: "/kurtis" },
      { name: "Indo-Western Men", href: "/men" },
    ],
    image: "/images/products/saree-01.webp",
  },
  {
    name: "Sarees",
    href: "/sarees",
    mega: [
      { name: "Banarasi Silk", href: "/sarees?fabric=Banarasi" },
      { name: "Kanjeevaram Silk", href: "/sarees?fabric=Kanjeevaram" },
      { name: "Pastel Organza", href: "/sarees?fabric=Organza" },
      { name: "Chanderi & Chiffon", href: "/sarees?fabric=Chanderi" },
      { name: "Zardozi Embroidered", href: "/sarees?work=Zardozi" },
    ],
    image: "/images/categories/saree.jpg",
  },
  {
    name: "Lehengas",
    href: "/lehengas",
    mega: [
      { name: "Bridal Red & Maroon", href: "/lehengas?color=Red" },
      { name: "Contemporary Pastels", href: "/lehengas?color=Pastel" },
      { name: "Velvet Heritage", href: "/lehengas?fabric=Velvet" },
      { name: "Mirror Work", href: "/lehengas?work=Mirror" },
    ],
    image: "/images/categories/lehenga.jpg",
  },
  {
    name: "Kurtis",
    href: "/kurtis",
    mega: [
      { name: "Anarkali Sets", href: "/kurtis?type=Anarkali" },
      { name: "Silk Straight Suits", href: "/kurtis?type=Straight" },
      { name: "Festive Embroidered", href: "/kurtis?type=Festive" },
    ],
    image: "/images/categories/kurti.jpg",
  },
  { name: "Salwar Suits", href: "/salwar-suits" },
  { name: "Men", href: "/men" },
  { name: "Kids", href: "/kids" },
  { name: "Embroidery", href: "/embroidery" },
  { name: "Custom Design", href: "/custom-design" },
  { name: "Sale", href: "/sale" },
];

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeMega, setActiveMega] = useState<string | null>(null);
  const { cartCount, wishlist, setIsCartOpen, setIsSearchOpen } = useUI();

  return (
    <header className="sticky top-0 z-50 bg-[#FAF6F0]/95 backdrop-blur-md border-b border-[#E6DED6]">
      {/* ========================================
          Top Luxury Ticker Bar
      ======================================== */}
      <div className="bg-[#2A0812] px-4 py-2 text-center text-xs font-medium tracking-widest text-[#F3E5AB] overflow-hidden border-b border-[#D4AF37]/30">
        <div className="flex items-center justify-center gap-6 animate-pulse-glow">
          <span>✨ Complimentary Made-to-Measure Fitting</span>
          <span className="hidden sm:inline">|</span>
          <span className="hidden sm:inline">✈️ Express Worldwide Shipping</span>
          <span>|</span>
          <span>👑 100% Authentic Heritage Handloom Certified</span>
        </div>
      </div>

      {/* ========================================
          Main Luxury Header Bar
      ======================================== */}
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between gap-6 px-4 sm:px-6 lg:px-8">
        {/* Mobile Menu Button */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="rounded-none p-2 text-[#2A0812] transition hover:bg-[#F0E7DB] lg:hidden"
          aria-label="Toggle menu"
          aria-expanded={menuOpen}
        >
          <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            {menuOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>

        {/* Search Trigger Button */}
        <button
          onClick={() => setIsSearchOpen(true)}
          className="hidden md:flex items-center gap-3 border-b border-[#9A7653] bg-transparent px-2 py-1.5 text-xs text-[#786C68] hover:text-[#2A0812] transition w-60"
        >
          <svg className="h-4 w-4 text-[#9A7653]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <circle cx="11" cy="11" r="7" strokeWidth="1.7" />
            <path strokeLinecap="round" strokeWidth="1.7" d="m20 20-4-4" />
          </svg>
          <span className="truncate">Search sarees, lehengas...</span>
        </button>

        {/* Logo */}
        <Link href="/" className="shrink-0 text-center group">
          <span className="block font-serif text-3xl sm:text-4xl font-semibold tracking-[0.2em] text-[#2A0812] group-hover:text-[#9A7653] transition">
            AAVIRÁ
          </span>
          <span className="block text-[8px] sm:text-[9px] font-bold tracking-[0.4em] text-[#D4AF37] uppercase -mt-1">
            ETHNIC COUTURE
          </span>
        </Link>

        {/* Action Header Icons */}
        <div className="flex items-center gap-3 sm:gap-5">
          {/* Mobile Search Button */}
          <button
            onClick={() => setIsSearchOpen(true)}
            className="md:hidden text-[#2A0812] hover:text-[#9A7653]"
            aria-label="Search"
          >
            <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <circle cx="11" cy="11" r="7" strokeWidth="1.7" />
              <path strokeLinecap="round" strokeWidth="1.7" d="m20 20-4-4" />
            </svg>
          </button>

          {/* Account */}
          <Link
            href="/account"
            className="hidden text-[#2A0812] transition hover:text-[#9A7653] sm:block"
            aria-label="Account"
          >
            <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <circle cx="12" cy="8" r="3.5" strokeWidth="1.5" />
              <path strokeLinecap="round" strokeWidth="1.5" d="M5 20c.8-3.3 3.2-5 7-5s6.2 1.7 7 5" />
            </svg>
          </Link>

          {/* Wishlist */}
          <Link
            href="/wishlist"
            className="relative text-[#2A0812] transition hover:text-[#9A7653]"
            aria-label="Wishlist"
          >
            <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="1.5"
                d="M20.8 8.7c0 5-8.8 10.3-8.8 10.3S3.2 13.7 3.2 8.7A4.7 4.7 0 0112 6.3a4.7 4.7 0 018.8 2.4z"
              />
            </svg>
            {wishlist.length > 0 && (
              <span className="absolute -right-2 -top-1.5 flex h-4 w-4 items-center justify-center rounded-full bg-[#B91C1C] text-[9px] font-bold text-white">
                {wishlist.length}
              </span>
            )}
          </Link>

          {/* Shopping Cart Drawer Trigger */}
          <button
            onClick={() => setIsCartOpen(true)}
            className="relative flex items-center gap-2 bg-[#2A0812] px-3 py-2 text-[#F3E5AB] transition hover:bg-[#4A1525]"
            aria-label="Shopping bag"
          >
            <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.7" d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
            </svg>
            <span className="text-xs font-bold font-sans hidden sm:inline uppercase tracking-wider">Bag</span>
            <span className="flex h-4 w-4 items-center justify-center rounded-full bg-[#D4AF37] text-[10px] font-bold text-[#2A0812]">
              {cartCount}
            </span>
          </button>
        </div>
      </div>

      {/* ========================================
          Desktop Navigation Bar & Mega Menu
      ======================================== */}
      <nav className="hidden border-t border-[#E6DED6] bg-[#FAF6F0] lg:block">
        <div className="mx-auto flex max-w-7xl items-center justify-center gap-8 px-4 py-3">
          {navItems.map((item) => (
            <div
              key={item.name}
              className="relative group"
              onMouseEnter={() => setActiveMega(item.name)}
              onMouseLeave={() => setActiveMega(null)}
            >
              <Link
                href={item.href}
                className={`py-2 text-xs font-semibold uppercase tracking-[0.12em] transition ${
                  item.name === "Sale"
                    ? "text-[#B91C1C] hover:text-[#2A0812]"
                    : "text-[#2A0812] hover:text-[#9A7653]"
                }`}
              >
                {item.name}
              </Link>

              {/* Mega Dropdown */}
              {item.mega && activeMega === item.name && (
                <div className="absolute left-1/2 top-full z-50 w-96 -translate-x-1/2 border border-[#D4AF37]/40 bg-[#FAF6F0] p-6 shadow-2xl animate-in fade-in slide-in-from-top-2">
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <h4 className="border-b border-[#E6DED6] pb-2 font-serif text-xs font-bold uppercase tracking-wider text-[#9A7653]">
                        {item.name} Collections
                      </h4>
                      <div className="mt-3 flex flex-col space-y-2">
                        {item.mega.map((sub) => (
                          <Link
                            key={sub.name}
                            href={sub.href}
                            className="text-xs text-[#2A0812] transition hover:text-[#D4AF37] hover:translate-x-1"
                          >
                            &bull; {sub.name}
                          </Link>
                        ))}
                      </div>
                    </div>
                    {item.image && (
                      <div className="relative h-32 w-full overflow-hidden border border-[#E6DED6]">
                        <Image src={item.image} alt={item.name} fill className="object-cover" />
                        <div className="absolute inset-0 bg-black/30 flex items-center justify-center">
                          <span className="font-serif text-xs font-semibold text-white tracking-widest uppercase">
                            Shop {item.name}
                          </span>
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
      </nav>

      {/* ========================================
          Mobile Navigation Accordion Drawer
      ======================================== */}
      {menuOpen && (
        <div className="border-b border-[#E6DED6] bg-[#FAF6F0] px-5 py-6 lg:hidden animate-in slide-in-from-top">
          <nav className="flex flex-col space-y-3">
            {navItems.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                onClick={() => setMenuOpen(false)}
                className={`border-b border-[#E6DED6] pb-3 text-sm font-semibold uppercase tracking-wider ${
                  item.name === "Sale" ? "text-[#B91C1C]" : "text-[#2A0812]"
                }`}
              >
                {item.name}
              </Link>
            ))}
            <Link
              href="/account"
              onClick={() => setMenuOpen(false)}
              className="pt-2 text-sm font-semibold text-[#9A7653] uppercase tracking-wider"
            >
              My Account / Login
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
}
