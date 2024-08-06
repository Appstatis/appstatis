"use client";

import useTranslation from "next-translate/useTranslation";
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
  const { t } = useTranslation("common");
  const { pricing } = useContext(ScrollContext);

  return (
    <section ref={pricing} className="min-h-[75vh] space-y-10">
      <Header
        title={t("pricing.title")}
        description={t("pricing.description")}
      />
      <PricingList pricingData={pricingData} />
    </section>
  );
};
