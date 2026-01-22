import BrowserBox from '@/components/BrowserBox'
import DownloadBox from '@/components/DownloadBox'
import InstructionStep from '@/components/InstructionStep'
import { infoCards, stepsFacebook } from '@/contents/downloader-pages-data'
import { InfoCard } from './InfoCard '
import Image from 'next/image'

function InstructionSectionFacebook() {
  return (
   <section className="w-full bg-background pb-20 px-4">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="md:text-4xl text-3xl mb-4 font-semibold">
            How to <span className="text-primary">Download</span> Facebook Videos
          </h2>
          <p className="text-muted-foreground max-w-xl mx-auto">
            Follow these simple steps to download any Facebook video
          </p>
        </div>

        {/* Main Content */}
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Side - Image & Boxes */}
          <div className="order-2 lg:order-1 relative rounded-2xl overflow-hidden border-2 border-border bg-secondary/30 p-6">
            <BrowserBox url='facebook.com/watch?v=123456789' />
            <div className="relative rounded-lg overflow-hidden">
              <Image
                src="https://images.unsplash.com/photo-1762340276507-5c46c4abc69d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmYWNlYm9vayUyMG1vYmlsZSUyMGludGVyZmFjZXxlbnwxfHx8fDE3Njg5OTQ1MTh8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                alt="Facebook interface example" 
                width={600} 
                height={300}
                className="w-full h-auto"
              />
            </div>
            <DownloadBox url='facebook.com/watch?v=...'/>
          </div>

          {/* Right Side - Instructions */}
          <div className="order-1 lg:order-2 space-y-6">
            {stepsFacebook.map((step) => (
              <InstructionStep key={step.step} {...step} />
            ))}
          </div>
        </div>

        {/* Additional Info */}
    <div className="mt-12 grid md:grid-cols-2 gap-6">
  {infoCards.map((card, index) => (
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
  )
}

export default InstructionSectionFacebook