import { streamText, convertToModelMessages, type UIMessage } from "ai";
import { openrouter } from "@openrouter/ai-sdk-provider";

import { getSession } from "@/lib/getSession";
import { saveChat } from "@/lib/chat";

import { STEWIE_PROMPT } from "@/lib/stewie";

export const maxDuration = 30;

export async function POST(req: Request) {
  const {
    messages,
  }: {
    chatId: string;
    messages: UIMessage[];
  } = await req.json();

  const session = await getSession();

  const result = streamText({
    model: openrouter("poolside/laguna-m.1:free"),
    system: STEWIE_PROMPT,
    messages: await convertToModelMessages(messages),
  });

  return result.toUIMessageStreamResponse({
    originalMessages: messages,

    async onFinish({ messages }) {
      if (!session) return;

      await saveChat(session.user.id, messages);
    },
  });
}
