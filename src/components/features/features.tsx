"use client";

import { FeaturesList } from "./featuresList";
import { featuresList } from "../../data/featuresList";
import { useInView } from "react-intersection-observer";
import anime from "animejs";
import { useEffect } from "react";

/**
 * Features is a functional component that abstracts the logic of the FeaturesList component.
 */
export const Features = () => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.5,
  });

  useEffect(() => {
    if (inView) {
      anime({
        targets: ".features",
        translateY: [100, 0],
        opacity: [0, 1],
        duration: 3000,
      });
    }
  }, [inView, ref]);

  return (
    <section ref={ref} className="opacity-0 features">
      <FeaturesList featuresList={featuresList} />
    </section>
  );
};
