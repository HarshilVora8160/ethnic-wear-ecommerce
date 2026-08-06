import React from "react";
import Image from "next/image";
import Link from "next/link";
import SectionHeading from "@/components/ui/SectionHeading";

const categories = [
  {
    name: "Banarasi & Silk Sarees",
    count: "120+ Designs",
    description: "Opulent handloom drapes for weddings and festivals",
    href: "/sarees",
    image: "https://images.unsplash.com/photo-1610030469983-98e550d6193c?auto=format&fit=crop&w=800&q=80",
  },
  {
    name: "Bridal & Party Lehengas",
    count: "85+ Couture Sets",
    description: "Bespoke zardozi & mirrorwork voluminous silhouettes",
    href: "/lehengas",
    image: "https://images.unsplash.com/photo-1583391733956-3750e0ff4e8b?auto=format&fit=crop&w=800&q=80",
  },
  {
    name: "Festive Anarkalis & Kurtis",
    count: "140+ Styles",
    description: "Chanderi silk & embroidered flared ethnic ensembles",
    href: "/kurtis",
    image: "https://images.unsplash.com/photo-1572804013309-59a88b7e92f1?auto=format&fit=crop&w=800&q=80",
  },
  {
    name: "Salwar & Sharara Suits",
    count: "95+ Outfits",
    description: "Intricate Chikankari & Gota Patti tailored sets",
    href: "/salwar-suits",
    image: "https://images.unsplash.com/photo-1563178406-4cdc2923acbc?auto=format&fit=crop&w=800&q=80",
  },
  {
    name: "Royal Menswear Sherwanis",
    count: "60+ Groom Suits",
    description: "Raw silk sherwanis, bandhgalas & embroidered kurtas",
    href: "/men",
    image: "https://images.unsplash.com/photo-1597983073493-88cd35cf93b0?auto=format&fit=crop&w=800&q=80",
  },
  {
    name: "Bespoke Zardozi Atelier",
    count: "Made-to-Order",
    description: "Crafted exclusively around your personal measurements",
    href: "/custom-design",
    image: "https://images.unsplash.com/photo-1600185365483-26d7a4cc7519?auto=format&fit=crop&w=800&q=80",
  },
];

export default function CategoryGrid() {
  return (
    <section className="bg-[#FAF6F0] px-4 py-20 sm:px-6 lg:px-8 lg:py-28 border-b border-[#E6DED6]">
      <div className="mx-auto max-w-7xl">
        <SectionHeading
          subtitle="Discover Collections"
          title="Curated Couture Categories"
          description="Explore our masterfully crafted Indian ethnic wear collections, woven with rich heritage fabrics and timeless handwork."
        />

        <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {categories.map((category) => (
            <Link
              key={category.name}
              href={category.href}
              className="group relative block aspect-[3/4] overflow-hidden border border-[#E6DED6] bg-[#120C0E] shadow-md transition-all duration-500 hover:border-[#D4AF37] hover:shadow-2xl"
            >
              <Image
                src={category.image}
                alt={category.name}
                fill
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 400px"
                className="object-cover transition-transform duration-700 ease-out group-hover:scale-105 filter brightness-95 group-hover:brightness-105"
              />

              {/* Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#120C0E]/95 via-[#120C0E]/40 to-transparent transition-opacity group-hover:from-[#120C0E]/90" />

              {/* Gold Top Badge */}
              <div className="absolute top-4 left-4 z-10">
                <span className="bg-[#2A0812] px-3 py-1 text-[10px] font-bold uppercase tracking-widest text-[#F3E5AB] border border-[#D4AF37]/40 shadow-xs">
                  {category.count}
                </span>
              </div>

              {/* Bottom Info */}
              <div className="absolute inset-x-0 bottom-0 z-10 p-6 text-white flex flex-col justify-end">
                <h3 className="font-serif text-2xl font-medium text-[#F3E5AB] group-hover:text-white transition">
                  {category.name}
                </h3>
                <p className="mt-2 text-xs text-[#CDBDB2] line-clamp-2 leading-relaxed">
                  {category.description}
                </p>
                <div className="mt-4 flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-[#D4AF37]">
                  <span>Explore Collection</span>
                  <span className="transition-transform group-hover:translate-x-1.5">&rarr;</span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}