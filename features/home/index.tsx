import { FeaturesSection } from "@/components/FeaturesSection";
import { HeroSection } from "@/components/HeroSection";
import { HowItWorks } from "@/components/HowItWorks";

const Home = () => {
  return (
    <div className="min-h-screen bg-background">
      <main>
        <HeroSection />
        <HowItWorks />
        <FeaturesSection />
      </main>
    </div>
  );
};

export default Home;