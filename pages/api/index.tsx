// // pages/index.tsx

// import { useState } from "react";

// export default function Home() {
//   const [prompt, setPrompt] = useState<string>("");
//   const [response, setResponse] = useState<string>("");

//   const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
//     e.preventDefault();

//     const res = await fetch("/api/openai", {
//       method: "POST",
//       headers: {
//         "Content-Type": "application/json",
//       },
//       body: JSON.stringify({ prompt }),
//     });

//     const data = await res.json();
//     setResponse(data.result || "No response from API");
//   };

//   return (
//     <div style={{ padding: "2rem" }}>
//       <h1>Ask OpenAI</h1>
//       <form onSubmit={handleSubmit}>
//         <textarea
//           value={prompt}
//           onChange={(e) => setPrompt(e.target.value)}
//           rows={4}
//           cols={50}
//           placeholder="Enter your prompt..."
//           required
//         />
//         <br />
//         <button type="submit">Submit</button>
//       </form>

//       {response && (
//         <div>
//           <h2>Response:</h2>
//           <p>{response}</p>
//         </div>
//       )}
//     </div>
//   );
// }
