import { company } from "../../data/company";
import Container from "../common/Container";
import Reveal from "../common/Reveal";

const icons = [
  <svg key="sheet" viewBox="0 0 24 24" className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth="1.75" aria-hidden="true">
    <rect x="5" y="3" width="14" height="18" rx="1.5" />
    <path d="M8 8h8M8 12h8M8 16h5" strokeLinecap="round" />
  </svg>,
  <svg key="tools" viewBox="0 0 24 24" className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth="1.75" aria-hidden="true">
    <circle cx="6" cy="12" r="2.25" />
    <circle cx="18" cy="7" r="2.25" />
    <circle cx="18" cy="17" r="2.25" />
    <path d="M8.2 11.2 15.8 8M8.2 12.8l7.6 3.2" strokeLinecap="round" />
  </svg>,
  <svg key="hand" viewBox="0 0 24 24" className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth="1.75" aria-hidden="true">
    <path d="M8 13V6.5a1.5 1.5 0 0 1 3 0V12" strokeLinecap="round" />
    <path d="M11 11.5V5.5a1.5 1.5 0 0 1 3 0V12" strokeLinecap="round" />
    <path d="M14 12V7.5a1.5 1.5 0 0 1 3 0V14c0 3.5-2 6.5-6.5 6.5S5 17 5 14v-2.5a1.5 1.5 0 0 1 3 0V13" strokeLinecap="round" strokeLinejoin="round" />
  </svg>,
];

export default function ProblemSection() {
  const { problem } = company;

  return (
    <section aria-labelledby="problem-heading" className="bg-white">
      <Container className="py-16 sm:py-20 lg:py-24">
        <Reveal>
        <div className="grid gap-6 lg:grid-cols-[1.1fr_0.9fr] lg:items-end">
          <h2
            id="problem-heading"
            className="font-serif text-3xl font-bold leading-tight text-brand-brown sm:text-4xl lg:text-5xl"
          >
            {problem.title}
          </h2>
          <p className="text-base leading-relaxed text-brand-brown/80 sm:text-lg">{problem.text}</p>
        </div>
        </Reveal>
        <ol className="mt-12 grid gap-8 border-t border-brand-brown/10 pt-8 sm:grid-cols-3">
          {problem.lines.map((line, index) => (
            <li key={line}>
              <Reveal delay={index * 50} className="flex items-start gap-4">
              <span className="flex h-14 w-14 shrink-0 items-center justify-center rounded-full bg-brand-orange/15 text-brand-brown">
                {icons[index]}
              </span>
              <p className="pt-2 font-serif text-xl font-bold leading-snug text-brand-brown sm:text-2xl">{line}</p>
              </Reveal>
            </li>
          ))}
        </ol>
      </Container>
    </section>
  );
}
