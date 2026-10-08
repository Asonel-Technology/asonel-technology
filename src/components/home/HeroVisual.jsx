import { images } from "../../data/images";

export default function HeroVisual() {
  if (images.hero.src) {
    return (
      <div className="overflow-hidden rounded-xl bg-brand-brown">
        <img
          src={images.hero.src}
          alt={images.hero.alt}
          className="aspect-[4/3] w-full object-cover sm:aspect-[5/4]"
          fetchPriority="high"
        />
      </div>
    );
  }

  return (
    <div className="relative aspect-[4/3] overflow-hidden rounded-xl bg-brand-brown text-white sm:aspect-[5/4]">
      <div className="absolute inset-y-0 left-0 w-1.5 bg-brand-orange" aria-hidden="true" />
      <div className="flex h-full flex-col justify-between p-6 sm:p-8 lg:p-10">
        <p className="text-sm font-semibold uppercase tracking-[0.16em] text-white">
          Web · Apps · Software
        </p>

        <svg viewBox="0 0 480 260" className="my-6 w-full" aria-hidden="true">
          <rect x="8" y="24" width="286" height="196" rx="14" fill="none" stroke="white" strokeOpacity="0.45" />
          <rect x="32" y="52" width="128" height="12" rx="6" fill="#FF914D" />
          <rect x="32" y="82" width="210" height="8" rx="4" fill="white" fillOpacity="0.45" />
          <rect x="32" y="102" width="176" height="8" rx="4" fill="white" fillOpacity="0.28" />
          <rect x="32" y="122" width="194" height="8" rx="4" fill="white" fillOpacity="0.28" />
          <rect x="32" y="164" width="96" height="28" rx="6" fill="#FF914D" />
          <circle cx="392" cy="68" r="22" fill="none" stroke="#FF914D" strokeWidth="2" />
          <circle cx="338" cy="156" r="22" fill="none" stroke="white" strokeOpacity="0.8" strokeWidth="2" />
          <circle cx="438" cy="176" r="22" fill="none" stroke="white" strokeOpacity="0.8" strokeWidth="2" />
          <path d="M374 84 352 138" stroke="white" strokeOpacity="0.45" />
          <path d="M410 84 428 156" stroke="white" strokeOpacity="0.45" />
          <path d="M360 158 416 170" stroke="white" strokeOpacity="0.45" />
        </svg>

        <div className="border-t border-white/20 pt-5">
          <p className="font-serif text-2xl leading-snug text-balance sm:text-3xl">
            Built with the people who will use it.
          </p>
        </div>
      </div>
    </div>
  );
}
