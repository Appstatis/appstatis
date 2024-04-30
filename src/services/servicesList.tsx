import type { Service as TService } from "@/types/Service";
import { Service } from "./service";

/**
 * An implementation of a list of services.
 * This component is intended to be used in the Services component.
 *
 * @param services
 * @returns A react element that represents a list of services
 */
export const ServicesList = ({ services }: { services: TService[] }) => {
  return (
    <div className="grid gap-10 grid-cols-3">
      {services.map((service) => (
        <Service key={service.title} {...service} />
      ))}
    </div>
  );
};
