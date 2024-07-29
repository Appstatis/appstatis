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
          className="relative after:block after:absolute after:bottom-0 after:left-0 after:h-[2px] after:w-full after:scale-x-0 after:bg-white after:transition-transform after:duration-300 hover:after:scale-x-100"
        >
          About
        </button>
        <button
          onClick={() => handleSmoothScroll(pricing)}
          className="relative after:block after:absolute after:bottom-0 after:left-0 after:h-[2px] after:w-full after:scale-x-0 after:bg-white after:transition-transform after:duration-300 hover:after:scale-x-100"
        >
          Pricing
        </button>
        <button
          onClick={() => handleSmoothScroll(faq)}
          className="relative after:block after:absolute after:bottom-0 after:left-0 after:h-[2px] after:w-full after:scale-x-0 after:bg-white after:transition-transform after:duration-300 hover:after:scale-x-100"
        >
          FAQ
        </button>
        <button
          onClick={() => handleSmoothScroll(contact)}
          className="relative after:block after:absolute after:bottom-0 after:left-0 after:h-[2px] after:w-full after:scale-x-0 after:bg-white after:transition-transform after:duration-300 hover:after:scale-x-100"
        >
          Contact
        </button>
      </nav>
    </header>
  );
};
