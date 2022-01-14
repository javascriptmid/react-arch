import { useVideoValue } from "./VideoProvider";

export function VideoPlayButton() {
  const video = useVideoValue();

  function handlePlayPause() {
    if (video.current?.paused) {
      video.current?.play();
    } else {
      video.current?.pause();
    }
  }

  return (
    <button className="text-white font-bold px-2" onClick={handlePlayPause}>
      Play/Pause
    </button>
  );
}
