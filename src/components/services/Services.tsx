import { Header } from "@/components/Header";
import { ServicesList } from "@/components/services/ServicesList";
import { services } from "@/data/services";

/**
 * This component abstracts the complexity of ServicesList and Service component.
 * It represents the services section of the index page.
 *
 * @returns A react element that represents a section with a list of services
 */
export const Services = () => {
  return (
    <section className="grid mx-auto min-h-[50vh] max-w-5xl justify-center">
      <article className="space-y-6">
        <Header title="Services" description="Our Services" />
        <ServicesList services={services} />
      </article>
    </section>
  );
};
