import { useState } from "react";
import styles from "./ChatInterface.module.scss";
import clsx from "clsx";
import koans from "../data/koans.json";

const randomKoan = koans[Math.floor(Math.random() * koans.length)].quote;

type Message = {
  sender: "user" | "bot";
  text: string;
};
interface ChatInterfaceProps {
  onBackHome: () => void;
}
export default function ChatInterface({ onBackHome }: ChatInterfaceProps) {
  const [messages, setMessages] = useState<Message[]>([
    { sender: "bot", text: "Welcome. Breathe in peace, breathe out tension." },
  ]);
  const [input, setInput] = useState<string>("");

  const handleSend = () => {
    if (!input.trim()) return;
    setMessages([...messages, { sender: "user", text: input }]);
    setInput("");
  };

  return (
    <div className={styles.chatInterface}>
      <aside className={styles.sidebar}>
        <div className={styles.koan}>{randomKoan}</div>
        <div className={styles.breathing}>
          <div className={clsx(styles.circle, "breathe-animation")}></div>
          <br />
          <p>4-7-8 Breathing</p>
        </div>
        <button className={styles.backButton} onClick={onBackHome}>
          ⬅ Back to Home
        </button>
      </aside>

      <main className={styles.chatWindow}>
        <div className={styles.messages}>
          {messages.map((msg, i) => (
            <div key={i} className={clsx(styles.message, styles[msg.sender])}>
              {msg.text}
            </div>
          ))}
        </div>
        <div className={styles.inputBar}>
          <input
            type="text"
            placeholder="What weighs on your heart today?"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={(e) => e.key === "Enter" && handleSend()}
          />
          <button onClick={handleSend}>☸️</button>
        </div>
      </main>
    </div>
  );
}
