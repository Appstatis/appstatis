/**
 * A simple utility function that scrolls to a specific element with a smooth effect.
 * It uses stopPropagation and preventDefault to prevent the default behavior of the event.
 * This is mostly used in the navbar's dropdown menu, where the default behavior is to close the dropdown menu when an item is clicked which prevents the smooth scrolling behavior.
 *
 * @param ref - The reference to the element to scroll to.
 * @param event - The event object that triggered the scroll.
 */
export const handleSmoothScroll = (
  ref: React.RefObject<HTMLElement>,
  event?: React.MouseEvent<HTMLElement, MouseEvent>
) => {
  if (event) {
    event.stopPropagation();
    event.preventDefault();
  }
  if (ref && ref.current && typeof ref.current.scrollIntoView === "function") {
    ref.current.scrollIntoView({
      behavior: "smooth",
      block: "center",
    });
  }
};
