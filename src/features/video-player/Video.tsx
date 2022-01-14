import { useVideoValue } from "./VideoProvider";

export default function Video() {
  const videoRef = useVideoValue();

  return (
    <div style={{ height: 320 }} className="flex-1 bg-black">
      <video ref={videoRef} className="h-full w-full">
        <source
          src="https://www.w3schools.com/html/mov_bbb.mp4"
          type="video/mp4"
        />
        <source
          src="https://www.w3schools.com/html/mov_bbb.ogg"
          type="video/ogg"
        />
        Your browser does not support the video tag.
      </video>
    </div>
  );
}
