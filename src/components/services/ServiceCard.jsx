import { Link } from "react-router-dom";
import ServiceIcon from "./ServiceIcon";

export default function ServiceCard({
  service,
  anchor = false,
  highlighted = false,
  headingLevel = "h3",
  featured = false,
  layout = "stack",
}) {
  const Heading = headingLevel === "h2" || headingLevel === "h4" ? headingLevel : "h3";
  const orange = featured;

  const shell = `service-card h-full scroll-mt-24 rounded-2xl ${
    orange
      ? "bg-brand-orange text-brand-brown"
      : "border border-brand-brown/10 bg-white text-brand-brown hover:bg-brand-sand"
  } ${highlighted ? "ring-2 ring-brand-brown ring-offset-2" : ""}`;

  const iconWrap = `inline-flex h-12 w-12 shrink-0 items-center justify-center rounded-full ${
    orange ? "bg-brand-brown/10 text-brand-brown" : "bg-brand-sand text-brand-brown"
  }`;

  const photo = service.image ? (
    <img
      src={service.image}
      alt=""
      className="aspect-[4/3] w-full object-cover"
      loading="lazy"
    />
  ) : null;

  if (layout === "wide") {
    return (
      <article id={anchor ? service.slug : undefined} className={shell}>
        <Link
          to={`/services#${service.slug}`}
          className="flex h-full flex-col gap-6 p-6 sm:p-8 lg:flex-row lg:items-center"
        >
          <div className="flex items-center gap-4 lg:w-56 lg:shrink-0">
            <span className={iconWrap}>
              <ServiceIcon name={service.icon} />
            </span>
            <span className="font-serif text-4xl font-bold text-brand-brown/30">{service.number}</span>
          </div>
          <div className="min-w-0 border-t border-brand-brown/20 pt-5 lg:border-l lg:border-t-0 lg:pl-8 lg:pt-0">
            <Heading className="font-serif text-2xl font-bold leading-snug">{service.title}</Heading>
            <p className="mt-2 max-w-xl text-sm leading-relaxed text-brand-brown/80 sm:text-base">
              {service.description}
            </p>
          </div>
          {photo ? <div className="overflow-hidden rounded-2xl lg:w-72 lg:shrink-0">{photo}</div> : null}
        </Link>
      </article>
    );
  }

  return (
    <article id={anchor ? service.slug : undefined} className={shell}>
      <Link to={`/services#${service.slug}`} className="flex h-full flex-col p-6 sm:p-8">
        <div className="flex items-start justify-between gap-4">
          <span className={iconWrap}>
            <ServiceIcon name={service.icon} />
          </span>
          <span className="font-serif text-4xl font-bold text-brand-brown/30">{service.number}</span>
        </div>

        <div className={`mt-5 border-t ${orange ? "border-brand-brown/20" : "border-brand-brown/10"}`} />

        <Heading className="mt-5 font-serif text-xl font-bold leading-snug">{service.title}</Heading>

        <p className="mt-3 flex-1 text-sm leading-relaxed text-brand-brown/80">{service.description}</p>
        {photo ? <div className="mt-6 overflow-hidden rounded-2xl">{photo}</div> : null}
      </Link>
    </article>
  );
}
