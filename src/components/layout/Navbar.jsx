import { useEffect, useId, useRef, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import Logo from "../common/Logo";
import Container from "../common/Container";
import NavDropdown from "../navigation/NavDropdown";
import MobileMenu from "../navigation/MobileMenu";
import { navigation } from "../../data/navigation";

export default function Navbar() {
  const { pathname, hash } = useLocation();
  const locationKey = `${pathname}${hash}`;
  const menuId = useId();
  const headerRef = useRef(null);
  const [ui, setUi] = useState({ locationKey, openMenu: null, mobileOpen: false });

  if (ui.locationKey !== locationKey) {
    setUi({ locationKey, openMenu: null, mobileOpen: false });
  }

  const openMenu = ui.locationKey === locationKey ? ui.openMenu : null;
  const mobileOpen = ui.locationKey === locationKey ? ui.mobileOpen : false;

  function setOpenMenu(value) {
    setUi((current) => {
      const base = current.locationKey === locationKey ? current : { locationKey, openMenu: null, mobileOpen: false };
      const nextMenu = typeof value === "function" ? value(base.openMenu) : value;
      return { ...base, locationKey, openMenu: nextMenu };
    });
  }

  function setMobileOpen(value) {
    setUi((current) => {
      const base = current.locationKey === locationKey ? current : { locationKey, openMenu: null, mobileOpen: false };
      const nextOpen = typeof value === "function" ? value(base.mobileOpen) : value;
      return { ...base, locationKey, mobileOpen: nextOpen };
    });
  }

  useEffect(() => {
    function onKeyDown(event) {
      if (event.key === "Escape") {
        setUi((current) => ({ ...current, openMenu: null, mobileOpen: false }));
      }
    }

    function onPointerDown(event) {
      if (!headerRef.current?.contains(event.target)) {
        setUi((current) => ({ ...current, openMenu: null }));
      }
    }

    document.addEventListener("keydown", onKeyDown);
    document.addEventListener("pointerdown", onPointerDown);
    return () => {
      document.removeEventListener("keydown", onKeyDown);
      document.removeEventListener("pointerdown", onPointerDown);
    };
  }, []);

  return (
    <header ref={headerRef} className="sticky top-0 z-50 bg-brand-brown">
      <nav aria-label="Primary">
        <Container className="flex h-16 items-center justify-between gap-4">
          <Link
            to="/"
            aria-label="Asnol Technology, home"
            className="shrink-0 rounded-md"
          >
            <Logo />
          </Link>

          <ul className="hidden items-center gap-1 lg:flex">
            {navigation.map((item) => (
              <li key={item.label}>
                {item.children ? (
                  <NavDropdown
                    item={item}
                    open={openMenu === item.label}
                    onToggle={() =>
                      setOpenMenu((current) => (current === item.label ? null : item.label))
                    }
                    onClose={() => setOpenMenu(null)}
                  />
                ) : (
                  <Link
                    to={item.to}
                    aria-current={pathname === item.to ? "page" : undefined}
                    className={`rounded-md px-3 py-2 text-sm font-medium ${
                      pathname === item.to
                        ? "text-brand-orange"
                        : "text-white hover:text-brand-orange"
                    }`}
                    onClick={() => setOpenMenu(null)}
                  >
                    {item.label}
                  </Link>
                )}
              </li>
            ))}
          </ul>

          <button
            type="button"
            className="inline-flex h-11 w-11 items-center justify-center rounded-md text-white lg:hidden"
            aria-expanded={mobileOpen}
            aria-controls={menuId}
            onClick={() => setMobileOpen((open) => !open)}
          >
            <span className="sr-only">{mobileOpen ? "Close menu" : "Open menu"}</span>
            {mobileOpen ? (
              <svg viewBox="0 0 24 24" className="h-6 w-6" aria-hidden="true" fill="none" stroke="currentColor" strokeWidth="1.75">
                <path d="M6 6l12 12M18 6 6 18" strokeLinecap="round" />
              </svg>
            ) : (
              <svg viewBox="0 0 24 24" className="h-6 w-6" aria-hidden="true" fill="none" stroke="currentColor" strokeWidth="1.75">
                <path d="M4 7h16M4 12h16M4 17h16" strokeLinecap="round" />
              </svg>
            )}
          </button>
        </Container>

        <div
          id={menuId}
          className={`grid transition-[grid-template-rows] duration-300 ease-out motion-reduce:transition-none lg:hidden ${
            mobileOpen ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
          }`}
        >
          <div className="min-h-0 overflow-hidden" inert={mobileOpen ? undefined : true}>
            <MobileMenu
              key={pathname}
              items={navigation}
              onNavigate={() => setMobileOpen(false)}
            />
          </div>
        </div>
      </nav>
    </header>
  );
}
