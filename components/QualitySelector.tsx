import { Check, Music, Video } from "lucide-react";

interface QualitySelectorProps {
  selectedQuality: string;
  onQualityChange: (quality: string) => void;
  isAudioOnly: boolean;
  onAudioOnlyChange: (value: boolean) => void;
}

const qualities = ["2160p", "1080p", "720p", "480p", "360p"];

export const QualitySelector = ({
  selectedQuality,
  onQualityChange,
  isAudioOnly,
  onAudioOnlyChange,
}: QualitySelectorProps) => {
  return (
    <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 w-full sm:w-auto">
      {/* Format Toggle */}
      <div className="flex items-center gap-2 p-1 bg-secondary rounded-xl">
        <button
          onClick={() => onAudioOnlyChange(false)}
          className={`flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-medium transition-all ${
            !isAudioOnly
              ? "bg-primary text-primary-foreground"
              : "text-muted-foreground hover:text-foreground"
          }`}
        >
          <Video className="w-4 h-4" />
          Video
        </button>
        <button
          onClick={() => onAudioOnlyChange(true)}
          className={`flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-medium transition-all ${
            isAudioOnly
              ? "bg-primary text-primary-foreground"
              : "text-muted-foreground hover:text-foreground"
          }`}
        >
          <Music className="w-4 h-4" />
          MP3
        </button>
      </div>

      {/* Quality Options - Only show for video */}
      {!isAudioOnly && (
        <div className="flex flex-wrap gap-2">
          {qualities.map((quality) => (
            <button
              key={quality}
              onClick={() => onQualityChange(quality)}
              className={`relative px-3 py-1.5 rounded-lg text-sm font-medium transition-all ${
                selectedQuality === quality
                  ? "bg-primary/20 text-primary border border-primary/50"
                  : "bg-secondary text-muted-foreground hover:text-foreground border border-transparent"
              }`}
            >
              {quality}
              {selectedQuality === quality && (
                <Check className="w-3 h-3 absolute -top-1 -right-1 bg-primary text-primary-foreground rounded-full p-0.5" />
              )}
            </button>
          ))}
        </div>
      )}
    </div>
  );
};
