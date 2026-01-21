import { DownloadVideoSection } from "@/components/shared/DownloadVideoSection";

const Banner = () => {
    return (
        <div>
           <DownloadVideoSection info={{
            title: "Download YouTube Videos ",
            subtitle: "Fast & Hassle-Free",
            description: "Download your favorite YouTube videos instantly in high-quality MP4 format. Watch offline anytime, anywhere."
           }} />
        </div>
    );
}; 

export default Banner;