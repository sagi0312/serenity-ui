import { useState } from "react";
import ChatInterface from "../components/ChatInterface";
import { HeroSection } from "../components/HeroSection";

export const App = () => {
  const [started, setStarted] = useState(false);

  return (
    <>
      {started ? (
        <ChatInterface onBackHome={() => setStarted(false)} />
      ) : (
        <HeroSection onStart={() => setStarted(true)} />
      )}
    </>
  );
};
