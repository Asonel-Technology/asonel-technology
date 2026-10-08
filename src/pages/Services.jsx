import { useLocation } from "react-router-dom";
import Button from "../components/common/Button";
import Container from "../components/common/Container";
import PageHeader from "../components/common/PageHeader";
import ServiceCard from "../components/services/ServiceCard";
import { company } from "../data/company";
import { services } from "../data/services";
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
      <section aria-labelledby="services-list" className="bg-white">
        <Container className="py-14 sm:py-16 lg:py-20">
          <h2 id="services-list" className="sr-only">
            All services
          </h2>
          <ul className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {services.map((service, index) => (
              <li key={service.slug} className="min-w-0">
                <ServiceCard
                  service={service}
                  index={index}
                  anchor
                  highlighted={activeSlug === service.slug}
                  headingLevel="h3"
                />
              </li>
            ))}
          </ul>
          <div className="mt-12 flex flex-col items-start justify-between gap-4 border-t border-brand-brown/10 pt-8 sm:flex-row sm:items-center">
            <p className="max-w-xl text-base leading-relaxed text-brand-brown">
              Not sure which service fits? Tell us what you need done.
            </p>
            <Button to="/contact" variant="secondary" className="w-full sm:w-auto">
              Talk to Us
            </Button>
          </div>
        </Container>
      </section>
    </>
  );
}
