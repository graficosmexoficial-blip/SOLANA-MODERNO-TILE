import Navbar from "../../components/feature/Navbar";
import Footer from "../../components/feature/Footer";
import HeroSection from "./components/HeroSection";
import StatsBar from "./components/StatsBar";
import AboutSection from "./components/AboutSection";
import CtaEstimateSection from "./components/CtaEstimateSection";
import ServicesSection from "./components/ServicesSection";
import WhyChooseUsSection from "./components/WhyChooseUsSection";
import HowItWorksSection from "./components/HowItWorksSection";
import ReviewsSection from "./components/ReviewsSection";
import CtaRestoreSection from "./components/CtaRestoreSection";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <HeroSection />
        <StatsBar />
        <AboutSection />
        <CtaEstimateSection />
        <ServicesSection />
        <WhyChooseUsSection />
        <HowItWorksSection />
        <ReviewsSection />
        <CtaRestoreSection />
      </main>
      <Footer />
    </>
  );
}