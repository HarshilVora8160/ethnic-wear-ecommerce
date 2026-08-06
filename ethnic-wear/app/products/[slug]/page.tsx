import { notFound } from "next/navigation";
import { products, getProductBySlug } from "@/lib/products";
import ProductDetails from "@/components/products/ProductDetails";

interface Props {
  params: Promise<{
    slug: string;
  }>;
}

export async function generateStaticParams() {
  return products.map((product) => ({
    slug: product.slug,
  }));
}

export async function generateMetadata({ params }: Props) {
  const { slug } = await params;
  const product = getProductBySlug(slug);

  if (!product) {
    return {
      title: "Product Not Found | AAVIRÁ",
    };
  }

  return {
    title: `${product.name} | AAVIRÁ Couture`,
    description: product.description,
  };
}

export default async function ProductSlugPage({ params }: Props) {
  const { slug } = await params;
  const product = getProductBySlug(slug);

  if (!product) {
    notFound();
  }

  return (
    <main className="bg-[#FAF8F5] min-h-screen">
      <ProductDetails product={product} />
    </main>
  );
}