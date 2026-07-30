import KidsCard from "./KidsCard";
import type { KidsProduct } from "@/lib/kids";

interface Props {
  products: KidsProduct[];
}

export default function KidsGrid({ products }: Props) {
  if (!products.length) {
    return (
      <div className="flex min-h-[350px] items-center justify-center">
        <div className="text-center">
          <h3 className="font-serif text-2xl text-[#2c1913]">
            No Kids Products Found
          </h3>
          <p className="mt-2 text-sm text-[#796a61]">
            We couldnt find any kids products.
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="grid grid-cols-2 gap-x-4 gap-y-10 md:grid-cols-3 lg:grid-cols-4 lg:gap-x-6">
      {products.map((product) => (
        <KidsCard
          key={product.id}
          product={product}
        />
      ))}
    </div>
  );
}