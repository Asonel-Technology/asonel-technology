import { Link } from "react-router-dom";
import { company } from "../../data/company";
import { navigation } from "../../data/navigation";
import Container from "../common/Container";
import Logo from "../common/Logo";

const year = new Date().getFullYear();

const linkClass =
  "text-sm leading-snug text-white/80 transition-colors duration-200 hover:text-brand-orange motion-reduce:transition-none";

function SocialIcon({ name }) {
  if (name === "Instagram") {
    return (
      <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="1.75" aria-hidden="true">
        <rect x="3.5" y="3.5" width="17" height="17" rx="5" />
        <circle cx="12" cy="12" r="3.75" />
        <circle cx="17.2" cy="6.8" r="0.9" fill="currentColor" stroke="none" />
      </svg>
    );
  }

  if (name === "LinkedIn") {
    return (
      <svg viewBox="0 0 24 24" className="h-5 w-5" fill="currentColor" aria-hidden="true">
        <path d="M6.5 9H4V20h2.5V9zM5.2 4A1.6 1.6 0 1 0 5.2 7.2 1.6 1.6 0 0 0 5.2 4zM20 20h-2.5v-5.6c0-1.6-.6-2.6-2-2.6-1 0-1.6.7-1.9 1.4-.1.2-.1.6-.1.9V20H11V9h2.4v1.5c.4-.7 1.3-1.8 3.2-1.8 2.3 0 4 1.5 4 4.8V20z" />
      </svg>
    );
  }

  return (
    <svg viewBox="0 0 24 24" className="h-5 w-5" fill="currentColor" aria-hidden="true">
      <path d="M22 5.92a8.2 8.2 0 0 1-2.36.65 4.1 4.1 0 0 0 1.8-2.27 8.2 8.2 0 0 1-2.6 1 4.1 4.1 0 0 0-7 3.74A11.6 11.6 0 0 1 3.1 4.9a4.1 4.1 0 0 0 1.27 5.48 4.1 4.1 0 0 1-1.86-.51v.05a4.1 4.1 0 0 0 3.29 4.02 4.1 4.1 0 0 1-1.85.07 4.1 4.1 0 0 0 3.83 2.85A8.2 8.2 0 0 1 2 18.41a11.6 11.6 0 0 0 6.29 1.84c7.55 0 11.68-6.25 11.68-11.67 0-.18 0-.35-.01-.53A8.3 8.3 0 0 0 22 5.92z" />
    </svg>
  );
}

function Column({ title, links }) {
  return (
    <nav aria-label={title}>
      <h2 className="text-xs font-semibold uppercase tracking-[0.14em] text-brand-orange">{title}</h2>
      <ul className="mt-4 space-y-2.5">
        {links.map((link) => (
          <li key={link.to}>
            <Link to={link.to} className={linkClass}>
              {link.label}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}

export default function Footer() {
  const about = navigation.find((item) => item.label === "About");
  const services = navigation.find((item) => item.label === "Services");
  const blogs = navigation.find((item) => item.label === "Blogs");
  const contact = navigation.find((item) => item.label === "Contact");
  const aboutLinks = [...(about?.children ?? []), contact].filter(Boolean);

  return (
    <footer className="bg-brand-brown text-white">
      <Container className="grid gap-12 py-14 sm:grid-cols-2 lg:grid-cols-[minmax(0,1.35fr)_minmax(0,1fr)_minmax(0,0.85fr)_minmax(0,1fr)] lg:gap-10 lg:py-16">
        <div>
          <Link to="/" aria-label={`${company.name}, home`} className="inline-flex rounded-md">
            <Logo />
          </Link>
          <p className="mt-4 max-w-xs text-sm leading-relaxed text-white/80">{company.about.paragraphs[0]}</p>
          <ul className="mt-5 flex gap-2">
            {company.social.map((item) => (
              <li key={item.label}>
                <a
                  href={item.href}
                  aria-label={item.label}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex h-11 w-11 items-center justify-center rounded-full text-white transition-colors duration-200 hover:text-brand-orange motion-reduce:transition-none"
                >
                  <SocialIcon name={item.label} />
                </a>
              </li>
            ))}
          </ul>
          <Link
            to={company.hero.primaryCta.to}
            className="mt-6 inline-flex rounded-full bg-brand-orange px-6 py-3 text-xs font-bold uppercase tracking-widest text-brand-brown transition-colors duration-200 hover:bg-brand-orange-dark motion-reduce:transition-none"
          >
            {company.hero.primaryCta.label}
          </Link>
        </div>
        <Column title={services.label} links={services.children} />
        <Column title={about.label} links={aboutLinks} />
        <Column title={blogs.label} links={blogs.children} />
      </Container>
      <Container className="border-t border-white/15 py-5">
        <p className="text-sm text-white/80">© {year} {company.name}</p>
      </Container>
    </footer>
  );
}
