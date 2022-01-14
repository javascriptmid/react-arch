import { AddNewMessageProvider } from "./AddNewMessageProvider";
import LiveChat from "./LiveChat";
import { MessagesProvider } from "./MessagesProvider";
import useAddNewMessageMutation from "./useAddNewMessageMutation";
import useMessagesQuery from "./useMessagesQuery";

export default function LiveChatContainer() {
  const { data, loading } = useMessagesQuery();
  const [addNewMessageMutation] = useAddNewMessageMutation();

  if (loading) {
    return <p>Loading...</p>;
  }

  return (
    <MessagesProvider value={data}>
      <AddNewMessageProvider value={addNewMessageMutation}>
        <LiveChat />
      </AddNewMessageProvider>
    </MessagesProvider>
  );
}
