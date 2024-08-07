import Trans from "next-translate/Trans";
import { BeautifulLink } from "@/components/beautiful-link";
import useTranslation from "next-translate/useTranslation";
import { Header } from "@/components/privacyAndTerms/Header";
import { BackButton } from "@/components/back-button";

export default function PrivacyPolicy() {
  const { t } = useTranslation("common");

  return (
    <main className="max-w-3xl mx-auto my-10">
      <BackButton />

      <article className="space-y-3">
        <header>
          <h1 className="text-2xl font-bold">{t("privacyPolicy.title")}</h1>
          <p>{t("privacyPolicy.description")}</p>
        </header>

        <section>
          <Header>{t("privacyPolicy.content.section1.title")}</Header>
          <p>{t("privacyPolicy.content.section1.description")}</p>
        </section>

        <section>
          <Header>{t("privacyPolicy.content.section2.title")}</Header>
          <p>{t("privacyPolicy.content.section2.description")}</p>
        </section>

        <section>
          <Header>{t("privacyPolicy.content.section3.title")}</Header>
          <p>{t("privacyPolicy.content.section3.description")}</p>
        </section>

        <section>
          <Header>{t("privacyPolicy.content.section4.title")}</Header>
          <p>{t("privacyPolicy.content.section4.description")}</p>
        </section>

        <section>
          <Header>{t("privacyPolicy.content.section5.title")}</Header>
          <p>{t("privacyPolicy.content.section5.description")}</p>
        </section>

        <section>
          <Header>{t("privacyPolicy.content.section6.title")}</Header>
          <p>{t("privacyPolicy.content.section6.description")}</p>
        </section>

        <section>
          <Header>{t("privacyPolicy.content.section7.title")}</Header>
          <p>{t("privacyPolicy.content.section7.description")}</p>
        </section>

        <section>
          <Header>{t("privacyPolicy.content.section8.title")}</Header>
          <p>{t("privacyPolicy.content.section8.description")}</p>
        </section>

        <footer>
          <section>
            <Header>{t("privacyPolicy.content.footer.title")}</Header>
            <Trans
              i18nKey="common:privacyPolicy.content.footer.description"
              components={{
                emailLink: <BeautifulLink href="mailto:paul@appstatis.com" />,
              }}
            />
          </section>

          <time dateTime="2023-03-07">
            {t("privacyPolicy.content.footer.lastUpdated")}
          </time>
        </footer>
      </article>
    </main>
  );
}
