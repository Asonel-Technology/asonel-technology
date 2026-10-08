import { images } from "../../data/images";

export default function AboutVisual() {
  if (images.about.src) {
    return (
      <img
        src={images.about.src}
        alt={images.about.alt}
        className="aspect-[4/3] w-full rounded-xl object-cover lg:aspect-[5/4]"
        loading="lazy"
      />
    );
  }

  return (
    <div className="flex aspect-[4/3] flex-col justify-between rounded-xl bg-brand-brown p-6 text-white sm:p-8 lg:aspect-[5/4] lg:p-10">
      <p className="text-sm font-semibold uppercase tracking-[0.16em] text-brand-orange">
        Asnol Technology
      </p>
      <p className="max-w-sm font-serif text-3xl leading-tight text-balance sm:text-4xl">
        Technology, explained while it is being built.
      </p>
      <dl className="grid grid-cols-1 gap-4 border-t border-white/20 pt-5 text-sm sm:grid-cols-2">
        <div>
          <dt className="text-white/80">Focus</dt>
          <dd className="mt-1 text-base">Software and digital products</dd>
        </div>
        <div>
          <dt className="text-white/80">Approach</dt>
          <dd className="mt-1 text-base">Clear scope, direct contact</dd>
        </div>
      </dl>
    </div>
  );
}
