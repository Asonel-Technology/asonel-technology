import { useLayoutEffect, useRef, useState } from "react";

export default function Reveal({ className = "", delay = 0, children }) {
  const ref = useRef(null);
  const [mode, setMode] = useState("wait");

  useLayoutEffect(() => {
    const node = ref.current;
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    if (!node || reduce || typeof IntersectionObserver === "undefined") {
      setMode("shown");
      return;
    }

    const rect = node.getBoundingClientRect();
    const inView = rect.top < window.innerHeight * 0.92 && rect.bottom > 0;
    if (inView) {
      setMode("shown");
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) return;
        setMode("play");
        observer.disconnect();
      },
      { threshold: 0.12, rootMargin: "0px 0px -32px 0px" },
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      className={className}
      data-reveal={mode === "wait" ? "wait" : "show"}
      data-instant={mode === "shown" ? "" : undefined}
      style={mode === "play" && delay ? { "--reveal-delay": `${delay}ms` } : undefined}
    >
      {children}
    </div>
  );
}
