import Navbar from "@/components/Navbar/Navbar";
import ChatSection from "@/sections/ChatSection/ChatSection";

import MainContainer from "@/sections/MainContainer/MainContainer";

export default function Home() {
  return (
    <main>
      <MainContainer>
        <Navbar />
        <ChatSection />
      </MainContainer>
    </main>
  );
}
