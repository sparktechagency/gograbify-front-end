import { FeaturesSection } from "@/features/home/components/FeaturesSection";
import { HeroSection } from "@/features/home/components/HeroSection";
import { HowItWorks } from "@/features/home/components/HowItWorks";
import { FAQ } from "@/features/faq";

const Home = () => {
  return (
    <div className="min-h-screen bg-background p-3 md:p-0">
      <main>
        <HeroSection />
        <HowItWorks />
        <FeaturesSection />
        <FAQ />
      </main>
    </div>
  );
};

export default Home;