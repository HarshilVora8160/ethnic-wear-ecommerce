import Image from "next/image";
import Link from "next/link";
import SectionHeading from "@/components/ui/SectionHeading";

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

export default function CategoryGrid() {
  return (
    <section className="bg-brand-ivory px-5 py-20 sm:px-8 lg:px-12 lg:py-28">
      <div className="mx-auto max-w-7xl">
        <SectionHeading
          eyebrow="Explore"
          title="Shop by Category"
          description="Discover silhouettes designed for celebrations, traditions and everyday elegance."
        />

        <div className="mt-14 grid grid-cols-2 gap-3 sm:gap-5 lg:grid-cols-4 lg:gap-6">
          {categories.map((category) => (
            <Link
              key={category.name}
              href={category.href}
              className="group block"
            >
              <article className="relative aspect-[3/4] overflow-hidden bg-brand-cream-dark">
                <Image
                  src={category.image}
                  alt={`${category.name} collection`}
                  fill
                  sizes="(max-width: 640px) 50vw, (max-width: 1024px) 25vw, 300px"
                  className="object-cover transition duration-700 ease-out group-hover:scale-105"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-brand-primary/90 via-brand-primary/10 to-transparent" />

                <div className="absolute inset-x-0 bottom-0 p-5 text-white sm:p-7">
                  <p className="font-serif text-xl sm:text-2xl">
                    {category.name}
                  </p>

                  <p className="mt-1 hidden text-xs leading-5 text-white/75 sm:block">
                    {category.description}
                  </p>

                  <span className="mt-4 inline-block text-[9px] font-semibold uppercase tracking-[0.2em] text-brand-champagne">
                    Explore Collection →
                  </span>
                </div>
              </article>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}