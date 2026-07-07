"use client";

import { useAppSelector } from "@/redux/hooks";

type ThemeWrapperProps = {
  children: React.ReactNode;
}

export default function ThemeWrapper({
  children,
}: ThemeWrapperProps) {
  const mode = useAppSelector((state) => state.theme.mode);

  return <body className={`min-h-full flex flex-col ${mode}`}>{children}</body>;
}
