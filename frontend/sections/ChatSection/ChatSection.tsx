"use client";

import { useState } from "react";
import { useEffect } from "react";

import ChatMessages from "@/components/ChatMessages/ChatMessages";
import ChatBox from "@/components/ChatBox/ChatBox";

import { useChat } from "@ai-sdk/react";
import { DefaultChatTransport } from "ai";

export default function ChatSection() {
  const [input, setInput] = useState("");

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

  useEffect(() => {
    async function loadHistory() {
      const res = await fetch("/api/chat/history", {
        credentials: "include",
      });

      if (!res.ok) return;

      const messages = await res.json();

      setMessages(messages);
    }

    loadHistory();
  }, [setMessages]);
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
