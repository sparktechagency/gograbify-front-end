"use client";
import { useState } from "react";
import { Download, Music, ChevronDown, ChevronUp } from "lucide-react";
import { Button } from "@/components/ui/button";
import { toast } from "sonner";

interface DownloadOption {
  format: string;
  quality: string;
  type: "video" | "audio";
  url: string;
}

export const DownloadTiktokTable = ({ data }: { data: any }) => {
  const [showAll, setShowAll] = useState(false);
  const [loadingIndex, setLoadingIndex] = useState<number | null>(null);
  console.log("data", data);

  const videoData: DownloadOption[] = [
    ...(data?.video?.map((url: string) => ({
      format: "mp4",
      quality: "HD",
      type: "video",
      url: url,
    })) || []),

    ...(data?.audio?.map((url: string) => ({
      format: "mp3",
      quality: "Audio",
      type: "audio",
      url: url,
    })) || []),
  ];

  const visibleOptions = showAll ? videoData : videoData?.slice(0, 6);

  const handleDownload = (option: any, index: number) => {
    setLoadingIndex(index);

    setTimeout(() => {
      setLoadingIndex(null);
      window.open(option.url, "_blank");
      toast.success(
        `Download started: ${option.format.toUpperCase()} ${
          option.type === "video" ? option.quality + "p" : "Audio"
        }`,
      );
    }, 500);
  };

  return (
    <div className="w-full animate-in fade-in slide-in-from-bottom-4 duration-500">
      {/* Table Header */}
      <div className="grid grid-cols-3 gap-4 md:px-4 px-2 py-3 bg-muted/50 rounded-t-xl border-b border-border">
        <span className="text-sm font-semibold text-foreground">Format</span>
        <span className="text-sm font-semibold text-foreground text-center">
          Quality
        </span>
        <span className="text-sm font-semibold text-foreground md:text-right text-center">
          Download
        </span>
      </div>

      {/* Download Options */}
      <div className="divide-y divide-border">
        {visibleOptions?.map((option: any, index: number) => (
          <div
            key={`${option.format}-${option.quality}-${index}`}
            className="grid grid-cols-3 gap-4 items-center md:px-4 px-2 py-3 hover:bg-muted/30 transition-colors"
          >
            {/* Format */}
            <span className="text-sm font-medium text-muted-foreground uppercase">
              {option.format}
            </span>

            {/* Quality */}
            <span className="text-sm font-medium text-muted-foreground text-center">
              {option.quality}
            </span>

            {/* Download */}
            <div className="flex justify-end">
              <Button
                onClick={() => handleDownload(option, index)}
                disabled={loadingIndex === index}
                className="bg-primary text-white font-medium px-4 py-2 h-9.5 md:min-w-47.5 min-w-30.5 min-h-9.5 md:text-[16px] text-sm"
              >
                {loadingIndex === index ? (
                  <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin" />
                ) : option.type === "video" ? (
                  <>
                    <Download className="w-4 h-4 md:mr-2" />
                    Download <span className="md:block hidden">video</span>
                  </>
                ) : (
                  <>
                    <Music className="w-4 h-4 md:mr-2" />
                    Download <span className="md:block hidden">audio</span>
                  </>
                )}
              </Button>
            </div>
          </div>
        ))}
      </div>

      {/* Show More / Less */}
      {videoData?.length > 6 && (
        <button
          onClick={() => setShowAll(!showAll)}
          className="w-full py-3 text-sm font-medium text-muted-foreground hover:text-foreground transition-colors flex items-center justify-center gap-1 border-t border-border"
        >
          {showAll ? (
            <>
              Show less <ChevronUp className="w-4 h-4" />
            </>
          ) : (
            <>
              Show more <ChevronDown className="w-4 h-4" />
            </>
          )}
        </button>
      )}
    </div>
  );
};
