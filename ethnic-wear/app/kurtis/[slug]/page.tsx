import { notFound } from "next/navigation";

import KurtiDetails from "@/components/kurtis/KurtiDetails";
import { kurtis } from "@/lib/kurtis";

interface Props {
  params: Promise<{
    slug: string;
  }>;
}

export function generateStaticParams() {
  return kurtis.map((kurti) => ({
    slug: kurti.slug,
  }));
}

export async function generateMetadata({
  params,
}: Props) {
  const { slug } = await params;

  const kurti = kurtis.find(
    (item) => item.slug === slug
  );

  if (!kurti) {
    return {
      title: "Kurti Not Found | AAVIRÁ",
    };
  }

  return {
    title: `${kurti.name} | AAVIRÁ`,
    description: kurti.description,
  };
}

export default async function KurtiSlugPage({
  params,
}: Props) {
  const { slug } = await params;

  const kurti = kurtis.find(
    (item) => item.slug === slug
  );

  if (!kurti) {
    notFound();
  }

  return <KurtiDetails kurti={kurti} />;
}