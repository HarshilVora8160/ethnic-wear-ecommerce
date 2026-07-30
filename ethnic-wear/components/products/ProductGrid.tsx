import ProductCard from "./ProductCard";
import type { Product } from "@/lib/products";

interface ProductGridProps {
  products: Product[];
}

export default function ProductGrid({
  products,
}: ProductGridProps) {
  return (
    <div className="grid grid-cols-2 gap-x-4 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
      {products.map((product) => (
        <ProductCard
          key={product.id}
          product={product}
        />
      ))}
    </div>
  );
}