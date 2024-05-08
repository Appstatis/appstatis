import type { Service as TService } from "@/types/Service";
import { memo } from "react";
import ScrollContext from "@/context/scrollContext";
import { useContext } from "react";
import { handleSmoothScroll } from "@/utils/handleSmoothScroll";
import { Button } from "../ui/button";

/**
 * An implementation of a single service with an icon, title, and description.
 * This component is intended to be used in the ServicesList component.
 *
 * @param Icon
 * @param title
 * @param description
 * @returns A react element that represents a service with an icon, title, and description
 */
const ServiceComponent = ({ Icon, title, description }: TService) => {
  const { pricing } = useContext(ScrollContext);

  return (
    <div
      onClick={() => handleSmoothScroll(pricing)}
      className="h-full hover:cursor-pointer w-full text-center flex flex-col gap-5 justify-between border-gray-800 border rounded-xl p-8 shadow-xl transition hover:shadow-white/10"
    >
      <article className="flex-col flex justify-stretch gap-2">
        <Icon width={25} height={25} className="self-center" />
        <h3 className="font-bold text-2xl">{title}</h3>
        <p>{description}</p>
      </article>
      <Button>Get Started</Button>
    </div>
  );
};

export const Service = memo(ServiceComponent);
