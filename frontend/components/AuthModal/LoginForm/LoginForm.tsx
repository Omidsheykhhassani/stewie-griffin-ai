import Button from "@/components/Button/Button";
import TextInput from "@/components/TextInput/TextInput";
import { setView } from "@/redux/features/authSlice";
import { useAppDispatch } from "@/redux/hooks";

import { X } from "lucide-react";
import { useRouter } from "next/navigation";

export default function LoginForm() {
  const router = useRouter();
  const dispatch = useAppDispatch();

  return (
    <form action="" className="relative flex flex-col gap-8">
      <button
        className="absolute right-0 cursor-pointer text-txtcolor hover:text-primary transition-colors duration-250"
        onClick={(e) => {
          e.preventDefault();
          router.push("/");
        }}
      >
        <X strokeWidth={1} />
      </button>
      <div className="flex flex-col justify-center items-center gap-4">
        <h2 className="font-bold text-2xl">Welcome back!</h2>
      </div>
      <div className="flex flex-col gap-4 items-center">
        <TextInput type="email" label="Email" />
        <TextInput type="password" label="Password" />
        <button className="py-2 px-4 rounded-lg bg-primary cursor-pointer text-whiteshade! transition-colors duration-250 hover:bg-amber-600">
          Login
        </button>
        <Button onClick={(e) => {
          e.preventDefault();
          dispatch(setView("signup"))
        }}>Don&apos;t have an account?</Button>
      </div>
    </form>
  );
}
