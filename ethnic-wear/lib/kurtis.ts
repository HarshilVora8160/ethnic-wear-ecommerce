import { Product, products, getProductBySlug } from "./products";

export type Kurti = Product;

export const kurtis: Product[] = products.filter(
  (p) => p.category === "Kurtis"
);

export function getKurtiBySlug(slug: string): Product | undefined {
  const kurti = kurtis.find((k) => k.slug === slug);
  return kurti || getProductBySlug(slug);
}