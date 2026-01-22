import { steps } from "@/contents/home-data";

export const HowItWorks = () => {
  return (
    <section className="md:pb-20 px-4 ">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-semibold mb-4">
            How It <span className="gradient-text">Works</span>
          </h2>
          <p className="text-muted-foreground max-w-xl mx-auto">
            Download any video in just 3 simple steps
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 md:gap-8 gap-10">
          {steps.map((step, index) => (
            <div key={step.step} className="relative text-center">
              {/* Connector Line */}
              {index < steps.length - 1 && (
                <div className="hidden md:block absolute z-0! top-12 left-1/2 w-full h-0.5 bg-linear-to-r from-primary/50 to-primary/10" />
              )}

              <div className="z-10! relative  inline-flex items-center justify-center w-24 h-24 rounded-2xl bg-[#080C15]  mb-6 animate-pulse-glow">
                <step.icon className="w-10 h-10 text-primary" />
                <span className="absolute -top-2 -right-2 w-8 h-8 bg-primary text-primary-foreground text-sm font-bold rounded-lg flex items-center justify-center">
                  {step.step}
                </span>
              </div>

              <h3 className="text-xl font-semibold mb-2">{step.title}</h3>
              <p className="text-muted-foreground text-sm">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
