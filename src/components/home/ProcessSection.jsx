import { company } from "../../data/company";
import Container from "../common/Container";
import Reveal from "../common/Reveal";

export default function ProcessSection() {
  const { process } = company;

  return (
    <section aria-labelledby="process-heading" className="bg-white">
      <Container className="py-16 sm:py-20 lg:py-24">
        <Reveal>
        <h2
          id="process-heading"
          className="max-w-2xl font-serif text-3xl font-bold leading-tight text-brand-brown sm:text-4xl lg:text-5xl"
        >
          {process.title}
        </h2>
        </Reveal>
        <ol className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {process.steps.map((step, index) => (
            <li key={step.number}>
              <Reveal delay={index * 60}>
              <div className="rounded-2xl bg-brand-sand p-6">
              <p className="font-serif text-4xl font-bold text-brand-brown/25">{step.number}</p>
              <h3 className="mt-4 font-serif text-xl font-bold text-brand-brown">{step.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-brand-brown/80">{step.text}</p>
              </div>
              </Reveal>
            </li>
          ))}
        </ol>
      </Container>
    </section>
  );
}
