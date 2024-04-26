import { FAQItem } from "./faqItem";
import { FAQ } from "@/data/faq";

export const FAQItems = () => {
  return (
    <>
      {FAQ.map((faq, index) => (
        <FAQItem key={index} question={faq.question} answer={faq.answer} />
      ))}
    </>
  );
};
