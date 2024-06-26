import Link from "next/link";
import { buttonVariants } from "./ui/button";

/**
 * @returns A react element that represents a section welcoming users to ask additional questions
 */
export const AdditionalQuestions = () => {
  return (
    <section className="min-h-[25vh] space-y-5 text-center my-20">
      <header>
        <h2 className="font-bold text-2xl">
          Don&apos;t see your question here? <br />
        </h2>
        <p>Feel free to react out to us</p>
      </header>
      <Link
        href="https://cal.com/appstatis"
        className={buttonVariants({ variant: "default" })}
      >
        Book a Call
      </Link>
    </section>
  );
};
