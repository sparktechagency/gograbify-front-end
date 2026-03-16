"use client";
import { useState } from "react";
import { Download, Loader2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { toast } from "sonner";
import Advertisement from "@/components/Advertisement";
import { DownloadTable } from "@/components/DownloadTable";
import { PlatformIcons } from "@/components/PlatformIcons";
import { myFetch } from "@/helpers/myFetch";
import { detectPlatform, generateId } from "@/helpers/generateId";
import { useVideoStatus } from "@/hooks/useVideoStatus";
import { DownloadTiktokTable } from "../DownloadTiktokTable";

type info = {
  title: string;
  subtitle: string;
  description: string;
  type: string;
};

export const DownloadVideoSection = ({ info }: { info: info }) => {
  const [url, setUrl] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [showOptions, setShowOptions] = useState(false);
  const [videoId, setVideoId] = useState<string | null>(null);
  const { data } = useVideoStatus({ videoId, setIsLoading });
  console.log("data", data);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!url.trim()) {
      toast.error("Please enter a video URL");
      return;
    }
    const randomId = generateId();
    const platform = detectPlatform(url);
    const payload = {
      link: url,
      type: platform || info.type,
      id: randomId,
    };
    setIsLoading(true);

    try {
      const res = await myFetch("/downloader", {
        method: "POST",
        body: payload,
      });

      if (res?.success) {
        const videoId = res.data;
        setVideoId(videoId);
        setShowOptions(true);
        setIsLoading(true);
        toast.success(res?.message || "Video processing started!");
      } else {
        setIsLoading(false);
        toast.error(res?.message || "Something went wrong!");
      }
    } catch (error) {
      console.error(error);
      setIsLoading(false);
      toast.error("Request failed");
    }
  };

  return (
    <section
      className={`min-h-screen   flex flex-col items-center md:pt-10 pt-20 ${showOptions ? "pb-10" : "pb-0"}    relative overflow-hidden`}
    >
      {/* Background effects */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-[#21a178]/10 rounded-full blur-3xl animate-float" />
        <div
          className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-[#21a178]/5 rounded-full blur-3xl animate-float"
          style={{ animationDelay: "-3s" }}
        />
      </div>

      <div className="relative z-10 max-w-4xl w-full text-center">
        {/* Title */}
        <h1 className="text-4xl md:text-6xl font-semibold md:mb-9 mb-5 leading-tight">
          {info.title}
          <span className="block gradient-text glow-text">{info.subtitle}</span>
        </h1>

        <p className=" text-muted-foreground md:text-lg text-sm  mb-6 max-w-xl mx-auto">
          {info?.description}
        </p>

        {/* Platform Icons */}
        <PlatformIcons />

        {/* URL Input Form */}
        <form onSubmit={handleSubmit} className="md:mt-20 mt-14">
          <div className="glass-card p-2 input-glow transition-all duration-300">
            <div className="flex flex-col sm:flex-row gap-2">
              <input
                type="text"
                value={url}
                onChange={(e) => setUrl(e.target.value)}
                placeholder="Paste video URL here..."
                className="flex-1 bg-transparent px-4 py-3 text-foreground placeholder:text-muted-foreground focus:outline-none text-sm"
              />
              <Button
                type="submit"
                disabled={isLoading}
                className="btn-glow bg-primary text-primary-foreground font-semibold px-6 py-3 h-auto hover:bg-primary/90 disabled:opacity-50 cursor-pointer transition-all duration-300 text-white md:min-w-38 "
              >
                {isLoading ? (
                  <Loader2 className="w-5 h-5 animate-spin text-white" />
                ) : (
                  <>
                    <Download className="w-5 h-5 mr-2" />
                    Get Video
                  </>
                )}
              </Button>
            </div>
          </div>
        </form>

        {/* Advertisement section  */}
        <Advertisement />

        {/* Download Options */}
        {showOptions && (
          <div className="mt-6 glass-card p-4 sm:p-6 overflow-hidden">
            {isLoading || !data ? (
              <div className="flex items-center justify-center py-10">
                <Loader2 className="w-6 h-6 animate-spin text-primary" />
                <span className="ml-3 text-sm text-muted-foreground">
                  Preparing download links...
                </span>
              </div>
            ) : data?.length > 0 ? (
              <DownloadTable data={data} />
            ) : (
              <DownloadTiktokTable data={data} />
            )}
          </div>
        )}
      </div>
    </section>
  );
};
