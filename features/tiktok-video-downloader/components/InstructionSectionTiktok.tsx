import BrowserBox from "@/components/BrowserBox";
import DownloadBox from "@/components/DownloadBox";
import InstructionStep from "@/components/InstructionStep";
import {
  stepsTiktok,
  infoCardsTiktok,
} from "@/contents/downloader-pages-data";
import { InfoCard } from "./InfoCard ";
import Image from "next/image";


function InstructionSectionTiktok() {
  return (
    <section className="w-full bg-background pb-20 px-4">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="md:text-4xl text-3xl mb-4 font-semibold">
            How to <span className="text-primary">Download</span> TikTok Videos
          </h2>
          <p className="text-muted-foreground max-w-xl mx-auto">
            Follow these simple steps to download TikTok videos without watermark
          </p>
        </div>

        {/* Main Content */}
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Side */}
          <div className="order-2 lg:order-1 relative rounded-2xl overflow-hidden border-2 border-border bg-secondary/30 p-6">
            <BrowserBox url="tiktok.com/@username/video/123456789" />

            <div className="relative rounded-lg overflow-hidden">
              <Image
                src="https://images.unsplash.com/photo-1642141325625-f76034e4ad2b?q=80&w=1071&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                alt="TikTok interface example" 
                width={600} 
                height={300}
                className="w-full h-auto"
              />
            </div>

            <DownloadBox url="tiktok.com/@username/video/..." />
          </div>

          {/* Right Side */}
          <div className="order-1 lg:order-2 space-y-6">
            {stepsTiktok.map((step) => (
              <InstructionStep key={step.step} {...step} />
            ))}
          </div>
        </div>

        {/* Additional Info */}
        <div className="mt-12 grid md:grid-cols-2 gap-6">
          {infoCardsTiktok.map((card, index) => (
            <InfoCard
              key={index}
              title={card.title}
              description={card.description}
              Icon={card.Icon}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

export default InstructionSectionTiktok;
