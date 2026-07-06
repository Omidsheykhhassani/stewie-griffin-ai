type ButtonProps = {
  children: string;
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
};

export default function Button({ children, onClick }: ButtonProps) {
  return (
    <button className="transition-colors duration-250 text-txtcolor hover:text-primary cursor-pointer ease-out" onClick={onClick}>
      {children} 
    </button>
  );
}
