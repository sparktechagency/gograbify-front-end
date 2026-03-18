"use client";
import { useState } from "react";
import { Download, Music, ChevronDown, ChevronUp } from "lucide-react";
import { toast } from "sonner";
import { myFetch } from "@/helpers/myFetch";
import { socket } from "@/lib/socket";

export const DownloadTable = ({ data, searchUrl }: { data: { formatId: string; ext: string; height: number | null; videoUrl: string; }[]; searchUrl: string }) => {
  const [showAll, setShowAll] = useState(false);
  const [loadingIndex, setLoadingIndex] = useState<number | null>(null);
  const audioFormats = ["mp3", "m4a", "aac", "wav", "ogg", "opus", "webm"];
  const [progressMap, setProgressMap] = useState<Record<number, number>>({});

  const videoData = data?.map((item: { formatId: string; ext: string; height: number | null; videoUrl: string; }) => ({
    formatId: item.formatId,
    format: item.ext,
    quality: item.height
      ? item.height === null
        ? "Auto"
        : item.height + "p"
      : "Auto",
    type: audioFormats.includes(item.ext) ? "audio" : "video",
    url: item.videoUrl,
  }));
  console.log("videoData", videoData);
  const visibleOptions = showAll ? videoData : videoData?.slice(0, 6);


  const downloadFile = async (
    url: string,
    formatId: string,
    ext: string,
    index: number
  ) => {
    const event = `progress::${formatId}${ext}`;

    const handleProgress = (value: number) => {
      console.log("progress", value);

      setProgressMap((prev) => ({
        ...prev,
        [index]: value,
      }));

      if (value >= 100) {
        socket.off(event, handleProgress);
      }
    };

    socket.on(event, handleProgress);

    try {
      setLoadingIndex(index);

      const res = await myFetch("/downloader/download", {
        method: "POST",
        body: { url, formatId, ext },
      });

      if (res?.success) {
        const downloadUrl = `${process.env.NEXT_PUBLIC_BASE_URL}/downloader/download/${res.data}`;

        const link = document.createElement("a");
        link.href = downloadUrl;
        link.download = "";
        link.click();

        setLoadingIndex(null);
      } else {
        toast.error(res?.message || "Something went wrong!");
        setLoadingIndex(null);
      }
    } catch (error) {
      console.error(error);
      toast.error("Request failed");
      setLoadingIndex(null);
    }
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
        {visibleOptions?.map((option: { format: string; quality: string; type: string; url: string; formatId: string; }, index: number) => (
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
              <div
                onClick={() => downloadFile(searchUrl, option?.formatId, option.format, index)}
                className={`h-9.5 md:min-w-47.5 min-w-30.5 min-h-9.5 ${loadingIndex === index ? "cursor-not-allowed " : "cursor-pointer"} `}
              >
                {loadingIndex === index ? (
                  <div className="w-full h-full flex items-center justify-center gap-1">
                    <div className="w-full bg-gray-200 rounded-full h-2 overflow-hidden">
                      <div
                        className="bg-primary h-2 transition-all duration-300"
                        style={{ width: `${progressMap[index] || 0}%` }}
                      />
                    </div>
                    <span className="text-xs text-center text-white">
                      {Math.floor(progressMap[index] || 0)}%
                    </span>
                  </div>
                ) : option.type === "video" ? (
                  <div className="bg-primary text-white font-medium px-4 py-2  md:text-[16px] text-sm flex items-center gap-2 rounded-sm">
                    <Download className="w-4 h-4 md:mr-2" />
                    Download <span className="md:block hidden">video</span>
                  </div>
                ) : (
                  <div className="bg-primary text-white font-medium px-4 py-2  md:text-[16px] text-sm flex items-center gap-2 rounded-sm">
                    <Music className="w-4 h-4 md:mr-2" />
                    Download <span className="md:block hidden">audio</span>
                  </div>
                )}
              </div>
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
