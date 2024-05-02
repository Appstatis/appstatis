/**
 * A simple utility function that scrolls to a specific element with a smooth effect
 *
 * @param ref
 */
export const handleSmoothScroll = (ref: React.RefObject<HTMLElement>) => {
  ref.current?.scrollIntoView({
    behavior: "smooth",
    block: "center",
  });
};
