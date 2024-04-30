import { Header } from "@/components/Header";
import { ContactForm } from "@/components/contact/ContactForm";

/**
 * Contact section component that wraps the <ContactForm /> component and adds additional styling and text.
 *
 * @returns A contact section component with a contact form
 */
export const Contact = () => {
  return (
    <section className="flex flex-col min-h-[75vh] mt-52 items-center w-full">
      <Header
        title="Text us instead!"
        description="In case you don't have much time for calls or just hate them"
      />
      <ContactForm />
    </section>
  );
};
