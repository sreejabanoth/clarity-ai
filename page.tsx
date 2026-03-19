"use client";
import { useState } from "react";

export default function Home() {
  const [idea, setIdea] = useState("");
  const [result, setResult] = useState<any>(null);

  const analyzeIdea = () => {
    const output = {
      goal: "Start a YouTube channel and generate income",
      method:
        "Create content consistently, grow audience, and monetize through ads and sponsorships",
      steps: [
        "Choose a niche",
        "Research trending topics",
        "Create and upload videos",
        "Optimize titles and thumbnails",
        "Promote on social media",
        "Apply for monetization",
      ],
      timeline: "3–6 months recommended",
      missing_elements: [
        "Clear niche",
        "Content strategy",
        "Consistency plan",
      ],
      simplified:
        "Start a YouTube channel, post regularly, and grow audience to earn money.",
      action_steps: [
        "Pick niche today",
        "Plan 10 videos",
        "Upload first video",
        "Post 2–3 times weekly",
      ],
      clarity_score: 65,
    };

    setResult(output);
  };

  return (
    <div className="p-10 max-w-3xl mx-auto">
      <h1 className="text-3xl font-bold mb-5 text-center text-blue-700">
        ClarityAI
      </h1>

      {/* INPUT */}
      <textarea
        className="w-full p-3 border rounded shadow"
        placeholder="Enter your idea..."
        value={idea}
        onChange={(e) => setIdea(e.target.value)}
      />

      <button
        onClick={analyzeIdea}
        className="mt-4 px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded shadow"
      >
        Analyze
      </button>

      {/* OUTPUT */}
      {result && (
        <div className="mt-6 space-y-4">

          {/* Goal */}
          <div className="p-4 bg-blue-50 border-l-4 border-blue-500 rounded shadow-md">
            <h2 className="font-bold text-blue-700">🎯 Goal</h2>
            <p className="text-blue-800">{result.goal}</p>
          </div>

          {/* Method */}
          <div className="p-4 bg-green-50 border-l-4 border-green-500 rounded shadow-md">
            <h2 className="font-bold text-green-700">🛠 Method</h2>
            <p className="text-green-800">{result.method}</p>
          </div>

          {/* Steps */}
          <div className="p-4 bg-purple-50 border-l-4 border-purple-500 rounded shadow-md">
            <h2 className="font-bold text-purple-700">🪜 Steps</h2>
            <ul className="text-purple-800">
              {result.steps.map((s: string, i: number) => (
                <li key={i}>• {s}</li>
              ))}
            </ul>
          </div>

          {/* Timeline */}
          <div className="p-4 bg-gray-50 border-l-4 border-gray-500 rounded shadow-md">
            <h2 className="font-bold text-gray-700">⏳ Timeline</h2>
            <p className="text-gray-800">{result.timeline}</p>
          </div>

          {/* Missing */}
          <div className="p-4 bg-red-50 border-l-4 border-red-500 rounded shadow-md">
            <h2 className="font-bold text-red-700">⚠ Missing Elements</h2>
            <ul className="text-red-800">
              {result.missing_elements.map((m: string, i: number) => (
                <li key={i}>• {m}</li>
              ))}
            </ul>
          </div>

          {/* Simplified */}
          <div className="p-4 bg-yellow-50 border-l-4 border-yellow-500 rounded shadow-md">
            <h2 className="font-bold text-yellow-700">✨ Simplified</h2>
            <p className="text-yellow-800">{result.simplified}</p>
          </div>

          {/* Action Steps */}
          <div className="p-4 bg-teal-50 border-l-4 border-teal-500 rounded shadow-md">
            <h2 className="font-bold text-teal-700">✅ Action Steps</h2>
            <ul className="text-teal-800">
              {result.action_steps.map((a: string, i: number) => (
                <li key={i}>• {a}</li>
              ))}
            </ul>
          </div>

          {/* Clarity Score */}
          <div className="p-4 bg-indigo-100 border-l-4 border-indigo-600 rounded shadow-md">
            <h2 className="font-bold text-indigo-700">📊 Clarity Score</h2>
            <p
              className={`text-2xl font-bold ${
                result.clarity_score > 70
                  ? "text-green-600"
                  : "text-red-500"
              }`}
            >
              {result.clarity_score}/100
            </p>
          </div>

        </div>
      )}
    </div>
  );
}