import PageHero from "../components/sections/PageHero";
import GallerySection from "../components/sections/GallerySection";
import CallToAction from "../components/sections/CallToAction";

export default function Gallery() {
  return (
    <>
      <PageHero
        eyebrow="Gallery"
        title="MOMENTS FROM THE MAT"
        description="A glimpse into training, competitions, kids' classes and club life at Star Martial Arts & Fitness Club."
        watermark="影"
      />
      <GallerySection />
      <CallToAction />
    </>
  );
}
