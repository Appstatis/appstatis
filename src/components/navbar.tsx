"use client";

import { useContext } from "react";
import ScrollContext from "@/context/scrollContext";
import { handleSmoothScroll } from "@/utils/handleSmoothScroll";

export const Navbar = () => {
  const { about, pricing, faq, contact } = useContext(ScrollContext);

  return (
    <header className="mx-auto max-w-7xl flex h-16 w-full items-center justify-between px-4 md:px-6">
      <span className="font-bold flex items-center gap-2">
        <span>appstatis</span>
      </span>
      <nav className="items-center gap-6 text-sm font-medium flex">
        <button
          onClick={() => handleSmoothScroll(about)}
          className="hover:underline hover:underline-offset-4"
        >
          About
        </button>
        <button
          onClick={() => handleSmoothScroll(pricing)}
          className="hover:underline hover:underline-offset-4"
        >
          Pricing
        </button>
        <button
          onClick={() => handleSmoothScroll(faq)}
          className="hover:underline hover:underline-offset-4"
        >
          FAQ
        </button>
        <button
          onClick={() => handleSmoothScroll(contact)}
          className="hover:underline hover:underline-offset-4"
        >
          Contact
        </button>
      </nav>
    </header>
  );
};
