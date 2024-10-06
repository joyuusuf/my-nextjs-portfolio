import HeroSection from "@/components/HeroSection";
import Navbar from "@/components/NavBar";
import Image from "next/image";
import AboutSection from "@/components/AboutSection";
import ProjectSection from "@/components/ProjectSection";
import Footer from "@/components/Footer";

export default function Home() {
  return (
  
      <main className="flex flex-col min-h-screen bg-[#121212]">
      <Navbar />
      <div className="container mt-24 mx-auto px-12 py-4">
        <HeroSection />
        <AboutSection />
        <ProjectSection />
      </div>

      <Footer />
      </main>
   
  );
}
