import { auth } from "@/lib/auth";
import { toNextJsHandler } from "better-auth/next-js";

// This sets up endpoints for our authentication API
export const { GET, POST } = toNextJsHandler(auth);
