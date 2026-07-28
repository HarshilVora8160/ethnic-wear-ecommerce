"use client";

import { FormEvent, useState } from "react";

export default function Newsletter() {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    if (!email.trim()) return;

    setSubmitted(true);

    // Later:
    // call your newsletter Server Action/API here
  }

  return (
    <section className="bg-brand-primary px-5 py-20 sm:px-8 lg:px-12 lg:py-24">
      <div className="mx-auto max-w-3xl text-center">
        <p className="text-[10px] font-medium uppercase tracking-[0.35em] text-brand-gold">
          Stay in the AAVIRÁ Circle
        </p>

        <h2 className="mt-5 font-serif text-4xl text-white sm:text-5xl">
          Be the First to Discover
        </h2>

        <p className="mx-auto mt-5 max-w-xl text-sm leading-7 text-white/65">
          Receive new collection launches, private previews and special
          invitations directly in your inbox.
        </p>

        {submitted ? (
          <div className="mx-auto mt-8 border border-brand-gold/50 px-6 py-4 text-sm text-brand-champagne">
            Thank you for joining the AAVIRÁ circle.
          </div>
        ) : (
          <form
            onSubmit={handleSubmit}
            className="mx-auto mt-8 flex max-w-xl flex-col gap-2 sm:flex-row"
          >
            <label htmlFor="newsletter-email" className="sr-only">
              Email address
            </label>

            <input
              id="newsletter-email"
              type="email"
              required
              value={email}
              onChange={(event) => setEmail(event.target.value)}
              placeholder="Your email address"
              className="h-13 flex-1 border border-white/15 bg-white/5 px-5 text-sm text-white outline-none placeholder:text-white/40 focus:border-brand-gold"
            />

            <button
              type="submit"
              className="h-13 bg-brand-gold px-7 text-[10px] font-semibold uppercase tracking-[0.18em] text-brand-primary transition hover:bg-brand-gold-light"
            >
              Join Us
            </button>
          </form>
        )}
      </div>
    </section>
  );
}