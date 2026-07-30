import EmbroideryGrid from "@/components/embroidery/EmbroideryGrid";

import {
  embroideryDesigns,
} from "@/lib/embroidery";

export default function EmbroideryPage() {
  return (
    <main>
      {/* Page Header */}
      <section className="bg-[#2c1913] px-5 py-20 text-[#f8f1e9] md:px-8">
        <div className="mx-auto max-w-[1440px]">
          <p className="text-[10px] uppercase tracking-[0.3em] text-[#c9a96e]">
            AAVIRÁ
          </p>

          <h1 className="mt-4 max-w-3xl font-serif text-5xl leading-tight md:text-7xl">
            Embroidery
            <span className="block italic text-[#c9a96e]">
              Collection
            </span>
          </h1>

          <p className="mt-6 max-w-xl text-sm leading-7 text-[#d4c6bc]">
            Explore intricate embroidery patterns designed to
            bring timeless craftsmanship and modern elegance
            to your wardrobe.
          </p>
        </div>
      </section>

      <EmbroideryGrid
        embroideryDesigns={embroideryDesigns}
      />
    </main>
  );
}