import { rest } from "msw";

function createMessage(text) {
  return {
    text,
    id: Date.now().toString(),
    user: "John",
    timestamp: "2020-01-01T00:00:00.000Z",
  };
}

function getMessagesData() {
  const data = sessionStorage.getItem("messages");
  const messages = data ? JSON.parse(data) : [];
  return messages;
}

export const handlers = [
  rest.post("/messages", (req, res, ctx) => {
    const { text } = JSON.parse(req.body);
    const createdMessage = createMessage(text);
    const messages = getMessagesData();
    sessionStorage.setItem(
      "messages",
      JSON.stringify([...messages, createdMessage])
    );
    return res(ctx.status(201), ctx.json(createdMessage));
  }),
  rest.get("/messages", (req, res, ctx) => {
    const messages = getMessagesData();
    return res(ctx.status(200), ctx.json(messages));
  }),
];
