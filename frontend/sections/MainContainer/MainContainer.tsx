type MainContainerProps = {
  children: React.ReactNode;
};

export default function MainContainer({ children }: MainContainerProps) {
  return (
    <div className="bg-primary w-full max-w-500 flex justify-center">
      <div className="relative bg-bgcolor w-full max-w-7xl min-h-screen">{children}</div>
    </div>
  );
}
