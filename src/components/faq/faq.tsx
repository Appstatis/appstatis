import { FAQItems } from "../faq/faqItems";
import { FAQ as FAQData } from "@/data/faq";

/**
 * FAQ is a functional component that represents the FAQ section of the landing page.
 */
export const FAQ = () => {
  return (
    <section className="grid justify-center">
      <h2 className="text-center mb-3 font-bold text-3xl">
        Answers to some questions that might pop up in your mind
      </h2>
      <FAQItems faq={FAQData} />
    </section>
  );
};
