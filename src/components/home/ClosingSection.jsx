import { Link } from "react-router-dom";
import { company } from "../../data/company";
import Container from "../common/Container";
import Reveal from "../common/Reveal";

export default function ClosingSection() {
  const { closing } = company;

  return (
    <section aria-labelledby="closing-heading" className="bg-brand-brown">
      <Container className="py-16 sm:py-20">
        <Reveal>
        <div className="flex flex-col items-start justify-between gap-8 lg:flex-row lg:items-center">
        <div className="max-w-2xl">
          <h2 id="closing-heading" className="font-serif text-3xl font-bold leading-tight text-white sm:text-4xl">
            {closing.title}
          </h2>
          <p className="mt-3 text-base leading-relaxed text-white/80 sm:text-lg">{closing.text}</p>
        </div>
        <Link
          to={closing.cta.to}
          className="shrink-0 rounded-full bg-brand-orange px-8 py-3.5 text-sm font-bold uppercase tracking-widest text-brand-brown transition duration-200 hover:bg-brand-orange-dark motion-reduce:transition-none active:opacity-90"
        >
          {closing.cta.label}
        </Link>
        </div>
        </Reveal>
      </Container>
    </section>
  );
}
