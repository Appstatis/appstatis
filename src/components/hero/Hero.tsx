import { CTA } from "@/components/hero/CTA";
import { TextGenerateEffect } from "../ui/text-generate-effect";

/**
 * Hero section component. Renders an animated message and a call to action component.
 *
 * @returns A hero section that contains a message and a call to action component
 */
export const Hero = () => {
  return (
    <>
      <section className="h-[75vh] grid justify-center place-content-center">
        <article className="space-y-3 max-w-2xl">
          <header className="space-y-2 font-bold text-7xl">
            <TextGenerateEffect words="Unleash ideas Embrace innovation" />
          </header>
          <CTA />
        </article>
      </section>
    </>
  );
};
