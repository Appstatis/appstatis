import Link from "next/link";

export const BeautifulLink = ({
  href,
  children,
}: {
  href: string;
  children: React.ReactNode;
}) => {
  return (
    <Link
      href={href}
      className="duration-200 font-bold underline hover:no-underline"
    >
      {children}
    </Link>
  );
};
