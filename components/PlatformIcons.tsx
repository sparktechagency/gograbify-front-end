import Link from "next/link";
import { AiOutlineTikTok } from "react-icons/ai";
import { CgFacebook } from "react-icons/cg";
import { FaYoutube, FaInstagram, FaFacebook } from "react-icons/fa";
import { RiInstagramFill } from "react-icons/ri";

export const PlatformIcons = () => {
  const platforms = [
    { name: "YouTube", icon: FaYoutube, path: "/youtube-video-downloader" },
    { name: "TikTok", icon: AiOutlineTikTok, path: "/tiktok-video-downloader" },
    { name: "Instagram", icon: RiInstagramFill, path: "/instagram-video-downloader" },
    { name: "Facebook", icon: CgFacebook, path: "/facebook-video-downloader" },
  ];

  return (
    <div className="flex items-center justify-center gap-5">
      {platforms.map((platform) => (
        <Link
          key={platform.name}
          href={platform.path}
          title={platform.name}
          className="
            w-12 h-12
            rounded-xl
            bg-[#10192d]
            flex items-center justify-center
            text-[#7588a3]
            transition-all duration-300 ease-in-out
            hover:bg-primary/10
            hover:text-primary
            hover:shadow-[0_0_20px_-5px_rgb(var(--primary)/0.5)]
          "
        >
          <platform.icon className="w-6.5 h-6.5" />
        </Link>
      ))}
    </div>
  );
};
