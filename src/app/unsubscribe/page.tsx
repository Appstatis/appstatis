import useTranslation from "next-translate/useTranslation";
import { Header } from "@/components/header";
import { UnsubscribeForm } from "@/components/unsubscribe/unsubscribe-form";

export default function Unsubscribe() {
  const { t } = useTranslation("common");

  return (
    <main className="my-[25vh] space-y-3">
      <Header
        title={t("unsubscribe.title")}
        description={t("unsubscribe.description")}
      />

      <UnsubscribeForm />
    </main>
  );
}
