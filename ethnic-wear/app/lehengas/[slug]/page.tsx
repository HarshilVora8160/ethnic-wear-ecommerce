import { notFound } from "next/navigation";
import ProductDetails from "@/components/products/ProductDetails";
import { getLehengaBySlug, lehengas } from "@/lib/lehengas";

interface LehengaSlugPageProps {
  params: Promise<{
    slug: string;
  }>;
}

export async function generateStaticParams() {
  return lehengas.map((lehenga) => ({
    slug: lehenga.slug,
  }));
}

export async function generateMetadata({ params }: LehengaSlugPageProps) {
  const { slug } = await params;
  const lehenga = getLehengaBySlug(slug);

  if (!lehenga) {
    return { title: "Lehenga Not Found | AAVIRÁ" };
  }

  return {
    title: `${lehenga.name} | AAVIRÁ Lehengas`,
    description: lehenga.description,
  };
}

export default async function LehengaSlugPage({ params }: LehengaSlugPageProps) {
  const { slug } = await params;
  const lehenga = getLehengaBySlug(slug);

  if (!lehenga) {
    notFound();
  }

  return (
    <main className="min-h-screen bg-[#FAF8F5]">
      <ProductDetails product={lehenga} />
    </main>
  );
}