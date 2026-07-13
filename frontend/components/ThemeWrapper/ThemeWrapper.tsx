"use client";

import { useAppSelector } from "@/redux/hooks";

type ThemeWrapperProps = {
  children: React.ReactNode;
}

export default function ThemeWrapper({
  children,
}: ThemeWrapperProps) {
  const mode = useAppSelector((state) => state.theme.mode);

  // Alternative body tag for Dark/Light mode handling.
  return <body className={`min-h-full flex flex-col ${mode}`}>{children}</body>;
}
