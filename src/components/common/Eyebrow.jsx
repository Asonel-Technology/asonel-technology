export default function Eyebrow({ children, light = false }) {
  return (
    <p
      className={`flex items-center gap-3 text-sm font-semibold uppercase tracking-[0.14em] ${
        light ? "text-white" : "text-brand-brown"
      }`}
    >
      <span className="h-px w-8 bg-brand-orange" aria-hidden="true" />
      {children}
    </p>
  );
}
