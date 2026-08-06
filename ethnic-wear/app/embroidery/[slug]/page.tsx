import { notFound } from "next/navigation";
import ProductDetails from "@/components/products/ProductDetails";
import { getEmbroideryBySlug, embroideryServices } from "@/lib/embroidery";

interface EmbroiderySlugPageProps {
  params: Promise<{
    slug: string;
  }>;
}

export async function generateStaticParams() {
  return embroideryServices.map((item) => ({
    slug: item.slug,
  }));
}

export async function generateMetadata({ params }: EmbroiderySlugPageProps) {
  const { slug } = await params;
  const product = getEmbroideryBySlug(slug);

  if (!product) {
    return { title: "Service Not Found | AAVIRÁ" };
  }

  return {
    title: `${product.name} | AAVIRÁ Embroidery`,
    description: product.description,
  };
}

export default async function EmbroiderySlugPage({ params }: EmbroiderySlugPageProps) {
  const { slug } = await params;
  const product = getEmbroideryBySlug(slug);

  if (!product) {
    notFound();
  }

  return (
    <main className="min-h-screen bg-[#FAF8F5]">
      <ProductDetails product={product} />
    </main>
  );
}