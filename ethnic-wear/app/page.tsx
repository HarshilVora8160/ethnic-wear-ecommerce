import AnnouncementBar from "@/components/home/AnnouncementBar";
import TrustBar from "@/components/home/TrustBar";
import Hero from "@/components/home/Hero";
import BrandIntro from "@/components/home/BrandIntro";
import CategoryGrid from "@/components/home/CategoryGrid";
import NewArrivals from "@/components/home/NewArrivals";
import FeaturedCollection from "@/components/home/FeaturedCollection";
import RunwayLookbook from "@/components/home/RunwayLookbook";
import EditorialSection from "@/components/home/EditorialSection";
import VirtualWeaverStudio from "@/components/home/VirtualWeaverStudio";
import CustomDesign from "@/components/home/CustomDesign";
import EmbroideryShowcase from "@/components/home/EmbroideryShowcase";
import WhyAavira from "@/components/home/WhyAavira";
import Testimonials from "@/components/home/Testimonials";
import InstagramGallery from "@/components/home/InstagramGallery";
import Newsletter from "@/components/home/Newsletter";
import FinalCTA from "@/components/home/FinalCTA";

export default function Home() {
  return (
    <main className="overflow-hidden bg-[#FAF6F0] text-[#1A1215]">
      <AnnouncementBar />

      <Hero />

      <TrustBar />

      <BrandIntro />

      <CategoryGrid />

      <NewArrivals />

      {/* Haute Couture Interactive Runway Lookbook */}
      <RunwayLookbook />

      <FeaturedCollection />

      <EditorialSection />

      {/* Interactive Zari & Weave Simulator */}
      <VirtualWeaverStudio />

      <CustomDesign />

      <EmbroideryShowcase />

      <WhyAavira />

      <Testimonials />

      <InstagramGallery />

      <Newsletter />

      <FinalCTA />
    </main>
  );
}