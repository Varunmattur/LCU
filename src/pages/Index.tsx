import { useState, useEffect } from "react";
import LoadingScreen from "@/components/LoadingScreen";
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import MoviesSection from "@/components/MoviesSection";
import TimelineSection from "@/components/TimelineSection";
import CharactersSection from "@/components/CharactersSection";
import AboutSection from "@/components/AboutSection";
import Footer from "@/components/Footer";
import CustomCursor from "@/components/CustomCursor";

const Index = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 2000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      <LoadingScreen isLoading={loading} />
      <CustomCursor />
      <div className="min-h-screen bg-background">
        <Navbar />
        <main>
          <HeroSection />
          <MoviesSection />
          <TimelineSection />
          <CharactersSection />
          <AboutSection />
        </main>
        <Footer />
      </div>
    </>
  );
};

export default Index;
