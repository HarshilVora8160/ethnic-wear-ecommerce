import React from "react";
import Image from "next/image";
import SectionHeading from "@/components/ui/SectionHeading";

const instaPosts = [
  { src: "/images/products/banarasi-saree.jpg", tag: "#BanarasiRoyal" },
  { src: "/images/products/bridal-lehenga.jpg", tag: "#AaviraBride" },
  { src: "/images/products/designer-saree.jpg", tag: "#OrganzaElegance" },
  { src: "/images/products/embroidered-kurti.jpg", tag: "#FestiveSuits" },
];

export default function InstagramGallery() {
  return (
    <section className="bg-[#FAF6F0] px-4 py-20 sm:px-6 lg:px-8 lg:py-28 border-b border-[#E6DED6]">
      <div className="mx-auto max-w-7xl">
        <SectionHeading
          subtitle="Follow Our Atelier"
          title="@AAVIRÁ.COUTURE"
          description="Tag #AaviraRoyal on Instagram for a chance to be featured in our seasonal lookbooks."
        />

        <div className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-4">
          {instaPosts.map((post, idx) => (
            <div
              key={idx}
              className="group relative aspect-square overflow-hidden border border-[#E6DED6] bg-[#120C0E]"
            >
              <Image
                src={post.src}
                alt={post.tag}
                fill
                sizes="(max-width: 768px) 50vw, 25vw"
                className="object-cover transition-transform duration-700 group-hover:scale-110 filter brightness-95 group-hover:brightness-105"
              />
              <div className="absolute inset-0 bg-[#2A0812]/70 opacity-0 transition-opacity duration-300 group-hover:opacity-100 flex flex-col items-center justify-center text-white p-4">
                <span className="text-2xl">📸</span>
                <span className="mt-2 font-serif text-sm text-[#F3E5AB] font-medium">{post.tag}</span>
                <span className="mt-1 text-[10px] uppercase tracking-widest text-[#CDBDB2]">Shop The Look</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}