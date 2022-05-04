import client from "./client";

export const getCareers = async () => await client.get("/career");

export const write = async ({ title, desc, during }) =>
  await client.post("/career", { title, desc, during });
