"use client";

import { useAppSelector } from "@/redux/hooks";

import LoginForm from "../../sections/LoginForm/LoginForm";
import SignupForm from "../../sections/SignupForm/SignupForm";

export default function AuthContent() {
  const view = useAppSelector((state) => state.auth.view);

  // Just checks the auth context to see which form needs to be loaded.
  return view === "login" ? <LoginForm /> : <SignupForm />;
}
