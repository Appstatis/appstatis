import { Hero } from "@/components/hero";
import { Services } from "@/components/services";
import { Features } from "@/components/features/features";
import { FAQ } from "@/components/faq/faq";
import { Pricing } from "@/components/pricing/pricing";
import { AdditionalQuestions } from "@/components/additionalQuestions";
import { Contact } from "@/components/contact/contact";

export default function Home() {
  return (
    <>
      <Hero />
      <Services />
      <Features />
      <Pricing />
      <FAQ />
      <AdditionalQuestions />
      <Contact />
    </>
  );
}
