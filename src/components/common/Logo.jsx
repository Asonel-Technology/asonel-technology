import { useState } from "react";
import { images } from "../../data/images";

export default function Logo({ variant = "onDark", className = "" }) {
  const [failed, setFailed] = useState(false);
  const showImage = Boolean(images.logo.src) && !failed;
  const tone = variant === "onLight" ? "text-brand-brown" : "text-white";

  if (showImage) {
    return (
      <img
        src={images.logo.src}
        alt={images.logo.alt}
        width={images.logo.width}
        height={images.logo.height}
        className={`h-14 w-auto max-w-[13rem] ${className}`}
        onError={() => setFailed(true)}
      />
    );
  }

  return (
    <span className={`inline-flex items-center gap-2.5 ${tone} ${className}`}>
      <span className="h-6 w-1.5 shrink-0 bg-brand-orange" aria-hidden="true" />
      <span className="font-serif text-xl leading-none tracking-tight">Asnol</span>
      <span className="hidden text-[0.68rem] font-semibold uppercase tracking-[0.16em] sm:inline">
        Technology
      </span>
    </span>
  );
}
