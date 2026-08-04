import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { products } from "@/lib/products";

interface Props {
  params: Promise<{
    slug: string;
  }>;
}

export default async function ProductDetailsPage({ params }: Props) {
  const { slug } = await params;

  const product = products.find((item) => item.slug === slug);

  if (!product) {
    notFound();
  }

  const relatedProducts = products
    .filter(
      (item) =>
        item.category === product.category &&
        item.id !== product.id
    )
    .slice(0, 4);

  const discount =
    product.originalPrice || product.oldPrice
      ? Math.round(
          (((product.originalPrice || product.oldPrice)! - product.price) /
            (product.originalPrice || product.oldPrice)!) *
            100
        )
      : 0;

  return (
    <main className="bg-[#faf8f4] py-10">

      <div className="max-w-7xl mx-auto px-5">

        {/* Breadcrumb */}

        <div className="mb-8 text-sm text-gray-500">

          <Link href="/">Home</Link>

          <span className="mx-2">/</span>

          <Link href="/products">Products</Link>

          <span className="mx-2">/</span>

          <span>{product.name}</span>

        </div>

        {/* Main */}

        <div className="grid lg:grid-cols-2 gap-12">

          {/* Images */}

          <div>

            <div className="relative aspect-square rounded-3xl overflow-hidden shadow-lg bg-white">

              <Image
                src={product.image}
                alt={product.name}
                fill
                className="object-cover"
              />

            </div>

            <div className="grid grid-cols-4 gap-4 mt-5">

              {product.images.map((img, index) => (

                <div
                  key={index}
                  className="relative aspect-square rounded-xl overflow-hidden border"
                >

                  <Image
                    src={img}
                    alt=""
                    fill
                    className="object-cover"
                  />

                </div>

              ))}

            </div>

          </div>

          {/* Details */}

          <div>

            {product.badge && (

              <span className="inline-block bg-amber-100 text-amber-800 px-3 py-1 rounded-full text-sm mb-4">
                {product.badge}
              </span>

            )}

            <h1 className="text-4xl font-bold text-[#2d1f17]">
              {product.name}
            </h1>

            <div className="flex items-center gap-3 mt-4">

              <span className="text-4xl font-bold text-[#8b5e3c]">
                ₹{product.price.toLocaleString()}
              </span>

              {product.originalPrice && (

                <span className="line-through text-gray-400 text-xl">
                  ₹{product.originalPrice.toLocaleString()}
                </span>

              )}

              {discount > 0 && (

                <span className="bg-red-100 text-red-600 px-2 py-1 rounded">
                  {discount}% OFF
                </span>

              )}

            </div>

            <div className="flex items-center gap-3 mt-4">

              <span>⭐ {product.rating}</span>

              <span className="text-gray-500">
                ({product.reviews} Reviews)
              </span>

            </div>

            <p className="text-gray-600 leading-8 mt-6">
              {product.description}
            </p>

            <div className="mt-8 space-y-3 border-t pt-6">

              <div className="flex justify-between">
                <span className="font-semibold">Category</span>
                <span>{product.category}</span>
              </div>

              <div className="flex justify-between">
                <span className="font-semibold">Fabric</span>
                <span>{product.fabric}</span>
              </div>

              <div className="flex justify-between">
                <span className="font-semibold">Work</span>
                <span>{product.work}</span>
              </div>

              {product.technique && (

                <div className="flex justify-between">
                  <span className="font-semibold">Technique</span>
                  <span>{product.technique}</span>
                </div>

              )}

              {product.style && (

                <div className="flex justify-between">
                  <span className="font-semibold">Style</span>
                  <span>{product.style}</span>
                </div>

              )}

              <div className="flex justify-between">
                <span className="font-semibold">Color</span>

                <div className="flex items-center gap-2">

                  {product.colorCode && (

                    <span
                      className="w-5 h-5 rounded-full border"
                      style={{
                        backgroundColor: product.colorCode,
                      }}
                    />

                  )}

                  {product.color}

                </div>

              </div>

              <div className="flex justify-between">
                <span className="font-semibold">Occasion</span>
                <span>{product.occasion}</span>
              </div>

              <div className="flex justify-between">
                <span className="font-semibold">Availability</span>

                <span
                  className={
                    product.stock && product.stock > 0
                      ? "text-green-600"
                      : "text-red-600"
                  }
                >
                  {product.stock} in stock
                </span>

              </div>

            </div>

            {product.sizes && (

              <div className="mt-8">

                <h3 className="font-semibold mb-3">
                  Sizes
                </h3>

                <div className="flex flex-wrap gap-3">

                  {product.sizes.map((size) => (

                    <button
                      key={size}
                      className="border rounded-lg px-5 py-2 hover:bg-black hover:text-white transition"
                    >
                      {size}
                    </button>

                  ))}

                </div>

              </div>

            )}

            <div className="flex gap-4 mt-10">

              <button className="flex-1 rounded-xl bg-[#8b5e3c] text-white py-4 font-semibold hover:bg-[#6f472a] transition">
                Add to Cart
              </button>

              <button className="flex-1 rounded-xl border-2 border-[#8b5e3c] text-[#8b5e3c] py-4 font-semibold hover:bg-[#8b5e3c] hover:text-white transition">
                Buy Now
              </button>

            </div>

          </div>

        </div>

        {/* Related Products */}

        {relatedProducts.length > 0 && (

          <section className="mt-20">

            <h2 className="text-3xl font-bold mb-8">
              Related Products
            </h2>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">

              {relatedProducts.map((item) => (

                <Link
                  key={item.id}
                  href={`/products/${item.slug}`}
                  className="bg-white rounded-2xl overflow-hidden shadow hover:shadow-xl transition"
                >

                  <div className="relative aspect-square">

                    <Image
                      src={item.image}
                      alt={item.name}
                      fill
                      className="object-cover"
                    />

                  </div>

                  <div className="p-4">

                    <h3 className="font-semibold line-clamp-2">
                      {item.name}
                    </h3>

                    <p className="text-[#8b5e3c] font-bold mt-2">
                      ₹{item.price.toLocaleString()}
                    </p>

                  </div>

                </Link>

              ))}

            </div>

          </section>

        )}

      </div>

    </main>
  );
}