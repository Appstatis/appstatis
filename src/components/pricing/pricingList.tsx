import { useAnimateInView } from "@/hooks/useAnimateInView";
import type { PricingItem as TPricingItem } from "@/types/PricingItem";
import { PricingItem } from "@/components/pricing/PricingItem";

/**
 * This component renders a list of PricingItem components
 * It is needed to provide a solid layout for the pricing items
 *
 * @param pricingItems
 * @returns A react element that represents a list of pricing items
 */
export const PricingList = ({
  pricingData,
}: {
  pricingData: TPricingItem[];
}) => {
  const { ref } = useAnimateInView(".pricing", {
    opacity: [0, 1],
    duration: 3000,
  });

  return (
    <div ref={ref} className="opacity-0 pricing flex gap-10 justify-center">
      {pricingData.map((pricingItem, index) => (
        <PricingItem
          key={index}
          title={pricingItem.title}
          cost={pricingItem.cost}
          description={pricingItem.description}
          features={pricingItem.features}
          type={pricingItem.type}
        />
      ))}
    </div>
  );
};
