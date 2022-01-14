import { rest } from "msw";

function createMessage() {
  return {
    id: "1",
    text: "Hello, how are you?",
    user: "John",
    timestamp: "2020-01-01T00:00:00.000Z",
  };
}

export const handlers = [
  rest.post("/messages", (req, res, ctx) => {
    const { message } = req.body;
    const createdMessage = createMessage(message);
    return res(ctx.status(201), ctx.json(createdMessage));
  }),
  rest.get("/messages", (req, res, ctx) => {
    const data = sessionStorage.getItem("messages");
    const messages = data != null ? JSON.parse(data) : [];
    return res(ctx.status(200), ctx.json(messages));
  }),
];
