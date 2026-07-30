import ProductGrid from "@/components/products/ProductGrid";
import { products } from "@/lib/products";

export default function ProductsPage() {
  return (
    <main className="min-h-screen bg-[#fbf8f3]">

      <section className="mx-auto max-w-7xl px-6 py-16 lg:px-8">

        <div className="mb-12 text-center">

          <p className="text-xs uppercase tracking-[0.3em] text-[#a1812d]">
            AAVIRÁ Collection
          </p>

          <h1 className="mt-3 font-serif text-5xl text-[#2c1913]">
            All Products
          </h1>

          <p className="mx-auto mt-4 max-w-xl text-[#715f55]">
            Explore our complete collection of timeless Indian
            fashion and contemporary designs.
          </p>

        </div>

        <ProductGrid products={products} />

      </section>

    </main>
  );
}