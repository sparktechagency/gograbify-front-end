import { DownloadVideoSection } from "@/components/shared/DownloadVideoSection";

const Banner = () => {
    return (
        <div>
           <DownloadVideoSection info={{
            title: "Instagram Video Download",
            subtitle: "Fast, Free & Secure",
            description: "Download Instagram videos online in HD MP4 format. Paste the video link and start downloading instantly."
           }} />
        </div>
    );
}; 

export default Banner;