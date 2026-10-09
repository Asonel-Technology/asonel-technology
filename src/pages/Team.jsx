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
    .join("")
    .toUpperCase();
}

export default function Team() {
  usePageTitle("Team");

  return (
    <>
      <PageHeader eyebrow={teamIntro.eyebrow} title={teamIntro.title} text={teamIntro.text} />
      <Container className="py-14 sm:py-16">
        <ul className="grid gap-5 sm:grid-cols-2">
          {teamMembers.map((member) => (
            <li key={member.id} className="rounded-2xl border border-brand-brown/10 bg-white p-6 sm:p-8">
              {member.image ? (
                <img src={member.image} alt="" className="h-16 w-16 rounded-full object-cover" />
              ) : (
                <span
                  className="flex h-16 w-16 items-center justify-center rounded-full bg-brand-sand font-serif text-xl text-brand-brown"
                  aria-hidden="true"
                >
                  {initials(member.name)}
                </span>
              )}
              <h2 className="mt-5 font-serif text-2xl text-brand-brown">{member.name}</h2>
              <p className="mt-1 text-sm font-semibold uppercase tracking-widest text-brand-brown/80">
                {member.role}
              </p>
            </li>
          ))}
        </ul>
      </Container>
    </>
  );
}
