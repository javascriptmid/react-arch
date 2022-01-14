import NavBar from "../components/NavBar";
import VideoPlayer from "../video-player/VideoPlayer";
import LiveChat from "../chats/LiveChat";
import Comments from "../comment/Comments";
import MessageRestProvider from "../chats/MessageRestProvider";

export default function App() {
  return (
    <>
      <NavBar />
      <div className="py-4 px-2 max-w-5xl mx-auto space-y-2">
        <div className="flex flex-col md:flex-row space-x-2">
          <div className="w-8/12">
            <VideoPlayer />
          </div>
          <div className="w-4/12">
            <MessageRestProvider>
              <LiveChat />
            </MessageRestProvider>
          </div>
        </div>
        <div className="w-full">
          <Comments />
        </div>
      </div>
    </>
  );
}
