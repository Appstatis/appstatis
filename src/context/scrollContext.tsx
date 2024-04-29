"use client";

import { createContext, useRef, MutableRefObject, ReactNode } from "react";

const initialRef = { current: null };
const ScrollContext =
  createContext<MutableRefObject<HTMLElement | null>>(initialRef);

/**
 * This context provides a reference to the target element that should be scrolled to
 * when the user clicks on the "Explore" button in the Hero component.
 */
export default ScrollContext;

export const ScrollProvider = ({ children }: { children: ReactNode }) => {
  const targetRef = useRef(null);

  return (
    <ScrollContext.Provider value={targetRef}>
      {children}
    </ScrollContext.Provider>
  );
};
