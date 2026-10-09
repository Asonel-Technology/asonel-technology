import { Link } from "react-router-dom";
import { company } from "../../data/company";
import { teamMembers } from "../../data/team";
import Container from "../common/Container";
import Reveal from "../common/Reveal";

function initials(name) {
  return name
    .split(" ")
    .filter(Boolean)
    .slice(0, 2)
    .map((part) => part[0])
    .join("")
    .toUpperCase();
}

const pointIcons = [
  <svg key="scope" viewBox="0 0 24 24" className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth="1.75" aria-hidden="true">
    <path d="M8 7h8M8 12h8M8 17h5" strokeLinecap="round" />
    <rect x="4" y="3" width="16" height="18" rx="2" />
  </svg>,
  <svg key="contact" viewBox="0 0 24 24" className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth="1.75" aria-hidden="true">
    <circle cx="12" cy="8" r="3" />
    <path d="M5.5 19.5a6.5 6.5 0 0 1 13 0" strokeLinecap="round" />
  </svg>,
  <svg key="code" viewBox="0 0 24 24" className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth="1.75" aria-hidden="true">
    <path d="M9 8 5 12l4 4M15 8l4 4-4 4M13 6l-2 12" strokeLinecap="round" strokeLinejoin="round" />
  </svg>,
];

export default function AboutSection() {
  const { why, email, hero } = company;

  return (
    <section aria-labelledby="about-heading" className="bg-brand-sand">
      <Container className="py-16 sm:py-20 lg:py-28">
        <Reveal>
        <div className="grid gap-8 lg:grid-cols-[1fr_1.4fr] lg:gap-16">
          <div className="flex items-start">
            <span className="inline-flex items-center gap-2 rounded-full bg-white px-4 py-1.5 text-xs font-bold uppercase tracking-widest text-brand-brown">
              <svg className="h-3 w-3 text-brand-brown" viewBox="0 0 12 12" fill="currentColor" aria-hidden="true">
                <path d="M6 0l1.5 4.5H12L8.25 7.5 9.75 12 6 9l-3.75 3 1.5-4.5L0 4.5h4.5z" />
              </svg>
              {why.eyebrow}
            </span>
          </div>

          <div>
            <h2
              id="about-heading"
              className="font-serif text-3xl font-bold leading-tight text-brand-brown sm:text-4xl lg:text-5xl"
            >
              {why.title}
            </h2>
            <p className="mt-5 text-base leading-relaxed text-brand-brown/80 sm:text-lg">{why.text}</p>
          </div>
        </div>
        </Reveal>

        <div className="mt-12 grid items-start gap-10 lg:grid-cols-[1fr_1.4fr] lg:gap-16">
          <Reveal>
          <div className="rounded-2xl bg-brand-brown p-6 text-white sm:p-8">
            <p className="text-xs font-bold uppercase tracking-widest text-brand-orange">Leadership</p>
            <ul className="mt-6 space-y-5">
              {teamMembers.map((member) => (
                <li key={member.id} className="flex items-center gap-4">
                  {member.image ? (
                    <img
                      src={member.image}
                      alt=""
                      className="h-14 w-14 shrink-0 rounded-full object-cover"
                    />
                  ) : (
                    <span
                      className="flex h-14 w-14 shrink-0 items-center justify-center rounded-full bg-white font-serif text-lg text-brand-brown"
                      aria-hidden="true"
                    >
                      {initials(member.name)}
                    </span>
                  )}
                  <span>
                    <span className="block font-serif text-xl font-bold">{member.name}</span>
                    <span className="mt-1 block text-sm text-white/80">{member.role}</span>
                  </span>
                </li>
              ))}
            </ul>
          </div>
          </Reveal>

          <Reveal delay={80}>
          <div className="flex flex-col gap-6">
            <ul>
              {why.points.map((point, index) => (
                <li key={point.title} className={index > 0 ? "mt-6 border-t border-brand-brown/10 pt-6" : ""}>
                  <div className="flex items-start gap-4">
                    <span className="flex h-14 w-14 shrink-0 items-center justify-center rounded-full bg-brand-orange/15 text-brand-brown">
                      {pointIcons[index]}
                    </span>
                    <div>
                      <h3 className="font-serif text-lg font-bold text-brand-brown sm:text-xl">{point.title}</h3>
                      <p className="mt-1 text-sm leading-relaxed text-brand-brown/80">{point.text}</p>
                    </div>
                  </div>
                </li>
              ))}
            </ul>

            <div className="flex flex-wrap gap-4">
              <Link
                to="/about"
                className="rounded-full bg-brand-orange px-7 py-3 text-sm font-bold uppercase tracking-widest text-brand-brown transition duration-200 hover:bg-brand-orange-dark motion-reduce:transition-none active:opacity-90"
              >
                About Asonel Technology
              </Link>
              <Link
                to={hero.primaryCta.to}
                className="rounded-full bg-brand-brown px-7 py-3 text-sm font-bold uppercase tracking-widest text-white transition duration-200 hover:opacity-80 motion-reduce:transition-none active:opacity-90"
              >
                {hero.primaryCta.label}
              </Link>
            </div>
            <p className="text-sm leading-relaxed text-brand-brown">
              Or write to{" "}
              <a
                href={`mailto:${email}`}
                className="font-semibold underline decoration-brand-brown/30 underline-offset-4"
              >
                {email}
              </a>
            </p>
          </div>
          </Reveal>
        </div>
      </Container>
    </section>
  );
}
