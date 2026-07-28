import Image from "next/image";
import Link from "next/link";

const images = [
  {
    src: "/images/home/hero.jpg",
    alt: "AAVIRÁ fashion collection",
  },
  {
    src: "/images/categories/saree.jpg",
    alt: "AAVIRÁ sarees",
  },
  {
    src: "/images/categories/lehenga.jpg",
    alt: "AAVIRÁ lehengas",
  },
  {
    src: "/images/home/embroidery.jpg",
    alt: "AAVIRÁ embroidery",
  },
];

export default function InstagramGallery() {
  return (
    <section className="bg-brand-ivory px-5 py-20 sm:px-8 lg:px-12 lg:py-28">
      <div className="mx-auto max-w-7xl">
        <div className="text-center">
          <p className="text-[10px] font-medium uppercase tracking-[0.35em] text-brand-gold-dark">
            Follow the Journey
          </p>

          <h2 className="mt-5 font-serif text-4xl text-brand-primary sm:text-5xl">
            @aavira
          </h2>
        </div>

        <div className="mt-12 grid grid-cols-2 gap-2 md:grid-cols-4 md:gap-4">
          {images.map((image) => (
            <Link
              key={image.src}
              href="#"
              className="group relative aspect-square overflow-hidden"
            >
              <Image
                src={image.src}
                alt={image.alt}
                fill
                sizes="(max-width: 768px) 50vw, 25vw"
                className="object-cover transition duration-700 group-hover:scale-105"
              />

              <div className="absolute inset-0 flex items-center justify-center bg-brand-primary/0 text-white opacity-0 transition duration-300 group-hover:bg-brand-primary/45 group-hover:opacity-100">
                <span className="text-2xl">↗</span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}