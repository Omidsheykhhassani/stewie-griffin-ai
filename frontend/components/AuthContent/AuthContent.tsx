"use client";

import { useAppSelector } from "@/redux/hooks";

import LoginForm from "../../sections/LoginForm/LoginForm";
import SignupForm from "../../sections/SignupForm/SignupForm";

export default function AuthContent() {
  const view = useAppSelector((state) => state.auth.view);

  return view === "login" ? <LoginForm /> : <SignupForm />;
}
