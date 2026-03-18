import { useState, useEffect } from "react";
import { socket } from "@/lib/socket";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
type VideoData = any;

export function useVideoStatus({
  event,
  setIsLoading,
}: {
  event: string | null;
  setIsLoading: (loading: boolean) => void;
}) {
  const [data, setData] = useState<VideoData | null>(null);

  useEffect(() => {
    if (!event) return;

    const handleData = (payload: VideoData) => {
      setData(payload);
      setIsLoading(false);
    };

    setIsLoading(true);
    socket.on(event, handleData);

    return () => {
      socket.off(event, handleData);
    };
  }, [event, setIsLoading]);

  return { data };
}
