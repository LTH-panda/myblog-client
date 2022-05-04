import client from "./client";

export const write = async ({ category, title, content }) =>
  await client.post("/write", { category, title, content });
