import { Link } from "react-router-dom";
import { company } from "../../data/company";
import { serviceGroups, servicesInGroup } from "../../data/services";
import Container from "../common/Container";
import Reveal from "../common/Reveal";
import ServiceCard from "../services/ServiceCard";

function Star() {
  return (
    <svg className="h-3 w-3 text-brand-brown" viewBox="0 0 12 12" fill="currentColor" aria-hidden="true">
      <path d="M6 0l1.5 4.5H12L8.25 7.5 9.75 12 6 9l-3.75 3 1.5-4.5L0 4.5h4.5z" />
    </svg>
  );
}

export default function ServicesSection() {
  const { servicesSection } = company;

  return (
    <section aria-labelledby="services-heading" className="bg-brand-sand">
      <Container className="py-16 sm:py-20 lg:py-28">
        <Reveal>
        <div className="grid gap-8 lg:grid-cols-2 lg:items-end">
          <div>
            <span className="inline-flex items-center gap-2 rounded-full bg-white px-4 py-1.5 text-xs font-bold uppercase tracking-widest text-brand-brown">
              <Star />
              {servicesSection.eyebrow}
            </span>
            <h2
              id="services-heading"
              className="mt-5 font-serif text-3xl font-bold leading-tight text-brand-brown sm:text-4xl lg:text-5xl"
            >
              {servicesSection.title}
            </h2>
          </div>
          <p className="text-base leading-relaxed text-brand-brown/80 sm:text-lg">{servicesSection.text}</p>
        </div>
        </Reveal>

        {serviceGroups.map((group) => {
          const items = servicesInGroup(group.id);
          const [featured, ...rest] = items;

          return (
            <div key={group.id} className="mt-14">
              <Reveal>
              <div className="max-w-2xl">
                <p className="font-serif text-sm font-bold text-brand-brown/50">{group.number}</p>
                <h3 className="mt-2 font-serif text-2xl font-bold text-brand-brown sm:text-3xl">{group.title}</h3>
                <p className="mt-2 text-base leading-relaxed text-brand-brown/80">{group.text}</p>
              </div>
              </Reveal>

              <Reveal className="mt-6">
                <ServiceCard service={featured} featured layout="wide" headingLevel="h4" />
              </Reveal>
              <ul className="mt-5 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
                {rest.map((service, index) => (
                  <li key={service.id} className="min-w-0">
                    <Reveal className="h-full" delay={Math.min(index, 3) * 45}>
                      <ServiceCard service={service} headingLevel="h4" />
                    </Reveal>
                  </li>
                ))}
              </ul>
            </div>
          );
        })}

        <div className="mt-12 flex flex-col items-center justify-between gap-4 rounded-full border border-brand-brown/10 bg-white px-6 py-5 sm:flex-row sm:px-8">
          <p className="text-center text-sm font-bold uppercase tracking-widest text-brand-brown sm:text-left">
            Tell us what you need done
          </p>
          <Link
            to="/services"
            className="shrink-0 rounded-full bg-brand-orange px-7 py-3 text-sm font-bold uppercase tracking-widest text-brand-brown transition duration-200 hover:bg-brand-orange-dark motion-reduce:transition-none active:opacity-90"
          >
            All services
          </Link>
        </div>
      </Container>
    </section>
  );
}
