"use client";

import { useState } from "react";

const OpenAIChat: React.FC = () => {
  const [prompt, setPrompt] = useState<string>("");
  const [response, setResponse] = useState<string>("");
  const [loading, setLoading] = useState<boolean>(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    setResponse("");

    const res = await fetch("/api/openai", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      // body: JSON.stringify({ prompt }),
    });

    const data = await res.json();
    setResponse(data.result || "No response from API");
    setLoading(false);
  };

  return (
    <div style={{ padding: "2rem" }}>
      <h1>Ask OpenAI</h1>
      <form onSubmit={handleSubmit}>
        <textarea
          className="text-black"
          value={prompt}
          onChange={(e) => setPrompt(e.target.value)}
          rows={4}
          cols={50}
          placeholder="Enter your prompt..."
          required
        />
        <br />
        <button type="submit" disabled={loading}>
          {loading ? "Loading..." : "Submit"}
        </button>
      </form>

      {response && (
        <div>
          <h2>Response:</h2>
          <p>{response}</p>
        </div>
      )}
    </div>
  );
};

export default OpenAIChat;
