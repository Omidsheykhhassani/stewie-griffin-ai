import type { ChangeEvent } from "react";

type TextInputProps = {
  type: "email" | "password" | "text";
  label: string;
  value: string;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
  name?: string;
  placeholder?: string;
};

export default function TextInput({
  type,
  label,
  value,
  onChange,
  name,
  placeholder,
}: TextInputProps) {
  return (
    <label htmlFor={name ?? label} className="flex flex-col gap-1 w-full">
      <div className="flex gap-2 items-center ml-2">
        <span>{label}</span>
      </div>

      <input
        type={type}
        id={name ?? label}
        name={name}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        className="w-full rounded-lg py-3 px-6 border border-txtcolor"
      />
    </label>
  );
}
