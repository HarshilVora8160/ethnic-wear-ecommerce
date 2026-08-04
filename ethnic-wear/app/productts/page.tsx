import { products } from "@/lib/products";
import ProductGrid from "@/components/products/ProductGrid";

export const metadata = {
  title: "All Products | AAVIRÁ",
  description:
    "Discover premium sarees, lehengas, kurtis, men's ethnic wear, and more.",
};

export default function ProductsPage() {
  return (
    <main className="bg-[#faf8f5] min-h-screen">

      {/* Hero Section */}
      <section className="border-b bg-gradient-to-r from-[#fff8ef] via-[#faf8f5] to-[#f8efe6]">
        <div className="mx-auto max-w-7xl px-6 py-16 text-center">

          <span className="inline-block rounded-full bg-[#8b5e3c]/10 px-4 py-1 text-sm font-medium text-[#8b5e3c]">
            Premium Ethnic Collection
          </span>

          <h1 className="mt-5 text-5xl font-bold text-[#2d1f17]">
            Our Products
          </h1>

          <p className="mx-auto mt-4 max-w-2xl text-gray-600">
            Explore handcrafted sarees, bridal lehengas, festive kurtis,
            sherwanis, embroidery collections, and luxury ethnic fashion.
          </p>

        </div>
      </section>

      {/* Product Grid */}
      <section className="mx-auto max-w-7xl px-6 py-14">

        <div className="mb-8 flex items-center justify-between">

          <div>
            <h2 className="text-2xl font-bold text-[#2d1f17]">
              {products.length} Products
            </h2>

            <p className="text-gray-500">
              Premium handcrafted ethnic wear.
            </p>
          </div>

        </div>

        <ProductGrid products={products} />

      </section>

    </main>
  );
}