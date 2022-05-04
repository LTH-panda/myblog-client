import client from "./client";

export const login = async ({ username, password }) =>
  await client.post("/admin/login", { username, password });

export const logout = async () => await client.post("/admin/logout");

export const check = async () => await client.get("/admin/check");
