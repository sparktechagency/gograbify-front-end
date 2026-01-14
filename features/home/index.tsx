import { FeaturesSection } from "@/features/home/component/FeaturesSection";
import { HeroSection } from "@/features/home/component/HeroSection";
import { HowItWorks } from "@/features/home/component/HowItWorks";

const Home = () => {
  return (
    <div className="min-h-screen bg-background p-3 md:p-0">
      <main>
        <HeroSection />
        <HowItWorks />
        <FeaturesSection />
      </main>
    </div>
  );
};

export default Home;