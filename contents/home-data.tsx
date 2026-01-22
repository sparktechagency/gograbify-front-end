import { Link2, Settings, Download } from "lucide-react"; 
import { Zap, Shield, Smartphone, Globe, Music, Ban } from "lucide-react";
 
const steps = [
  {
    icon: Link2,
    step: "01",
    title: "Paste URL",
    description: "Copy the video URL from YouTube, TikTok, Instagram, or Facebook and paste it here",
  },
  {
    icon: Settings,
    step: "02",
    title: "Choose Format",
    description: "Select your preferred video quality or convert to MP3 audio",
  },
  {
    icon: Download,
    step: "03",
    title: "Download",
    description: "Click download and get your file instantly. No waiting!",
  },
];  


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
 

export {steps , features};