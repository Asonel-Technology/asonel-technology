import { useId, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { isNavActive, isSectionActive } from "../../utils/navActive";

function Chevron({ open }) {
  return (
    <svg
      viewBox="0 0 20 20"
      aria-hidden="true"
      className={`h-4 w-4 transition-transform motion-reduce:transition-none ${open ? "rotate-180" : ""}`}
      fill="none"
      stroke="currentColor"
      strokeWidth="1.75"
    >
      <path d="M5 8l5 5 5-5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function MobileSection({ item, onNavigate }) {
  const { pathname, hash } = useLocation();
  const panelId = useId();
  const sectionActive = isSectionActive(item, pathname, hash);
  const [open, setOpen] = useState(sectionActive);

  return (
    <div className="border-b border-white/10">
      <div className="flex items-center">
        <Link
          to={item.to}
          onClick={onNavigate}
          aria-current={isNavActive(item.to, pathname, hash) ? "page" : undefined}
          className={`flex min-h-11 flex-1 items-center py-3 text-base font-medium ${
            sectionActive ? "text-brand-orange" : "text-white"
          }`}
        >
          {item.label}
        </Link>
        <button
          type="button"
          className="inline-flex h-11 w-11 items-center justify-center text-white"
          aria-expanded={open}
          aria-controls={panelId}
          onClick={() => setOpen((value) => !value)}
        >
          <Chevron open={open} />
          <span className="sr-only">
            {open ? "Collapse" : "Expand"} {item.label}
          </span>
        </button>
      </div>
      {open ? (
        <ul id={panelId} className="mb-3 border-l border-white/20 pl-4">
          {item.children.map((child) => {
            const current = isNavActive(child.to, pathname, hash);
            return (
              <li key={child.to}>
                <Link
                  to={child.to}
                  onClick={onNavigate}
                  aria-current={current ? "page" : undefined}
                  className={`flex min-h-11 items-center py-2.5 text-sm leading-snug ${
                    current ? "font-semibold text-brand-orange" : "text-white"
                  }`}
                >
                  {child.label}
                </Link>
              </li>
            );
          })}
        </ul>
      ) : null}
    </div>
  );
}

function TopLink({ item, onNavigate }) {
  const { pathname, hash } = useLocation();
  const current = isNavActive(item.to, pathname, hash);

  return (
    <Link
      to={item.to}
      onClick={onNavigate}
      aria-current={current ? "page" : undefined}
      className={`flex min-h-11 items-center border-b border-white/10 py-3 text-base font-medium ${
        current ? "text-brand-orange" : "text-white"
      }`}
    >
      {item.label}
    </Link>
  );
}

export default function MobileMenu({ items, onNavigate }) {
  return (
    <div className="border-t border-white/10 bg-brand-brown">
      <ul className="mx-auto w-full max-w-7xl px-4 pb-4 sm:px-6">
        {items.map((item) => (
          <li key={item.label}>
            {item.children ? (
              <MobileSection item={item} onNavigate={onNavigate} />
            ) : (
              <TopLink item={item} onNavigate={onNavigate} />
            )}
          </li>
        ))}
      </ul>
    </div>
  );
}
