"use client";
import { useState } from "react";
import { Download, Loader2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { PlatformIcons } from "./PlatformIcons";
import { DownloadTable } from "./DownloadTable";
import { toast } from "sonner";
import Advertisement from "./Advertisement";
export const HeroSection = () => {
  const [url, setUrl] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [showOptions, setShowOptions] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!url.trim()) {
      toast.error("Please enter a video URL");
      return;
    }

    const urlPattern = /^(https?:\/\/)?(www\.)?(youtube\.com|youtu\.be|tiktok\.com|instagram\.com|facebook\.com|fb\.watch)/i;
    
    if (!urlPattern.test(url)) {
      toast.error("Please enter a valid video URL from YouTube, TikTok, Instagram, or Facebook");
      return;
    }

    setIsLoading(true);
    
    // Simulate processing
    setTimeout(() => {
      setIsLoading(false);
      setShowOptions(true);
      toast.success("Video found! Select your download options.");
    }, 1500);
  };

  return (
    <section className={`min-h-screen   flex flex-col items-center pt-10   relative overflow-hidden`}>
      {/* Background effects */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-[#21a178]/10 rounded-full blur-3xl animate-float" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-[#21a178]/5 rounded-full blur-3xl animate-float" style={{ animationDelay: "-3s" }} />
      </div>

      <div className="relative z-10 max-w-3xl w-full text-center">
        {/* Title */}
        <h1 className="text-5xl md:text-6xl font-semibold mb-9 leading-tight">
          Download Videos
          <span className="block gradient-text glow-text">Fast & Free</span>
        </h1>
        
        <p className=" text-muted-foreground text-lg  mb-6 max-w-xl mx-auto">
          Paste any video URL from YouTube, TikTok, Instagram, or Facebook and download in seconds. No watermarks.
        </p>

        {/* Platform Icons */}
        <PlatformIcons />

        {/* URL Input Form */}
        <form onSubmit={handleSubmit} className="mt-20">
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
                className="btn-glow bg-primary text-primary-foreground font-semibold px-6 py-3 h-auto hover:bg-primary/90 disabled:opacity-50 cursor-pointer transition-all duration-300 text-white"
              >
                {isLoading ? (
                  <Loader2 className="w-5 h-5 animate-spin" />
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
            <DownloadTable />
          </div>
        )}
      </div>
    </section>
  );
};
