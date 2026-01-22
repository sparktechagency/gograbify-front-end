import { PlatformIcons } from "@/components/PlatformIcons";
import Image from "next/image";
import { Playball, Recursive } from 'next/font/google';
import { FloatingIcons } from "@/components/FloatingIcons";

const playball = Playball({
  weight: '400', 
  style: 'normal', 
  subsets: ['latin'],
});

const recursive = Recursive({
  weight: '400',
  style: 'normal',
  subsets: ['latin'],
});


export const HeroSection = () => {
  return (
    <section className="min-h-[calc(100vh-6rem)] flex items-center justify-center relative overflow-hidden">

      {/* Background effects */}
      <div className="absolute inset-0 pointer-events-none">
        {/* Floating glow shapes */}
        <div className="absolute top-1/4 left-1/4 w-[45%] h-96 bg-linear-to-r
    from-[#21A077]/8
    to-[#1b8a65]/8
    rounded-full blur-3xl animate-float" />
        <div
          className="absolute bottom-1/4 right-1/4 w-[45%] h-96 bg-linear-to-r
    from-[#21A077]/8
    to-[#1b8a65]/8
    rounded-full blur-3xl animate-float"
          style={{ animationDelay: "-3s" }}
        />
 <FloatingIcons />
        {/* 🔥 Center Image */}
        <div
          className="absolute inset-0 flex items-center justify-center opacity-7"
        >
          <Image
            src="/heroBg.png"
            alt="Video download"
            width={970}
            height={700}
            className=" h-auto object-contain"
          />
        </div>
      </div>

      {/* Main Content */}
      <div className="relative z-10 max-w-5xl w-full text-center px-4">
        <h1 className="bg-linear-to-r from-white via-emerald-100 to-white bg-clip-text text-transparent text-5xl md:text-[80px] font-bold md:mb-9 mb-5 leading-tight">
          Download Any Video
          <span className={`${playball.className} ${recursive.className} block text-primary`} > Fast & Free </span>
        </h1>

        <p className="text-white/80 md:text-lg text-sm md:mb-8 mb-6 max-w-xl mx-auto">
          Paste a link and download instantly from your favorite platforms  fast,
          free, and without watermarks.
        </p>

        <PlatformIcons />
      </div>
    </section>
  );
};
