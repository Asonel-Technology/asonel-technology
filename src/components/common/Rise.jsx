import { useLayoutEffect, useRef, useState } from "react";

export default function Rise({ as: Tag = "div", className = "", delay = 0, style, children, ...rest }) {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);

  useLayoutEffect(() => {
    const element = ref.current;
    if (!element || !document.documentElement.classList.contains("motion")) {
      setVisible(true);
      return undefined;
    }

    const entered = () => {
      const rect = element.getBoundingClientRect();
      return rect.top < window.innerHeight * 0.88 && rect.bottom > 0;
    };

    if (entered()) {
      setVisible(true);
      return undefined;
    }

    let frame = 0;
    const check = () => {
      frame = 0;
      if (!entered()) return;
      setVisible(true);
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
    const onScroll = () => {
      if (!frame) frame = requestAnimationFrame(check);
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
      if (frame) cancelAnimationFrame(frame);
    };
  }, []);

  return (
    <Tag
      ref={ref}
      data-rise={visible ? "in" : "wait"}
      className={`rise ${className}`.trim()}
      style={{ "--d": delay, ...style }}
      {...rest}
    >
      {children}
    </Tag>
  );
}
