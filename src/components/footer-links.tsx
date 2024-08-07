"use client";

import useTranslation from "next-translate/useTranslation";
import { LinkWithLang } from "./link-with-lang";

export const FooterLinks = () => {
  const { t } = useTranslation("common");

  return (
    <nav className="flex items-center gap-4">
      <LinkWithLang
        className="text-sm font-medium text-gray-400 hover:text-gray-200"
        href="terms-of-service"
      >
        {t("footer.links.termsOfService")}
      </LinkWithLang>
      <LinkWithLang
        className="text-sm font-medium text-gray-400 hover:text-gray-200"
        href="privacy-policy"
      >
        {t("footer.links.privacyPolicy")}
      </LinkWithLang>
      <LinkWithLang
        className="text-sm font-medium text-gray-400 hover:text-gray-200"
        href="https://github.com/appstatis/appstatis"
        target="_blank"
      >
        {t("footer.links.github")}
      </LinkWithLang>
    </nav>
  );
};
