"use client";

import { useEffect, useRef } from "react";

import type { UIMessage } from "ai";

import Image from "next/image";

import stewieImage from "@/assets/images/stewie-image.png";

type ChatMessagesProps = {
  messages: UIMessage[];
};

export default function ChatMessages({ messages }: ChatMessagesProps) {
  const bottomRef = useRef<HTMLDivElement>(null);

  // The logic to scroll to the bottom of the chat when we open or refresh the page.
  useEffect(() => {
    bottomRef.current?.scrollIntoView({
      behavior: "smooth",
    });
  }, [messages]);

  return (
    <div className="flex flex-col gap-6 px-8 py-6 pb-40 overflow-y-auto">
      {/* Renders every message */}
      {messages.map((message) => (
        <div
          key={message.id}
          className={`${message.role === "user" ? "justify-start" : "justify-end"} flex items-start`}
        >
          <div className="max-w-3xl rounded-xl border border-txtcolor px-5 py-3">
            {message.parts.map((part, index) => {
              // This is mostly to seperate the paragraphs from eachother
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
          {/* Shows the Stewie image beside it's message */}
          {message.role === "assistant" ? (
            <Image
              src={stewieImage}
              alt="stewieImage"
              className="hidden lg:inline-block w-full h-auto max-w-50"
            />
          ) : (
            ""
          )}
        </div>
      ))}
      {/* We use this to scroll to the bottom of the chat when we open or refresh the page. */}
      <div ref={bottomRef} />
    </div>
  );
}
