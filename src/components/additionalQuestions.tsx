import useTranslation from "next-translate/useTranslation";
import Link from "next/link";
import { buttonVariants } from "./ui/button";

/**
 * @returns A react element that represents a section welcoming users to ask additional questions
 */
export const AdditionalQuestions = () => {
  const { t } = useTranslation("common");

  return (
    <section className="min-h-[25vh] space-y-5 text-center my-20">
      <header>
        <h2 className="font-bold text-2xl">{t("additionalQuestions.title")}</h2>
        <p>{t("additionalQuestions.message")}</p>
      </header>
      <Link
        href="https://cal.com/appstatis"
        className={buttonVariants({ variant: "default" })}
      >
        {t("additionalQuestions.submit")}
      </Link>
    </section>
  );
};
