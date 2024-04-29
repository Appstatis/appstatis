import { FAQItems } from "../faq/faqItems";
import { FAQ as FAQData } from "@/data/faq";
import { Header } from "../header";

/**
 * This component abstracts the complexity of FAQItems and FAQItem.
 * It represents a FAQ section.
 *
 * @returns A react element that represents a section with FAQ items
 */
export const FAQ = () => {
  return (
    <section className="grid justify-center">
      <Header title="Answers to some questions that might pop up in your mind" />
      <FAQItems faq={FAQData} />
    </section>
  );
};
