"use client";

import { Header } from "../Header";
import { ServicesList } from "@/components/services/ServicesList";
import { services } from "@/data/services";
import ScrollContext from "@/context/scrollContext";
import { useContext } from "react";

/**
 * This component abstracts the complexity of ServicesList and Service component.
 * It represents the services section of the index page.
 *
 * @returns A react element that represents a section with a list of services
 */
export const Services = () => {
  const { about } = useContext(ScrollContext);

  return (
    <section
      ref={about}
      className="grid mx-auto min-h-[50vh] max-w-5xl justify-center"
    >
      <article className="space-y-6">
        <Header title="Services" description="Our Services" />
        <ServicesList services={services} />
      </article>
    </section>
  );
};
