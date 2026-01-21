 import { Copy, Search, Download, CheckCircle, MoreHorizontal, MoreVertical, Share2 } from 'lucide-react';
 
 const steps = [
    {
      step: 1,
      title: "Navigate to YouTube",
      description: "Go to YouTube.com and find the video you want to download for offline viewing.",
      Icon: Search,
    },
    {
      step: 2,
      title: "Copy Video URL",
      description: "Copy the video URL from your browser's address bar. Click on the URL and press Ctrl+C (or Cmd+C on Mac).",
      Icon: Copy,
    },
    {
      step: 3,
      title: "Choose Format & Download",
      description: "Paste the URL in the input box above, select your preferred format (MP3, MP4, WEBM, or 3GP), and click the download button.",
      Icon: Download,
    },
    {
      step: 4,
      title: "Enjoy Your Video",
      description: "Your video will download instantly. Enjoy watching it offline anytime, anywhere on any device!",
      Icon: CheckCircle,
    },
  ];  

 const stepsFacebook = [
    {
      step: 1,
      title: "Find Your Video on Facebook",
      description: "Open Facebook app or website and navigate to the video you want to download. It can be from your feed, a page, or a group..",
      Icon: Search,
    },
    {
      step: 2,
      title: "Copy Video Link",
      description: "Click the three dots (•••) on the video post, select 'Copy Link' from the menu. On desktop, you can also copy the URL from the address bar.",
      Icon: Copy,
    },
    {
      step: 3,
      title: "Choose Format & Download",
      description: "Paste the Facebook video link in the input box above, choose your preferred quality (SD or HD), and click the download button.",
      Icon: Download,
    },
    {
      step: 4,
      title: "Save to Device",
      description: "Your Facebook video will download instantly. Save it to your device and watch it offline anytime you want!",
      Icon: CheckCircle,
    },
  ];  

  const infoCards = [
  {
    title: "Mobile & Desktop Compatible",
    description:
      "Download Facebook videos from any device - smartphone, tablet, or computer. Works on all platforms.",
    Icon: CheckCircle,
  },
  {
    title: "Support for All Video Types",
    description:
      "Download public videos, reels, stories, and live streams from Facebook. Works with most video formats.",
    Icon: MoreHorizontal,
  },
];  

export const stepsInstagram = [
  {
    step: 1,
    title: "Open Instagram",
    description:
      "Launch the Instagram app or visit Instagram.com and navigate to the video, reel, or IGTV you want to download.",
    Icon: Search,
  },
  {
    step: 2,
    title: "Copy Post Link",
    description:
      "Tap the three dots (•••) on the post and select 'Copy Link'. On desktop, copy the URL from the address bar.",
    Icon: MoreVertical,
  },
  {
    step: 3,
    title: "Paste & Download",
    description:
      "Paste the Instagram link into the input box and click download to get your video in HD quality.",
    Icon: Download,
  },
  {
    step: 4,
    title: "Enjoy Offline",
    description:
      "Your video downloads instantly. Watch it offline or share it anywhere you like.",
    Icon: CheckCircle,
  },
];

export const infoCardsInstagram = [
  {
    title: "Reels & IGTV Support",
    description:
      "Download Instagram Reels, IGTV videos, stories, and regular posts. All formats are supported.",
    Icon: CheckCircle,
  },
  {
    title: "High Quality Downloads",
    description:
      "Get the best available quality with original audio. Supports Full HD downloads.",
    Icon: Download,
  },
];  


export const stepsTiktok = [
  {
    step: 1,
    title: "Open TikTok App or Website",
    description:
      "Launch the TikTok app on your mobile device or visit TikTok.com on your browser. Find the video you want to download.",
    Icon: Search,
  },
  {
    step: 2,
    title: "Share & Copy Link",
    description:
      'Tap the "Share" button on the video, then select "Copy Link". On desktop, copy the URL from the address bar.',
    Icon: Share2,
  },
  {
    step: 3,
    title: "Download Without Watermark",
    description:
      "Paste the TikTok link in the input box above and click download. Get your video in HD quality without watermark.",
    Icon: Download,
  },
  {
    step: 4,
    title: "Save & Share",
    description:
      "Your TikTok video downloads instantly to your device. Repost, edit, or share it anywhere you want.",
    Icon: CheckCircle,
  },
];

export const infoCardsTiktok = [
  {
    title: "No Watermark Downloads",
    description:
      "Download TikTok videos without the watermark logo. Get clean, high-quality videos ready to use.",
    Icon: CheckCircle,
  },
  {
    title: "Download with Sound",
    description:
      "All videos are downloaded with original audio, music, and sound effects intact.",
    Icon: Download,
  },
];

  export  {steps, stepsFacebook, infoCards};