"use client";

import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  Clock3,
  Heart,
  ShoppingBag,
  Sparkles,
  Tag,
  Zap,
} from "lucide-react";
import { useMemo, useState } from "react";

type SaleProduct = {
  id: number;
  name: string;
  category: string;
  image: string;
  price: number;
  oldPrice: number;
  discount: number;
  badge: string;
};

const saleProducts: SaleProduct[] = [
  {
    id: 1,
    name: "Royal Zari Silk Saree",
    category: "Sarees",
    image: "/images/products/sarees/royal-zari-silk.jpg",
    price: 4999,
    oldPrice: 7999,
    discount: 38,
    badge: "Best Seller",
  },
  {
    id: 2,
    name: "Ivory Bridal Lehenga",
    category: "Lehengas",
    image: "/images/products/lehengas/ivory-bridal-lehenga.jpg",
    price: 8999,
    oldPrice: 14999,
    discount: 40,
    badge: "Limited",
  },
  {
    id: 3,
    name: "Embroidered Anarkali Kurti",
    category: "Kurtis",
    image: "/images/products/kurtis/embroidered-anarkali.jpg",
    price: 2499,
    oldPrice: 3999,
    discount: 38,
    badge: "Trending",
  },
  {
    id: 4,
    name: "Designer Salwar Suit",
    category: "Salwar Suits",
    image: "/images/products/salwar-suits/designer-suit.jpg",
    price: 3299,
    oldPrice: 5499,
    discount: 40,
    badge: "Hot Deal",
  },
  {
    id: 5,
    name: "Premium Men's Kurta",
    category: "Men",
    image: "/images/products/men/premium-kurta.jpg",
    price: 1899,
    oldPrice: 2999,
    discount: 37,
    badge: "New Deal",
  },
  {
    id: 6,
    name: "Festive Kids Ethnic Set",
    category: "Kids",
    image: "/images/products/kids/festive-set.jpg",
    price: 1499,
    oldPrice: 2499,
    discount: 40,
    badge: "Popular",
  },
];

const categories = [
  "All",
  "Sarees",
  "Lehengas",
  "Kurtis",
  "Salwar Suits",
  "Men",
  "Kids",
];

