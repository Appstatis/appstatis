"use client";

import { useContext } from "react";
import ScrollContext from "@/context/scrollContext";
import { Header } from "../header";
import { AboutContent } from "./about-content";

export const About = () => {
  const { about } = useContext(ScrollContext);

  return (
    <section ref={about} className="min-h-[45vh] max-w-3xl mx-auto space-y-10">
      <Header title="What is appstatis?" />

      <AboutContent />
    </section>
  );
};
