"use client";

import { servicesIcons } from "@/data/servicesIcons";
import useTranslation from "next-translate/useTranslation";
import { Header } from "../header";
import { ServicesList } from "@/components/services/ServicesList";
import ScrollContext from "@/context/scrollContext";
import { useContext } from "react";
import type { Service } from "@/types/Service";

/**
 * This component abstracts the complexity of ServicesList and Service component.
 * It represents the services section of the index page.
 *
 * @returns A react element that represents a section with a list of services
 */
export const Services = () => {
  const { t } = useTranslation("common");
  const { services: servicesRef } = useContext(ScrollContext);

  const services = t(
    "services.options",
    {},
    { returnObjects: true }
  ) as Service[];

  services.forEach((service) => {
    service.Icon = servicesIcons[service.id];
  });

  return (
    <section
      ref={servicesRef}
      className="grid mx-auto min-h-[50vh] max-w-5xl justify-center"
    >
      <article className="space-y-6">
        <Header
          title={t("services.title")}
          description={t("services.description")}
        />
        <ServicesList services={services} />
      </article>
    </section>
  );
};
