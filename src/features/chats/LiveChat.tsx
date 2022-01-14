import LiveChatMessagesList from "./LiveChatMessagesList";
import LiveChatTextInput from "./LiveChatTextInput";

export default function LiveChat() {
  return (
    <div
      style={{ height: 320 }}
      className="flex flex-col flex-1 justify-end p-2 space-y-2 border"
    >
      <div>
        <p>Live Chat</p>
      </div>
      <LiveChatMessagesList />
      <LiveChatTextInput />
    </div>
  );
}
