import { useCallback, useRef } from "react";

type Props<T> = {
  total: number;
  loading: boolean;
  data: T[];
  callback: VoidFunction;
};

export const useLastElement = <T>(props: Props<T>) => {
  const observer = useRef<IntersectionObserver>();

  const lastElementRef = useCallback(
    (element: HTMLDivElement) => {
      if (props.loading) {
        return;
      }
      if (observer.current) {
        observer.current.disconnect();
      }
      observer.current = new IntersectionObserver((entries) => {
        if (entries[0].isIntersecting) {
          if (!props.data || props.data.length === props.total) {
            return;
          }
          props.callback();
        }
      });
      if (element) {
        observer.current.observe(element);
      }
    },
    [props.data, props.loading]
  );

  return lastElementRef;
};
