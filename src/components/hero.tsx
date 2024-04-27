"use client";

import Link from "next/link";
import { buttonVariants } from "./ui/button";
import { useEffect } from "react";
import anime from "animejs";

export const Hero = () => {
  useEffect(() => {
    anime
      .timeline({ easing: "easeOutExpo" })
      .add({
        targets: ".header",
        opacity: [0, 1],
        translateY: [-100, 0],
        duration: 1000,
      })
      .add({
        targets: ".get-started",
        opacity: [0, 1],
        translateY: [50, 0],
        delay: anime.stagger(100),
      });
  }, []);

  return (
    <>
      <section className="h-[75vh] grid justify-center place-content-center">
        <div className="text-center space-y-3">
          <header className="header">
            <h1 className="font-bold text-3xl">appstatis</h1>
            <p>Unleash ideas, Embrace Innovation</p>
          </header>
          <Link href="" className={`get-started ${buttonVariants()}`}>
            Get Started
          </Link>
        </div>
      </section>
    </>
  );
};