export default function SalePage() {
  const [activeCategory, setActiveCategory] = useState("All");
  const [sort, setSort] = useState("featured");
  const [wishlist, setWishlist] = useState<number[]>([]);

  const filteredProducts = useMemo(() => {
    let result =
      activeCategory === "All"
        ? saleProducts
        : saleProducts.filter(
            (product) =>
              product.category === activeCategory
          );

    if (sort === "discount") {
      result = [...result].sort(
        (a, b) => b.discount - a.discount
      );
    }

    if (sort === "price-low") {
      result = [...result].sort(
        (a, b) => a.price - b.price
      );
    }

    if (sort === "price-high") {
      result = [...result].sort(
        (a, b) => b.price - a.price
      );
    }

    return result;
  }, [activeCategory, sort]);

  const toggleWishlist = (id: number) => {
    setWishlist((current) =>
      current.includes(id)
        ? current.filter((item) => item !== id)
        : [...current, id]
    );
  };

  return (
    <main className="min-h-screen bg-[#fffaf6] text-[#2c1913]">
      {/* ================================================= */}
      {/* SALE HERO */}
      {/* ================================================= */}

      <section className="relative overflow-hidden bg-[#2c1913] text-white">
        <div className="absolute -left-40 -top-40 h-[500px] w-[500px] rounded-full bg-[#c9a96e]/10 blur-3xl" />

        <div className="absolute -bottom-40 -right-40 h-[500px] w-[500px] rounded-full bg-[#c9a96e]/10 blur-3xl" />

        <div className="relative mx-auto grid max-w-[1440px] items-center gap-12 px-5 py-16 md:px-8 lg:grid-cols-[1fr_0.8fr] lg:px-12 lg:py-24">
          <div>
            <div className="flex items-center gap-3">
              <Sparkles
                size={15}
                className="text-[#d7b56d]"
              />

              <span className="text-[10px] uppercase tracking-[0.35em] text-[#d7b56d]">
                AAVIRÁ Private Sale
              </span>
            </div>

            <h1 className="mt-6 font-serif text-5xl leading-[0.95] md:text-7xl lg:text-8xl">
              Luxury
              <span className="block italic text-[#d7b56d]">
                for Less
              </span>
            </h1>

            <p className="mt-7 max-w-xl text-sm leading-7 text-[#d8cbc3] md:text-base">
              Discover exceptional sarees, lehengas, kurtis
              and ethnic wear at exclusive prices before these
              pieces leave our collection.
            </p>

            <div className="mt-9 flex flex-wrap gap-3">
              <a
                href="#sale-products"
                className="inline-flex h-13 items-center gap-3 bg-[#d7b56d] px-7 py-4 text-xs uppercase tracking-[0.2em] text-[#2c1913] transition hover:bg-[#ead295]"
              >
                Shop Sale
                <ArrowRight size={16} />
              </a>

              <Link
                href="/new-arrivals"
                className="inline-flex h-13 items-center border border-white/30 px-7 py-4 text-xs uppercase tracking-[0.2em] transition hover:bg-white hover:text-[#2c1913]"
              >
                New Arrivals
              </Link>
            </div>
          </div>

          {/* Sale visual */}
          <div className="relative mx-auto w-full max-w-[520px]">
            <div className="relative aspect-[4/5] overflow-hidden bg-[#3b251d]">
              <Image
                src="/images/products/sale/sale-hero.jpg"
                alt="AAVIRÁ Sale Collection"
                fill
                priority
                className="object-cover"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-[#2c1913]/80 via-transparent to-transparent" />

              <div className="absolute bottom-7 left-7">
                <p className="text-[9px] uppercase tracking-[0.3em] text-[#d7b56d]">
                  Up to
                </p>

                <p className="mt-1 font-serif text-6xl">
                  50%
                </p>

                <p className="text-xs uppercase tracking-[0.2em]">
                  Off Selected Styles
                </p>
              </div>
            </div>

            <div className="absolute -right-4 -top-4 flex h-24 w-24 rotate-6 items-center justify-center rounded-full bg-[#d7b56d] text-center text-[10px] font-semibold uppercase tracking-wider text-[#2c1913] shadow-xl">
              Limited
              <br />
              Time
            </div>
          </div>
        </div>
      </section>

      {/* ================================================= */}
      {/* SALE BENEFITS */}
      {/* ================================================= */}

      <section className="border-b border-[#e5dbd3] bg-white">
        <div className="mx-auto grid max-w-[1440px] grid-cols-2 md:grid-cols-4">
          <SaleBenefit
            icon={<Tag size={19} />}
            title="Up to 50% Off"
            text="Selected styles"
          />

          <SaleBenefit
            icon={<Zap size={19} />}
            title="Flash Deals"
            text="Limited quantities"
          />

          <SaleBenefit
            icon={<ShoppingBag size={19} />}
            title="Premium Quality"
            text="At special prices"
          />

          <SaleBenefit
            icon={<Clock3 size={19} />}
            title="Limited Time"
            text="Shop before it ends"
          />
        </div>
      </section>

      {/* ================================================= */}
      {/* FLASH SALE BANNER */}
      {/* ================================================= */}

      <section className="px-5 py-12 md:px-8 lg:py-16">
        <div className="mx-auto max-w-[1440px] overflow-hidden bg-[#ead8bd]">
          <div className="flex flex-col items-center justify-between gap-6 px-6 py-8 text-center md:flex-row md:px-10 md:text-left">
            <div>
              <p className="flex items-center justify-center gap-2 text-[9px] uppercase tracking-[0.3em] text-[#75563d] md:justify-start">
                <Zap size={13} />
                Flash Sale
              </p>

              <h2 className="mt-2 font-serif text-3xl md:text-4xl">
                Your favourites. Our best prices.
              </h2>
            </div>

            <div className="flex items-center gap-2">
              <CountdownBox value="08" label="Hrs" />
              <span className="font-serif text-2xl">:</span>
              <CountdownBox value="42" label="Min" />
              <span className="font-serif text-2xl">:</span>
              <CountdownBox value="19" label="Sec" />
            </div>
          </div>
        </div>
      </section>

      {/* ================================================= */}
      {/* PRODUCTS */}
      {/* ================================================= */}

      <section
        id="sale-products"
        className="mx-auto max-w-[1440px] px-5 pb-20 md:px-8 lg:pb-28"
      >
        <div className="mb-9 flex flex-col justify-between gap-5 md:flex-row md:items-end">
          <div>
            <p className="text-[10px] uppercase tracking-[0.3em] text-[#a27b4d]">
              Curated Offers
            </p>

            <h2 className="mt-3 font-serif text-4xl md:text-5xl">
              The Sale Edit
            </h2>
          </div>

          <select
            value={sort}
            onChange={(e) => setSort(e.target.value)}
            className="h-11 border border-[#ddd2c9] bg-white px-4 text-xs outline-none"
          >
            <option value="featured">Featured</option>
            <option value="discount">Biggest Discount</option>
            <option value="price-low">Price: Low to High</option>
            <option value="price-high">Price: High to Low</option>
          </select>
        </div>

        {/* Category pills */}
        <div className="mb-10 flex gap-2 overflow-x-auto pb-2">
          {categories.map((category) => (
            <button
              key={category}
              type="button"
              onClick={() => setActiveCategory(category)}
              className={`whitespace-nowrap px-5 py-3 text-[10px] uppercase tracking-[0.15em] transition ${
                activeCategory === category
                  ? "bg-[#2c1913] text-white"
                  : "border border-[#ddd2c9] bg-white hover:border-[#2c1913]"
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Product Grid */}
        <div className="grid grid-cols-2 gap-x-4 gap-y-12 md:grid-cols-3 lg:grid-cols-4 lg:gap-x-6">
          {filteredProducts.map((product) => (
            <article key={product.id} className="group">
              <div className="relative aspect-[4/5] overflow-hidden bg-[#eee5dd]">
                <Image
                  src={product.image}
                  alt={product.name}
                  fill
                  sizes="(max-width: 768px) 50vw, 25vw"
                  className="object-cover transition duration-700 group-hover:scale-105"
                />

                {/* Discount */}
                <div className="absolute left-3 top-3 bg-[#2c1913] px-3 py-2 text-[9px] uppercase tracking-wider text-white">
                  -{product.discount}%
                </div>

                {/* Badge */}
                <div className="absolute bottom-3 left-3 bg-white px-3 py-2 text-[8px] uppercase tracking-[0.15em]">
                  {product.badge}
                </div>

                {/* Wishlist */}
                <button
                  type="button"
                  onClick={() =>
                    toggleWishlist(product.id)
                  }
                  className="absolute right-3 top-3 flex h-10 w-10 items-center justify-center rounded-full bg-white"
                >
                  <Heart
                    size={16}
                    className={
                      wishlist.includes(product.id)
                        ? "fill-[#2c1913]"
                        : ""
                    }
                  />
                </button>

                {/* Hover action */}
                <Link
                  href="#"
                  className="absolute bottom-3 right-3 flex h-10 w-10 translate-y-14 items-center justify-center bg-[#2c1913] text-white opacity-0 transition-all group-hover:translate-y-0 group-hover:opacity-100"
                >
                  <ArrowRight size={16} />
                </Link>
              </div>

              <div className="pt-4">
                <p className="text-[9px] uppercase tracking-[0.2em] text-[#a27b4d]">
                  {product.category}
                </p>

                <h3 className="mt-1 text-sm font-medium">
                  {product.name}
                </h3>

                <div className="mt-2 flex items-center gap-2">
                  <span className="text-sm font-semibold">
                    ₹{product.price.toLocaleString("en-IN")}
                  </span>

                  <span className="text-xs text-gray-400 line-through">
                    ₹
                    {product.oldPrice.toLocaleString("en-IN")}
                  </span>
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* ================================================= */}
      {/* FINAL CTA */}
      {/* ================================================= */}

      <section className="bg-[#2c1913] px-5 py-20 text-center text-white md:px-8">
        <p className="text-[10px] uppercase tracking-[0.3em] text-[#d7b56d]">
          Dont Miss Out
        </p>

        <h2 className="mx-auto mt-4 max-w-3xl font-serif text-4xl md:text-6xl">
          Once theyre gone,
          <span className="italic text-[#d7b56d]">
            {" "}
            theyre gone.
          </span>
        </h2>

        <a
          href="#sale-products"
          className="mt-8 inline-flex items-center gap-3 bg-[#d7b56d] px-8 py-4 text-xs uppercase tracking-[0.2em] text-[#2c1913]"
        >
          Shop the Sale
          <ArrowRight size={16} />
        </a>
      </section>
    </main>
  );
}

function SaleBenefit({
  icon,
  title,
  text,
}: {
  icon: React.ReactNode;
  title: string;
  text: string;
}) {
  return (
    <div className="border-r border-[#e5dbd3] px-5 py-7 text-center last:border-r-0 md:py-9">
      <div className="mx-auto flex h-10 w-10 items-center justify-center rounded-full bg-[#f4ede6]">
        {icon}
      </div>

      <p className="mt-3 text-[10px] font-semibold uppercase tracking-wider">
        {title}
      </p>

      <p className="mt-1 text-xs text-gray-500">
        {text}
      </p>
    </div>
  );
}

function CountdownBox({
  value,
  label,
}: {
  value: string;
  label: string;
}) {
  return (
    <div className="flex h-16 w-16 flex-col items-center justify-center bg-[#2c1913] text-white">
      <span className="font-serif text-2xl">{value}</span>
      <span className="text-[7px] uppercase tracking-wider text-[#d7b56d]">
        {label}
      </span>
    </div>
  );
}