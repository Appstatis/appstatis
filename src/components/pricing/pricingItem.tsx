import { memo } from "react";
import { Button } from "../ui/button";
import type { PricingItem as TPricingItem } from "@/types/PricingItem";

/**
 * Gets description and price of a pricing item
 *
 * @param pricingType
 * @returns description and price
 */
const getDescriptionAndPrice = (pricingType: string) => {
  switch (pricingType) {
    case "one-time":
      return [
        "Option designed for businesses that need a quick solution to a specific problem",
        "$3000",
      ];
    case "periodic":
      return [
        "Ideal for small businesses and startups that just want to get started without big commitments",
        "$150",
      ];
    default:
      return ["", ""];
  }
};

/**
 * This component renders a single pricing item which should be then used in PricingList
 *
 * @param title
 * @param pricingType
 * @returns A react element that represents a single pricing item
 */
const PricingItemComponent = ({ title, pricingType }: TPricingItem) => {
  const [description, price] = getDescriptionAndPrice(pricingType);

  return (
    <div className="h-full w-72 flex flex-col border-gray-800 border rounded-xl justify-between p-8 shadow-xl transition hover:shadow-white/10">
      <div className="space-y-3">
        <h3 className="font-bold text-2xl">{title}</h3>
        <div>
          <span className="text-3xl">
            {price}
            {pricingType === "periodic" && <span>/mo</span>}
          </span>
        </div>
        <p>{description}</p>
      </div>
      <Button className="bottom">Book a Call</Button>
    </div>
  );
};

export const PricingItem = memo(PricingItemComponent);