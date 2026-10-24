import { useEffect } from "react";
import Lenis from "lenis";

let lenis;

export function scrollPage(target, immediate) {
  if (lenis) {
    lenis.scrollTo(target, {
      immediate,
      offset: typeof target === "number" ? 0 : -72,
    });
    return;
  }

  if (typeof target === "number") {
    window.scrollTo(0, target);
    return;
  }

  target.scrollIntoView({ behavior: immediate ? "auto" : "smooth", block: "start" });
}

export default function useSmoothScroll() {
  useEffect(() => {
    if (!document.documentElement.classList.contains("motion")) return undefined;

    lenis = new Lenis({
      autoRaf: true,
      duration: 1.2,
      wheelMultiplier: 0.72,
      smoothWheel: true,
      allowNestedScroll: true,
      stopInertiaOnNavigate: true,
    });

    const onScroll = (instance) => {
      const progress = Math.min(1, Math.max(0, instance.scroll / window.innerHeight));
      document.documentElement.style.setProperty("--hero-p", progress.toFixed(4));
    };
    lenis.on("scroll", onScroll);
    onScroll(lenis);

    return () => {
      lenis.destroy();
      lenis = undefined;
    };
  }, []);
}
