import Image from "next/image";
import Link from "next/link";

const categories = [
  {
    name: "Sarees",
    description: "Timeless drapes for every celebration",
    href: "/sarees",
    image: "/images/categories/saree.jpg",
  },
  {
    name: "Lehengas",
    description: "Designed for unforgettable moments",
    href: "/lehengas",
    image: "/images/categories/lehenga.jpg",
  },
  {
    name: "Kurtis",
    description: "Effortless elegance for every day",
    href: "/kurtis",
    image: "/images/categories/kurti.jpg",
  },
  {
    name: "Salwar Suits",
    description: "Classic silhouettes, modern grace",
    href: "/salwar-suits",
    image: "/images/categories/salwar.jpg",
  },
];

const featuredProducts = [
  {
    name: "Royal Banarasi Silk Saree",
    category: "Banarasi Collection",
    price: "₹8,999",
    image: "/images/products/banarasi-saree.jpg",
  },
  {
    name: "Embroidered Bridal Lehenga",
    category: "Bridal Collection",
    price: "₹18,999",
    image: "/images/products/bridal-lehenga.jpg",
  },
  {
    name: "Handcrafted Designer Saree",
    category: "Designer Collection",
    price: "₹12,499",
    image: "/images/products/designer-saree.jpg",
  },
  {
    name: "Premium Embroidered Kurti",
    category: "Festive Collection",
    price: "₹4,999",
    image: "/images/products/embroidered-kurti.jpg",
  },
];

const reasons = [
  {
    number: "01",
    title: "Fine Craftsmanship",
    description:
      "Every piece is thoughtfully crafted with attention to detail and traditional Indian artistry.",
  },
  {
    number: "02",
    title: "Premium Fabrics",
    description:
      "We carefully select fabrics that feel luxurious, comfortable and beautiful to wear.",
  },
  {
    number: "03",
    title: "Made for You",
    description:
      "Discover personalized designs, custom sarees and embroidery created around your style.",
  },
];

