"use client"

import { MoonStar } from "lucide-react";

import Button from "../Button/Button";

import { useRouter } from "next/navigation";

import { useAppDispatch } from "@/redux/hooks";
import { openAuth } from "@/redux/features/authSlice";

export default function Navbar() {
  const router = useRouter();
  const dispatch = useAppDispatch();

  return (
    <nav className="w-full max-w-7xl bg-bgcolor py-2 px-8 flex justify-between items-center">
      <div className="flex gap-4">
        <Button
          onClick={() => {
            dispatch(openAuth("signup"));
            router.push("/auth");
          }}
        >
          Signup
        </Button>
        <Button
          onClick={() => {
            dispatch(openAuth("login"));
            router.push("/auth");
          }}
        >
          Login
        </Button>
      </div>
      <button className="p-4 border border-txtcolor inline-block rounded-full cursor-pointer">
        <MoonStar strokeWidth={1} />
      </button>
    </nav>
  );
}
