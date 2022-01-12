import useMessages from "./useMessages";
import Message from "./Message";

export default function LiveChat() {
  const messages = useMessages();

  return (
    <div
      style={{ height: 320 }}
      className="flex flex-col flex-1 bg-green-200 overflow-y-auto justify-end p-2 space-y-2"
    >
      {messages.map((message) => (
        <Message key={message.id} text={message.text} />
      ))}
    </div>
  );
}
