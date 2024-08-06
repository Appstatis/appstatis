import { useSearchParams } from "next/navigation";

export const useLang = () => {
  const searchParams = useSearchParams();
  const lang = searchParams.get("lang") ?? "en";
  const langToSwitch = lang === "en" ? "ee" : "en";

  return { lang, langToSwitch };
};
