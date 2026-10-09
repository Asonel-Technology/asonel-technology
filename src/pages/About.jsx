import AboutVisual from "../components/home/AboutVisual";
import Button from "../components/common/Button";
import Container from "../components/common/Container";
import PageHeader from "../components/common/PageHeader";
import Reveal from "../components/common/Reveal";
import { company } from "../data/company";
import usePageTitle from "../utils/usePageTitle";

export default function About() {
  const { about, aboutPage } = company;
  usePageTitle("About");

  return (
    <>
      <PageHeader eyebrow={aboutPage.eyebrow} title={aboutPage.title} text={aboutPage.intro} />
      <section aria-labelledby="about-story" className="bg-white">
        <Container className="grid items-start gap-12 py-16 lg:grid-cols-2 lg:gap-16 lg:py-24">
          <Reveal className="min-w-0">
            <h2 id="about-story" className="font-serif text-3xl leading-tight text-brand-brown sm:text-4xl">
              What we take on
            </h2>
            <div className="mt-5 space-y-4 text-base leading-relaxed text-brand-brown sm:text-lg">
              {aboutPage.paragraphs.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
            </div>
            <ul className="mt-8 border-t border-brand-brown/10">
              {about.points.map((point, index) => (
                <li
                  key={point.title}
                  className="grid grid-cols-[auto_1fr] gap-4 border-b border-brand-brown/10 py-4"
                >
                  <span className="pt-0.5 font-serif text-sm text-brand-brown">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <div>
                    <h3 className="font-semibold text-brand-brown">{point.title}</h3>
                    <p className="mt-1 text-sm leading-relaxed text-brand-brown sm:text-base">
                      {point.text}
                    </p>
                  </div>
                </li>
              ))}
            </ul>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Button to="/team" variant="secondary" className="w-full sm:w-auto">
                Meet our team
              </Button>
              <Button to="/contact" variant="outline" className="w-full sm:w-auto">
                Talk to us
              </Button>
            </div>
            <p className="mt-4 text-sm leading-relaxed text-brand-brown sm:text-base">
              Or write to{" "}
              <a
                href={`mailto:${company.email}`}
                className="font-semibold underline decoration-brand-brown/30 underline-offset-4"
              >
                {company.email}
              </a>
            </p>
          </Reveal>
          <Reveal delay={80}>
            <AboutVisual />
          </Reveal>
        </Container>
      </section>
    </>
  );
}
