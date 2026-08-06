import { notFound } from "next/navigation";
import ProductDetails from "@/components/products/ProductDetails";
import { getSareeBySlug, sarees } from "@/lib/sarees";

interface SareePageProps {
  params: Promise<{
    slug: string;
  }>;
}

export async function generateStaticParams() {
  return sarees.map((item) => ({
    slug: item.slug,
  }));
}

export async function generateMetadata({ params }: SareePageProps) {
  const { slug } = await params;
  const saree = getSareeBySlug(slug);

  if (!saree) {
    return { title: "Saree Not Found | AAVIRÁ" };
  }

  return {
    title: `${saree.name} | AAVIRÁ Sarees`,
    description: saree.description,
  };
}

export default async function SareePage({ params }: SareePageProps) {
  const { slug } = await params;
  const saree = getSareeBySlug(slug);

  if (!saree) {
    notFound();
  }

  return (
    <main className="min-h-screen bg-[#FAF8F5]">
      <ProductDetails product={saree} />
    </main>
  );
}