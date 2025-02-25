import { NextResponse } from "next/server";
import axios from "axios";

export async function POST(req) {
  try {
    const { messages } = await req.json();
    const apiKey = process.env.GEMINI_API_KEY;

    if (!apiKey) {
      return NextResponse.json({ error: "Missing API Key" }, { status: 401 });
    }

    // Panggil API Google Gemini
    const res = await axios.post(
      `https://generativelanguage.googleapis.com/v1beta/models/gemini-pro:generateContent?key=${apiKey}`,
      {
        contents: [{ role: "user", parts: [{ text: messages[messages.length - 1].content }] }],
      },
      {
        headers: { "Content-Type": "application/json" },
      }
    );

    const reply = res.data?.candidates?.[0]?.content?.parts?.[0]?.text || "Maaf, saya tidak bisa menjawab saat ini.";

    return NextResponse.json({ choices: [{ message: { role: "assistant", content: reply } }] });
  } catch (error) {
    console.error("Error fetching response:", error);
    return NextResponse.json({ error: "API Error", details: error.message }, { status: 500 });
  }
}
