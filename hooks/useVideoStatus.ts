import { useState, useEffect } from "react";
import { socket } from "@/lib/socket";

type VideoData = any;

export function useVideoStatus({
  videoId,
  setIsLoading,
}: {
  videoId: string | null;
  setIsLoading: (loading: boolean) => void;
}) {
  const [data, setData] = useState<VideoData | null>(null);

  useEffect(() => {
    if (!videoId) return;

    const event = `video::${videoId}`;

    const handleData = (payload: any) => {
      setData(payload);
      setIsLoading(false);
    };

    setIsLoading(true);
    socket.on(event, handleData);

    return () => {
      socket.off(event, handleData);
    };
  }, [videoId]);

  return { data };
}
