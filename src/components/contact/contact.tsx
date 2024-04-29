import { ContactForm } from "./contactForm";

export const Contact = () => {
  return (
    <section className="flex flex-col items-center w-full">
      <p className="font-bold text-2xl">
        Don&apos;t have much time for calls or just hate them?
      </p>
      <h2 className="font-bold text-xl">Text us instead!</h2>
      <ContactForm />
    </section>
  );
};
