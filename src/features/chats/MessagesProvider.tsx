import createContextValue from "../createContextValue";

export type MessageValue = {
  id: string;
  text: string;
  user: string;
  timestamp: string;
};

export const [MessagesProvider, useMessagesValue] =
  createContextValue<ReadonlyArray<MessageValue>>("MessagesProvider");
