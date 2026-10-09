import AboutSection from "../components/home/AboutSection";
import ClosingSection from "../components/home/ClosingSection";
import Hero from "../components/home/Hero";
import ProblemSection from "../components/home/ProblemSection";
import ProcessSection from "../components/home/ProcessSection";
import ServicesSection from "../components/home/ServicesSection";
import usePageTitle from "../utils/usePageTitle";

export default function Home() {
  usePageTitle("");

  return (
    <>
      <Hero />
      <ProblemSection />
      <ServicesSection />
      <ProcessSection />
      <AboutSection />
      <ClosingSection />
    </>
  );
}
