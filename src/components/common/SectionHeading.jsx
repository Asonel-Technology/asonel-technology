import Eyebrow from "./Eyebrow";

export default function SectionHeading({ eyebrow, title, text, id }) {
  return (
    <div className="max-w-2xl">
      {eyebrow ? <Eyebrow>{eyebrow}</Eyebrow> : null}
      <h2
        id={id}
        className="mt-3 font-serif text-3xl leading-tight text-balance text-brand-brown sm:text-4xl"
      >
        {title}
      </h2>
      {text ? (
        <p className="mt-4 text-base leading-relaxed text-brand-brown sm:text-lg">{text}</p>
      ) : null}
    </div>
  );
}
