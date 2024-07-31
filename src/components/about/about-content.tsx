import { BeautifulLink } from "../beautiful-link";
import { useAnimateInView } from "@/hooks/useAnimateInView";

export const AboutContent = () => {
  const { ref } = useAnimateInView(".about", {
    opacity: [0, 1],
    duration: 3000,
  });

  return (
    <article ref={ref} className="about space-y-4 opacity-0">
      <p>
        Welcome to <strong>appstatis</strong>! I&apos;m <strong>Paul</strong>, a
        dedicated web designer and developer here to bring your online vision to
        life. As a solo entrepreneur, I offer personalized, one-on-one service
        to ensure your website truly reflects your brand and meets your unique
        needs.
      </p>
      <p>
        Currently, I&apos;m a fourth-grade software engineering student at{" "}
        <strong>Tallinna Polütehnikum</strong> and an enthusiastic intern in the
        field. My fresh perspective and eagerness to embrace innovative
        solutions set me apart. I&apos;m committed to staying on the cutting
        edge of web design and development, ready to tackle any challenge and
        bring creative ideas to your projects.
      </p>
      <p>
        For more information as well as my social media profiles, visit my{" "}
        <BeautifulLink href="https://paulbg.dev">personal page</BeautifulLink>{" "}
        or contact me directly at:
      </p>
      <ul>
        <li>
          Email:{" "}
          <BeautifulLink href="mailto:[paul@appstatis.com]">
            paul@appstatis.com
          </BeautifulLink>
        </li>
      </ul>
      <p>Looking forward to working with you!</p>
    </article>
  );
};
