import { Header } from "@/components/header";
import { HeroSection } from "@/components/hero-section";
import { FeaturedSections } from "@/components/movie-grid";
import { Footer } from "@/components/footer";

export default function Home() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <HeroSection />
        <FeaturedSections />
      </main>
      <Footer />
    </div>
  );
}
