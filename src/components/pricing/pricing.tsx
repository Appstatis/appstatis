"use client";

import { Header } from "../Header";
import { pricingItems } from "@/data/pricingItems";
import { PricingList } from "@/components/pricing/PricingList";
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
        duration: 1500,
      });
    }
  }, [inView, ref]);

  return (
    <section className="min-h-[75vh] space-y-10">
      <Header
        title="Pricing"
        description="Our pricing is designed to be simple and transparent. We offer a variety of pricing options to suit your needs."
      />
      <div ref={ref} style={{ opacity: 0 }} className="pricing">
        <PricingList pricingItems={pricingItems} />
      </div>
    </section>
  );
};
