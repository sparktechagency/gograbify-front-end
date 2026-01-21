import { Copy, Link2 } from "lucide-react";

const BrowserBox = ({url}: {url: string}) => (
  <div className="bg-muted rounded-t-lg px-4 py-2 mb-4 flex items-center gap-2 ">
    <div className="flex gap-1.5">
      <div className="w-3 h-3 rounded-full bg-red-500"></div>
      <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
      <div className="w-3 h-3 rounded-full bg-emerald-500"></div>
    </div>
    <div className="flex-1 bg-background rounded px-3 py-1.5 ml-2 flex items-center gap-2">
      <Link2 className="w-4 h-4 text-muted-foreground" />
      <span className="text-sm text-muted-foreground truncate">
        {url}
      </span>
      <div className="ml-auto bg-emerald-500/10 text-emerald-500 px-2 py-0.5 rounded text-xs flex items-center gap-1">
        <Copy className="w-3 h-3" />
        Copy
      </div>
    </div>
  </div>
); 

export default BrowserBox;
