export const generateId = () => {
  return Math.floor(100000 + Math.random() * 900000).toString();
}; 

export const detectPlatform = (url: string) => { 
  if (url.includes("youtube") || url.includes("youtu.be")) return "youtube";
  if (url.includes("tiktok")) return "tiktok";
  if (url.includes("instagram")) return "instagram";
  if (url.includes("facebook") || url.includes("fb.watch")) return "facebook";

  return "";
}; 