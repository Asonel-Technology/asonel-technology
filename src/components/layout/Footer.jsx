import { Link } from "react-router-dom";
import { company } from "../../data/company";
import { navigation } from "../../data/navigation";
import Container from "../common/Container";
import Logo from "../common/Logo";

const year = new Date().getFullYear();

export default function Footer() {
  return (
    <footer className="bg-brand-brown text-white">
      <Container className="grid gap-10 py-12 sm:grid-cols-[1.4fr_1fr_1fr] sm:items-start">
        <div>
          <Link to="/" aria-label="Asonel Technology, home" className="inline-flex rounded-md">
            <Logo />
          </Link>
          <p className="mt-4 max-w-xs text-sm leading-relaxed text-white/80">
            Websites, applications, and custom software.
          </p>
        </div>

        <nav aria-label="Footer">
          <ul className="space-y-2">
            {navigation.map((item) => (
              <li key={item.label}>
                <Link
                  to={item.to}
                  className="text-sm font-medium text-white transition-colors duration-200 hover:text-brand-orange motion-reduce:transition-none"
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.14em] text-white/80">Email</p>
          <a
            href={`mailto:${company.email}`}
            className="mt-3 inline-flex min-h-11 items-center text-base font-semibold text-white underline decoration-white/40 underline-offset-4"
          >
            {company.email}
          </a>
        </div>
      </Container>
      <Container className="border-t border-white/15 py-5">
        <p className="text-sm text-white/80">
          © {year} {company.name}
        </p>
      </Container>
    </footer>
  );
}
