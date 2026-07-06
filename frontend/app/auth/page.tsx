"use client";

import { useEffect } from "react";
import { useAppDispatch } from "@/redux/hooks";
import { openAuth } from "@/redux/features/authSlice";

export default function AuthPage() {
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(openAuth("login"));
  }, [dispatch]);

  return null;
}
