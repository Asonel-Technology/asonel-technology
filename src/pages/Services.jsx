import { useLocation } from "react-router-dom";
import Button from "../components/common/Button";
import Container from "../components/common/Container";
import PageHeader from "../components/common/PageHeader";
import Reveal from "../components/common/Reveal";
import ServiceCard from "../components/services/ServiceCard";
import { company } from "../data/company";
import { serviceGroups, servicesInGroup } from "../data/services";
import usePageTitle from "../utils/usePageTitle";

export default function Services() {
  const { hash } = useLocation();
  const activeSlug = decodeURIComponent(hash.replace("#", ""));
  usePageTitle("Services");

  return (
    <>
      <PageHeader
        eyebrow={company.servicesPage.eyebrow}
        title={company.servicesPage.title}
        text={company.servicesPage.text}
      />
      <section aria-label="All services" className="bg-white">
        <Container className="py-14 sm:py-16 lg:py-20">
          {serviceGroups.map((group, groupIndex) => {
            const items = servicesInGroup(group.id);
            return (
              <div key={group.id} className={groupIndex === 0 ? "" : "mt-14"}>
                <Reveal>
                <p className="font-serif text-sm font-bold text-brand-brown/50">{group.number}</p>
                <h2 className="mt-2 font-serif text-2xl font-bold text-brand-brown sm:text-3xl">{group.title}</h2>
                <p className="mt-2 max-w-2xl text-base leading-relaxed text-brand-brown/80">{group.text}</p>
                </Reveal>
                <ul className="mt-6 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
                  {items.map((service, index) => (
                    <li key={service.id} className="min-w-0">
                      <Reveal className="h-full" delay={Math.min(index, 4) * 40}>
                      <ServiceCard
                        service={service}
                        anchor
                        featured={service === items[0]}
                        highlighted={activeSlug === service.slug}
                          headingLevel="h3"
                        />
                      </Reveal>
                      </li>
                  ))}
                </ul>
              </div>
            );
          })}
          <div className="mt-12 flex flex-col items-start justify-between gap-4 border-t border-brand-brown/10 pt-8 sm:flex-row sm:items-center">
            <p className="max-w-xl text-base leading-relaxed text-brand-brown">
              Not sure which service fits? Tell us what you need done.
            </p>
            <Button to="/contact" variant="secondary" className="w-full sm:w-auto">
              Talk to us
            </Button>
          </div>
        </Container>
      </section>
    </>
  );
}
