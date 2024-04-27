import { pricingItems } from "@/data/pricingItems";
import { PricingList } from "./pricingList";

/**
 * This component abstracts the complexity of PricingList and PricingItem
 * It is needed to separate the pricing items from the rest of the content on the page
 *
 * @returns A react element that represents a section with pricing items
 */
export const Pricing = () => {
  return (
    <section className="h-[50vh]">
      <PricingList pricingItems={pricingItems} />
    </section>
  );
};
