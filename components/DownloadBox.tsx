import { Download } from "lucide-react";

const DownloadBox = ({url}: {url: string}) => (
  <div className="mt-6 bg-background border-2 border-emerald-500/30 rounded-lg p-4 pointer-events-none">
    <div className="flex items-center gap-3">
      <div className="bg-emerald-500/10 rounded p-2">
        <Download className="w-5 h-5 text-emerald-500" />
      </div>
      <div className="flex-1">
        <div className="text-xs text-muted-foreground mb-1">Paste URL here</div>
        <div className="text-sm text-foreground/70 font-mono">{url}</div>
      </div>

    </div>
  </div>
); 

export default DownloadBox;