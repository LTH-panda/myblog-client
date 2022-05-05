import client from "./client";

export const getCareers = async () => await client.get("/career");

export const getCareer = async ({ id }) => await client.get(`/career/${id}`);

export const write = async ({ title, desc, during }) =>
  await client.post("/career", { title, desc, during });

export const remove = async ({ id }) => await client.delete(`/career/${id}`);

export const update = async ({ id, title, desc, during }) =>
  await client.put(`/career/${id}`, { title, desc, during });
