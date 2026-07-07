import { ChevronRight } from "lucide-react";

export default function ChatBox() {
  return (
    <div className="bg-bgcolor w-full max-w-7xl py-2 px-8 fixed bottom-0 flex gap-4">
      <input
        type="text"
        name=""
        id=""
        className="w-full py-4 px-8 border border-txtcolor rounded-full"
        placeholder="Ask anything"
      />
      <button type="submit" className="p-4 border border-txtcolor rounded-full flex justify-center items-center bg-primary text-bgcolor cursor-pointer">
        <ChevronRight strokeWidth={1} />
      </button>
    </div>
  );
}
