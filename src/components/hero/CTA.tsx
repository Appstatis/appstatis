"use client";

import { buttonVariants } from "../ui/button";
import { useEffect } from "react";
import anime from "animejs";
import { handleSmoothScroll } from "@/utils/handleSmoothScroll";
import { useContext } from "react";
import ScrollContext from "@/context/scrollContext";

/**
 * Call to action component.
 * Allows users to navigate to get started.
 * Renders a message that describes the mission of the company. The message is rendered with a fade-in effect.
 *
 * @returns A call to action component that has to be rendered in the hero section
 */
export const CTA = () => {
  /**
   * Adds a fade-in effect to the call to action component
   */
  const animateCTA = () => {
    anime.timeline({ easing: "linear" }).add({
      targets: ".cta",
      opacity: [0, 1],
      duration: 1500,
      delay: 2000,
    });
  };

  useEffect(() => {
    animateCTA();
  }, []);

  const { pricing } = useContext(ScrollContext);

  return (
    <div className="space-y-3 cta opacity-0">
      <p className="message">
        At <span className="text-xl font-bold">appstatis</span>, we believe in
        the power of transformation through technology. Our mission is to help
        you unleash your most ambitious ideas and turn them into reality.
      </p>
      <button
        onClick={() => handleSmoothScroll(pricing)}
        className={`mr-3 ${buttonVariants()}`}
      >
        Get Started
      </button>
    </div>
  );
};
