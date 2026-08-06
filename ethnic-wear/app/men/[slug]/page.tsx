import { notFound } from "next/navigation";
import ProductDetails from "@/components/products/ProductDetails";
import { getMenProductBySlug, menProducts } from "@/lib/men";

interface MenSlugPageProps {
  params: Promise<{
    slug: string;
  }>;
}

export async function generateStaticParams() {
  return menProducts.map((item) => ({
    slug: item.slug,
  }));
}

export async function generateMetadata({ params }: MenSlugPageProps) {
  const { slug } = await params;
  const product = getMenProductBySlug(slug);

  if (!product) {
    return { title: "Product Not Found | AAVIRÁ" };
  }

  return {
    title: `${product.name} | AAVIRÁ Men`,
    description: product.description,
  };
}

export default async function MenSlugPage({ params }: MenSlugPageProps) {
  const { slug } = await params;
  const product = getMenProductBySlug(slug);

  if (!product) {
    notFound();
  }

  return (
    <main className="min-h-screen bg-[#FAF8F5]">
      <ProductDetails product={product} />
    </main>
  );
}