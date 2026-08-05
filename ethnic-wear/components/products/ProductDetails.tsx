import Image from "next/image";
import { Product } from "@/lib/products";

interface Props {
  product: Product;
}

export default function ProductDetails({ product }: Props) {
  return (
    <section className="max-w-7xl mx-auto px-6 py-12">
      <div className="grid lg:grid-cols-2 gap-12">

        <div className="space-y-4">

          <div className="relative aspect-[4/5] overflow-hidden rounded-2xl bg-gray-100">
            <Image
              src={product.image}
              alt={product.name}
              fill
              className="object-cover"
            />
          </div>

          <div className="grid grid-cols-4 gap-3">
            {product.images.map((img, index) => (
              <div
                key={index}
                className="relative aspect-square rounded-lg overflow-hidden border"
              >
                <Image
                  src={img}
                  alt={product.name}
                  fill
                  className="object-cover"
                />
              </div>
            ))}
          </div>

        </div>

        <div className="space-y-6">

          {product.badge && (
            <span className="inline-flex rounded-full bg-amber-100 px-4 py-1 text-sm font-medium text-amber-700">
              {product.badge}
            </span>
          )}

          <h1 className="text-4xl font-bold">
            {product.name}
          </h1>

          <div className="flex items-center gap-4">

            <span className="text-4xl font-bold text-amber-700">
              ₹{product.price.toLocaleString()}
            </span>

            {product.oldPrice && (
              <span className="text-xl line-through text-gray-400">
                ₹{product.oldPrice.toLocaleString()}
              </span>
            )}

          </div>

          <p className="text-gray-600 leading-7">
            {product.description}
          </p>

          <div className="grid grid-cols-2 gap-5 border-y py-6">

            <Info title="Category" value={product.category} />
            <Info title="Fabric" value={product.fabric} />
            <Info title="Color" value={product.color} />
            <Info title="Work" value={product.work} />
            <Info title="Technique" value={product.technique ?? "-"} />
            <Info title="Occasion" value={product.occasion} />
            <Info title="Rating" value={`${product.rating} ⭐`} />
            <Info title="Stock" value={`${product.stock} Available`} />

          </div>

          {product.sizes && (
            <div>

              <h3 className="font-semibold mb-3">
                Select Size
              </h3>

              <div className="flex flex-wrap gap-3">
                {product.sizes.map((size) => (
                  <button
                    key={size}
                    className="border rounded-lg px-5 py-2 hover:bg-black hover:text-white"
                  >
                    {size}
                  </button>
                ))}
              </div>

            </div>
          )}

          <button className="w-full rounded-xl bg-black py-4 text-white text-lg font-semibold hover:bg-gray-900">
            Add To Cart
          </button>

        </div>

      </div>
    </section>
  );
}

function Info({
  title,
  value,
}: {
  title: string;
  value: string;
}) {
  return (
    <div>
      <p className="text-sm text-gray-500">{title}</p>
      <p className="font-semibold">{value}</p>
    </div>
  );
}