"use client";

import Trans from "next-translate/Trans";
import useTranslation from "next-translate/useTranslation";
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

  const { t } = useTranslation("common");

  return (
    <div className="space-y-5 cta opacity-0">
      <p className="message">
        <Trans
          i18nKey="common:hero.description"
          components={{
            bold: <span className="text-xl font-bold" />,
          }}
          values={{ appName: "appstatis" }}
        />
      </p>
      <button
        onClick={() => handleSmoothScroll(pricing)}
        className="font-bold text-black bg-white py-2 px-4 rounded-xl border-4 border-white transition duration-500 hover:text-white hover:bg-gray-900"
      >
        {t("hero.getStarted")}
      </button>
    </div>
  );
};
