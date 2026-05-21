import { AboutSection } from "@/components/landing/AboutSection";
import { CtaSection } from "@/components/landing/CtaSection";
import { FaqSection } from "@/components/landing/FaqSection";
import { Footer } from "@/components/landing/Footer";
import { HeroSection } from "@/components/landing/HeroSection";

export default function Home() {
  return (
    <main className="min-h-screen bg-white text-slate-950">
      <HeroSection />
      <AboutSection />
      <FaqSection />
      <CtaSection />
      <Footer />
    </main>
  );
}
