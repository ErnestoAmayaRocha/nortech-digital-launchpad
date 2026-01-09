import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import ServicesSection from "@/components/ServicesSection";
import BenefitsSection from "@/components/BenefitsSection";
import WhyUsSection from "@/components/WhyUsSection";
import ProcessSection from "@/components/ProcessSection";
import PortfolioSection from "@/components/PortfolioSection";
import CTASection from "@/components/CTASection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
      <Header />
      <main>
        <HeroSection />
        <ServicesSection />
        <BenefitsSection />
        <WhyUsSection />
        <ProcessSection />
        <PortfolioSection />
        <CTASection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
