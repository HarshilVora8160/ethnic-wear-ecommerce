import { Product, products, getProductBySlug } from "./products";

export type MenProduct = Product;

export const menProducts: Product[] = products.filter(
  (p) => p.category === "Men"
);

export function getMenProductBySlug(slug: string): Product | undefined {
  const item = menProducts.find((p) => p.slug === slug);
  return item || getProductBySlug(slug);
}