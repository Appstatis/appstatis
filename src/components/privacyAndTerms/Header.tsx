/**
 * A simple h2 wrapper that is meant to be used as a header for sections.
 *
 * Note that this component is not exported and is only used within the privacy policy and terms of service pages.
 * It's different from the `Header` component in the `src/components` directory.
 *
 * @param children
 * @returns A header component with a title
 */
export const Header = ({ children }: { children: React.ReactNode }) => {
  return <h2 className="font-semibold text-lg">{children}</h2>;
};
