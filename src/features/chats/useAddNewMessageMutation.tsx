import { useMutation, useQueryClient } from "react-query";
import { MessageValue } from "./MessagesProvider";
import { MESSAGES_QUERY_KEY } from "./useMessagesQuery";

type AddNewMessageMutationInput = {
  text: string;
};

export default function useAddNewMessageMutation() {
  const queryClient = useQueryClient();

  const {
    mutate,
    isLoading: loading,
    error,
  } = useMutation<MessageValue, Error, AddNewMessageMutationInput>(
    async (args) => {
      const res = await fetch("/messages", {
        method: "POST",
        body: JSON.stringify(args),
      });

      const data = await res.json();
      return data;
    },
    {
      onMutate: async (args) => {
        // Cancel any outgoing refetches (so they don't overwrite our optimistic update)
        await queryClient.cancelQueries(MESSAGES_QUERY_KEY);

        // Snapshot the previous value
        const previousMessages =
          queryClient.getQueryData<ReadonlyArray<MessageValue>>(
            MESSAGES_QUERY_KEY
          );

        // Optimistically update to the new value
        queryClient.setQueryData<ReadonlyArray<MessageValue>>(
          MESSAGES_QUERY_KEY,
          (prevMessages) => {
            const optimisticMessage = {
              id: Date.now().toString(),
              text: args.text,
              user: "John",
              timestamp: new Date().toISOString(),
            };

            return prevMessages != null
              ? [...prevMessages, optimisticMessage]
              : [optimisticMessage];
          }
        );

        // Return a context object with the snapshotted value
        return { previousMessages };
      },
      onError: (err, args, context) => {
        const { previousMessages } = context as {
          previousMessages: ReadonlyArray<MessageValue>;
        };
        queryClient.setQueryData(MESSAGES_QUERY_KEY, previousMessages);
      },
      // Always refetch after error or success:
      onSettled: () => {
        queryClient.invalidateQueries(MESSAGES_QUERY_KEY);
      },
      onSuccess: (data) => {
        const previousMessages =
          queryClient.getQueryData<ReadonlyArray<MessageValue>>(
            MESSAGES_QUERY_KEY
          );

        queryClient.setQueryData(MESSAGES_QUERY_KEY, [
          ...(previousMessages ?? []),
          data,
        ]);
      },
    }
  );

  function addNewMessageMutation(message: string) {
    mutate({ text: message });
  }

  return [
    addNewMessageMutation,
    {
      loading,
      error,
    },
  ] as const;
}
