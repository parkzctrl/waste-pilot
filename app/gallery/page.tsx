import type { Metadata } from "next";
import PageHero from "@/components/ui/PageHero";
import FilterableGallery from "@/components/sections/FilterableGallery";
import BeforeAfterSlider from "@/components/sections/BeforeAfterSlider";
import Testimonials from "@/components/sections/Testimonials";
import CtaBanner from "@/components/sections/CtaBanner";

export const metadata: Metadata = {
  title: "Project Gallery",
  description:
    "Browse recent extensions, renovations, bathrooms and commercial fit-outs completed by ASA Property Services across the UK.",
};

export default function GalleryPage() {
  return (
    <>
      <PageHero
        eyebrow="Our Portfolio"
        title="The work speaks for itself"
        description="Extensions, renovations, bathrooms and commercial projects — photographed exactly as we handed them over."
      />
      <FilterableGallery />
      <BeforeAfterSlider />
      <Testimonials />
      <CtaBanner />
    </>
  );
}
