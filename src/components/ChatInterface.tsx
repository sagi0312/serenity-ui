import { useEffect, useRef, useState } from "react";
import styles from "./ChatInterface.module.scss";
import clsx from "clsx";
import koans from "../data/koans.json";

const randomKoan = koans[Math.floor(Math.random() * koans.length)].quote;
enum sender {
  USER = "user",
  BOT = "bot",
}
type Message = {
  sender: sender;
  text: string;
};

interface ChatInterfaceProps {
  onBackHome: () => void;
}

export default function ChatInterface({ onBackHome }: ChatInterfaceProps) {
  const [messages, setMessages] = useState<Message[]>([
    {
      sender: sender.BOT,
      text: "Welcome. Breathe in peace, breathe out tension.",
    },
  ]);
  const [input, setInput] = useState<string>("");
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const handleSend = async () => {
    if (!input.trim()) return;

    const userMessage: Message = { sender: sender.USER, text: input };
    setMessages((prev) => [...prev, userMessage]);
    setInput("");
    setIsLoading(true);

    try {
      const response = await fetch("/api/seek", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        credentials: "include",
        body: JSON.stringify({ message: input }),
      });

      const data = await response.json();

      if (data.reply) {
        setMessages((prev) => [
          ...prev,
          { sender: sender.BOT, text: data.reply },
        ]);
      } else {
        setMessages((prev) => [
          ...prev,
          { sender: sender.BOT, text: "Sorry, I couldn’t understand that." },
        ]);
      }
    } catch (error) {
      console.error("Error calling backend:", error);
      setMessages((prev) => [
        ...prev,
        { sender: sender.BOT, text: "Something went wrong. Please try again." },
      ]);
    } finally {
      setIsLoading(false);
    }
  };
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);
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
          {isLoading && (
            <div className={clsx(styles.message, styles.bot)}>Typing...</div>
          )}
          <div ref={messagesEndRef} />
        </div>
        <div className={styles.inputBar}>
          <input
            type="text"
            placeholder="What weighs on your heart today?"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={(e) => e.key === "Enter" && handleSend()}
            disabled={isLoading}
          />
          <button onClick={handleSend} disabled={isLoading}>
            Send
          </button>
        </div>
      </main>
    </div>
  );
}
