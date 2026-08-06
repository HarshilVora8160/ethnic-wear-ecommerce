import { Product, products, getProductBySlug } from "./products";

export type Embroidery = Product;

export const embroideryServices: Product[] = products.filter(
  (p) => p.category === "Embroidery"
);

export const embroideryDesigns = embroideryServices;

export function getEmbroideryBySlug(slug: string): Product | undefined {
  const item = embroideryServices.find((p) => p.slug === slug);
  return item || getProductBySlug(slug);
}