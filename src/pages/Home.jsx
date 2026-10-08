import AboutSection from "../components/home/AboutSection";
import Hero from "../components/home/Hero";
import ServicesSection from "../components/home/ServicesSection";
import usePageTitle from "../utils/usePageTitle";

export default function Home() {
  usePageTitle("");

  return (
    <>
      <Hero />
      <AboutSection />
      <ServicesSection />
    </>
  );
}
