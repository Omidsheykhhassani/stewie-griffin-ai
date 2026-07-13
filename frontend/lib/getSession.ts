import { headers } from "next/headers";
import { auth } from "@/lib/auth";

// This function allows us to check if we're logged in
export async function getSession() {
  return await auth.api.getSession({
    headers: await headers(),
  });
}
