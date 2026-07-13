import { streamText, convertToModelMessages, type UIMessage } from "ai";
import { openrouter } from "@openrouter/ai-sdk-provider";

import { getSession } from "@/lib/getSession";
import { saveChat } from "@/lib/chat";

import { STEWIE_PROMPT } from "@/lib/stewie";

export const maxDuration = 30;

type messageObj = {
  chatId: string;
  messages: UIMessage[];
};

export async function POST(req: Request) {
  // Populates the message object with recieved object
  const {
    messages,
  }: messageObj = await req.json();

  const session = await getSession();

  // Get the AI answer with the custom prompt
  const result = streamText({
    model: openrouter("poolside/laguna-m.1:free"),
    system: STEWIE_PROMPT,
    messages: await convertToModelMessages(messages),
  });

  // Streams the message
  // IGNORE DEPRICATION
  return result.toUIMessageStreamResponse({
    originalMessages: messages,

    async onFinish({ messages }) {
      if (!session) return;

      await saveChat(session.user.id, messages);
    },
  });
}
