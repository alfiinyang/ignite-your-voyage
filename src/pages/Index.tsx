//index page
import { lazy, Suspense } from "react";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Footer from "@/components/Footer";

const Challenge = lazy(() => import("@/components/Challenge"));
const CoachPreview = lazy(() => import("@/components/CoachPreview"));
const ServicesSnapshot = lazy(() => import("@/components/ServicesSnapshot"));
const BootcampHighlight = lazy(() => import("@/components/BootcampHighlight"));
const TestimonialsPreview = lazy(() => import("@/components/TestimonialsPreview"));
const FinalCTA = lazy(() => import("@/components/FinalCTA"));

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      
      <main>
        <Hero />
        <Suspense fallback={<div className="h-24" />}>
          <Challenge />
        </Suspense>
        <Suspense fallback={<div className="h-24" />}>
          <CoachPreview />
        </Suspense>
        <Suspense fallback={<div className="h-24" />}>
          <ServicesSnapshot />
        </Suspense>
        <Suspense fallback={<div className="h-24" />}>
          <BootcampHighlight />
        </Suspense>
        <Suspense fallback={<div className="h-24" />}>
          <TestimonialsPreview />
        </Suspense>
        <Suspense fallback={<div className="h-24" />}>
          <FinalCTA />
        </Suspense>
      </main>

      <Footer />
    </div>
  );
};

export default Index;
