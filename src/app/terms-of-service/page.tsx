"use client";

import Trans from "next-translate/Trans";
import useTranslation from "next-translate/useTranslation";
import { BeautifulLink } from "@/components/beautiful-link";
import { Header } from "@/components/privacyAndTerms/Header";
import { BackButton } from "@/components/back-button";

/**
 * The Terms of Service page.
 *
 * It uses simple semantic HTML elements to structure the content.
 * It also uses Link from Next.js to navigate to the home page, and the Header component to render section titles.
 *
 * @returns A react element that represents the Terms of Service page
 */
export default function TermsOfService() {
  const { t } = useTranslation("common");

  return (
    <main className="max-w-3xl mx-auto my-10">
      <BackButton />

      <article className="space-y-3">
        <header>
          <h1 className="text-2xl font-bold">{t("termsOfService.title")}</h1>
          <p>{t("termsOfService.description")}</p>
        </header>
        <section>
          <Header>{t("termsOfService.content.section1.title")}</Header>
          <p>{t("termsOfService.content.section1.description")}</p>
        </section>
        <section>
          <Header>{t("termsOfService.content.section2.title")}</Header>
          <p>{t("termsOfService.content.section2.description")}</p>
        </section>
        <section>
          <Header>{t("termsOfService.content.section3.title")}</Header>
          <p>{t("termsOfService.content.section3.description")}</p>
        </section>
        <section>
          <Header>{t("termsOfService.content.section4.title")}</Header>
          <p>{t("termsOfService.content.section4.description")}</p>
        </section>
        <section>
          <Header>{t("termsOfService.content.section5.title")}</Header>
          <p>{t("termsOfService.content.section5.description")}</p>
        </section>
        <section>
          <Header>{t("termsOfService.content.section6.title")}</Header>
          <p>{t("termsOfService.content.section6.description")}</p>
        </section>
        <section>
          <Header>{t("termsOfService.content.section7.title")}</Header>
          <p>{t("termsOfService.content.section7.description")}</p>
        </section>
        <section>
          <Header>{t("termsOfService.content.section8.title")}</Header>
          <p>{t("termsOfService.content.section8.description")}</p>
        </section>
        <footer>
          <Header>{t("termsOfService.content.footer.title")}</Header>
          <Trans
            i18nKey="common:termsOfService.content.footer.description"
            components={{
              emailLink: <BeautifulLink href="mailto:paul@appstatis.com" />,
            }}
          />

          <time dateTime="2023-03-07">
            {t("termsOfService.content.footer.lastUpdated")}
          </time>
        </footer>
      </article>
    </main>
  );
}
