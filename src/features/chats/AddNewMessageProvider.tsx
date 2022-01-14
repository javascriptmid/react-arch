import createContextValue from "../createContextValue";

type AddNewMessageValue = (text: string) => void;

export const [AddNewMessageProvider, useAddNewMessageValue] =
  createContextValue<AddNewMessageValue>("AddNewMessageProvider");
