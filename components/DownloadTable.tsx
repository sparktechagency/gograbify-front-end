"use client";
import { useState } from "react";
import { Download, Music, ChevronDown, ChevronUp, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import { toast } from "sonner";

interface DownloadOption {
  format: string;
  quality: string;
  type: "video" | "audio";
}

const downloadOptions: DownloadOption[] = [
  { format: "MP4", quality: "1440", type: "video" },
  { format: "MP4", quality: "1080", type: "video" },
  { format: "MP4", quality: "720", type: "video" },
  { format: "MP4", quality: "480", type: "video" },
  { format: "MP4", quality: "360", type: "video" },
  { format: "MP3", quality: "320", type: "audio" },
  { format: "MP3", quality: "192", type: "audio" },
  { format: "MP3", quality: "128", type: "audio" },
];

export const DownloadTable = () => {
  const [showAll, setShowAll] = useState(false);
  const [loadingIndex, setLoadingIndex] = useState<number | null>(null);

  const visibleOptions = showAll ? downloadOptions : downloadOptions.slice(0, 6);

  const handleDownload = (option: DownloadOption, index: number) => {
    setLoadingIndex(index);
    setTimeout(() => {
      setLoadingIndex(null);
      toast.success(`Download started: ${option.format} ${option.quality}${option.type === "video" ? "p" : "kbps"}`);
    }, 800);
  };

  return (
    <div className="w-full animate-in fade-in slide-in-from-bottom-4 duration-500">
      {/* Table Header */}
      <div className="grid grid-cols-3 gap-4 md:px-4 px-2 py-3 bg-muted/50 rounded-t-xl border-b border-border">
        <span className="text-sm font-semibold text-foreground">Format</span>
        <span className="text-sm font-semibold text-foreground text-center">Quality</span>
        <span className="text-sm font-semibold text-foreground md:text-right text-center">Download</span>
      </div>



      {/* Download Options */}
      <div className="divide-y divide-border">
        {visibleOptions.map((option, index) => (
          <div 
            key={`${option.format}-${option.quality}`}
            className="grid grid-cols-3 gap-4 items-center md:px-4 px-2 py-3 hover:bg-muted/30 transition-colors"
          >
            <span className="text-sm font-medium text-muted-foreground">{option.format}</span>
            <span className="text-sm font-medium text-muted-foreground text-center">
              {option.quality}
            </span>
            <div className="flex justify-end">
              <Button
                onClick={() => handleDownload(option, index)}
                disabled={loadingIndex === index}
                // size="sm" 
                className="bg-primary text-white font-medium px-4 py-2 h-auto min-w-32.5 md:text-[16px] text-sm "
              >
                {loadingIndex === index ? (
                  <div className="w-4 h-4 border-2 border-white border-t-transparent text-white rounded-full animate-spin" />
                ) : option.type === "video" ? (
                  <>
                    <Download className="w-4 h-4 mr-2 md:block hidden" />
                    Download video
                  </>
                ) : (
                  <>
                    <Music className="w-4 h-4 mr-2 md:block hidden" />
                    Download audio
                  </>
                )}
              </Button>
            </div>
          </div>
        ))}
      </div>

      {/* Show More / Less */}
      {downloadOptions.length > 6 && (
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
