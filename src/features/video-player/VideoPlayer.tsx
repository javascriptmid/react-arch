import { useRef } from "react";
import Video from "./Video";
import { VideoPlayButton } from "./VideoPlayButton";
import { VideoProvider } from "./VideoProvider";

export default function VideoPlayer() {
  const ref = useRef<HTMLVideoElement>(null);

  return (
    <VideoProvider value={ref}>
      <div className="relative">
        <Video />
        <div className="absolute bottom-0 left-0 right-0 z-50 bg-black bg-opacity-20">
          <VideoPlayButton />
        </div>
      </div>
    </VideoProvider>
  );
}
