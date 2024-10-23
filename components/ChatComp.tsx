"use client";
import { useState, FormEvent } from "react";
import axios from "axios";

interface Message {
  role: "user" | "assistant";
  content: string;
}

const ChatComponent: React.FC = () => {
  const [messages, setMessages] = useState<Message[]>([]);
  const [input, setInput] = useState("");

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();

    // Add user message to the chat
    const userMessage: Message = { role: "user", content: input };
    setMessages((prevMessages) => [...prevMessages, userMessage]);

    // Clear input
    setInput("");

    try {
      const response = await axios.post("/api/chat", {
        messages: [...messages, userMessage],
      });

      const aiMessage: Message = {
        role: "assistant",
        content: response.data.content, // Adjust based on your API response structure
      };
      setMessages((prevMessages) => [...prevMessages, aiMessage]);
    } catch (error) {
      console.error("Error fetching the AI response:", error);
    }
  };

  return (
    <div className="flex flex-col h-screen w-screen p-4 box-border">
      <div className="flex-grow overflow-y-auto p-4 flex flex-col gap-3">
        {messages.map((msg, index) => (
          <div
            key={index}
            className={`max-w-[70%] p-3 rounded-lg ${
              msg.role === "user"
                ? "bg-blue-500 text-white self-end rounded-br-none"
                : "bg-gray-300 text-black self-start rounded-bl-none"
            }`}
          >
            <strong>{msg.role === "user" ? "You" : "Assistant"}:</strong>{" "}
            {msg.content}
          </div>
        ))}
      </div>
      <form
        onSubmit={handleSubmit}
        className="flex p-2 border-t border-gray-300 bg-white"
      >
        <input
          className="flex-grow p-2 border border-gray-300 rounded mr-2 text-black"
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Type your message..."
          required
        />
        <button
          type="submit"
          className="p-2 bg-blue-500 text-white rounded hover:bg-blue-600"
        >
          Send
        </button>
      </form>
    </div>
  );
};

export default ChatComponent;
