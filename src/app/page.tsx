import { Hero } from "@/components/hero";
import { Features } from "@/components/features/features";
import { FAQ } from "@/components/faq/faq";
import { Pricing } from "@/components/pricing/pricing";
import { AdditionalQuestions } from "@/components/additionalQuestions";

export default function Home() {
  return (
    <>
      <Hero />
      <Features />
      <Pricing />
      <FAQ />
      <AdditionalQuestions />
    </>
  );
}
