"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import {
  Heart,
  Search,
  SlidersHorizontal,
  ArrowUpDown,
  Eye,
  ShoppingBag,
  ChevronLeft,
  ChevronRight,
  Sparkles,
} from "lucide-react";

type Product = {
  id: number;
  name: string;
  category: string;
  price: number;
  oldPrice?: number;
  image: string;
  badge?: string;
  color: string;
};

const products: Product[] = [
  {
    id: 1,
    name: "Royal Banarasi Silk Saree",
    category: "Sarees",
    price: 4899,
    oldPrice: 5999,
    image:
      "https://images.unsplash.com/photo-1610030469983-98e550d6193c?auto=format&fit=crop&w=900&q=85",
    badge: "New",
    color: "Maroon",
  },
  {
    id: 2,
    name: "Pearl Embroidered Designer Saree",
    category: "Sarees",
    price: 5299,
    oldPrice: 6499,
    image:
      "https://images.unsplash.com/photo-1583391733956-6c78276477e2?auto=format&fit=crop&w=900&q=85",
    badge: "Trending",
    color: "Cream",
  },
  {
    id: 3,
    name: "Festive Mirror Work Lehenga",
    category: "Lehengas",
    price: 7499,
    oldPrice: 8999,
    image:
      "https://images.unsplash.com/photo-1594633312681-425c7b97ccd1?auto=format&fit=crop&w=900&q=85",
    badge: "New",
    color: "Pink",
  },
  {
    id: 4,
    name: "Elegant Silk Designer Saree",
    category: "Sarees",
    price: 4199,
    image:
      "https://images.unsplash.com/photo-1610189012906-7a5f1e2a6d88?auto=format&fit=crop&w=900&q=85",
    badge: "New",
    color: "Green",
  },
  {
    id: 5,
    name: "Handcrafted Embroidery Saree",
    category: "Embroidery",
    price: 5899,
    oldPrice: 6999,
    image:
      "https://images.unsplash.com/photo-1617627143750-d86bc21e42bb?auto=format&fit=crop&w=900&q=85",
    badge: "Exclusive",
    color: "Blue",
  },
  {
    id: 6,
    name: "Pastel Floral Organza Saree",
    category: "Sarees",
    price: 3599,
    oldPrice: 4299,
    image:
      "https://images.unsplash.com/photo-1610030469668-8e9f641aaf0d?auto=format&fit=crop&w=900&q=85",
    badge: "New",
    color: "Pastel",
  },
  {
    id: 7,
    name: "Royal Velvet Bridal Lehenga",
    category: "Lehengas",
    price: 9999,
    oldPrice: 11999,
    image:
      "https://images.unsplash.com/photo-1609357605129-26f69add5d6e?auto=format&fit=crop&w=900&q=85",
    badge: "Premium",
    color: "Wine",
  },
  {
    id: 8,
    name: "Minimal Pearl Work Saree",
    category: "Sarees",
    price: 4499,
    image:
      "https://images.unsplash.com/photo-1583391733973-8b7d8f4f8d65?auto=format&fit=crop&w=900&q=85",
    badge: "New",
    color: "Ivory",
  },
  {
    id: 9,
    name: "Designer Festive Kurti Set",
    category: "Kurtis",
    price: 2899,
    oldPrice: 3499,
    image:
      "https://images.unsplash.com/photo-1597983073493-88cd35cf93f4?auto=format&fit=crop&w=900&q=85",
    badge: "New",
    color: "Orange",
  },
  {
    id: 10,
    name: "Traditional Zari Silk Saree",
    category: "Sarees",
    price: 6499,
    oldPrice: 7499,
    image:
      "https://images.unsplash.com/photo-1610030469983-98e550d6193c?auto=format&fit=crop&w=900&q=85",
    badge: "Bestseller",
    color: "Gold",
  },
  {
    id: 11,
    name: "Contemporary Printed Saree",
    category: "Sarees",
    price: 3199,
    image:
      "https://images.unsplash.com/photo-1583391733981-849840f9b1d6?auto=format&fit=crop&w=900&q=85",
    badge: "New",
    color: "Lavender",
  },
  {
    id: 12,
    name: "Luxury Bridal Embroidery Lehenga",
    category: "Lehengas",
    price: 11999,
    oldPrice: 14999,
    image:
      "https://images.unsplash.com/photo-1594736797933-d0501ba2fe65?auto=format&fit=crop&w=900&q=85",
    badge: "Premium",
    color: "Red",
  },
];

