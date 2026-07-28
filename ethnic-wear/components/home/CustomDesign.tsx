import Image from "next/image";
import Link from "next/link";

export default function CustomDesign() {
  return (
    <section className="overflow-hidden bg-brand-dark">
      <div className="mx-auto grid max-w-7xl lg:grid-cols-2">
        <div className="relative min-h-[500px] lg:min-h-[650px]">
          <Image
            src="/images/home/custom-design.jpg"
            alt="AAVIRÁ custom saree design"
            fill
            sizes="(max-width: 1024px) 100vw, 50vw"
            className="object-cover transition duration-700 hover:scale-105"
          />

          <div className="absolute inset-0 bg-gradient-to-t from-brand-primary/50 to-transparent" />
        </div>

        <div className="flex items-center px-6 py-20 sm:px-12 lg:px-16">
          <div className="max-w-xl">
            <p className="text-[10px] font-medium uppercase tracking-[0.35em] text-brand-gold">
              Create Something Personal
            </p>

            <h2 className="mt-5 font-serif text-4xl leading-tight text-white sm:text-5xl lg:text-6xl">
              Your Saree.
              <br />
              <span className="italic text-brand-champagne">
                Your Story.
              </span>
            </h2>

            <p className="mt-7 text-sm leading-8 text-brand-text-light sm:text-base">
              Design a saree that is uniquely yours. Choose your fabric, color,
              border, embroidery and details to create a piece made around your
              personality.
            </p>

            <div className="mt-8 grid grid-cols-2 gap-3 text-xs text-white/70 sm:grid-cols-4">
              {["Fabric", "Color", "Embroidery", "Border"].map((item) => (
                <div
                  key={item}
                  className="border border-white/10 px-3 py-4 text-center"
                >
                  {item}
                </div>
              ))}
            </div>

            <Link
              href="/custom-design"
              className="mt-9 inline-flex h-13 items-center justify-center bg-brand-gold px-9 text-[10px] font-semibold uppercase tracking-[0.2em] text-brand-primary transition hover:bg-brand-gold-light"
            >
              Design Your Saree
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}