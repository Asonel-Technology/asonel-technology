import Container from "./Container";
import Eyebrow from "./Eyebrow";
import Reveal from "./Reveal";

export default function PageHeader({ eyebrow, title, text }) {
  return (
    <header className="border-b border-brand-brown/10 bg-brand-sand">
      <Container className="py-14 sm:py-16 lg:py-20">
        <Reveal>
        {eyebrow ? <Eyebrow>{eyebrow}</Eyebrow> : null}
        <h1 className="mt-3 max-w-3xl font-serif text-4xl leading-tight text-balance text-brand-brown sm:text-5xl">
          {title}
        </h1>
        {text ? (
          <p className="mt-4 max-w-2xl text-base leading-relaxed text-brand-brown sm:text-lg">
            {text}
          </p>
        ) : null}
        </Reveal>
      </Container>
    </header>
  );
}
