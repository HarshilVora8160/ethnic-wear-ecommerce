import AnnouncementBar from "@/components/home/AnnouncementBar";
import TrustBar from "@/components/home/TrustBar";
import Hero from "@/components/home/Hero";
import BrandIntro from "@/components/home/BrandIntro";
import CategoryGrid from "@/components/home/CategoryGrid";
import NewArrivals from "@/components/home/NewArrivals";
import FeaturedCollection from "@/components/home/FeaturedCollection";
import EditorialSection from "@/components/home/EditorialSection";
import CustomDesign from "@/components/home/CustomDesign";
import EmbroideryShowcase from "@/components/home/EmbroideryShowcase";
import WhyAavira from "@/components/home/WhyAavira";
import Testimonials from "@/components/home/Testimonials";
import InstagramGallery from "@/components/home/InstagramGallery";
import Newsletter from "@/components/home/Newsletter";
import FinalCTA from "@/components/home/FinalCTA";

export default function Home() {
  return (
    <main className="overflow-hidden bg-brand-ivory text-brand-text">
      <AnnouncementBar />

      <Hero />

      <TrustBar />

      <BrandIntro />

      <CategoryGrid />

      <NewArrivals />

      <FeaturedCollection />

      <EditorialSection />

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