import BrowserBox from '@/components/BrowserBox';
import DownloadBox from '@/components/DownloadBox';
import InfoBox from '@/components/InfoBox';
import InstructionStep from '@/components/InstructionStep';
import { steps } from '@/contents/downloader-pages-data';
import Image from 'next/image';

export function InstructionSection() {
 
  return (
    <section className="w-full bg-background pb-20 px-4">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="md:text-4xl text-3xl mb-4">
            How to <span className="text-primary">Download</span> YouTube Videos
          </h2>
          <p className="text-muted-foreground text-lg">
            Follow these simple steps to download any YouTube video
          </p>
        </div>

        {/* Main Content */}
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Side - Image & Boxes */}
          <div className="order-2 lg:order-1 relative rounded-2xl overflow-hidden border-2 border-border bg-secondary/30 p-6">
            <BrowserBox url="youtube.com/watch?v=dQw4w9WgXcQ" />
            <div className="relative rounded-lg overflow-hidden">
              <Image
                src="https://images.unsplash.com/photo-1762330471883-27a187343022?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx5b3V0dWJlJTIwYnJvd3NlciUyMGludGVyZmFjZXxlbnwxfHx8fDE3Njg5OTE1MjR8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                alt="YouTube interface example" 
                width={600} 
                height={300}
                className="w-full h-auto"
              />
            </div>
            <DownloadBox url='youtube.com/watch?v=...' />
          </div>

          {/* Right Side - Instructions */}
          <div className="order-1 lg:order-2 space-y-6">
            {steps.map((step) => (
              <InstructionStep key={step.step} {...step} />
            ))}
          </div>
        </div>

        {/* Additional Info */}
        <InfoBox
          title="Browser Compatible"
          description="This method works with all popular web browsers including Google Chrome, Mozilla Firefox, Safari, Microsoft Edge, and Opera."
        />
      </div>
    </section>
  );
}
