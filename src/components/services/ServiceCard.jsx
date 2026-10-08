import { Link } from "react-router-dom";
import ServiceIcon from "./ServiceIcon";

export default function ServiceCard({ service, index, anchor = false }) {
  const number = String(index + 1).padStart(2, "0") + ".";
  const isHighlighted = index % 2 !== 0;

  return (
    <article
      id={anchor ? service.slug : undefined}
      className={`flex h-full scroll-mt-24 flex-col rounded-2xl p-6 sm:p-8 ${
        isHighlighted ? "bg-brand-orange text-white" : "bg-white text-brand-brown"
      }`}
    >
      {/* Icon + number row */}
      <div className="flex items-start justify-between gap-4">
        <span className={`inline-flex h-12 w-12 items-center justify-center rounded-full ${
          isHighlighted ? "bg-white/20 text-white" : "bg-brand-orange/10 text-brand-orange"
        }`}>
          <ServiceIcon name={service.icon} />
        </span>
        <span className={`font-serif text-4xl font-bold ${
          isHighlighted ? "text-white/30" : "text-brand-brown/15"
        }`}>
          {number}
        </span>
      </div>

      {/* Divider */}
      <div className={`mt-5 border-t ${isHighlighted ? "border-white/20" : "border-brand-brown/10"}`} />

      {/* Title */}
      <h3 className="mt-5 font-serif text-xl font-bold leading-snug">
        {service.title}
      </h3>

      {/* Description */}
      <p className={`mt-3 flex-1 text-sm leading-relaxed ${
        isHighlighted ? "text-white/80" : "text-brand-brown/70"
      }`}>
        {service.description}
      </p>

      {/* Image */}
      {service.image && (
        <div className="mt-6 overflow-hidden rounded-2xl">
          <img
            src={service.image}
            alt={service.title}
            className="aspect-[4/3] w-full object-cover"
            loading="lazy"
          />
        </div>
      )}
    </article>
  );
}
