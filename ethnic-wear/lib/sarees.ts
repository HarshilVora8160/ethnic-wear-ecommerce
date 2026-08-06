import { Product, products, getProductBySlug } from "./products";

export type Saree = Product;

export const sarees: Product[] = products.filter(
  (p) => p.category === "Sarees"
);

export function getSareeBySlug(slug: string): Product | undefined {
  const saree = sarees.find((s) => s.slug === slug);
  return saree || getProductBySlug(slug);
}