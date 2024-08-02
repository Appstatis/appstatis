import Trans from "next-translate/Trans";
import { BeautifulLink } from "../beautiful-link";
import { useAnimateInView } from "@/hooks/useAnimateInView";

export const AboutContent = () => {
  const { ref } = useAnimateInView(".about", {
    opacity: [0, 1],
    duration: 3000,
  });

  return (
    <article ref={ref} className="about space-y-4 opacity-0">
      <Trans
        i18nKey="common:about.message"
        components={{
          p: <p className="text-lg" />,
          strong: <strong className="text-xl font-bold" />,
          website: <BeautifulLink href="https://paulbg.dev" />,
          email: <BeautifulLink href="mailto:paul@appstatis.com" />,
        }}
      />
    </article>
  );
};
