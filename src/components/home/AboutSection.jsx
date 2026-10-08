import { company } from "../../data/company";
import Container from "../common/Container";
import { Link } from "react-router-dom";

const aboutImages = [
  "/images/about/user1.jpg",
  "/images/about/user2.jpg",
  "/images/about/user3.jpg",
  "/images/about/user4.jpg",
  "/images/about/user5.jpg",
  "/images/about/user6.jpg",
];

const features = [
  {
    title: "Future Ready Solutions",
    text: "We build with technologies that scale and adapt as your business grows.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="h-6 w-6">
        <path strokeLinecap="round" strokeLinejoin="round" d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09z" />
      </svg>
    ),
  },
  {
    title: "Modern Tech Services",
    text: "From web to mobile to custom software — delivered with clarity and care.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="h-6 w-6">
        <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 6h9.75M10.5 6a1.5 1.5 0 11-3 0m3 0a1.5 1.5 0 10-3 0M3.75 6H7.5m3 12h9.75m-9.75 0a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m-3.75 0H7.5" />
      </svg>
    ),
  },
];

export default function AboutSection() {
  const { about } = company;

  return (
    <section aria-labelledby="about-heading" className="bg-brand-sand">
      <Container className="py-16 sm:py-20 lg:py-28">
        {/* Top: badge + heading + paragraph */}
        <div className="grid gap-8 lg:grid-cols-[1fr_1.4fr] lg:gap-16">
          {/* Badge */}
          <div className="flex items-start">
            <span className="inline-flex items-center gap-2 rounded-full bg-white px-4 py-1.5 text-xs font-bold uppercase tracking-widest text-brand-brown">
              <svg className="h-3 w-3 text-brand-orange" viewBox="0 0 12 12" fill="currentColor" aria-hidden="true">
                <path d="M6 0l1.5 4.5H12L8.25 7.5 9.75 12 6 9l-3.75 3 1.5-4.5L0 4.5h4.5z" />
              </svg>
              {about.eyebrow}
            </span>
          </div>

          {/* Heading */}
          <div>
            <h2
              id="about-heading"
              className="font-serif text-3xl font-bold leading-tight text-brand-brown sm:text-4xl lg:text-5xl"
            >
              Innovative And Trusted Partner For Your{" "}
              <span className="text-brand-orange">Digital IT</span> Solutions.
            </h2>
            <p className="mt-5 text-base leading-relaxed text-brand-brown/70 sm:text-lg">
              {about.paragraphs[0]}
            </p>
          </div>
        </div>

        {/* Bottom: left image + right content */}
        <div className="mt-12 grid items-start gap-10 lg:grid-cols-[1fr_1.4fr] lg:gap-16">
          {/* Left tall image */}
          <div className="overflow-hidden rounded-2xl">
            <img
              src={aboutImages[0]}
              alt="Asnol Technology team collaborating"
              className="aspect-[3/4] w-full object-cover"
              loading="lazy"
            />
          </div>

          {/* Right content */}
          <div className="flex flex-col gap-6">
            {/* Feature rows */}
            {features.map((feature, i) => (
              <div key={feature.title}>
                <div className="flex items-start gap-4">
                  {/* Icon circle */}
                  <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-full bg-brand-orange/10 text-brand-orange">
                    {feature.icon}
                  </div>
                  {/* Title + divider + text */}
                  <div className="grid flex-1 grid-cols-[1fr_auto_1fr] items-start gap-4">
                    <h3 className="font-serif text-lg font-bold text-brand-brown sm:text-xl">
                      {feature.title}
                    </h3>
                    <div className="mt-1 w-px self-stretch bg-brand-brown/20" aria-hidden="true" />
                    <p className="text-sm leading-relaxed text-brand-brown/70">{feature.text}</p>
                  </div>
                </div>
                {i < features.length - 1 && (
                  <div className="mt-6 border-t border-brand-brown/10" />
                )}
              </div>
            ))}

            {/* Stats + avatars row */}
            <div className="mt-2 flex flex-wrap items-center gap-6">
              {/* Years experience card */}
              <div className="rounded-2xl bg-white px-6 py-5 shadow-card">
                <p className="font-serif text-4xl font-bold text-brand-brown">5+</p>
                <p className="mt-1 text-xs font-semibold uppercase tracking-widest text-brand-brown/60">
                  Years Experience
                </p>
              </div>

              {/* Avatars + trust text */}
              <div>
                <div className="flex -space-x-3">
                  {aboutImages.slice(1, 5).map((src, i) => (
                    <img
                      key={i}
                      src={src}
                      alt=""
                      className="h-10 w-10 rounded-full border-2 border-white object-cover"
                    />
                  ))}
                  <div className="flex h-10 w-10 items-center justify-center rounded-full border-2 border-white bg-brand-brown text-xs font-bold text-white">
                    +
                  </div>
                </div>
                <p className="mt-2 text-sm font-semibold text-brand-brown">
                  <span className="text-brand-orange">50+</span> Active clients trust us for IT solutions
                </p>
              </div>
            </div>

            {/* CTAs */}
            <div className="flex flex-wrap gap-4">
              <Link
                to={about.cta.to}
                className="rounded-full bg-brand-orange px-7 py-3 text-sm font-bold uppercase tracking-widest text-white transition hover:bg-brand-orange-dark"
              >
                Learn More
              </Link>
              <Link
                to="/contact"
                className="rounded-full bg-brand-brown px-7 py-3 text-sm font-bold uppercase tracking-widest text-white transition hover:opacity-80"
              >
                Get Started
              </Link>
            </div>

            {/* Second image */}
            <div className="overflow-hidden rounded-2xl">
              <img
                src={aboutImages[5]}
                alt="Asnol Technology team in discussion"
                className="aspect-[16/7] w-full object-cover"
                loading="lazy"
              />
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
