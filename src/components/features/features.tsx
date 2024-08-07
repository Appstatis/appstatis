"use client";

import useTranslation from "next-translate/useTranslation";
import React from "react";
import { FeaturesList } from "./featuresList";
import { featuresIcons } from "@/data/featuresIcons";
import { Feature } from "@/types/Feature";

/**
 * This component abstracts the complexity of FeaturesList and FeatureItem.
 *
 * @returns A react element that represents a section with features
 */
export const Features = () => {
  const { t } = useTranslation("common");

  const features = t(
    "features.options",
    {},
    { returnObjects: true }
  ) as Feature[];

  features.forEach((feature) => {
    feature.Icon = featuresIcons[feature.id];
  });

  return (
    <section>
      <FeaturesList featuresList={features} />
    </section>
  );
};
