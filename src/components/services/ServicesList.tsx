import type { Service as TService } from "@/types/Service";
import { Service } from "@/components/services/Service";
import { useAnimateInView } from "@/hooks/useAnimateInView";

/**
 * An implementation of a list of services.
 * This component is intended to be used in the Services component.
 *
 * @param services
 * @returns A react element that represents a list of services
 */
export const ServicesList = ({ services }: { services: TService[] }) => {
  const { ref } = useAnimateInView(".services", {
    opacity: [0, 1],
    duration: 3000,
  });

  return (
    <div ref={ref} className="opacity-0 grid services gap-10 lg:grid-cols-3">
      {services.map((service) => (
        <Service key={service.title} {...service} />
      ))}
    </div>
  );
};
