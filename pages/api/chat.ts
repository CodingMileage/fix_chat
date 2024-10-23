// pages/api/chat.ts

import { NextApiRequest, NextApiResponse } from "next";
import { OpenAI } from "openai";

// Initialize OpenAI with API Key, ensure it is defined
const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY || "",
});

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  // Validate the OpenAI API key
  if (!process.env.OPENAI_API_KEY) {
    return res.status(500).json({ error: "OpenAI API key is not set" });
  }

  if (req.method === "POST") {
    const { messages } = req.body;

    if (!messages || !Array.isArray(messages)) {
      return res.status(400).json({ error: "Invalid messages format" });
    }

    // Prepend system message to guide the AI's role
    const systemMessage = {
      role: "system",
      content:
        "You are an IT assistant who knows how to solve all technical issues. Please provide solutions step by step in a clear and concise manner, listing each step in order using bullet points or numbers, and ensure each step is on a new line.",
    };
    
    

    // Combine system message with user messages
    const completeMessages = [systemMessage, ...messages];

    console.log("Complete Messages:", completeMessages); // Log for debugging

    try {
      const response = await openai.chat.completions.create({
        model: "gpt-4o-mini", // Ensure model is correct
        messages: completeMessages,
      });

      const assistantMessage = {
        role: "assistant",
        content: response.choices[0].message.content,
      };

      // Send the AI response to the client
      res.status(200).json(assistantMessage);
    } catch (error) {
      console.error("Error details:", error.response?.data || error.message);
      res.status(500).json({ error: "Error fetching AI response" });
    }
  } else {
    // Handle unsupported methods
    res.setHeader("Allow", ["POST"]);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}
