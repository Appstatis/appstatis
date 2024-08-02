import useTranslation from "next-translate/useTranslation";
import { CTA } from "@/components/hero/CTA";
import { TextGenerateEffect } from "../ui/text-generate-effect";

/**
 * Hero section component. Renders an animated message and a call to action component.
 *
 * @returns A hero section that contains a message and a call to action component
 */
export const Hero = () => {
  const { t } = useTranslation("common");

  return (
    <>
      <section className="h-[80vh] grid justify-center place-content-center">
        <article className="space-y-5 max-w-2xl">
          <header className="font-black text-4xl sm:text-5xl md:text-6xl lg:text-7xl">
            <TextGenerateEffect words={t("hero.title")} />
          </header>
          <CTA />
        </article>
      </section>
    </>
  );
};
