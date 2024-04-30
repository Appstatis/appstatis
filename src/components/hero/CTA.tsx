"use client";

import Link from "next/link";
import { buttonVariants } from "../ui/button";
import { useEffect, useContext } from "react";
import anime from "animejs";
import ScrollContext from "@/context/scrollContext";
import { Button } from "../ui/button";

/**
 * Call to action component.
 * Allows users to navigate to the features section or get started.
 * Renders a message that describes the mission of the company. The message is rendered with a fade-in effect.
 *
 * @returns A call to action component that has to be rendered in the hero section
 */
export const CTA = () => {
  const targetRef = useContext(ScrollContext);

  /**
   * Scrolls to the features section when the user clicks on the explore button
   */
  const scrollToFeatures = () => {
    if (targetRef.current) {
      targetRef.current.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  };

  /**
   * Adds a fade-in effect to the call to action component
   */
  const animateCTA = () => {
    anime.timeline({ easing: "linear" }).add({
      targets: ".cta",
      opacity: [0, 1],
      duration: 2000,
      delay: 3000,
    });
  };

  useEffect(() => {
    animateCTA();
  }, []);

  return (
    <div className="space-y-3 cta">
      <p className="message">
        At <span className="text-xl font-bold">appstatis</span>, we believe in
        the power of transformation through technology. Our mission is to help
        you unleash your most ambitious ideas and turn them into reality.
      </p>
      <Link href="" className={`mr-3 ${buttonVariants()}`}>
        Get Started
      </Link>
      <Button onClick={scrollToFeatures} variant="outline">
        Explore
      </Button>
    </div>
  );
};
