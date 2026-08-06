import { notFound } from "next/navigation";
import ProductDetails from "@/components/products/ProductDetails";
import { getKurtiBySlug, kurtis } from "@/lib/kurtis";

interface KurtiSlugPageProps {
  params: Promise<{
    slug: string;
  }>;
}

export async function generateStaticParams() {
  return kurtis.map((item) => ({
    slug: item.slug,
  }));
}

export async function generateMetadata({ params }: KurtiSlugPageProps) {
  const { slug } = await params;
  const kurti = getKurtiBySlug(slug);

  if (!kurti) {
    return { title: "Kurti Not Found | AAVIRÁ" };
  }

  return {
    title: `${kurti.name} | AAVIRÁ Kurtis`,
    description: kurti.description,
  };
}

export default async function KurtiSlugPage({ params }: KurtiSlugPageProps) {
  const { slug } = await params;
  const kurti = getKurtiBySlug(slug);

  if (!kurti) {
    notFound();
  }

  return (
    <main className="min-h-screen bg-[#FAF8F5]">
      <ProductDetails product={kurti} />
    </main>
  );
}