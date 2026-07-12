import { Prisma } from "@prisma/client";
import type { UIMessage } from "ai";

import { prisma } from "./prisma";

function serializeMessages(messages: UIMessage[]): Prisma.InputJsonValue {
  return messages as unknown as Prisma.InputJsonValue;
}

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

export async function loadChat(userId: string) {
  const chat = await prisma.chat.findUnique({
    where: {
      userId,
    },
  });

  return chat?.messages as UIMessage[] | null;
}
