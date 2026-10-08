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
      {/* Background image */}
      {images.hero.src && (
        <img
          src={images.hero.src}
          alt={images.hero.alt}
          className="absolute inset-0 h-full w-full object-cover object-center"
          fetchPriority="high"
        />
      )}

      {/* Subtle dark overlay on the sides so the arch pops */}
      <div className="absolute inset-0 bg-brand-brown/40" aria-hidden="true" />

      {/* Arch card */}
      <div className="relative z-10 flex min-h-[92vh] items-center justify-center px-4 py-16">
        <div
          className="w-full max-w-2xl bg-brand-orange px-8 pb-16 pt-20 text-center sm:px-14 sm:pb-20 sm:pt-24"
          style={{ borderRadius: "50% 50% 0 0 / 40% 40% 0 0" }}
        >
          {/* Badge */}
          <span className="inline-flex items-center gap-2 rounded-full bg-white px-5 py-1.5 text-xs font-bold uppercase tracking-widest text-brand-brown">
            <svg className="h-3 w-3 text-brand-orange" viewBox="0 0 12 12" fill="currentColor" aria-hidden="true">
              <path d="M6 0l1.5 4.5H12L8.25 7.5 9.75 12 6 9l-3.75 3 1.5-4.5L0 4.5h4.5z" />
            </svg>
            {hero.eyebrow}
          </span>

          {/* Heading */}
          <h1
            id="hero-heading"
            className="mt-6 font-serif text-4xl font-bold leading-tight text-white sm:text-5xl lg:text-6xl"
          >
            {hero.title}
          </h1>

          {/* CTAs */}
          <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Link
              to={hero.secondaryCta.to}
              className="w-full rounded-full bg-white px-8 py-3.5 text-sm font-bold uppercase tracking-widest text-brand-brown transition hover:bg-brand-sand sm:w-auto"
            >
              {hero.secondaryCta.label}
            </Link>
            <Link
              to={hero.primaryCta.to}
              className="w-full rounded-full bg-brand-brown px-8 py-3.5 text-sm font-bold uppercase tracking-widest text-white transition hover:opacity-80 sm:w-auto"
            >
              {hero.primaryCta.label}
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
