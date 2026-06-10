import { useEffect } from "react";

export function useResetScrollOnMount() {
  useEffect(() => {
    const canUseBrowserApis = typeof window !== "undefined";
    const canRestoreScroll =
      canUseBrowserApis && "scrollRestoration" in window.history;
    const previousScrollRestoration = canRestoreScroll
      ? window.history.scrollRestoration
      : undefined;

    if (canRestoreScroll) {
      window.history.scrollRestoration = "manual";
    }

    if (canUseBrowserApis) {
      window.scrollTo(0, 0);
    }

    return () => {
      if (canRestoreScroll && previousScrollRestoration) {
        window.history.scrollRestoration = previousScrollRestoration;
      }
    };
  }, []);
}
