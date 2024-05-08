"use client";

import React from "react";
import { FeaturesList } from "@/components/features/FeaturesList";
import { featuresList } from "../../data/featuresList";

/**
 * This component abstracts the complexity of FeaturesList and FeatureItem.
 *
 * @returns A react element that represents a section with features
 */
export const Features = () => {
  return (
    <section>
      <FeaturesList featuresList={featuresList} />
    </section>
  );
};
