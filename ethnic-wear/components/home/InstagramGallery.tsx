import React from "react";
import Image from "next/image";
import SectionHeading from "@/components/ui/SectionHeading";

const instaPosts = [
  { src: "https://images.unsplash.com/photo-1610030469983-98e550d6193c?auto=format&fit=crop&w=600&q=80", tag: "#BanarasiRoyal" },
  { src: "https://images.unsplash.com/photo-1583391733956-3750e0ff4e8b?auto=format&fit=crop&w=600&q=80", tag: "#AaviraBride" },
  { src: "https://images.unsplash.com/photo-1617627143750-d86bc21e42bb?auto=format&fit=crop&w=600&q=80", tag: "#OrganzaElegance" },
  { src: "https://images.unsplash.com/photo-1572804013309-59a88b7e92f1?auto=format&fit=crop&w=600&q=80", tag: "#FestiveSuits" },
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