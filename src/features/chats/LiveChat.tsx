import { useState } from "react";
import Message from "./Message";

export default function LiveChat() {
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

  function handleNewMessage(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const formElements = form.elements as typeof form.elements & {
      message: { value: string };
    };

    setMessages((prevMessages) => {
      return [
        ...prevMessages,
        {
          id: `${Date.now()}`,
          text: formElements.message.value,
          user: "John",
          timestamp: new Date().toISOString(),
        },
      ];
    });
  }

  return (
    <div
      style={{ height: 320 }}
      className="flex flex-col flex-1 justify-end p-2 space-y-2 border"
    >
      <div>
        <p>Live Chat</p>
      </div>
      <div className="flex flex-col flex-1 bg-gray-100 overflow-y-scroll justify-end space-y-2">
        {messages.map((message) => (
          <Message key={message.id} text={message.text} />
        ))}
      </div>
      <form onSubmit={handleNewMessage}>
        <input
          required
          className="block w-full shadow-sm border-gray-300 rounded-md focus:ring focus:border-indigo-500"
          id="message"
          name="message"
          placeholder="Type a message..."
          type="text"
        />
      </form>
    </div>
  );
}
