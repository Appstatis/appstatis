"use client";

import useTranslation from "next-translate/useTranslation";
import { useContext } from "react";
import ScrollContext from "@/context/scrollContext";
import { handleSmoothScroll } from "@/utils/handleSmoothScroll";
import { useLang } from "@/hooks/useLang";
import { LinkWithLang } from "@/components/link-with-lang";
import { Button } from "./ui/button";

function ChangeLanguage() {
  const { langToSwitch } = useLang();

  return (
    <Button variant="ghost">
      <LinkWithLang href="/">{langToSwitch}</LinkWithLang>
    </Button>
  );
}

const NavControls = () => {
  const { t } = useTranslation("common");
  const { about, services, pricing, faq, contact } = useContext(ScrollContext);

  const navLinks = [
    { name: "services", href: services },
    { name: "about", href: about },
    { name: "pricing", href: pricing },
    { name: "faq", href: faq },
    { name: "contact", href: contact },
  ];

  return (
    <nav className="flex h-16 w-full items-center justify-between px-4 md:px-6">
      <span className="font-black text-xl flex items-center gap-2">
        <span>as.</span>
      </span>
      <section className="hidden md:flex items-center gap-3 md:gap-6 text-sm font-medium">
        {navLinks.map((link) => (
          <button
            key={link.name}
            onClick={(event) => handleSmoothScroll(link.href, event)}
            className="relative after:block after:absolute after:bottom-0 after:left-0 after:h-[2px] after:w-full after:scale-x-0 after:bg-white after:transition-transform after:duration-300 hover:after:scale-x-100"
          >
            {t(`navbar.${link.name}`)}
          </button>
        ))}
      </section>
      <section>
        <ChangeLanguage />
      </section>
    </nav>
  );
};

export const Navbar = () => {
  return (
    <header className="mx-auto max-w-7xl flex h-16 w-full items-center justify-between px-4 md:px-6">
      <NavControls />
    </header>
  );
};
