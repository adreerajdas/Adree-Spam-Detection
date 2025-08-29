"use client";
import { useState } from "react";

export default function CheckPage() {
  const [message, setMessage] = useState("");
  const [result, setResult] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  const handleCheck = async () => {
    if (!message.trim()) return;
    setLoading(true);
    setResult(null);

    try {
      const res = await fetch("http://127.0.0.1:8000/predict", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ message }),
      });

      if (!res.ok) {
        throw new Error("Server Error");
      }

      const data = await res.json();
      setResult(data.result || "⚠️ No result from server");
    } catch (error) {
      console.error("Error:", error);
      setResult("⚠️ Server not connected. Please check backend.");
    }

    setLoading(false);
  };

  return (
    <main className="flex min-h-screen flex-col items-center justify-between bg-gray-950 p-6">
      <div className="flex-grow flex items-center justify-center w-full">
        <div className="w-full max-w-2xl bg-gray-900 text-white rounded-2xl shadow-lg p-8">
          <h1 className="text-3xl font-bold text-center mb-6">Spam Checker</h1>

          <textarea
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            placeholder="Paste your email/message here..."
            className="w-full h-40 p-3 rounded-lg bg-gray-800 border border-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />

          <button
            onClick={handleCheck}
            disabled={loading}
            className="mt-4 w-full py-3 rounded-lg bg-blue-600 hover:bg-blue-700 disabled:bg-gray-600 transition-all font-semibold"
          >
            {loading ? "Checking..." : "Check Spam"}
          </button>

          {result && (
            <div
              className={`mt-6 p-4 text-center rounded-lg text-lg font-bold ${
                result.toLowerCase().includes("spam") &&
                !result.toLowerCase().includes("not spam")
                  ? "bg-red-600"
                  : result.toLowerCase().includes("not spam")
                  ? "bg-green-600"
                  : "bg-yellow-500"
              }`}
            >
              {result}
            </div>
          )}
        </div>
      </div>

      {/* Footer */}
      <footer className="text-gray-500 text-sm mt-6">
        Made by <span className="text-white font-semibold">Adree</span> | CST 3rd Year
      </footer>
    </main>
  );
}
