"use client";

import useTranslation from "next-translate/useTranslation";
import { useContext } from "react";
import ScrollContext from "@/context/scrollContext";
import { Header } from "../header";
import { ContactForm } from "./contactForm";

/**
 * Contact section component that wraps the <ContactForm /> component and adds additional styling and text.
 *
 * @returns A contact section component with a contact form
 */
export const Contact = () => {
  const { t } = useTranslation("common");
  const { contact } = useContext(ScrollContext);

  return (
    <section
      ref={contact}
      className="flex flex-col min-h-[75vh] pt-[10vh] items-center w-full"
    >
      <Header title={t("contact.title")} description={t("contact.message")} />
      <ContactForm />
    </section>
  );
};
