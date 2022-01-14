import { useState } from "react";
import { AddNewMessageProvider } from "./AddNewMessageProvider";
import LiveChat from "./LiveChat";
import { MessagesProvider } from "./MessagesProvider";

export default function LiveChatContainerRest() {
  const [messages, setMessages] = useState([
    {
      id: "1",
      text: "Hello, how are you?",
      user: "John",
      timestamp: "2020-01-01T00:00:00.000Z",
    },
    {
      id: "2",
      text: "I'm fine, thank you!",
      user: "John",
      timestamp: "2020-01-01T00:00:00.000Z",
    },
  ]);

  function handleAddNewMessage(message: string) {
    setMessages((prevMessages) => {
      return [
        ...prevMessages,
        {
          id: `${Date.now()}`,
          text: message,
          user: "John",
          timestamp: new Date().toISOString(),
        },
      ];
    });
  }

  return (
    <MessagesProvider value={messages}>
      <AddNewMessageProvider value={handleAddNewMessage}>
        <LiveChat />
      </AddNewMessageProvider>
    </MessagesProvider>
  );
}
