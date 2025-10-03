import { post } from "../utils/httpHelper.js";

export function login(email, password) {
  const res = post("/log_in", JSON.stringify({ email, password }), { tags: { api: "auth", op: "login" }});
  const responseBody = res.json();
  return { token: responseBody?.token || responseBody?.access_token };
}