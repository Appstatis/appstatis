import type { Service as TService } from "@/types/Service";

/**
 * An implementation of a single service with an icon, title, and description.
 * This component is intended to be used in the ServicesList component.
 *
 * @param Icon
 * @param title
 * @param description
 * @returns A react element that represents a service with an icon, title, and description
 */
export const Service = ({ Icon, title, description }: TService) => {
  return (
    <div className="h-full w-full text-center flex flex-col border-gray-800 border rounded-xl justify-around p-8 shadow-xl transition hover:shadow-white/10">
      <Icon width={25} height={25} className="self-center" />
      <h3 className="font-bold text-2xl">{title}</h3>
      <p>{description}</p>
    </div>
  );
};
