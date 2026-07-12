"use client";

import type { UIMessage } from "ai";

import { useEffect, useRef } from "react";

type ChatMessagesProps = {
  messages: UIMessage[];
};

export default function ChatMessages({ messages }: ChatMessagesProps) {
  const bottomRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    bottomRef.current?.scrollIntoView({
      behavior: "smooth",
    });
  }, [messages]);

  return (
    <div className="flex flex-col gap-6 px-8 py-6 pb-40 overflow-y-auto">
      {messages.map((message) => (
        <div
          key={message.id}
          className={
            message.role === "user" ? "flex justify-end" : "flex justify-start"
          }
        >
          <div className="max-w-3xl rounded-xl border border-txtcolor px-5 py-3">
            {message.parts.map((part, index) => {
              if (part.type === "text") {
                return (
                  <p key={index} className="whitespace-pre-wrap">
                    {part.text}
                  </p>
                );
              }

              return null;
            })}
          </div>
        </div>
      ))}
      <div ref={bottomRef} />
    </div>
  );
}
