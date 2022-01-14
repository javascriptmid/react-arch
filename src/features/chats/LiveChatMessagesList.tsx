import Message from "./Message";
import { useMessagesValue } from "./MessagesProvider";

export default function LiveChatMessagesList() {
  const messages = useMessagesValue();

  return (
    <div className="flex flex-col flex-1 bg-gray-100 overflow-y-scroll justify-end space-y-2">
      {messages.map((message) => (
        <Message key={message.id} text={message.text} />
      ))}
    </div>
  );
}
