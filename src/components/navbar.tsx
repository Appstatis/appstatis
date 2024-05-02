"use client";

import { useContext } from "react";
import ScrollContext from "@/context/scrollContext";

export const Navbar = () => {
  const { about, pricing, faq, contact } = useContext(ScrollContext);

  const handleScroll = (ref: React.RefObject<HTMLElement>) => {
    ref.current?.scrollIntoView({
      behavior: "smooth",
      block: "center",
    });
  };

  return (
    <header className="flex h-16 w-full items-center justify-between px-4 md:px-6">
      <span className="font-bold flex items-center gap-2">
        <span>appstatis</span>
      </span>
      <nav className="hidden items-center gap-6 text-sm font-medium md:flex">
        <button
          onClick={() => handleScroll(about)}
          className="hover:underline hover:underline-offset-4"
        >
          About
        </button>
        <button
          onClick={() => handleScroll(pricing)}
          className="hover:underline hover:underline-offset-4"
        >
          Pricing
        </button>
        <button
          onClick={() => handleScroll(faq)}
          className="hover:underline hover:underline-offset-4"
        >
          FAQ
        </button>
        <button
          onClick={() => handleScroll(contact)}
          className="hover:underline hover:underline-offset-4"
        >
          Contact
        </button>
      </nav>
    </header>
  );
};
