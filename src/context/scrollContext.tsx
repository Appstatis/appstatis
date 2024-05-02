"use client";

import { createContext, useRef, ReactNode } from "react";

interface ScrollContextType {
  about: React.RefObject<HTMLElement>;
  faq: React.RefObject<HTMLElement>;
  pricing: React.RefObject<HTMLElement>;
  contact: React.RefObject<HTMLElement>;
}

const initialRefs: ScrollContextType = {
  about: { current: null },
  faq: { current: null },
  pricing: { current: null },
  contact: { current: null },
};

const ScrollContext = createContext<ScrollContextType>(initialRefs);

/**
 * This context provides a reference to the target element that should be scrolled to
 * when a user interacts with a component that triggers a scroll event.
 */
export default ScrollContext;

export const ScrollProvider = ({ children }: { children: ReactNode }) => {
  const aboutRef = useRef<HTMLElement>(null);
  const faqRef = useRef<HTMLElement>(null);
  const pricingRef = useRef<HTMLElement>(null);
  const contactRef = useRef<HTMLElement>(null);

  const value = {
    about: aboutRef,
    faq: faqRef,
    pricing: pricingRef,
    contact: contactRef,
  };

  return (
    <ScrollContext.Provider value={value}>{children}</ScrollContext.Provider>
  );
};
