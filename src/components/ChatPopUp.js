"use client";
import { useState } from "react";
import axios from "axios";

export default function ChatPopUp() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState("");

  const handleSendMessage = async () => {
    if (!input.trim()) return;

    const newMessages = [...messages, { role: "user", content: input }];
    setMessages(newMessages);
    setInput("");

    try {
      const res = await axios.post("/api/chat", { messages: newMessages });
      setMessages([...newMessages, res.data.choices[0].message]);
    } catch (error) {
      console.error("Error fetching response:", error);
    }
  };

  return (
    <div>
      {/* Floating Chat Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="fixed bottom-6 right-6 bg-blue-600 text-white p-4 rounded-full shadow-lg hover:bg-blue-500"
      >
        💬
      </button>

      {/* Chat Pop-up */}
      {isOpen && (
        <div className="fixed bottom-16 right-6 bg-white p-4 w-80 rounded-lg shadow-lg">
          <div className="flex justify-between items-center border-b pb-2 mb-2">
            <h3 className="font-bold">Chat QnA</h3>
            <button onClick={() => setIsOpen(false)}>❌</button>
          </div>
          <div className="h-64 overflow-y-auto border p-2 rounded">
            {messages.map((msg, index) => (
              <div key={index} className={`p-2 my-1 rounded ${msg.role === "user" ? "bg-blue-200" : "bg-gray-200"}`}>
                <strong>{msg.role === "user" ? "You" : "Gemini AI"}:</strong> {msg.content}
              </div>
            ))}
          </div>
          <div className="mt-4 flex">
            <input
              type="text"
              className="flex-1 p-2 border rounded-l"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Tulis pesan..."
            />
            <button onClick={handleSendMessage} className="bg-blue-500 text-white p-2 rounded-r">
              ➤
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
