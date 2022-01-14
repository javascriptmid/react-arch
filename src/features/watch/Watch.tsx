import NavBar from "../components/NavBar";
import VideoPlayer from "../video-player/VideoPlayer";
import Comments from "../comment/Comments";

import LiveChatContainer from "../chats/LiveChatContainer";
// import MockLiveChatContainer from "../chats/MockLiveChatContainer";

export default function App() {
  return (
    <>
      <NavBar />
      <div className="py-4 px-2 max-w-5xl mx-auto space-y-2">
        <div className="flex flex-col md:flex-row space-y-2 md:space-y-0 md:space-x-2">
          <div className="w-full md:w-8/12">
            <VideoPlayer />
          </div>
          <div className="w-full md:w-4/12">
            <LiveChatContainer />
          </div>
        </div>
        <div className="w-full">
          <Comments />
        </div>
      </div>
    </>
  );
}
