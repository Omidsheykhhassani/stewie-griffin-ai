import { NextResponse } from "next/server";

import { loadChat } from "@/lib/chat";
import { getSession } from "@/lib/getSession";

export async function GET() {
  const session = await getSession();

  if (!session) {
    return NextResponse.json([]);
  }

  const messages = await loadChat(session.user.id);

  return NextResponse.json(messages ?? []);
}
