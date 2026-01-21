import { PlatformIcons } from "@/components/PlatformIcons"; 

export const HeroSection = () => {
  return (
    <section className={`min-h-[calc(100vh-6rem)]   flex flex-col items-center justify-center  relative overflow-hidden`}>
      {/* Background effects */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-1/4 h-96 bg-[#21a178]/10 rounded-full blur-3xl animate-float" />
        <div className="absolute bottom-1/4 right-1/4 w-1/4 h-96 bg-[#21a178]/10 rounded-full blur-3xl animate-float" style={{ animationDelay: "-3s" }} />
      </div>

      <div className="relative z-10 max-w-3xl w-full text-center">
        {/* Title */}
        <h1 className="text-4xl md:text-7xl font-semibold md:mb-9 mb-5 leading-tight">
         Download Any Video
          <span className="block gradient-text glow-text">Fast & Free</span>
        </h1>
        
        <p className=" text-muted-foreground md:text-xl text-sm md:mb-8 mb-6 max-w-xl mx-auto">
         Paste a link and download instantly from your favorite platforms -fast, free, and without watermarks.
        </p>

        {/* Platform Icons */}
        <PlatformIcons />

      </div>
    </section>
  );
};
