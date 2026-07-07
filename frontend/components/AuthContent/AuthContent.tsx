"use client";

import { useAppSelector } from "@/redux/hooks";

import LoginForm from "../AuthModal/LoginForm/LoginForm";
import SignupForm from "../AuthModal/SignupForm/SignupForm";

export default function AuthContent() {
  const view = useAppSelector((state) => state.auth.view);

  return view === "login" ? <LoginForm /> : <SignupForm />;
}
