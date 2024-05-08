import { Navbar } from "../components/Navbar";
import { Footer } from "@/components/Footer";

import { Hero } from "@/components/hero/Hero";
import { Services } from "@/components/services/Services";
import { Features } from "../components/features/Features";
import { FAQ } from "../components/faq/FAQ";
import { Pricing } from "../components/pricing/Pricing";
import { AdditionalQuestions } from "@/components/AdditionalQuestions";
import { Contact } from "@/components/contact/Contact";

const HomeSections = () => {
  return (
    <div className="space-y-10">
      <Hero />
      <Services />
      <Features />
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
