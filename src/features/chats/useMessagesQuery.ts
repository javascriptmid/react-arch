import { useQuery } from "react-query";
import { MessageValue } from "./MessagesProvider";

export const MESSAGES_QUERY_KEY = "messages";

export default function useMessagesQuery() {
  const {
    data,
    isLoading: loading,
    error,
  } = useQuery<ReadonlyArray<MessageValue>, Error>(
    MESSAGES_QUERY_KEY,
    async () => {
      const res = await fetch("/messages");
      const data = await res.json();
      return data;
    }
  );

  return { data, loading, error };
}
