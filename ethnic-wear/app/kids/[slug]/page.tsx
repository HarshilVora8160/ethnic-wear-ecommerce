import { notFound } from "next/navigation";
import ProductDetails from "@/components/products/ProductDetails";
import { getKidsProductBySlug, kidsProducts } from "@/lib/kids";

interface KidsSlugPageProps {
  params: Promise<{
    slug: string;
  }>;
}

export async function generateStaticParams() {
  return kidsProducts.map((item) => ({
    slug: item.slug,
  }));
}

export async function generateMetadata({ params }: KidsSlugPageProps) {
  const { slug } = await params;
  const product = getKidsProductBySlug(slug);

  if (!product) {
    return { title: "Product Not Found | AAVIRÁ" };
  }

  return {
    title: `${product.name} | AAVIRÁ Kids`,
    description: product.description,
  };
}

export default async function KidsSlugPage({ params }: KidsSlugPageProps) {
  const { slug } = await params;
  const product = getKidsProductBySlug(slug);

  if (!product) {
    notFound();
  }

  return (
    <main className="min-h-screen bg-[#FAF8F5]">
      <ProductDetails product={product} />
    </main>
  );
}