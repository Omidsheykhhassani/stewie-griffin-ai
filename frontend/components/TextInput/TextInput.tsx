type TextInputProps = {
  type: "email" | "password" | "text";
  label: string;
};

export default function TextInput({ type, label }: TextInputProps) {
  return (
    <label htmlFor={label} className="flex flex-col gap-1 w-full">
      <div className="flex gap-2 items-center ml-2">
        <span>{label}</span>
      </div>
      <input type={type} id={label} className="w-full rounded-lg py-3 px-6 border border-txtcolor"/>
    </label>
  );
}
