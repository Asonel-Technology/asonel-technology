import { useId } from "react";
import { Link, useLocation } from "react-router-dom";
import { isNavActive, isSectionActive } from "../../utils/navActive";

function Chevron({ open }) {
  return (
    <svg
      viewBox="0 0 20 20"
      aria-hidden="true"
      className={`h-4 w-4 transition-transform duration-200 motion-reduce:transition-none ${open ? "rotate-180" : ""}`}
      fill="none"
      stroke="currentColor"
      strokeWidth="1.75"
    >
      <path d="M5 8l5 5 5-5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export default function NavDropdown({ item, open, onToggle, onClose }) {
  const panelId = useId();
  const { pathname, hash } = useLocation();
  const sectionActive = isSectionActive(item, pathname, hash);

  return (
    <div
      className="relative"
      onBlur={(event) => {
        if (!event.currentTarget.contains(event.relatedTarget)) {
          onClose();
        }
      }}
    >
      <div className="flex items-center">
        <Link
          to={item.to}
          aria-current={isNavActive(item.to, pathname, hash) ? "page" : undefined}
          className={`nav-link rounded-md px-2.5 py-2 text-sm font-medium ${
            sectionActive ? "text-brand-orange" : "text-white hover:text-brand-orange"
          }`}
          onClick={onClose}
        >
          {item.label}
        </Link>
        <button
          type="button"
          className="rounded-md p-2 text-white transition-colors duration-200 hover:text-brand-orange motion-reduce:transition-none"
          aria-expanded={open}
          aria-controls={panelId}
          aria-label={`${open ? "Hide" : "Show"} ${item.label} menu`}
          onClick={onToggle}
        >
          <Chevron open={open} />
        </button>
      </div>

      <div
        id={panelId}
        hidden={!open}
        className={`nav-panel absolute top-full z-50 mt-2 max-h-[70vh] w-80 overflow-y-auto border border-brand-brown/10 bg-white p-2 shadow-card ${
          item.align === "end" ? "right-0" : "left-0"
        }`}
      >
        <ul aria-label={item.label}>
          {item.children.map((child, index) => {
            const current = isNavActive(child.to, pathname, hash);
            const showGroup = child.group && child.group !== item.children[index - 1]?.group;
            return (
              <li key={child.to}>
                {showGroup ? (
                  <p className="px-3 pb-1 pt-3 text-xs font-semibold uppercase tracking-[0.14em] text-brand-brown/60">
                    {child.group}
                  </p>
                ) : null}
                <Link
                  to={child.to}
                  aria-current={current ? "page" : undefined}
                  onClick={onClose}
                  className={`block rounded-md px-3 py-2.5 text-sm leading-snug text-brand-brown transition-colors duration-200 hover:bg-brand-sand motion-reduce:transition-none ${
                    current ? "bg-brand-sand font-semibold" : ""
                  }`}
                >
                  {child.label}
                </Link>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
}
