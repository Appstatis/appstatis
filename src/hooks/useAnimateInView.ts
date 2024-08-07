import { useEffect } from "react";
import { useInView } from "react-intersection-observer";
import anime from "animejs";
import type { AnimationOptions } from "@/types/AnimationOptions";

/**
 * useAnimateInView is a custom hook that animates an element when it is in view.
 * It supports using custom options to animate the element by passing an object of type AnimationOptions.
 *
 * To use it, you should pass the ref to the element you want to animate and also add a class that corresponds to the selector.
 *
 * @param selector
 * @param options
 * @returns A ref and a boolean value that represents whether the element is in view
 */
export const useAnimateInView = (
  selector: string,
  options: AnimationOptions = {}
) => {
  const {
    triggerOnce = true,
    threshold = 0.5,
    translateY = 0,
    opacity = [0, 1],
    duration = 3000,
    delay = 0,
  } = options;

  const { ref, inView } = useInView({
    triggerOnce,
    threshold,
  });

  useEffect(() => {
    if (inView) {
      anime({
        targets: selector,
        translateY,
        opacity,
        duration,
      });
    }
  }, [duration, inView, opacity, selector, translateY]);

  return { ref, inView };
};
