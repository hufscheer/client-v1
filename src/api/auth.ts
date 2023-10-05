import { PostLoginPayload } from "@/types/auth";
import instance from "./instance";

export const postLogin = async (payload: PostLoginPayload) => {
  return instance.post("/auth/login", payload);
};
