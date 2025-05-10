import { useEffect, useRef } from "react";

type UseIntersectionObserverProps = {
  callback: () => void;
  options?: IntersectionObserverInit;
};

/**
 *
 * Used to perform fetch when reach end of page
 */
export const useIntersectionObserver = ({
  callback,
  options = { threshold: 1.0 },
}: UseIntersectionObserverProps) => {
  const ref = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;

    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        callback();
      }
    }, options);

    observer.observe(node);
    return () => observer.disconnect();
  }, [callback, options]);

  return ref;
};
