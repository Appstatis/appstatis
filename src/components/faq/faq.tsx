import { FAQItems } from "../faq/faqItems";

export const FAQ = () => {
  return (
    <section className="grid justify-center">
      <h2 className="text-center mb-3 font-bold text-3xl">
        Answers to some questions that might pop up in your mind
      </h2>
      <FAQItems />
    </section>
  );
};
