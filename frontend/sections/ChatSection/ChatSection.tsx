"use client";

import { useState } from "react";
import { useEffect } from "react";

import ChatMessages from "@/components/ChatMessages/ChatMessages";
import ChatBox from "@/components/ChatBox/ChatBox";

import { useChat } from "@ai-sdk/react";
import { DefaultChatTransport } from "ai";

import { authClient } from "@/lib/auth-client";

export default function ChatSection() {
  const [input, setInput] = useState("");

  // Getting every tool we need to send and load chats.
  const { messages, sendMessage, status, setMessages } = useChat({
    transport: new DefaultChatTransport({
      api: "/api/chat",
      credentials: "include",
      prepareSendMessagesRequest({ id, messages }) {
        return {
          body: {
            chatId: id,
            messages,
          },
        };
      },
    }),
  });

  const { data: session } = authClient.useSession();

  // We load our history with this useEffect
  useEffect(() => {
    async function loadHistory() {
      if (!session) {
        setMessages([]);
        return;
      }

      const res = await fetch("/api/chat/history", {
        credentials: "include",
      });

      if (!res.ok) return;

      const messages = await res.json();

      setMessages(messages);
    }

    loadHistory();
  }, [session, setMessages]);

  return (
    <>
      <ChatMessages messages={messages} />
      <ChatBox
        input={input}
        setInput={setInput}
        sendMessage={sendMessage}
        loading={status === "streaming" || status === "submitted"}
      />
    </>
  );
}
