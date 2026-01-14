import { Zap, Shield, Smartphone, Globe, Music, Ban } from "lucide-react";

const features = [
  {
    icon: Zap,
    title: "Lightning Fast",
    description: "Download videos in seconds with our optimized servers",
  },
  {
    icon: Shield,
    title: "Safe & Secure",
    description: "No malware, no tracking. Your privacy is protected",
  },
  {
    icon: Smartphone,
    title: "Mobile Friendly",
    description: "Works perfectly on any device, anywhere, anytime",
  },
  {
    icon: Globe,
    title: "Multi-Platform",
    description: "YouTube, TikTok, Instagram, Facebook all supported",
  },
  {
    icon: Music,
    title: "Audio Extract",
    description: "Convert any video to MP3 audio format instantly",
  },
  {
    icon: Ban,
    title: "No Watermarks",
    description: "Download clean videos without any watermarks",
  },
];

export const FeaturesSection = () => {
  return (
    <section className="py-20 px-4 relative">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
            Why Choose <span className="gradient-text">Us?</span>
          </h2>
          <p className="text-muted-foreground max-w-xl mx-auto">
            The most reliable and fastest video downloader on the web
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <div
              key={feature.title}
              className="feature-card p-6 group hover:border-primary/30 transition-all duration-300"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                <feature.icon className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-lg font-semibold mb-2">{feature.title}</h3>
              <p className="text-muted-foreground text-sm">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
