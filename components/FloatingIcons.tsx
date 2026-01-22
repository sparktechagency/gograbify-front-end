import { useMemo } from "react";
import {
  Download,
  Play,
  Video,
  Music,
  Share2,
  Link2, 
  
} from "lucide-react";
import { BiLogoFacebook } from "react-icons/bi";
import { RiInstagramFill } from "react-icons/ri";
import { AiOutlineTikTok } from "react-icons/ai"; 
import { IoLogoYoutube } from "react-icons/io";
// import { FaYoutube } from "react-icons/fa";

const icons = [Download, Play, Video, Music, Share2, Link2,BiLogoFacebook , RiInstagramFill, AiOutlineTikTok,IoLogoYoutube ];

type IconConfig = {
  top: string;
  left: string;
  size: number;
  delay: string;
  duration: string;
  rotation: number;
  Icon: React.ComponentType<React.SVGProps<SVGSVGElement>>;
};

function generateIconConfigs(): IconConfig[] {
  return Array.from({ length: 8 }).map((_, i) => ({
    Icon: icons[i % icons.length],
    top: `${Math.random() * 100}%`,
    left: `${Math.random() * 100}%`,
    size: 18 + Math.random() * 40,
    delay: `${Math.random() * 6}s`,
    duration: `${8 + Math.random() * 8}s`,
    rotation: Math.random() * 360,
  }));
}

export const FloatingIcons = () => {
  const iconConfigs = useMemo<IconConfig[]>(() => generateIconConfigs(), []); // 👈 runs ONLY once

  return (
    <div className="absolute inset-0 pointer-events-none overflow-hidden">
      {iconConfigs.map((cfg, i) => {
        const Icon = cfg.Icon;

        return (
          <Icon
            key={i}
            className="absolute text-white/15 animate-float"
            style={{
              top: cfg.top,
              left: cfg.left,
              width: cfg.size,
              height: cfg.size,
              animationDelay: cfg.delay,
              animationDuration: cfg.duration,
              transform: `rotate(${cfg.rotation}deg)`,
            }}
          />
        );
      })}
    </div>
  );
};
