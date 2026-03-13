import Header from "../components/layout/Header";
import Footer from "../components/layout/Footer";
import StickyBottomBar from "../components/layout/StickyBottomBar";
import ScrollAnimatedCow from "../components/common/ScrollAnimatedCow";
import HeroSection from "../components/sections/HeroSection";
import CommunitySection from "../components/sections/CommunitySection";
import AboutSection from "../components/sections/AboutSection";
import ContactSection from "../components/sections/ContactSection";
import DownloadSection from "../components/sections/DownloadSection";
import DigitalSection from "../components/sections/DigitalSection";
import LegalSection from "../components/sections/LegalSection";

const Index = () => {
  return (
    <div className="min-h-screen bg-background text-foreground scroll-smooth">
      <Header />
      <main>
        <HeroSection />
        <CommunitySection />
        <AboutSection />
        <ContactSection />
        <DownloadSection />
        <DigitalSection />
        <LegalSection />
      </main>
      <Footer />
      <StickyBottomBar />
      {/* Spacer for sticky bottom bar */}
      <div className="h-16" />
    </div>
  );
};

export default Index;
