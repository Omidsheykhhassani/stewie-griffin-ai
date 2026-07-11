"use client"

import { MoonStar, Sun } from "lucide-react";

import Button from "../Button/Button";

import { useRouter } from "next/navigation";

import { useAppDispatch, useAppSelector } from "@/redux/hooks";
import { setView } from "@/redux/features/authSlice";
import { setMode } from "@/redux/features/ThemeSlice";

import { authClient } from "@/lib/auth-client";

export default function Navbar() {
  const router = useRouter();
  const dispatch = useAppDispatch();
  const mode = useAppSelector((state) => state.theme.mode)

  const { data: session, isPending } = authClient.useSession();

  return (
    <nav className="w-full max-w-7xl bg-bgcolor py-2 px-8 flex justify-between items-center">
      <div className="flex gap-4 items-center">
        {isPending ? (
          <span>Loading...</span>
        ) : session ? (
          <>
            <span>Logged in as: {session.user.name}</span>

            <Button
              onClick={async () => {
                await authClient.signOut();
              }}
            >
              Logout
            </Button>
          </>
        ) : (
          <>
            <Button
              onClick={() => {
                dispatch(setView("signup"));
                router.push("/auth");
              }}
            >
              Signup
            </Button>

            <Button
              onClick={() => {
                dispatch(setView("login"));
                router.push("/auth");
              }}
            >
              Login
            </Button>
          </>
        )}
      </div>
      <button
        className="p-4 border border-txtcolor inline-block rounded-full cursor-pointer"
        onClick={() => {
          const newMode = mode == "dark" ? "light" : "dark";
          dispatch(setMode(newMode));
        }}
      >
        {mode == "light" ? (
          <MoonStar strokeWidth={1} />
        ) : (
          <Sun strokeWidth={1} />
        )}
      </button>
    </nav>
  );
}
