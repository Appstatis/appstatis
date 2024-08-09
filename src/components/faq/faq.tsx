"use client";

import useTranslation from "next-translate/useTranslation";
import { useContext } from "react";
import ScrollContext from "@/context/scrollContext";
import { FAQItems } from "./faqItems";
import { Header } from "../header";
import type { FAQItem } from "@/types/FAQItem";

/**
 * This component abstracts the complexity of FAQItems and FAQItem.
 * It represents a FAQ section.
 *
 * @returns A react element that represents a section with FAQ items
 */
export const FAQ = () => {
  const { t } = useTranslation("common");
  const { faq } = useContext(ScrollContext);

  const faqQuestions = t(
    "faq.questions",
    {},
    { returnObjects: true }
  ) as FAQItem[];

  return (
    <section ref={faq} className="pt-[10vh] grid justify-center">
      <Header title={t("faq.title")} />
      <FAQItems faq={faqQuestions} />
    </section>
  );
};
