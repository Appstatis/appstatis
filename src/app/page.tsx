import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/Footer";

import { Hero } from "@/components/hero/Hero";
import { Services } from "@/components/services/Services";
import { Features } from "@/components/features/features";
import { FAQ } from "@/components/faq/faq";
import { Pricing } from "@/components/pricing/pricing";
import { AdditionalQuestions } from "@/components/additionalQuestions";
import { Contact } from "@/components/contact/contact";
import { About } from "@/components/about/about";

const HomeSections = () => {
  return (
    <div className="space-y-10">
      <Hero />
      <Services />
      <Features />
      <About />
      <Pricing />
      <FAQ />
      <AdditionalQuestions />
      <Contact />
    </div>
  );
};

export default function Home() {
  return (
    <>
      <Navbar />
      <HomeSections />
      <Footer />
    </>
  );
}