export default function Home() {
  return (
    <main className="bg-brand-ivory text-brand-text">
      {/* =====================================================
          HERO SECTION
      ===================================================== */}
      <section className="relative min-h-[680px] overflow-hidden lg:min-h-[760px]">
        <Image
          src="/images/home/hero.jpg"
          alt="AAVIRÁ luxury ethnic wear collection"
          fill
          priority
          className="object-cover object-center"
        />

        {/* Overlay */}
        <div className="absolute inset-0 bg-brand-primary/45" />

        {/* Hero Content */}
        <div className="relative z-10 mx-auto flex min-h-[680px] max-w-7xl items-center px-5 sm:px-8 lg:min-h-[760px] lg:px-12">
          <div className="max-w-2xl text-white">
            <p className="mb-5 text-xs font-medium uppercase tracking-[0.35em] text-brand-champagne">
              The New Heritage Collection
            </p>

            <h1 className="font-serif text-5xl leading-[1.05] tracking-tight sm:text-6xl lg:text-8xl">
              Timeless
              <br />
              <span className="italic text-brand-champagne">
                Indian Elegance
              </span>
            </h1>

            <p className="mt-7 max-w-xl text-sm leading-7 text-white/85 sm:text-base">
              Discover exquisite sarees, lehengas and ethnic wear inspired by
              India timeless artistry and crafted for the modern woman.
            </p>

            <div className="mt-9 flex flex-col gap-3 sm:flex-row">
              <Link
                href="/sarees"
                className="inline-flex h-12 items-center justify-center bg-brand-gold px-8 text-xs font-semibold uppercase tracking-[0.15em] text-brand-primary transition hover:bg-brand-gold-light"
              >
                Shop Collection
              </Link>

              <Link
                href="/new-arrivals"
                className="inline-flex h-12 items-center justify-center border border-white/70 px-8 text-xs font-semibold uppercase tracking-[0.15em] text-white transition hover:border-brand-gold hover:bg-brand-gold hover:text-brand-primary"
              >
                Discover New Arrivals
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* =====================================================
          BRAND INTRO
      ===================================================== */}
      <section className="border-b border-brand-border bg-brand-cream">
        <div className="mx-auto max-w-4xl px-5 py-16 text-center sm:py-20">
          <p className="text-xs font-medium uppercase tracking-[0.3em] text-brand-gold-dark">
            Welcome to AAVIRÁ
          </p>

          <h2 className="mt-4 font-serif text-3xl leading-tight text-brand-primary sm:text-4xl lg:text-5xl">
            Where Tradition Meets
            <span className="italic text-brand-gold-dark">
              {" "}
              Contemporary Luxury
            </span>
          </h2>

          <p className="mx-auto mt-6 max-w-2xl text-sm leading-7 text-brand-text-secondary sm:text-base">
            AAVIRÁ celebrates the beauty of Indian craftsmanship through
            thoughtfully designed ethnic wear. From handpicked sarees to
            statement lehengas, every piece is created to make your special
            moments unforgettable.
          </p>
        </div>
      </section>

      {/* =====================================================
          SHOP BY CATEGORY
      ===================================================== */}
      <section className="bg-brand-ivory px-5 py-16 sm:px-8 sm:py-20 lg:px-12">
        <div className="mx-auto max-w-7xl">
          <SectionHeading
            eyebrow="Explore"
            title="Shop by Category"
            description="Discover silhouettes designed for celebrations, traditions and everyday elegance."
          />

          <div className="mt-12 grid grid-cols-2 gap-4 lg:grid-cols-4 lg:gap-6">
            {categories.map((category) => (
              <Link key={category.name} href={category.href} className="group">
                <div className="relative aspect-[3/4] overflow-hidden bg-brand-cream-dark">
                  <Image
                    src={category.image}
                    alt={category.name}
                    fill
                    className="object-cover transition duration-700 group-hover:scale-105"
                  />

                  <div className="absolute inset-0 bg-gradient-to-t from-brand-primary/80 via-transparent to-transparent" />

                  <div className="absolute bottom-0 left-0 right-0 p-5 text-white sm:p-6">
                    <p className="font-serif text-xl sm:text-2xl">
                      {category.name}
                    </p>

                    <p className="mt-1 text-[11px] leading-5 text-white/75">
                      {category.description}
                    </p>

                    <span className="mt-4 inline-block text-[10px] font-medium uppercase tracking-[0.15em] text-brand-champagne">
                      Explore Collection →
                    </span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* =====================================================
          FEATURED COLLECTION
      ===================================================== */}
      <section className="bg-brand-cream px-5 py-16 sm:px-8 sm:py-20 lg:px-12">
        <div className="mx-auto max-w-7xl">
          <SectionHeading
            eyebrow="Curated for You"
            title="Featured Collection"
            description="Handpicked pieces that bring together heritage craftsmanship and contemporary style."
          />

          <div className="mt-12 grid grid-cols-2 gap-x-4 gap-y-10 lg:grid-cols-4 lg:gap-6">
            {featuredProducts.map((product) => (
              <ProductCard
                key={product.name}
                name={product.name}
                category={product.category}
                price={product.price}
                image={product.image}
              />
            ))}
          </div>

          <div className="mt-12 text-center">
            <Link
              href="/sarees"
              className="inline-flex border border-brand-gold-dark px-8 py-3 text-xs font-semibold uppercase tracking-[0.15em] text-brand-primary transition hover:bg-brand-gold hover:text-brand-primary"
            >
              View All Collections
            </Link>
          </div>
        </div>
      </section>

      {/* =====================================================
          CUSTOM DESIGN
      ===================================================== */}
      <section className="relative overflow-hidden bg-brand-dark">
        <div className="mx-auto grid max-w-7xl lg:grid-cols-2">
          <div className="relative min-h-[460px] lg:min-h-[600px]">
            <Image
              src="/images/home/custom-design.jpg"
              alt="Custom saree design"
              fill
              className="object-cover"
            />
          </div>

          <div className="flex items-center px-6 py-16 sm:px-12 lg:px-16">
            <div className="max-w-xl">
              <p className="text-xs font-medium uppercase tracking-[0.3em] text-brand-gold">
                Create Something Personal
              </p>

              <h2 className="mt-5 font-serif text-4xl leading-tight text-white sm:text-5xl">
                Your Saree.
                <br />
                <span className="italic text-brand-champagne">Your Story.</span>
              </h2>

              <p className="mt-6 text-sm leading-7 text-brand-text-light">
                Design a saree that is uniquely yours. Choose your fabric,
                color, border, embroidery and details to create a piece made
                around your personality.
              </p>

              <Link
                href="/custom-design"
                className="mt-8 inline-flex h-12 items-center justify-center bg-brand-gold px-8 text-xs font-semibold uppercase tracking-[0.15em] text-brand-primary transition hover:bg-brand-gold-light"
              >
                Design Your Saree
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* =====================================================
          EMBROIDERY
      ===================================================== */}
      <section className="bg-brand-ivory px-5 py-16 sm:px-8 sm:py-20 lg:px-12">
        <div className="mx-auto grid max-w-7xl items-center gap-12 lg:grid-cols-2 lg:gap-20">
          <div className="order-2 lg:order-1">
            <p className="text-xs font-medium uppercase tracking-[0.3em] text-brand-gold-dark">
              The Art of Detail
            </p>

            <h2 className="mt-4 font-serif text-4xl leading-tight text-brand-primary sm:text-5xl">
              Crafted with
              <br />
              <span className="italic text-brand-gold-dark">
                Intricate Detail
              </span>
            </h2>

            <p className="mt-6 max-w-lg text-sm leading-7 text-brand-text-secondary">
              From delicate floral motifs to statement embroidery, discover
              designs created to bring richness, depth and individuality to
              every garment.
            </p>

            <Link
              href="/embroidery"
              className="mt-8 inline-flex border border-brand-gold-dark px-8 py-3 text-xs font-semibold uppercase tracking-[0.15em] text-brand-primary transition hover:bg-brand-gold hover:text-brand-primary"
            >
              Explore Embroidery
            </Link>
          </div>

          <div className="relative order-1 aspect-square overflow-hidden lg:order-2">
            <Image
              src="/images/home/embroidery.jpg"
              alt="Intricate embroidery craftsmanship"
              fill
              className="object-cover transition duration-700 hover:scale-105"
            />
          </div>
        </div>
      </section>

      {/* =====================================================
          WHY AAVIRÁ
      ===================================================== */}
      <section className="border-y border-brand-border bg-brand-cream px-5 py-16 sm:px-8 sm:py-20 lg:px-12">
        <div className="mx-auto max-w-7xl">
          <SectionHeading
            eyebrow="The AAVIRÁ Difference"
            title="Made to Be Remembered"
            description="Every detail matters when it comes to something you will treasure."
          />

          <div className="mt-12 grid gap-10 md:grid-cols-3 md:gap-8">
            {reasons.map((reason) => (
              <div
                key={reason.number}
                className="border-t border-brand-gold pt-6"
              >
                <span className="font-serif text-3xl text-brand-gold">
                  {reason.number}
                </span>

                <h3 className="mt-5 font-serif text-2xl text-brand-primary">
                  {reason.title}
                </h3>

                <p className="mt-3 text-sm leading-7 text-brand-text-secondary">
                  {reason.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* =====================================================
          FINAL CTA
      ===================================================== */}
      <section className="bg-brand-primary px-5 py-20 text-center sm:px-8 lg:py-28">
        <div className="mx-auto max-w-3xl">
          <p className="text-xs font-medium uppercase tracking-[0.35em] text-brand-gold">
            Your Next Occasion Awaits
          </p>

          <h2 className="mt-5 font-serif text-4xl leading-tight text-white sm:text-5xl lg:text-6xl">
            Dress in
            <span className="italic text-brand-champagne"> Tradition.</span>
            <br />
            Live in Luxury.
          </h2>

          <p className="mx-auto mt-6 max-w-xl text-sm leading-7 text-brand-text-light">
            Explore our latest collection of sarees, lehengas and timeless
            ethnic wear.
          </p>

          <Link
            href="/new-arrivals"
            className="mt-8 inline-flex h-12 items-center justify-center bg-brand-gold px-9 text-xs font-semibold uppercase tracking-[0.15em] text-brand-primary transition hover:bg-brand-gold-light"
          >
            Shop New Arrivals
          </Link>
        </div>
      </section>
    </main>
  );
}

/* =========================================================
   SECTION HEADING
========================================================= */

function SectionHeading({
  eyebrow,
  title,
  description,
}: {
  eyebrow: string;
  title: string;
  description: string;
}) {
  return (
    <div className="mx-auto max-w-2xl text-center">
      <p className="text-xs font-medium uppercase tracking-[0.3em] text-brand-gold-dark">
        {eyebrow}
      </p>

      <h2 className="mt-4 font-serif text-3xl text-brand-primary sm:text-4xl lg:text-5xl">
        {title}
      </h2>

      <p className="mt-4 text-sm leading-7 text-brand-text-secondary">
        {description}
      </p>
    </div>
  );
}

/* =========================================================
   PRODUCT CARD
========================================================= */

interface ProductCardProps {
  name: string;
  category: string;
  price: string;
  image: string;
}

function ProductCard({ name, category, price, image }: ProductCardProps) {
  // const handleWishlist = (event: React.MouseEvent<HTMLButtonElement>) => {
  //   event.preventDefault();
  //   event.stopPropagation();

  //   console.log(`${name} added to wishlist`);
  // };

  return (
    <Link href="/products" className="group block">
      <div className="relative aspect-[3/4] overflow-hidden bg-brand-cream-dark">
        {/* Product Image */}
        <Image
          src={image}
          alt={name}
          fill
          sizes="(max-width: 768px) 50vw, (max-width: 1200px) 25vw, 300px"
          className="object-cover transition duration-700 group-hover:scale-105"
        />

        {/* Wishlist */}
        <button
          type="button"
          aria-label={`Add ${name} to wishlist`}
          // onClick={handleWishlist}
          className="
            absolute right-3 top-3
            flex h-9 w-9
            items-center justify-center
            rounded-full
            bg-brand-white/90
            text-xl text-brand-primary
            shadow-sm
            transition
            hover:bg-brand-gold
          "
        >
          ♡
        </button>

        {/* Quick View */}
        <div
          className="
            absolute bottom-0 left-0 right-0
            translate-y-full
            bg-brand-primary/95
            px-4 py-3
            text-center
            text-[10px]
            font-semibold
            uppercase
            tracking-[0.15em]
            text-brand-gold
            transition duration-300
            group-hover:translate-y-0
          "
        >
          Quick View
        </div>
      </div>

      {/* Product Information */}
      <div className="pt-4">
        <p className="text-[10px] uppercase tracking-[0.15em] text-brand-gold-dark">
          {category}
        </p>

        <h3 className="mt-2 font-serif text-lg text-brand-primary">{name}</h3>

        <p className="mt-2 text-sm font-medium text-brand-text">{price}</p>
      </div>
    </Link>
  );
}
