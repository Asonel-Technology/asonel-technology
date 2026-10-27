import { useLayoutEffect, useRef, useState } from "react";

export default function Reveal({ children, className = "" }) {
  const ref = useRef(null);
  const [phase, setPhase] = useState("pending");

  useLayoutEffect(() => {
    const element = ref.current;
    if (!element || !document.documentElement.classList.contains("motion")) {
      setPhase("shown");
      return;
    }

    const rect = element.getBoundingClientRect();
    const alreadyVisible = rect.top < window.innerHeight * 0.92 && rect.bottom > 0;
    if (alreadyVisible) {
      setPhase("shown");
      return;
    }

    setPhase("waiting");
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries.some((entry) => entry.isIntersecting)) {
          setPhase("shown");
          observer.disconnect();
        }
      },
      { rootMargin: "0px 0px -8% 0px", threshold: 0 },
    );
    observer.observe(element);
    return () => observer.disconnect();
  }, []);

  return (
    <div ref={ref} data-phase={phase} className={`reveal ${className}`.trim()}>
      {children}
    </div>
  );
}
