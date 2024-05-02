"use client";

import { useContext } from "react";
import ScrollContext from "@/context/scrollContext";
import { FAQItems } from "@/components/faq/FAQItems";
import { FAQ as FAQData } from "@/data/faq";
import { Header } from "@/components/Header";

/**
 * This component abstracts the complexity of FAQItems and FAQItem.
 * It represents a FAQ section.
 *
 * @returns A react element that represents a section with FAQ items
 */
export const FAQ = () => {
  const { faq } = useContext(ScrollContext);

  return (
    <section ref={faq} className="grid justify-center">
      <Header title="Answers to some questions that might pop up in your mind" />
      <FAQItems faq={FAQData} />
    </section>
  );
};
