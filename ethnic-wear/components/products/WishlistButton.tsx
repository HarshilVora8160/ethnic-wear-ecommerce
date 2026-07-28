"use client";

import { useState } from "react";

interface WishlistButtonProps {
  productName: string;
}

export default function WishlistButton({
  productName,
}: WishlistButtonProps) {
  const [active, setActive] = useState(false);

  function handleWishlist(event: React.MouseEvent<HTMLButtonElement>) {
    event.preventDefault();
    event.stopPropagation();

    setActive((current) => !current);

    // Later:
    // await addToWishlist(productId)
  }

  return (
    <button
      type="button"
      onClick={handleWishlist}
      aria-label={
        active
          ? `Remove ${productName} from wishlist`
          : `Add ${productName} to wishlist`
      }
      aria-pressed={active}
      className={`flex h-10 w-10 items-center justify-center rounded-full bg-white/95 text-xl shadow-sm backdrop-blur transition duration-300 hover:bg-brand-gold ${
        active ? "text-brand-gold-dark" : "text-brand-primary"
      }`}
    >
      {active ? "♥" : "♡"}
    </button>
  );
}