import { Link } from "react-router-dom";
import { teamIntro, teamMembers } from "../../data/team";
import Container from "../common/Container";

function initials(name) {
  return name
    .split(" ")
    .filter(Boolean)
    .slice(0, 2)
    .map((part) => part[0])
    .join("");
}

function portraitStyle(member) {
  const position = member.imagePosition || "center 25%";
  const scale = member.imageScale || 1;
  return {
    objectPosition: position,
    transform: scale === 1 ? undefined : `scale(${scale})`,
    transformOrigin: position,
  };
}

export default function TeamSection() {
  return (
    <section aria-labelledby="team-heading" className="bg-white">
      <Container className="py-16 sm:py-20 lg:py-28">
        <div className="rounded-[2rem] bg-brand-brown px-6 py-14 text-white sm:px-10 sm:py-16 lg:py-20">
        <div className="mx-auto max-w-3xl text-center">
          <span className="inline-flex items-center gap-2 rounded-full bg-white px-4 py-1.5 text-xs font-bold uppercase tracking-widest text-brand-brown">
            <svg className="h-3 w-3 text-brand-orange" viewBox="0 0 12 12" fill="currentColor" aria-hidden="true">
              <path d="M6 0l1.5 4.5H12L8.25 7.5 9.75 12 6 9l-3.75 3 1.5-4.5L0 4.5h4.5z" />
            </svg>
            {teamIntro.eyebrow}
          </span>
          <h2
            id="team-heading"
            className="mt-5 font-serif text-3xl font-bold leading-tight sm:text-4xl lg:text-5xl"
          >
            {teamIntro.title}
          </h2>
          {teamIntro.text ? (
            <p className="mx-auto mt-5 max-w-xl text-base leading-relaxed text-white/80 sm:text-lg">
              {teamIntro.text}
            </p>
          ) : null}
        </div>

        <ol className="relative mx-auto mt-14 flex max-w-3xl flex-col items-center gap-14 sm:mt-16 sm:flex-row sm:justify-center sm:gap-24">
          <span
            className="absolute left-[22%] right-[22%] top-[6.5rem] hidden border-t border-dashed border-white/35 sm:block"
            aria-hidden="true"
          />
          {teamMembers.map((member) => (
            <li key={member.id} className="relative z-10 flex w-56 flex-col items-center text-center">
              <div>
                {member.image ? (
                  <span className="block h-44 w-44 overflow-hidden rounded-full ring-4 ring-white/15 sm:h-52 sm:w-52">
                    <img
                      src={member.image}
                      alt=""
                      style={portraitStyle(member)}
                      className="h-full w-full object-cover"
                    />
                  </span>
                ) : (
                  <span className="flex h-44 w-44 items-center justify-center rounded-full bg-brand-orange font-serif text-4xl font-bold text-brand-brown ring-4 ring-white/15 sm:h-52 sm:w-52 sm:text-5xl">
                    {initials(member.name)}
                  </span>
                )}
              </div>
              <p className="mt-5 font-serif text-xl font-bold">{member.name}</p>
              <p className="mt-1 text-sm text-white/80">{member.role}</p>
            </li>
          ))}
        </ol>

        <div className="mt-14 text-center">
          <Link
            to={teamIntro.cta.to}
            className="inline-flex rounded-full bg-brand-orange px-7 py-3 text-sm font-bold uppercase tracking-widest text-brand-brown transition-colors duration-200 hover:bg-brand-orange-dark motion-reduce:transition-none"
          >
            {teamIntro.cta.label}
          </Link>
        </div>
        </div>
      </Container>
    </section>
  );
}
