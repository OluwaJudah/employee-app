"use client";

import { useRouter, useSearchParams } from "next/navigation";
import { useState } from "react";
import BackButton from "@/components/BackButton";
import BottomNav from "@/components/BottomNav";

type Question = {
  id: number;
  text: string;
};

const QUESTIONS: Record<string, Question[]> = {
  depression: [
    { id: 1, text: "I feel down or hopeless most of the day." },
    { id: 2, text: "I have little interest or pleasure in doing things." },
    { id: 3, text: "I feel tired or have little energy." },
  ],
  anxiety: [
    { id: 1, text: "I feel nervous, anxious, or on edge." },
    { id: 2, text: "I worry too much about different things." },
    { id: 3, text: "I have trouble relaxing." },
  ],
  stress: [
    { id: 1, text: "I feel overwhelmed by daily responsibilities." },
    { id: 2, text: "I have difficulty sleeping or concentrating." },
    { id: 3, text: "I feel irritable or angry easily." },
  ],
};

const OPTIONS = [
  { label: "Not at all", value: 0 },
  { label: "Several days", value: 1 },
  { label: "Nearly every day", value: 2 },
];

export default function AssessmentQuestions() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const type = searchParams.get("type") || "depression";

  const questions = QUESTIONS[type] || QUESTIONS["depression"];
  const [answers, setAnswers] = useState<Record<number, number>>({});

  const handleChange = (questionId: number, value: number) => {
    setAnswers((prev) => ({ ...prev, [questionId]: value }));
  };

  const handleSubmit = () => {
    const totalScore = Object.values(answers).reduce(
      (sum, val) => sum + val,
      0
    );
    router.push(`/assessments/results?type=${type}&score=${totalScore}`);
  };

  return (
    <>
      <div className="flex items-center gap-2">
        <BackButton />
        <h1 className="text-xl font-semibold capitalize">{type} Assessment</h1>
      </div>

      <form className="space-y-4">
        {questions.map((question) => (
          <div key={question.id} className="border rounded p-3 space-y-2">
            <p className="text-sm">{question.text}</p>
            <div className="flex flex-col gap-2">
              {OPTIONS.map((option) => (
                <label key={option.value} className="flex items-center gap-2">
                  <input
                    type="radio"
                    name={`question-${question.id}`}
                    value={option.value}
                    checked={answers[question.id] === option.value}
                    onChange={() => handleChange(question.id, option.value)}
                    className="accent-black"
                  />
                  <span className="text-sm">{option.label}</span>
                </label>
              ))}
            </div>
          </div>
        ))}
      </form>

      <button
        disabled={Object.keys(answers).length < questions.length}
        onClick={handleSubmit}
        className="w-full bg-black text-white py-3 rounded-lg font-semibold disabled:opacity-50"
      >
        Submit
      </button>

      <BottomNav />
    </>
  );
}
