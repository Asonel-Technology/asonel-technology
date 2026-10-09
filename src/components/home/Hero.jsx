import { company } from "../../data/company";
import { images } from "../../data/images";
import { Link } from "react-router-dom";

export default function Hero() {
  const { hero } = company;

  return (
    <section
      aria-labelledby="hero-heading"
      className="relative min-h-[92vh] overflow-hidden bg-brand-brown"
    >
      {images.hero.src ? (
        <img
          src={images.hero.src}
          alt={images.hero.alt}
          className="absolute inset-0 h-full w-full object-cover object-center"
          fetchPriority="high"
        />
      ) : null}

      <div className="absolute inset-0 bg-brand-brown/40" aria-hidden="true" />

      <div className="relative z-10 flex min-h-[92vh] items-center justify-center px-4 py-16">
        <div
          className="w-full max-w-2xl bg-brand-orange px-8 pb-16 pt-20 text-center sm:px-14 sm:pb-20 sm:pt-24"
          style={{ borderRadius: "50% 50% 0 0 / 40% 40% 0 0" }}
        >
          <span className="inline-flex items-center gap-2 rounded-full bg-white px-5 py-1.5 text-xs font-bold uppercase tracking-widest text-brand-brown">
            <svg className="h-3 w-3 text-brand-brown" viewBox="0 0 12 12" fill="currentColor" aria-hidden="true">
              <path d="M6 0l1.5 4.5H12L8.25 7.5 9.75 12 6 9l-3.75 3 1.5-4.5L0 4.5h4.5z" />
            </svg>
            {hero.eyebrow}
          </span>

          <h1
            id="hero-heading"
            className="hero-in hero-in-1 mt-6 font-serif text-4xl font-bold leading-tight text-brand-brown sm:text-5xl lg:text-6xl"
          >
            {hero.title}
          </h1>

          <p className="hero-in hero-in-2 mx-auto mt-5 max-w-xl text-base leading-relaxed text-brand-brown sm:text-lg">
            {hero.text}
          </p>

          <div className="hero-in hero-in-3 mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Link
              to={hero.secondaryCta.to}
              className="w-full rounded-full bg-white px-8 py-3.5 text-sm font-bold uppercase tracking-widest text-brand-brown transition duration-200 hover:bg-brand-sand motion-reduce:transition-none active:opacity-90 sm:w-auto"
            >
              {hero.secondaryCta.label}
            </Link>
            <Link
              to={hero.primaryCta.to}
              className="w-full rounded-full bg-brand-brown px-8 py-3.5 text-sm font-bold uppercase tracking-widest text-white transition duration-200 hover:opacity-80 motion-reduce:transition-none active:opacity-90 sm:w-auto"
            >
              {hero.primaryCta.label}
            </Link>
          </div>

          <dl className="hero-in hero-in-4 mx-auto mt-10 grid max-w-xl grid-cols-3 gap-2 text-center sm:gap-3">
            {company.stats.map((item) => (
              <div key={item.label} className="rounded-2xl bg-white px-2 py-3 sm:px-3 sm:py-4">
                <dt className="font-serif text-2xl font-bold text-brand-brown sm:text-3xl">{item.value}</dt>
                <dd className="mt-1 text-[11px] font-semibold uppercase leading-snug tracking-wide text-brand-brown sm:text-xs">
                  {item.label}
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </section>
  );
}
