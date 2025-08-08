"use client";
import { useRouter } from "next/navigation";
import { useState } from "react";

type Question = {
  id: string;
  text: string;
};

const questions: Question[] = [
  { id: "q1", text: "I feel anxious or worried" },
  { id: "q2", text: "I feel sad or down" },
  { id: "q3", text: "I have trouble sleeping" },
  { id: "q4", text: "I feel stressed at work" },
  { id: "q5", text: "I have difficulty concentrating" },
];

const scaleLabels = [
  "Not at all",
  "Several days",
  "More than half the days",
  "Nearly every day",
  "Every day",
];

export default function AssessmentPage() {
  const router = useRouter();

  const [answers, setAnswers] = useState<Record<string, number>>(
    questions.reduce((acc, q) => ({ ...acc, [q.id]: 0 }), {})
  );

  const handleAnswerChange = (questionId: string, value: number) => {
    setAnswers((prev) => ({ ...prev, [questionId]: value }));
  };

  const handleSubmit = () => {
    const allAnswered = questions.every((q) => answers[q.id] > 0);
    if (!allAnswered) {
      alert("Please answer all questions.");
      return;
    }

    localStorage.setItem("assessment", JSON.stringify(Object.values(answers)));

    router.push("/register/practitioner");
  };

  return (
    <>
      <header className="sticky top-0 bg-white border-b border-black/20 px-4 py-3 flex justify-between items-center z-10">
        <h1 className="text-xl font-semibold">Assessment (Step 2 of 3)</h1>
        <div className="text-sm text-black/60">
          {questions.filter((q) => answers[q.id] > 0).length} /{" "}
          {questions.length}
        </div>
      </header>

      <main className="max-w-md mx-auto p-4 space-y-6 bg-white text-black min-h-[calc(100vh-56px)] pb-24">
        {questions.map((q) => (
          <fieldset
            key={q.id}
            className="border border-black/30 rounded-md p-4 space-y-3"
          >
            <legend className="font-medium">{q.text}</legend>
            <div className="flex flex-wrap gap-2">
              {scaleLabels.map((label, i) => {
                const val = i + 1;
                const selected = answers[q.id] === val;
                return (
                  <label
                    key={val}
                    className={`cursor-pointer select-none rounded-full border px-4 py-2 text-sm whitespace-nowrap
                      ${
                        selected
                          ? "bg-black text-white border-black"
                          : "bg-white text-black border-black/40"
                      }
                      hover:bg-black hover:text-white transition`}
                  >
                    <input
                      type="radio"
                      name={q.id}
                      value={val}
                      checked={selected}
                      onChange={() => handleAnswerChange(q.id, val)}
                      className="hidden"
                    />
                    {label}
                  </label>
                );
              })}
            </div>
          </fieldset>
        ))}

        <button
          onClick={handleSubmit}
          className="fixed bottom-4 left-1/2 -translate-x-1/2 max-w-md w-[90vw] bg-black text-white py-3 rounded-md font-semibold shadow-lg hover:bg-gray-900 transition"
        >
          Submit Assessment
        </button>
      </main>
    </>
  );
}
