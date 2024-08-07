"use client";

import { LinkWithLang } from "./link-with-lang";
import useTranslation from "next-translate/useTranslation";
import { buttonVariants } from "@/components/ui/button";

export const BackButton = () => {
  const { t } = useTranslation("common");

  return (
    <LinkWithLang
      href="/"
      className={`mb-3 ${buttonVariants({ variant: "ghost" })}`}
    >
      {t("common.buttonBack")}
    </LinkWithLang>
  );
};
