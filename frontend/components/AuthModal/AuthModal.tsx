"use client";

import { useAppSelector, useAppDispatch } from "@/redux/hooks";
import { closeAuth } from "@/redux/features/authSlice";

import { motion, AnimatePresence } from "framer-motion";

import SignupForm from "./SignupForm/SignupForm";
import LoginForm from "./LoginForm/LoginForm";

export default function AuthModal() {
  const { isOpen, view } = useAppSelector((state) => state.auth);
  const dispatch = useAppDispatch();

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* BACKDROP */}
          <motion.div
            className="fixed inset-0 bg-black/50"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => dispatch(closeAuth())}
          />

          {/* MODAL */}
          <motion.div
            className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-bgcolor p-6 rounded-xl z-50"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.9 }}
          >
            {view === "login" ? <LoginForm /> : <SignupForm />}
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}