import { memo } from "react";
import { buttonVariants } from "../ui/button";
import type { PricingItem as TPricingItem } from "@/types/PricingItem";
import Link from "next/link";

/**
 * This component renders a single pricing item which should be then used in PricingList
 *
 * @param title
 * @param pricingType
 * @returns A react element that represents a single pricing item
 */
const PricingItemComponent = ({
  title,
  cost,
  description,
  features,
  type,
}: TPricingItem) => {
  return (
    <div className="h-full  flex flex-col border-gray-800 border rounded-xl justify-between p-8 shadow-xl transition hover:shadow-white/10 space-y-5">
      <div className="space-y-3">
        <header>
          <h3 className="font-bold text-2xl">{title}</h3>
          <p className="text-sm">{description}</p>
        </header>
        <div>
          <span className="text-3xl">${cost}</span>
          <span>
            {type === "periodic" ? (
              <span className="text-md">/mo</span>
            ) : (
              <span className="text-3xl">+</span>
            )}
          </span>
        </div>
        <ul className="space-y-2 list-disc">
          {features.map((feature, index) => (
            <li key={index} className="text-sm">
              {feature}
            </li>
          ))}
        </ul>
      </div>
      <Link
        href="https://cal.com/paulbg"
        className={buttonVariants({ variant: "default" })}
      >
        Book a Call
      </Link>
    </div>
  );
};

export const PricingItem = memo(PricingItemComponent);
