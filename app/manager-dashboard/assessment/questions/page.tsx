"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";
import BottomNav from "@/components/BottomNav";
import BackButton from "@/components/BackButton";

export default function AssessmentQuestionsPage() {
  const router = useRouter();

  const [answers, setAnswers] = useState<Record<string, string>>({});

  const questions = [
    {
      id: "q1",
      text: "How are you feeling emotionally today?",
      options: ["Very good", "Okay", "Not great", "Overwhelmed"],
    },
    {
      id: "q2",
      text: "How often do you feel stressed or anxious?",
      options: ["Rarely", "Sometimes", "Often", "All the time"],
    },
    {
      id: "q3",
      text: "Are you currently receiving any mental health support?",
      options: ["Yes", "No", "Not sure"],
    },
    {
      id: "q4",
      text: "Would you be open to speaking with a practitioner?",
      options: ["Yes", "No", "Maybe later"],
    },
  ];

  const handleChange = (questionId: string, value: string) => {
    setAnswers((prev) => ({ ...prev, [questionId]: value }));
  };

  const handleSubmit = () => {
    if (Object.keys(answers).length === questions.length) {
      // You can pass answers as query params or store in global state for real implementation
      router.push("/dashboard/assessment/results");
    } else {
      alert("Please answer all questions before submitting.");
    }
  };

  return (
    <main className="min-h-screen p-4 pb-20 space-y-6">
      <div className="flex items-center gap-2">
        <BackButton />
        <h1 className="text-xl font-semibold">Assessment</h1>
      </div>

      <form className="space-y-6">
        {questions.map((q) => (
          <div key={q.id} className="space-y-2">
            <p className="font-medium text-sm">{q.text}</p>
            <div className="space-y-1">
              {q.options.map((option) => (
                <label key={option} className="flex items-center gap-2 text-sm">
                  <input
                    type="radio"
                    name={q.id}
                    value={option}
                    checked={answers[q.id] === option}
                    onChange={() => handleChange(q.id, option)}
                    className="accent-black"
                  />
                  {option}
                </label>
              ))}
            </div>
          </div>
        ))}
      </form>

      <button
        onClick={handleSubmit}
        className="w-full bg-black text-white py-2 rounded"
      >
        Submit Assessment
      </button>

      <BottomNav />
    </main>
  );
}
