import createContextValue from "../createContextValue";

type MessagesValue = {
  id: string;
  text: string;
  user: string;
  timestamp: string;
};

export const [MessagesProvider, useMessagesValue] =
  createContextValue<ReadonlyArray<MessagesValue>>("MessagesProvider");
