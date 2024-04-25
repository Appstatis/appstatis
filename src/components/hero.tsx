import Link from "next/link";
import { buttonVariants } from "./ui/button";

export const Hero = () => {
  return (
    <>
      <section className="min-h-screen grid justify-center place-content-center">
        <div className="text-center space-y-3">
          <header>
            <h1 className="font-bold text-3xl">appstatis</h1>
            <p>Unleash ideas, Embrace Innovation</p>
          </header>
          <Link href="" className={buttonVariants()}>
            Get Started
          </Link>
        </div>
      </section>
    </>
  );
};
