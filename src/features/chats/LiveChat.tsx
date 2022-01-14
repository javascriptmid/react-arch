import Message from "./Message";

type LiveChatProps = {
  addNewMessage?: (message: string) => void;
  messages: ReadonlyArray<{
    id: string;
    text: string;
    user: string;
    timestamp: string;
  }>;
};

export default function LiveChat({ messages, addNewMessage }: LiveChatProps) {
  function handleNewMessage(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();

    const form = e.currentTarget;
    const formElements = form.elements as typeof form.elements & {
      message: { value: string };
    };

    addNewMessage!(formElements.message.value);
    form.reset();
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
          autoComplete="off"
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
