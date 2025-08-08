"use client";
import { useRouter } from "next/navigation";
import { useState } from "react";

const questions = [
  "I feel overwhelmed with stress.",
  "I find it hard to concentrate.",
  "I have difficulty sleeping.",
  "I often feel anxious or on edge.",
  "I experience mood swings or irritability.",
];

export default function AssessmentPage() {
  const router = useRouter();
  const [answers, setAnswers] = useState<number[]>(
    Array(questions.length).fill(0)
  );

  const handleChange = (index: number, value: number) => {
    const updated = [...answers];
    updated[index] = value;
    setAnswers(updated);
  };

  const handleSubmit = () => {
    localStorage.setItem("assessment", JSON.stringify(answers));
    alert("Assessment submitted successfully");
    router.push("/dashboard");
  };

  return (
    <main className="p-4 min-h-screen flex flex-col justify-center">
      <div className="w-full max-w-md mx-auto space-y-6">
        <h1 className="text-xl font-semibold text-center">
          Wellness Assessment
        </h1>
        <div className="space-y-4">
          {questions.map((q, i) => (
            <div key={i} className="space-y-1">
              <p>{q}</p>
              <select
                value={answers[i]}
                onChange={(e) => handleChange(i, parseInt(e.target.value))}
                className="w-full border rounded-md px-3 py-2"
              >
                <option value={0}>Select</option>
                <option value={1}>Never</option>
                <option value={2}>Sometimes</option>
                <option value={3}>Often</option>
                <option value={4}>Always</option>
              </select>
            </div>
          ))}
        </div>
        <button
          onClick={handleSubmit}
          className="w-full bg-black text-white py-2 rounded-md"
        >
          Complete Assessment
        </button>
      </div>
    </main>
  );
}
