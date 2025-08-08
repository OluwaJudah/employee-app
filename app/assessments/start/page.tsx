// File: app/assessments/start/page.tsx

"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";
import BottomNav from "@/components/BottomNav";
import BackButton from "@/components/BackButton";

const questions = [
  "How have you been feeling emotionally in the past week?",
  "Have you been experiencing stress or anxiety recently?",
  "How often do you feel overwhelmed or fatigued?",
  "Are you getting enough restful sleep each night?",
];

export default function StartAssessmentPage() {
  const [answers, setAnswers] = useState<string[]>(
    Array(questions.length).fill("")
  );
  const router = useRouter();

  const handleChange = (index: number, value: string) => {
    const updated = [...answers];
    updated[index] = value;
    setAnswers(updated);
  };

  const handleSubmit = () => {
    console.log("Submitted Answers:", answers);
    router.push("/assessments/result");
  };

  return (
    <main className="p-4 pb-16 space-y-4">
      <div className="flex items-center gap-2">
        <BackButton />
        <h1 className="text-xl font-bold">Assessment</h1>
      </div>

      <form
        className="space-y-4"
        onSubmit={(e) => {
          e.preventDefault();
          handleSubmit();
        }}
      >
        {questions.map((q, index) => (
          <div key={index} className="space-y-1">
            <label className="block text-sm font-medium text-gray-800">
              {q}
            </label>
            <textarea
              className="w-full border p-2 rounded-md"
              value={answers[index]}
              onChange={(e) => handleChange(index, e.target.value)}
              rows={2}
              required
            />
          </div>
        ))}
        <button
          type="submit"
          className="w-full border px-4 py-2 rounded-md font-medium"
        >
          Submit Assessment
        </button>
      </form>

      <BottomNav />
    </main>
  );
}
