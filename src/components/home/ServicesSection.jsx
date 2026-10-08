import { company } from "../../data/company";
import { services } from "../../data/services";
import Container from "../common/Container";
import ServiceCard from "../services/ServiceCard";
import { Link } from "react-router-dom";

export default function ServicesSection() {
  const { servicesSection } = company;

  return (
    <section aria-labelledby="services-heading" className="bg-white">
      <Container className="py-16 sm:py-20 lg:py-28">

        {/* Header */}
        <div className="mb-12 grid gap-8 lg:grid-cols-2 lg:items-end lg:gap-16">
          <div>
            {/* Badge */}
            <span className="inline-flex items-center gap-2 rounded-full bg-brand-sand px-4 py-1.5 text-xs font-bold uppercase tracking-widest text-brand-brown">
              <svg className="h-3 w-3 text-brand-orange" viewBox="0 0 12 12" fill="currentColor" aria-hidden="true">
                <path d="M6 0l1.5 4.5H12L8.25 7.5 9.75 12 6 9l-3.75 3 1.5-4.5L0 4.5h4.5z" />
              </svg>
              {servicesSection.eyebrow}
            </span>
            <h2
              id="services-heading"
              className="mt-5 font-serif text-3xl font-bold leading-tight text-brand-brown sm:text-4xl lg:text-5xl"
            >
              Helping You Succeed Through Creative &{" "}
              <span className="text-brand-orange">IT Services.</span>
            </h2>
          </div>
          <p className="text-base leading-relaxed text-brand-brown/70 sm:text-lg lg:pb-2">
            {servicesSection.text}
          </p>
        </div>

        {/* Cards grid — 2 columns */}
        <ul className="grid grid-cols-1 gap-5 sm:grid-cols-2">
          {services.map((service, index) => (
            <li key={service.slug} className="min-w-0">
              <ServiceCard service={service} index={index} />
            </li>
          ))}
        </ul>

        {/* Bottom CTA bar */}
        <div className="mt-12 flex flex-col items-center justify-between gap-4 rounded-full border border-brand-brown/10 px-8 py-5 sm:flex-row">
          <p className="text-sm font-bold uppercase tracking-widest text-brand-brown">
            Giving Best Affordable &amp; Strategic Solutions
          </p>
          <Link
            to="/services"
            className="shrink-0 rounded-full bg-brand-orange px-7 py-3 text-sm font-bold uppercase tracking-widest text-white transition hover:bg-brand-orange-dark"
          >
            More Services
          </Link>
        </div>

      </Container>
    </section>
  );
}
