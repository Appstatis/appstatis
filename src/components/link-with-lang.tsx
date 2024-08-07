import Link from "next/link";
import { useLang } from "@/hooks/useLang";
import { useRouter } from "next/navigation";

/**
 * LinkWithLang component.
 *
 * It is a wrapper around the Next.js Link component that adds the language to switch as a query parameter to the URL.
 * This allows the user to switch between the English and Estonian versions of the app.
 *
 * @param href
 * @param children
 * @returns A link component with the current language as a query parameter
 */
export const LinkWithLang = ({
  href,
  children,
  className,
  target,
}: {
  href: string;
  children: React.ReactNode;
  className?: string;
  target?: string;
}) => {
  const { curLang } = useLang();

  return (
    <Link
      target={target}
      className={className}
      href={`${href}?lang=${curLang}`}
    >
      {children}
    </Link>
  );
};
