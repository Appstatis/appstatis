import { pricingItems } from "@/data/pricingItems";
import { PricingList } from "./pricingList";
import { useInView } from "react-intersection-observer";
import { useEffect } from "react";
import anime from "animejs";

/**
 * This component abstracts the complexity of PricingList and PricingItem
 * It is needed to separate the pricing items from the rest of the content on the page
 *
 * @returns A react element that represents a section with pricing items
 */
export const Pricing = () => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.5,
  });

  useEffect(() => {
    if (inView) {
      anime({
        targets: ".pricing",
        translateY: [100, 0],
        opacity: [0, 1],
        duration: 800,
      });
    }
  }, [inView, ref]);

  return (
    <section
      ref={ref}
      style={{ opacity: 0 }}
      className="pricing mt-28 h-[50vh]"
    >
      <PricingList pricingItems={pricingItems} />
    </section>
  );
};
