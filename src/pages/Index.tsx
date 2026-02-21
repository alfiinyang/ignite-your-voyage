//index page
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Challenge from "@/components/Challenge";
import CoachPreview from "@/components/CoachPreview";
import ServicesSnapshot from "@/components/ServicesSnapshot";
import BootcampHighlight from "@/components/BootcampHighlight";
import TestimonialsPreview from "@/components/TestimonialsPreview";
import FinalCTA from "@/components/FinalCTA";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      
      <main>
        <Hero />
        <Challenge />
        <CoachPreview />
        <ServicesSnapshot />
        <BootcampHighlight />
        <TestimonialsPreview />
        <FinalCTA />
      </main>

      <Footer />
    </div>
  );
};

export default Index;
