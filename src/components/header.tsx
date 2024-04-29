import { memo } from "react";

/**
 * A simple wrapper around a header element that takes a title and description as props.
 * It is needed as the same header is used in multiple places in different sections.
 *
 * @param title
 * @param description
 * @returns A react element that represents a header with a title and description
 */
export const HeaderComponent = ({
  title,
  description,
}: {
  title: string;
  description?: string;
}) => {
  return (
    <header className="mx-auto space-y-4 max-w-2xl text-center">
      <h2 className="text-4xl font-bold">{title}</h2>
      <p className="text-gray-300">{description}</p>
    </header>
  );
};

export const Header = memo(HeaderComponent);
