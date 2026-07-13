import { useState } from "react";

import { authClient } from "@/lib/auth-client";

import { useRouter } from "next/navigation";
import Image from "next/image";
import stewieGreetingImage from "@/assets/images/stewie-greeting.png";

import { useAppDispatch } from "@/redux/hooks";
import { setView } from "@/redux/features/authSlice";

import TextInput from "@/components/TextInput/TextInput";
import Button from "@/components/Button/Button";

import { X } from "lucide-react";

export default function SignupForm() {
  const router = useRouter();
  const dispatch = useAppDispatch();

  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  async function handleSignup(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();

    setLoading(true);
    setError("");

    const { data, error } = await authClient.signUp.email({
      email,
      password,
      name: username,
      username,
    });

    if (error) {
      setError(error.message ?? "Something went wrong");
      setLoading(false);
      return;
    }

    console.log(data);

    setLoading(false);

    router.push("/");
  }

  return (
    <form onSubmit={handleSignup} className="relative flex flex-col gap-8">
      <button
        className="absolute right-0 cursor-pointer text-txtcolor hover:text-primary transition-colors duration-250"
        onClick={(e) => {
          e.preventDefault();
          router.push("/");
        }}
      >
        <X strokeWidth={1} />
      </button>
      <div className="flex flex-col justify-center items-center gap-1">
        <h2 className="font-bold text-2xl">Welcome!</h2>
        <Image
          src={stewieGreetingImage}
          alt="stewie greeting image"
          className="w-full h-auto max-w-75"
        />
      </div>
      <div className="flex flex-col gap-4 items-center">
        <TextInput
          type="text"
          label="Username"
          name="username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />

        <TextInput
          type="email"
          label="Email"
          name="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        <TextInput
          type="password"
          label="Password"
          name="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        {error && <p className="text-red-500 text-sm">{error}</p>}
        <button
          className="py-2 px-4 rounded-lg bg-primary cursor-pointer text-whiteshade! transition-colors duration-250 hover:bg-amber-600"
          type="submit"
          disabled={loading}
        >
          {loading ? "Creating account..." : "Signup"}
        </button>
        <Button
          onClick={(e) => {
            e.preventDefault();
            dispatch(setView("login"));
          }}
        >
          Already have an account?
        </Button>
      </div>
    </form>
  );
}
