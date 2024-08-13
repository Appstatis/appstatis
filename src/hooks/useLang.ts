import { useSearchParams } from "next/navigation";

export const useLang = () => {
  let languages = ["en", "et", "ru"];

  const searchParams = useSearchParams();
  const curLang = searchParams.get("lang") ?? "en";

  languages = languages.filter((lang) => lang !== curLang);

  return { curLang, languages };
};
