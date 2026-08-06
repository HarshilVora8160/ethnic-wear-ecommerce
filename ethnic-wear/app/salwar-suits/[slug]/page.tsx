import { notFound } from "next/navigation";
import ProductDetails from "@/components/products/ProductDetails";
import { getSalwarSuitBySlug, salwarSuits } from "@/lib/salwar-suits";

interface SalwarSuitSlugPageProps {
  params: Promise<{
    slug: string;
  }>;
}

export async function generateStaticParams() {
  return salwarSuits.map((item) => ({
    slug: item.slug,
  }));
}

export async function generateMetadata({ params }: SalwarSuitSlugPageProps) {
  const { slug } = await params;
  const product = getSalwarSuitBySlug(slug);

  if (!product) {
    return { title: "Product Not Found | AAVIRÁ" };
  }

  return {
    title: `${product.name} | AAVIRÁ Salwar Suits`,
    description: product.description,
  };
}

export default async function SalwarSuitSlugPage({ params }: SalwarSuitSlugPageProps) {
  const { slug } = await params;
  const product = getSalwarSuitBySlug(slug);

  if (!product) {
    notFound();
  }

  return (
    <main className="min-h-screen bg-[#FAF8F5]">
      <ProductDetails product={product} />
    </main>
  );
}