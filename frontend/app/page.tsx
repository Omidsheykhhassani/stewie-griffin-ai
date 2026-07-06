import ChatBox from "@/components/ChatBox/ChatBox";
import Navbar from "@/components/Navbar/Navbar";
import MainContainer from "@/sections/MainContainer/MainContainer";

export default function Home() {
  return (
    <main>
      <MainContainer>
        <Navbar />
        <ChatBox />
      </MainContainer>
    </main>
  );
}
