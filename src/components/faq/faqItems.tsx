import { FAQItem } from "./faqItem";
import type { FAQItem as TFAQItem } from "@/types/FAQItem";

/**
 * FAQItemsComponent is a functional component that represents a list of FAQ items.
 * If the list is empty or undefined, an error will be thrown.
 */
export const FAQItems = ({ faq }: { faq: TFAQItem[] }) => {
  if (!faq || faq.length === 0) {
    throw new Error("FAQ list is empty");
  }

  return (
    <>
      {faq.map((faq, index) => (
        <FAQItem key={index} question={faq.question} answer={faq.answer} />
      ))}
    </>
  );
};
