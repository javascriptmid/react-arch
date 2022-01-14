import { useAddNewMessageValue } from "./AddNewMessageProvider";

export default function LiveChatTextInput() {
  const addNewMessage = useAddNewMessageValue();

  function handleNewMessage(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();

    const form = e.currentTarget;
    const formElements = form.elements as typeof form.elements & {
      message: { value: string };
    };

    addNewMessage(formElements.message.value);
    form.reset();
  }

  return (
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
  );
}
