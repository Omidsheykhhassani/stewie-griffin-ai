"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useRouter } from "next/navigation";

import AuthContent from "../AuthContent/AuthContent";

export default function AuthModal() {
  const router = useRouter();

  return (
    <AnimatePresence>
      <>
        <motion.div
          className="fixed inset-0 bg-black/50"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={() => router.back()}
        />

        <motion.div
          className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[calc(100%-1rem)] max-w-lg bg-bgcolor p-6 rounded-xl z-50"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.9 }}
        >
          <AuthContent />
        </motion.div>
      </>
    </AnimatePresence>
  );
}
