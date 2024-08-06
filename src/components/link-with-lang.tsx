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
}: {
  href: string;
  children: React.ReactNode;
}) => {
  const { langToSwitch } = useLang();

  return <Link href={`${href}?lang=${langToSwitch}`}>{children}</Link>;
};
