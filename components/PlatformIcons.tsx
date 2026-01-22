import Link from "next/link";
import { AiOutlineTikTok } from "react-icons/ai";
import { CgFacebook } from "react-icons/cg";
import { FaYoutube } from "react-icons/fa";
import { RiInstagramFill } from "react-icons/ri";

export const PlatformIcons = () => {
  const platforms = [
    { name: "YouTube", icon: FaYoutube, color:"text-red-500", path: "/youtube-video-downloader" },
    { name: "TikTok", icon: AiOutlineTikTok, color:"text-white", path: "/tiktok-video-downloader" },
    { name: "Instagram", icon: RiInstagramFill, color:"text-pink-700", path: "/instagram-video-downloader" },
    { name: "Facebook", icon: CgFacebook, color:"text-blue-600", path: "/facebook-video-downloader" },
  ];

  return (
    <div className="flex items-center justify-center gap-5">
      {platforms.map((platform) => (
        <Link
          key={platform.name}
          href={platform.path}
          title={platform.name}
          className={`
            w-12 h-12
            rounded-xl
            bg-white/10
            flex items-center justify-center
            ${platform.color}
            transition-all duration-300 ease-in-out
            hover:bg-[#DD2328]/10
            hover:text-[#DD2328]
            hover:shadow-[0_0_20px_-5px_rgb(var(--primary)/0.5)]
         `}
        >
          <platform.icon className="w-6.5 h-6.5" />
        </Link>
      ))}
    </div>
  );
};
