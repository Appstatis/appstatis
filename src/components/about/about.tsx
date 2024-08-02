"use client";

import useTranslation from "next-translate/useTranslation";
import { useContext } from "react";
import ScrollContext from "@/context/scrollContext";
import { Header } from "../header";
import { AboutContent } from "./about-content";

export const About = () => {
  const { t } = useTranslation("common");
  const { about } = useContext(ScrollContext);

  return (
    <section ref={about} className="min-h-[45vh] max-w-3xl mx-auto space-y-10">
      <Header title={t("about.title")} />

      <AboutContent />
    </section>
  );
};
