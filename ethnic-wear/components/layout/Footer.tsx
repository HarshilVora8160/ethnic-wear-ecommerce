import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-brand-footer text-brand-cream">
      {/* Newsletter */}
      <div className="border-b border-brand-footer-border">
        <div className="mx-auto max-w-7xl px-5 py-12 sm:px-6 lg:px-8">
          <div className="grid gap-8 md:grid-cols-2 md:items-center">
            <div>
              <p className="mb-2 text-xs font-medium uppercase tracking-[0.2em] text-brand-gold">
                Stay Connected
              </p>

              <h2 className="font-serif text-3xl font-medium sm:text-4xl">
                Join the AAVIRÁ Family
              </h2>

              <p className="mt-3 max-w-lg text-sm leading-6 text-brand-text-light">
                Be the first to discover new collections, exclusive offers,
                styling inspiration and more.
              </p>
            </div>

            <div>
              <form className="flex flex-col gap-3 sm:flex-row">
                <input
                  type="email"
                  placeholder="Enter your email address"
                  className="min-h-12 flex-1 border border-brand-border-dark bg-transparent px-4 text-sm text-white outline-none placeholder:text-brand-text-muted focus:border-brand-gold"
                />

                <button
                  type="submit"
                  className="min-h-12 bg-brand-gold px-7 text-xs font-semibold uppercase tracking-wider text-brand-footer transition hover:bg-brand-gold-light"
                >
                  Subscribe
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>

      {/* Main Footer */}
      <div className="mx-auto max-w-7xl px-5 py-14 sm:px-6 lg:px-8">
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-5">
          {/* Brand */}
          <div className="lg:col-span-2">
            <Link href="/" className="inline-block">
              <span className="block font-serif text-3xl tracking-[0.18em]">
                AAVIRÁ
              </span>

              <span className="mt-1 block text-[9px] tracking-[0.35em] text-brand-gold">
                ETHNIC COUTURE
              </span>
            </Link>

            <p className="mt-6 max-w-sm text-sm leading-7 text-brand-text-light">
              Celebrating Indian craftsmanship through timeless ethnic wear.
              Discover sarees, lehengas, kurtis and beautifully crafted
              traditional styles.
            </p>

            {/* Social Icons */}
            <div className="mt-7 flex gap-3">
              <SocialLink label="Instagram" href="#" icon="instagram" />
              <SocialLink label="Facebook" href="#" icon="facebook" />
              <SocialLink label="Pinterest" href="#" icon="pinterest" />
              <SocialLink label="YouTube" href="#" icon="youtube" />
            </div>
          </div>

          {/* Shop */}
          <FooterColumn
            title="Shop"
            links={[
              ["Sarees", "/sarees"],
              ["Lehengas", "/lehengas"],
              ["Kurtis", "/kurtis"],
              ["Salwar Suits", "/salwar-suits"],
              ["Men's Wear", "/men"],
              ["Kids' Wear", "/kids"],
              ["New Arrivals", "/new-arrivals"],
            ]}
          />

          {/* Customer Care */}
          <FooterColumn
            title="Customer Care"
            links={[
              ["Contact Us", "/contact"],
              ["Shipping & Delivery", "/shipping"],
              ["Returns & Exchange", "/returns"],
              ["Track Order", "/track-order"],
              ["FAQs", "/faq"],
              ["Size Guide", "/size-guide"],
            ]}
          />

          {/* Company */}
          <FooterColumn
            title="Company"
            links={[
              ["About Us", "/about"],
              ["Our Story", "/our-story"],
              ["Custom Design", "/custom-design"],
              ["Embroidery", "/embroidery"],
              ["Privacy Policy", "/privacy"],
              ["Terms & Conditions", "/terms"],
            ]}
          />
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-brand-footer-border">
        <div className="mx-auto flex max-w-7xl flex-col gap-3 px-5 py-6 text-xs text-brand-text-muted sm:px-6 md:flex-row md:items-center md:justify-between lg:px-8">
          <p>© {new Date().getFullYear()} AAVIRÁ. All Rights Reserved.</p>

          <div className="flex flex-wrap gap-5">
            <Link href="/privacy" className="transition hover:text-brand-gold">
              Privacy
            </Link>

            <Link href="/terms" className="transition hover:text-brand-gold">
              Terms
            </Link>

            <Link
              href="/refund-policy"
              className="transition hover:text-brand-gold"
            >
              Refund Policy
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}

/* ================================
   Footer Column
================================ */

function FooterColumn({
  title,
  links,
}: {
  title: string;
  links: [string, string][];
}) {
  return (
    <div>
      <h3 className="mb-5 text-xs font-semibold uppercase tracking-[0.16em] text-brand-gold">
        {title}
      </h3>

      <ul className="space-y-3">
        {links.map(([label, href]) => (
          <li key={label}>
            <Link
              href={href}
              className="text-sm text-brand-text-light transition hover:text-brand-gold"
            >
              {label}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

/* ================================
   Social Link
================================ */

function SocialLink({
  label,
  href,
  icon,
}: {
  label: string;
  href: string;
  icon: string;
}) {
  return (
    <Link
      href={href}
      aria-label={label}
      className="flex h-9 w-9 items-center justify-center rounded-full border border-brand-border-dark text-xs text-brand-text-light transition hover:border-brand-gold hover:text-brand-gold"
    >
      {icon === "instagram" && "IG"}
      {icon === "facebook" && "FB"}
      {icon === "pinterest" && "P"}
      {icon === "youtube" && "YT"}
    </Link>
  );
}
