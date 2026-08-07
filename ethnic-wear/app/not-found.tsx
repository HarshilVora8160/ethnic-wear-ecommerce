import Link from "next/link";
import { Search, Home, ShoppingBag, ArrowLeft } from "lucide-react";

export default function NotFound() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-white via-stone-50 to-amber-50">
      <div className="mx-auto flex max-w-7xl flex-col items-center justify-center px-6 py-20 text-center">

        {/* 404 Badge */}
        <div className="mb-6 rounded-full border border-amber-200 bg-amber-100 px-5 py-2">
          <span className="text-sm font-semibold tracking-widest text-amber-700">
            ERROR 404
          </span>
        </div>

        {/* Huge 404 */}
        <h1 className="text-[110px] font-black leading-none text-[#2c1913] md:text-[180px]">
          404
        </h1>

        {/* Title */}
        <h2 className="mt-2 text-4xl font-bold text-[#2c1913]">
          Oops! This page isnt woven yet.
        </h2>

        {/* Description */}
        <p className="mt-5 max-w-2xl text-lg leading-8 text-gray-600">
          The page youre looking for doesnt exist, may have been moved,
          or the link is incorrect. Explore our premium ethnic collections
          and discover something beautiful instead.
        </p>

        {/* Decorative Line */}
        <div className="my-10 h-px w-32 bg-gradient-to-r from-transparent via-amber-500 to-transparent" />

        {/* Buttons */}
        <div className="flex flex-wrap items-center justify-center gap-4">

          <Link
            href="/"
            className="inline-flex items-center gap-2 rounded-xl bg-[#2c1913] px-7 py-4 font-semibold text-white transition hover:scale-105"
          >
            <Home className="h-5 w-5" />
            Back to Home
          </Link>

          <Link
            href="/products"
            className="inline-flex items-center gap-2 rounded-xl border border-[#2c1913] px-7 py-4 font-semibold text-[#2c1913] transition hover:bg-[#2c1913] hover:text-white"
          >
            <ShoppingBag className="h-5 w-5" />
            Browse Products
          </Link>

        </div>

        {/* Quick Links */}
        <div className="mt-16 w-full max-w-4xl rounded-3xl border bg-white p-8 shadow-sm">

          <div className="mb-6 flex items-center justify-center gap-2">
            <Search className="h-5 w-5 text-amber-600" />
            <h3 className="text-xl font-bold text-[#2c1913]">
              Popular Collections
            </h3>
          </div>

          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">

            <Link
              href="/sarees"
              className="rounded-xl border p-5 transition hover:border-amber-500 hover:bg-amber-50"
            >
              <h4 className="font-semibold">✨ Sarees</h4>
              <p className="mt-2 text-sm text-gray-500">
                Banarasi, Organza, Silk & Designer Sarees
              </p>
            </Link>

            <Link
              href="/lehengas"
              className="rounded-xl border p-5 transition hover:border-amber-500 hover:bg-amber-50"
            >
              <h4 className="font-semibold">👑 Lehengas</h4>
              <p className="mt-2 text-sm text-gray-500">
                Bridal, Party Wear & Wedding Collection
              </p>
            </Link>

            <Link
              href="/salwar-suits"
              className="rounded-xl border p-5 transition hover:border-amber-500 hover:bg-amber-50"
            >
              <h4 className="font-semibold">🌸 Salwar Suits</h4>
              <p className="mt-2 text-sm text-gray-500">
                Elegant Suits for Every Celebration
              </p>
            </Link>

            <Link
              href="/kurtis"
              className="rounded-xl border p-5 transition hover:border-amber-500 hover:bg-amber-50"
            >
              <h4 className="font-semibold">💖 Kurtis</h4>
              <p className="mt-2 text-sm text-gray-500">
                Everyday & Festive Wear
              </p>
            </Link>

            <Link
              href="/men"
              className="rounded-xl border p-5 transition hover:border-amber-500 hover:bg-amber-50"
            >
              <h4 className="font-semibold">🤵 Men</h4>
              <p className="mt-2 text-sm text-gray-500">
                Sherwanis, Kurtas & Ethnic Wear
              </p>
            </Link>

            <Link
              href="/new-arrivals"
              className="rounded-xl border p-5 transition hover:border-amber-500 hover:bg-amber-50"
            >
              <h4 className="font-semibold">🆕 New Arrivals</h4>
              <p className="mt-2 text-sm text-gray-500">
                Discover Our Latest Collection
              </p>
            </Link>

          </div>

        </div>

        {/* Footer */}
        <div className="mt-16 flex items-center gap-2 text-sm text-gray-500">
          <ArrowLeft className="h-4 w-4" />
          <span>Need help? Return to the homepage and continue shopping.</span>
        </div>

      </div>
    </main>
  );
}