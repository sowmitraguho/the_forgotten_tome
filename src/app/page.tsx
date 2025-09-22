import CategoryHighlights from "@/components/CategoryHighlights/CategoryHighlights";
import AboutPreview from "@/components/Home/AboutPreview/AboutPreview";
import CallToAction from "@/components/Home/CallToAction/CallToAction";
import FeaturedBooks from "@/components/Home/FeaturedBooks/FeaturedBooks";
import HeroSection from "@/components/Home/HeroSection/HeroSection";
import NewsletterSignup from "@/components/Home/NewsletterSignup/NewsletterSignup";
import Testimonials from "@/components/Home/Testimonials/Testimonials";


export default function Home() {
  return (
    <main>
      <HeroSection />
      <CategoryHighlights />
      <FeaturedBooks />
      <Testimonials />
      <AboutPreview />
      <NewsletterSignup />
      <CallToAction />
    </main>
  );
}
