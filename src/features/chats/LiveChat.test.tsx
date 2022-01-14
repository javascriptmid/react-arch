import { render, screen } from "@testing-library/react";

import LiveChat from "./LiveChat";
import { MessagesProvider } from "./MessagesProvider";

test("list messages in chat", () => {
  // arrange
  const messages = [
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
  ];

  // act
  render(
    <MessagesProvider value={messages}>
      <LiveChat messages={messages} />
    </MessagesProvider>
  );

  // assert
  messages.forEach((message) => {
    expect(screen.getByText(message.text)).toBeInTheDocument();
  });
});
