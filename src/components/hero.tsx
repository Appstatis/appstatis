"use client";

import Link from "next/link";
import { buttonVariants } from "./ui/button";
import { useEffect, useContext } from "react";
import anime from "animejs";
import ScrollContext from "@/context/scrollContext";
import { Button } from "./ui/button";

export const Hero = () => {
  const targetRef = useContext(ScrollContext);

  const scrollToFeatures = () => {
    if (targetRef.current) {
      targetRef.current.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  };

  useEffect(() => {
    anime
      .timeline({ easing: "linear" })
      .add({
        targets: ".unleash-ideas",
        opacity: [0, 1],
        duration: 1000,
      })
      .add({
        targets: ".embrace-innovation",
        opacity: [0, 1],
        duration: 1000,
      })
      .add({
        targets: ".cta",
        opacity: [0, 1],
        duration: 1500,
        delay: 800,
      });
  }, []);

  return (
    <>
      <section className="h-[75vh] grid justify-center place-content-center">
        <article className="space-y-3 max-w-2xl">
          <header className="space-y-2 font-bold text-7xl">
            <h1 className="unleash-ideas">Unleash ideas</h1>
            <h2 className="embrace-innovation">Embrace Innovation</h2>
          </header>
          <div className="space-y-3 cta">
            <p className="message">
              At <span className="text-xl font-bold">appstatis</span>, we
              believe in the power of transformation through technology. Our
              mission is to help you unleash your most ambitious ideas and turn
              them into reality.
            </p>
            <Link href="" className={`mr-3 ${buttonVariants()}`}>
              Get Started
            </Link>
            <Button onClick={scrollToFeatures} variant="outline">
              Explore
            </Button>
          </div>
        </article>
      </section>
    </>
  );
};
