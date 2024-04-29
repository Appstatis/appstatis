"use client";

import React, { useEffect, useContext } from "react";
import { useInView } from "react-intersection-observer";
import anime from "animejs";
import { FeaturesList } from "./featuresList";
import { featuresList } from "../../data/featuresList";
import ScrollContext from "@/context/scrollContext";

/**
 * This component abstracts the complexity of FeaturesList and FeatureItem.
 *
 * @returns A react element that represents a section with features
 */
export const Features = () => {
  const contextRef = useContext(ScrollContext);

  const { ref: inViewRef, inView } = useInView({
    triggerOnce: true,
    threshold: 0.5,
  });

  const setRefs = (node: HTMLElement | null) => {
    inViewRef(node);
    if (node) contextRef.current = node;
  };

  useEffect(() => {
    if (inView) {
      anime({
        targets: ".features",
        translateY: [100, 0],
        opacity: [0, 1],
        duration: 3000,
      });
    }
  }, [inView]);

  return (
    <section
      ref={setRefs}
      id="features"
      className="min-h-[75vh] opacity-0 features"
    >
      <FeaturesList featuresList={featuresList} />
    </section>
  );
};