const categories = [
  "All",
  "Sarees",
  "Lehengas",
  "Kurtis",
  "Embroidery",
];

export default function NewArrivalsPage() {
  const [activeCategory, setActiveCategory] = useState("All");
  const [search, setSearch] = useState("");
  const [sort, setSort] = useState("latest");
  const [wishlist, setWishlist] = useState<number[]>([]);

  const filteredProducts = useMemo(() => {
    let result = [...products];

    if (activeCategory !== "All") {
      result = result.filter(
        (product) => product.category === activeCategory
      );
    }

    if (search.trim()) {
      const query = search.toLowerCase();

      result = result.filter(
        (product) =>
          product.name.toLowerCase().includes(query) ||
          product.category.toLowerCase().includes(query) ||
          product.color.toLowerCase().includes(query)
      );
    }

    if (sort === "price-low") {
      result.sort((a, b) => a.price - b.price);
    }

    if (sort === "price-high") {
      result.sort((a, b) => b.price - a.price);
    }

    return result;
  }, [activeCategory, search, sort]);

  const toggleWishlist = (id: number) => {
    setWishlist((current) =>
      current.includes(id)
        ? current.filter((item) => item !== id)
        : [...current, id]
    );
  };

  return (
    <main className="min-h-screen bg-[#fbf8f3] text-[#2c1913]">

      {/* =====================================================
          HERO
      ===================================================== */}

      <section className="relative overflow-hidden bg-[#2c1913]">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_30%,rgba(212,175,55,0.18),transparent_35%),radial-gradient(circle_at_80%_70%,rgba(212,175,55,0.12),transparent_30%)]" />

        <div className="relative mx-auto grid min-h-[500px] max-w-7xl items-center gap-10 px-6 py-16 lg:grid-cols-2 lg:px-8">

          {/* Hero Content */}

          <div className="max-w-xl">

            <div className="mb-5 inline-flex items-center gap-2 border border-[#c9a227]/40 bg-[#c9a227]/10 px-4 py-2 text-xs font-semibold uppercase tracking-[0.25em] text-[#e8ca72]">
              <Sparkles size={14} />
              Just Arrived
            </div>

            <h1 className="font-serif text-5xl leading-[1.05] text-[#f8f1e9] sm:text-6xl lg:text-7xl">
              New
              <span className="block italic text-[#d4af37]">
                Arrivals
              </span>
            </h1>

            <p className="mt-6 max-w-lg text-base leading-8 text-[#d9cbc1] sm:text-lg">
              Discover our latest collection of timeless Indian
              craftsmanship, contemporary silhouettes, and luxurious
              details designed for your next unforgettable moment.
            </p>

            <div className="mt-8 flex flex-wrap gap-4">
              <a
                href="#collection"
                className="inline-flex items-center gap-2 bg-[#d4af37] px-7 py-3.5 text-sm font-semibold text-[#2c1913] transition hover:bg-[#e7c65d]"
              >
                Explore Collection
                <ChevronRight size={17} />
              </a>

              <Link
                href="/custom-design"
                className="inline-flex items-center gap-2 border border-[#d4af37]/50 px-7 py-3.5 text-sm font-semibold text-[#f8f1e9] transition hover:bg-[#d4af37]/10"
              >
                Create Your Look
              </Link>
            </div>

          </div>

          {/* Hero Image */}

          <div className="relative mx-auto w-full max-w-[450px]">

            <div className="absolute -inset-5 rounded-full border border-[#d4af37]/20" />
            <div className="absolute -inset-10 rounded-full border border-[#d4af37]/10" />

            <div className="relative aspect-[4/5] overflow-hidden rounded-t-full border border-[#d4af37]/30">
              <img
                src="https://images.unsplash.com/photo-1610030469983-98e550d6193c?auto=format&fit=crop&w=1000&q=90"
                alt="New arrival saree collection"
                className="h-full w-full object-cover"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-[#2c1913]/50 via-transparent to-transparent" />

              <div className="absolute bottom-6 left-6 right-6 border border-white/20 bg-[#2c1913]/70 p-4 backdrop-blur-md">
                <p className="text-xs uppercase tracking-[0.25em] text-[#d4af37]">
                  AAVIRÁ Collection
                </p>
                <p className="mt-1 font-serif text-xl text-white">
                  Crafted for elegance
                </p>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* =====================================================
          INTRO
      ===================================================== */}

      <section className="mx-auto max-w-7xl px-6 py-16 lg:px-8">

        <div className="mx-auto max-w-2xl text-center">

          <p className="text-xs font-semibold uppercase tracking-[0.3em] text-[#b08b20]">
            The Latest Edit
          </p>

          <h2 className="mt-3 font-serif text-4xl sm:text-5xl">
            Fresh from the Atelier
          </h2>

          <div className="mx-auto mt-5 h-px w-16 bg-[#d4af37]" />

          <p className="mt-6 leading-7 text-[#715f55]">
            Step into the newest chapter of AAVIRÁ. From rich silk
            textures to delicate embroidery, every piece has been
            thoughtfully selected for the modern Indian wardrobe.
          </p>

        </div>

      </section>

      {/* =====================================================
          COLLECTION
      ===================================================== */}

      <section id="collection" className="mx-auto max-w-7xl px-6 pb-20 lg:px-8">

        {/* Category Tabs */}

        <div className="mb-8 flex flex-wrap items-center justify-center gap-2">

          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`px-5 py-2.5 text-sm font-medium transition ${
                activeCategory === category
                  ? "bg-[#2c1913] text-[#f8f1e9]"
                  : "border border-[#e1d7ce] bg-white text-[#6d5b51] hover:border-[#c9a227] hover:text-[#8d6b13]"
              }`}
            >
              {category}
            </button>
          ))}

        </div>

        {/* Search + Sort */}

        <div className="mb-10 flex flex-col gap-4 border-y border-[#e5dbd2] py-5 md:flex-row md:items-center md:justify-between">

          <div className="relative w-full md:max-w-sm">

            <Search
              size={18}
              className="absolute left-4 top-1/2 -translate-y-1/2 text-[#8c7a70]"
            />

            <input
              type="text"
              placeholder="Search new arrivals..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="h-12 w-full border border-[#ded3c9] bg-white pl-11 pr-4 text-sm outline-none transition focus:border-[#b08b20]"
            />

          </div>

          <div className="flex items-center justify-between gap-3">

            <div className="hidden items-center gap-2 text-sm text-[#796a61] sm:flex">
              <SlidersHorizontal size={17} />
              <span>
                {filteredProducts.length} products
              </span>
            </div>

            <div className="relative">

              <ArrowUpDown
                size={16}
                className="pointer-events-none absolute left-3 top-1/2 -translate-y-1/2 text-[#806f65]"
              />

              <select
                value={sort}
                onChange={(e) => setSort(e.target.value)}
                className="h-12 appearance-none border border-[#ded3c9] bg-white pl-10 pr-10 text-sm outline-none focus:border-[#b08b20]"
              >
                <option value="latest">Latest Arrivals</option>
                <option value="price-low">Price: Low to High</option>
                <option value="price-high">Price: High to Low</option>
              </select>

            </div>

          </div>

        </div>

        {/* Product Grid */}

        {filteredProducts.length > 0 ? (
          <div className="grid grid-cols-2 gap-x-4 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">

            {filteredProducts.map((product) => {

              const isWishlisted = wishlist.includes(product.id);

              return (
                <article
                  key={product.id}
                  className="group"
                >

                  {/* Image */}

                  <div className="relative aspect-[3/4] overflow-hidden bg-[#eee5dc]">

                    <Link href={`/products/${product.id}`}>

                      <img
                        src={product.image}
                        alt={product.name}
                        className="h-full w-full object-cover transition duration-700 group-hover:scale-105"
                      />

                    </Link>

                    {/* Badge */}

                    {product.badge && (
                      <span className="absolute left-3 top-3 bg-[#2c1913] px-3 py-1.5 text-[10px] font-semibold uppercase tracking-wider text-[#f6df91]">
                        {product.badge}
                      </span>
                    )}

                    {/* Wishlist */}

                    <button
                      onClick={() => toggleWishlist(product.id)}
                      aria-label={
                        isWishlisted
                          ? "Remove from wishlist"
                          : "Add to wishlist"
                      }
                      className="absolute right-3 top-3 flex h-9 w-9 items-center justify-center rounded-full bg-white/90 backdrop-blur-sm transition hover:bg-white"
                    >
                      <Heart
                        size={17}
                        className={
                          isWishlisted
                            ? "fill-[#9f2f2f] text-[#9f2f2f]"
                            : "text-[#4d3930]"
                        }
                      />
                    </button>

                    {/* Hover actions */}

                    <div className="absolute bottom-0 left-0 right-0 translate-y-full bg-[#2c1913]/95 p-3 transition duration-300 group-hover:translate-y-0">

                      <Link
                        href={`/products/${product.id}`}
                        className="flex w-full items-center justify-center gap-2 bg-[#d4af37] py-3 text-xs font-semibold uppercase tracking-wider text-[#2c1913] hover:bg-[#e5c556]"
                      >
                        <Eye size={15} />
                        Quick View
                      </Link>

                    </div>

                  </div>

                  {/* Product Details */}

                  <div className="pt-4">

                    <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-[#a1812d]">
                      {product.category}
                    </p>

                    <Link href={`/products/${product.id}`}>
                      <h3 className="mt-1.5 line-clamp-1 font-serif text-lg text-[#2c1913] transition hover:text-[#a17c1c]">
                        {product.name}
                      </h3>
                    </Link>

                    <div className="mt-2 flex items-center gap-2">

                      <span className="font-semibold text-[#2c1913]">
                        ₹{product.price.toLocaleString("en-IN")}
                      </span>

                      {product.oldPrice && (
                        <>
                          <span className="text-sm text-[#a69a91] line-through">
                            ₹{product.oldPrice.toLocaleString("en-IN")}
                          </span>

                          <span className="text-xs font-medium text-[#9b3333]">
                            {Math.round(
                              ((product.oldPrice - product.price) /
                                product.oldPrice) *
                                100
                            )}
                            % OFF
                          </span>
                        </>
                      )}

                    </div>

                    <div className="mt-3 flex items-center gap-2">

                      <span className="h-3 w-3 rounded-full border border-white bg-[#8a2635] shadow" />

                      <span className="text-xs text-[#8c7b71]">
                        {product.color}
                      </span>

                    </div>

                  </div>

                </article>
              );
            })}

          </div>
        ) : (

          /* Empty State */

          <div className="py-24 text-center">

            <ShoppingBag
              size={42}
              strokeWidth={1}
              className="mx-auto text-[#b49a89]"
            />

            <h3 className="mt-5 font-serif text-2xl">
              No pieces found
            </h3>

            <p className="mt-2 text-sm text-[#796a61]">
              Try another search or explore our other collections.
            </p>

            <button
              onClick={() => {
                setSearch("");
                setActiveCategory("All");
              }}
              className="mt-6 bg-[#2c1913] px-6 py-3 text-sm font-semibold text-white"
            >
              View All Arrivals
            </button>

          </div>

        )}

        {/* Pagination */}

        {filteredProducts.length > 0 && (
          <div className="mt-16 flex items-center justify-center gap-2">

            <button
              aria-label="Previous page"
              className="flex h-10 w-10 items-center justify-center border border-[#ddd2c8] bg-white text-[#725f55] transition hover:border-[#b08b20]"
            >
              <ChevronLeft size={17} />
            </button>

            <button className="flex h-10 w-10 items-center justify-center bg-[#2c1913] text-sm font-medium text-white">
              1
            </button>

            <button className="flex h-10 w-10 items-center justify-center border border-[#ddd2c8] bg-white text-sm transition hover:border-[#b08b20]">
              2
            </button>

            <button className="flex h-10 w-10 items-center justify-center border border-[#ddd2c8] bg-white text-sm transition hover:border-[#b08b20]">
              3
            </button>

            <button
              aria-label="Next page"
              className="flex h-10 w-10 items-center justify-center border border-[#ddd2c8] bg-white text-[#725f55] transition hover:border-[#b08b20]"
            >
              <ChevronRight size={17} />
            </button>

          </div>
        )}

      </section>

      {/* =====================================================
          BOTTOM CTA
      ===================================================== */}

      <section className="bg-[#2c1913] px-6 py-20">

        <div className="mx-auto max-w-4xl text-center">

          <Sparkles
            size={25}
            className="mx-auto text-[#d4af37]"
          />

          <h2 className="mt-5 font-serif text-4xl text-[#f8f1e9] sm:text-5xl">
            Find Something Made
            <span className="italic text-[#d4af37]"> for You</span>
          </h2>

          <p className="mx-auto mt-5 max-w-xl leading-7 text-[#cdbdb2]">
            Cant find exactly what youre imagining? Create your
            own personalized saree with our custom design experience.
          </p>

          <Link
            href="/custom-design"
            className="mt-8 inline-flex items-center gap-2 bg-[#d4af37] px-8 py-4 text-sm font-semibold text-[#2c1913] transition hover:bg-[#e5c556]"
          >
            Start Custom Design
            <ChevronRight size={17} />
          </Link>

        </div>

      </section>

    </main>
  );
}