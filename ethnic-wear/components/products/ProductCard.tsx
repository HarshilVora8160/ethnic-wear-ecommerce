import Image from "next/image";
import Link from "next/link";
import WishlistButton from "./WishlistButton";

interface ProductCardProps {
  name: string;
  category: string;
  price: string;
  image: string;
  href: string;
  badge?: string;
}

export default function ProductCard({
  name,
  category,
  price,
  image,
  href,
  badge,
}: ProductCardProps) {
  return (
    <article className="group">
      <div className="relative aspect-[3/4] overflow-hidden bg-brand-cream-dark">
        <Link href={href} className="absolute inset-0 z-0">
          <Image
            src={image}
            alt={name}
            fill
            sizes="(max-width: 768px) 50vw, (max-width: 1200px) 25vw, 300px"
            className="object-cover transition duration-700 ease-out group-hover:scale-105"
          />
        </Link>

        <div className="absolute left-3 top-3 z-10">
          {badge && (
            <span className="bg-brand-gold px-3 py-1.5 text-[8px] font-bold uppercase tracking-[0.15em] text-brand-primary">
              {badge}
            </span>
          )}
        </div>

        <div className="absolute right-3 top-3 z-10">
          <WishlistButton productName={name} />
        </div>

        <Link
          href={href}
          className="absolute bottom-0 left-0 right-0 z-10 translate-y-full bg-brand-primary/95 px-4 py-3 text-center text-[9px] font-semibold uppercase tracking-[0.2em] text-brand-gold transition duration-300 group-hover:translate-y-0"
        >
          View Product
        </Link>
      </div>

      <Link href={href} className="block pt-4">
        <p className="text-[9px] font-medium uppercase tracking-[0.18em] text-brand-gold-dark">
          {category}
        </p>

        <h3 className="mt-2 font-serif text-lg leading-snug text-brand-primary">
          {name}
        </h3>

        <p className="mt-2 text-sm font-medium text-brand-text">{price}</p>
      </Link>
    </article>
  );
}