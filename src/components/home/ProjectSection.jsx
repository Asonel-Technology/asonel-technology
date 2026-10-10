import { Link } from "react-router-dom";
import { company } from "../../data/company";
import { navigation } from "../../data/navigation";
import Container from "../common/Container";

const contact = navigation.find((item) => item.to === "/contact");

export default function ProjectSection() {
  return (
    <section aria-labelledby="project-heading" className="relative bg-brand-orange">
      <div className="pointer-events-none absolute inset-0 overflow-hidden" aria-hidden="true">
        <div className="absolute -left-10 top-[-20%] h-[150%] w-28 -skew-x-[18deg] bg-white/20" />
        <div className="absolute left-[18%] top-[-20%] h-[150%] w-16 -skew-x-[18deg] bg-brand-brown/10" />
        <div className="absolute right-[12%] top-[-20%] h-[150%] w-40 -skew-x-[18deg] bg-white/15" />
        <div className="absolute -right-16 top-[-20%] h-[150%] w-24 -skew-x-[18deg] bg-brand-brown/10" />
      </div>

      <Link
        to={contact.to}
        aria-label={contact.label}
        className="absolute left-1/2 top-0 z-10 inline-flex h-24 w-24 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-brand-brown text-white transition-colors duration-200 hover:bg-white hover:text-brand-brown motion-reduce:transition-none"
      >
        <svg viewBox="0 0 24 24" className="h-8 w-8" fill="none" stroke="currentColor" strokeWidth="1.75" aria-hidden="true">
          <path d="M7 17 17 7M9 7h8v8" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </Link>

      <Container className="relative px-4 py-24 text-center sm:py-28 lg:py-32">
        <h2
          id="project-heading"
          className="mx-auto max-w-3xl font-serif text-4xl font-bold leading-tight text-brand-brown sm:text-5xl lg:text-6xl"
        >
          {company.closing.title}
        </h2>
        <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
          <Link
            to={company.hero.primaryCta.to}
            className="inline-flex min-h-12 min-w-44 items-center justify-center rounded-full bg-brand-brown px-8 py-3 text-xs font-bold uppercase tracking-widest text-white transition-colors duration-200 hover:bg-[#3a2610] motion-reduce:transition-none"
          >
            {company.hero.primaryCta.label}
          </Link>
          <Link
            to={contact.to}
            className="inline-flex min-h-12 min-w-44 items-center justify-center rounded-full bg-white px-8 py-3 text-xs font-bold uppercase tracking-widest text-brand-brown transition-colors duration-200 hover:bg-brand-sand motion-reduce:transition-none"
          >
            {contact.label}
          </Link>
        </div>
      </Container>
    </section>
  );
}
