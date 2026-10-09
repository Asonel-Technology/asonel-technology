import { useEffect } from "react";
import { Outlet, useLocation, useNavigationType } from "react-router-dom";
import Footer from "./Footer";
import Navbar from "./Navbar";

let skipFirstEnter = true;

export default function Layout() {
  const { pathname, hash } = useLocation();
  const navigationType = useNavigationType();
  const playEnter = !skipFirstEnter && pathname !== "/";

  useEffect(() => {
    skipFirstEnter = false;
  }, []);

  useEffect(() => {
    if (hash) {
      const target = document.getElementById(decodeURIComponent(hash.slice(1)));
      if (target) {
        const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
        target.scrollIntoView({ behavior: reduce ? "auto" : "smooth", block: "start" });
        return;
      }
    }

    if (navigationType === "POP") return;

    window.scrollTo({ top: 0, left: 0, behavior: "auto" });
  }, [pathname, hash, navigationType]);

  return (
    <div className="flex min-h-screen flex-col bg-white">
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-[60] focus:bg-white focus:px-4 focus:py-2 focus:text-sm focus:font-semibold focus:text-brand-brown"
      >
        Skip to content
      </a>
      <Navbar />
      <main id="main" tabIndex={-1} className="flex-1 outline-none">
        <div key={pathname} className={playEnter ? "page-enter" : undefined}>
          <Outlet />
        </div>
      </main>
      <Footer />
    </div>
  );
}
