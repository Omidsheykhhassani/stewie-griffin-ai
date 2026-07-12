"use client";

import { ChevronRight, LoaderCircle } from "lucide-react";
import type { Dispatch, SetStateAction } from "react";

type ChatBoxProps = {
  input: string;
  setInput: Dispatch<SetStateAction<string>>;
  sendMessage: (message: { text: string }) => Promise<void>;
  loading: boolean;
};

export default function ChatBox({
  input,
  setInput,
  sendMessage,
  loading,
}: ChatBoxProps) {
  async function handleSubmit() {
    if (!input.trim() || loading) return;

    const text = input;

    setInput("");

    await sendMessage({
      text,
    });
  }

  return (
    <div className="bg-bgcolor w-full max-w-7xl py-2 px-8 fixed bottom-0 flex gap-4">
      <input
        className="w-full py-4 px-8 border border-txtcolor rounded-full"
        placeholder="Ask anything..."
        value={input}
        onChange={(e) => setInput(e.target.value)}
        onKeyDown={(e) => {
          if (e.key === "Enter") {
            e.preventDefault();
            handleSubmit();
          }
        }}
      />

      <button
        type="button"
        disabled={loading}
        onClick={handleSubmit}
        className="p-4 border border-txtcolor rounded-full flex justify-center items-center bg-primary text-bgcolor cursor-pointer disabled:opacity-50"
      >
        {loading ? (
          <LoaderCircle className="animate-spin" strokeWidth={1} />
        ) : (
          <ChevronRight strokeWidth={1} />
        )}
      </button>
    </div>
  );
}
