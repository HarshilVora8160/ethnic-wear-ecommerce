import LehengasGrid from "@/components/lehengas/LehengasGrid";
import { lehengas } from "@/lib/lehengas";

export default function LehengasPage() {
  return (
    <main className="min-h-screen bg-[#fbf8f3]">

      {/* =====================================================
          PAGE HEADER
      ===================================================== */}

      <section className="mx-auto max-w-7xl px-4 pb-10 pt-14 sm:px-6 lg:px-8 lg:pt-20">

        <div className="mx-auto max-w-3xl text-center">

          <p className="text-xs font-semibold uppercase tracking-[0.3em] text-[#a1812d]">
            AAVIRÁ Collection
          </p>

          <h1 className="mt-4 font-serif text-5xl text-[#2c1913] sm:text-6xl">
            Lehengas
          </h1>

          <div className="mx-auto mt-5 h-px w-16 bg-[#d4af37]" />

          <p className="mx-auto mt-6 max-w-2xl text-sm leading-7 text-[#715f55] sm:text-base">
            Discover exquisite lehengas crafted with luxurious
            fabrics, intricate embroidery and timeless Indian
            craftsmanship.
          </p>

        </div>

      </section>

      {/* =====================================================
          COLLECTION
      ===================================================== */}

      <section className="mx-auto max-w-7xl px-4 pb-20 sm:px-6 lg:px-8">

        {/* Toolbar */}
        <div className="mb-8 flex flex-col gap-4 border-y border-[#e3d8cf] py-4 sm:flex-row sm:items-center sm:justify-between">

          <p className="text-sm text-[#796a61]">
            <span className="font-semibold text-[#2c1913]">
              {lehengas.length}
            </span>{" "}
            styles
          </p>

          <select
            defaultValue="featured"
            className="border border-[#d8ccc2] bg-white px-4 py-2.5 text-sm text-[#4d3930] outline-none focus:border-[#a1812d]"
            aria-label="Sort lehengas"
          >
            <option value="featured">
              Featured
            </option>

            <option value="newest">
              Newest
            </option>

            <option value="price-low">
              Price: Low to High
            </option>

            <option value="price-high">
              Price: High to Low
            </option>
          </select>

        </div>

        {/* Product Grid */}
        <LehengasGrid lehengas={lehengas} />

      </section>

    </main>
  );
}