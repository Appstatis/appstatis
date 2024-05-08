"use client";

import { useContext } from "react";
import ScrollContext from "@/context/scrollContext";
import { Header } from "../header";
import { pricing as pricingData } from "@/data/pricing";
import { PricingList } from "./pricingList";

/**
 * This component abstracts the complexity of PricingList and PricingItem
 * It is needed to separate the pricing items from the rest of the content on the page
 *
 * @returns A react element that represents a section with pricing items
 */
export const Pricing = () => {
  const { pricing } = useContext(ScrollContext);

  return (
    <section ref={pricing} className="min-h-[75vh] space-y-10">
      <Header
        title="Pricing"
        description="Our pricing is designed to be simple and transparent. We offer a variety of pricing options to suit your needs."
      />
      <PricingList pricingData={pricingData} />
    </section>
  );
};
