import KidsGrid from "@/components/kids/KidsGrid";
import { kidsProducts } from "@/lib/kids";

export default function KidsPage() {
  return (
    <main className="min-h-screen bg-[#fbf8f3]">

      <section className="mx-auto max-w-7xl px-4 pb-10 pt-14 text-center sm:px-6 lg:px-8 lg:pt-20">

        <p className="text-xs font-semibold uppercase tracking-[0.3em] text-[#a1812d]">
          AAVIRÁ Collection
        </p>

        <h1 className="mt-4 font-serif text-5xl text-[#2c1913] sm:text-6xl">
          Kids
        </h1>

        <div className="mx-auto mt-5 h-px w-16 bg-[#d4af37]" />

        <p className="mx-auto mt-6 max-w-2xl text-sm leading-7 text-[#715f55]">
          Beautiful ethnic styles for little celebrations,
          weddings and festive moments.
        </p>

      </section>

      <section className="mx-auto max-w-7xl px-4 pb-20 sm:px-6 lg:px-8">

        <div className="mb-8 flex items-center justify-between border-y border-[#e3d8cf] py-4">

          <p className="text-sm text-[#796a61]">
            <b>{kidsProducts.length}</b> styles
          </p>

          <select
            defaultValue="featured"
            className="border border-[#d8ccc2] bg-white px-4 py-2.5 text-sm"
          >
            <option value="featured">Featured</option>
            <option value="newest">Newest</option>
            <option value="price-low">Price: Low to High</option>
            <option value="price-high">Price: High to Low</option>
          </select>

        </div>

        <KidsGrid products={kidsProducts} />

      </section>

    </main>
  );
}