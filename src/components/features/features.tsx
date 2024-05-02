"use client";

import React, { useEffect } from "react";
import { useInView } from "react-intersection-observer";
import anime from "animejs";
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
