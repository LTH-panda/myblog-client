import client from "./client";

export const remove = async ({ path, id }) =>
  await client.delete(`/${path}/${id}`);
