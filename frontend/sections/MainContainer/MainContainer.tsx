import Image from "next/image";

import appBackground from "@/assets/images/Stewies-bedroom.png"

type MainContainerProps = {
  children: React.ReactNode;
};

export default function MainContainer({ children }: MainContainerProps) {
  return (
    <div className="relative bg-primary w-full max-w-500 flex justify-center">
      <div className="fixed z-10">
        <Image
          src={appBackground}
          alt="Stewie bedroom"
          className="w-full h-auto"
        />
      </div>
      <div className="relative bg-bgcolor w-full max-w-7xl min-h-screen z-20">
        {children}
      </div>
    </div>
  );
}
