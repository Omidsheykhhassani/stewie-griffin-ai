import { Prisma } from "@prisma/client";
import type { UIMessage } from "ai";

import { prisma } from "./prisma";

function serializeMessages(messages: UIMessage[]): Prisma.InputJsonValue {
  return messages as unknown as Prisma.InputJsonValue;
}

// This functions allows us to save our chats if we're logged in.
export async function saveChat(userId: string, messages: UIMessage[]) {
  await prisma.chat.upsert({
    where: {
      userId,
    },

    update: {
      messages: serializeMessages(messages),
    },

    create: {
      userId,
      messages: serializeMessages(messages),
    },
  });
}

// This one loads our chats when we're logged in
export async function loadChat(userId: string) {
  const chat = await prisma.chat.findUnique({
    where: {
      userId,
    },
  });

  return chat?.messages as UIMessage[] | null;
}
