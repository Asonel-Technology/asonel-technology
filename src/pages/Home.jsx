import AboutSection from "../components/home/AboutSection";
import BlogsSection from "../components/home/BlogsSection";
import Hero from "../components/home/Hero";
import ProjectSection from "../components/home/ProjectSection";
import ServicesSection from "../components/home/ServicesSection";
import TeamSection from "../components/home/TeamSection";
import usePageTitle from "../utils/usePageTitle";

export default function Home() {
  usePageTitle("");

  return (
    <>
      <Hero />
      <AboutSection />
      <ServicesSection />
      <TeamSection />
      <BlogsSection />
      <ProjectSection />
    </>
  );
}
