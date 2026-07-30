import Link from "next/link";

export default function LehengaNotFound() {
  return (
    <main className="flex min-h-[70vh] items-center justify-center bg-[#fbf8f3] px-6">

      <div className="text-center">

        <p className="text-xs font-semibold uppercase tracking-[0.3em] text-[#a1812d]">
          AAVIRÁ
        </p>

        <h1 className="mt-4 font-serif text-5xl text-[#2c1913]">
          Lehenga Not Found
        </h1>

        <p className="mx-auto mt-4 max-w-md text-sm leading-7 text-[#796a61]">
          The lehenga youre looking for may have been
          removed or is no longer available.
        </p>

        <Link
          href="/lehengas"
          className="mt-8 inline-flex bg-[#2c1913] px-7 py-3.5 text-xs font-semibold uppercase tracking-wider text-white transition hover:bg-[#4a2c20]"
        >
          Explore Lehengas
        </Link>

      </div>

    </main>
  );
}