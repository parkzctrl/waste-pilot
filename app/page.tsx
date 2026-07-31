import Hero from "@/components/sections/Hero";
import TrustBadges from "@/components/sections/TrustBadges";
import ServicesGrid from "@/components/sections/ServicesGrid";
import AboutSection from "@/components/sections/AboutSection";
import StatsCounters from "@/components/sections/StatsCounters";
import WhyChooseUs from "@/components/sections/WhyChooseUs";
import ProjectsGallery from "@/components/sections/ProjectsGallery";
import BeforeAfterSlider from "@/components/sections/BeforeAfterSlider";
import Testimonials from "@/components/sections/Testimonials";
import FaqAccordion from "@/components/sections/FaqAccordion";
import CtaBanner from "@/components/sections/CtaBanner";

export default function HomePage() {
  return (
    <>
      <Hero />
      <TrustBadges />
      <ServicesGrid />
      <AboutSection />
      <StatsCounters />
      <WhyChooseUs />
      <ProjectsGallery limit={6} />
      <BeforeAfterSlider />
      <Testimonials />
      <FaqAccordion />
      <CtaBanner />
    </>
  );
}
