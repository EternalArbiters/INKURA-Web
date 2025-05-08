"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { FaPaperPlane } from "react-icons/fa";
import Image from "next/image";

export default function ChatElyaPage() {
  const [messages, setMessages] = useState([
    { from: "elya", text: "Halo~ Aku di sini untuk mendengarkanmu 💕" },
  ]);
  const [input, setInput] = useState("");
  const [typing, setTyping] = useState(false);

  const handleSend = async () => {
    if (!input.trim()) return;
    setMessages([...messages, { from: "user", text: input }]);
    setInput("");
    setTyping(true);
  
    try {
      const res = await fetch("http://localhost:8000/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ message: input }),
      });
  
      const data = await res.json();
      setMessages((prev) => [...prev, { from: "elya", text: data.reply }]);
    } catch (err) {
      setMessages((prev) => [
        ...prev,
        {
          from: "elya",
          text: "Ups~ Sepertinya Elya sedang kesulitan menjawab... (server tidak bisa dihubungi)",
        },
      ]);
    }
  
    setTyping(false);
  };   

  return (
    <main className="min-h-screen flex flex-col bg-gradient-to-br from-pink-100 via-purple-100 to-blue-100 dark:from-pink-900 dark:via-purple-900 dark:to-blue-900 text-gray-900 dark:text-white">
      {/* Header */}
      <div className="px-6 py-4 bg-gradient-to-r from-pink-500 to-purple-600 text-white shadow-md flex items-center justify-between fixed top-0 left-0 right-0 z-30">
        <h1 className="text-lg font-bold">Chat Elya~♡</h1>
        <span className="text-xs bg-white/20 px-2 py-1 rounded-full">Online</span>
      </div>

      {/* Chat Area */}
      <div className="flex-1 overflow-y-auto px-4 pb-32 pt-24 space-y-4">
        {messages.map((msg, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.05 }}
            className={`flex ${msg.from === "elya" ? "items-start" : "justify-end"}`}
          >
            {msg.from === "elya" && (
              <Image
                src="/images/elie-avatar.jpg"
                alt="Elya"
                width={32}
                height={32}
                className="rounded-full border border-white/40 mr-2 mt-1"
              />
            )}
            <div
              className={`max-w-xs px-4 py-2 rounded-xl shadow ${
                msg.from === "elya"
                  ? "bg-white/30 dark:bg-white/10 text-left backdrop-blur-sm"
                  : "bg-pink-500 text-white"
              }`}
            >
              {msg.text}
            </div>
          </motion.div>
        ))}

        {typing && (
          <motion.div
            className="flex items-center space-x-2 text-sm text-gray-600 dark:text-gray-400"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
          >
            <Image
              src="/images/elie-avatar.jpg"
              alt="typing"
              width={24}
              height={24}
              className="rounded-full border border-white/30"
            />
            <span>Elya sedang mengetik...</span>
          </motion.div>
        )}
      </div>

      {/* Input Area */}
      <div className="fixed bottom-0 left-0 right-0 z-30 px-4 py-3 bg-white/70 dark:bg-gray-900/70 backdrop-blur-md border-t border-white/20">
        <div className="flex items-center gap-2">
          <input
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={(e) => e.key === "Enter" && handleSend()}
            placeholder="Tulis sesuatu untuk Elya♡..."
            className="flex-1 px-4 py-2 rounded-full text-sm bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-700 focus:outline-none"
          />
          <button
            onClick={handleSend}
            className="p-3 rounded-full bg-gradient-to-r from-pink-500 to-purple-600 text-white hover:scale-110 transition shadow"
          >
            <FaPaperPlane size={14} />
          </button>
        </div>
      </div>
    </main>
  );
}
