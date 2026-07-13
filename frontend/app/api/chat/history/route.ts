import { NextResponse } from "next/server";

import { loadChat } from "@/lib/chat";
import { getSession } from "@/lib/getSession";

export async function GET() {
  // Check if we're logged in
  const session = await getSession();

  // If not logged in, we'll show no messages
  if (!session) {
    return NextResponse.json([]);
  }

  // Otherwise, show the preveous messages.
  const messages = await loadChat(session.user.id);

  return NextResponse.json(messages ?? []);
}
