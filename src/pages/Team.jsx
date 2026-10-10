import Container from "../components/common/Container";
import PageHeader from "../components/common/PageHeader";
import { teamIntro, teamMembers } from "../data/team";
import usePageTitle from "../utils/usePageTitle";

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

export default function Team() {
  usePageTitle("Team");

  return (
    <>
      <PageHeader eyebrow={teamIntro.eyebrow} title={teamIntro.title} text={teamIntro.text} />
      <section aria-labelledby="team-list" className="bg-white">
        <Container className="py-14 sm:py-16">
          <h2 id="team-list" className="sr-only">
            {teamIntro.eyebrow}
          </h2>
          <ul className="grid gap-5 sm:grid-cols-2">
            {teamMembers.map((member) => (
              <li key={member.id} className="flex items-center gap-4 rounded-2xl border border-brand-brown/10 p-6">
                {member.image ? (
                  <span className="block h-16 w-16 shrink-0 overflow-hidden rounded-full">
                    <img
                      src={member.image}
                      alt=""
                      style={portraitStyle(member)}
                      className="h-full w-full object-cover"
                    />
                  </span>
                ) : (
                  <span className="flex h-16 w-16 shrink-0 items-center justify-center rounded-full bg-brand-orange font-serif text-xl font-bold text-brand-brown">
                    {initials(member.name)}
                  </span>
                )}
                <span>
                  <span className="block font-serif text-xl font-bold text-brand-brown">{member.name}</span>
                  <span className="mt-1 block text-sm text-brand-brown/80">{member.role}</span>
                </span>
              </li>
            ))}
          </ul>
        </Container>
      </section>
    </>
  );
}
