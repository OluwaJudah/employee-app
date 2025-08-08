"use client";

import BottomNav from "@/components/BottomNav";
import BackButton from "@/components/BackButton";
import { useRouter, useSearchParams } from "next/navigation";

export default function AssessmentResults() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const type = searchParams.get("type") || "depression";
  const score = Number(searchParams.get("score") || 0);

  const resultMessages: Record<
    string,
    { message: string; recommendation: string }
  > = {
    depression: {
      message: "Your responses suggest signs of low mood or depression.",
      recommendation:
        "We recommend speaking to a counselor for emotional support.",
    },
    anxiety: {
      message: "You may be experiencing symptoms related to anxiety.",
      recommendation:
        "It’s beneficial to talk to a mental health professional.",
    },
    stress: {
      message: "Your results indicate high levels of stress.",
      recommendation:
        "Consider booking a wellness consultation to manage stress.",
    },
  };

  const result = resultMessages[type] || resultMessages["depression"];

  return (
    <>
      <div className="flex items-center gap-2">
        <BackButton />
        <h1 className="text-xl font-semibold">Assessment Results</h1>
      </div>

      <div className="border border-gray-300 rounded-lg p-4 shadow-sm space-y-2">
        <h2 className="text-lg font-medium capitalize">{type} assessment</h2>
        <p className="text-sm">Score: {score}/10</p>
        <p className="text-sm">{result.message}</p>
        <p className="text-sm font-medium">{result.recommendation}</p>
      </div>

      <button
        onClick={() => router.push("/appointments/book")}
        className="w-full bg-black text-white py-3 rounded-lg text-base font-semibold"
      >
        Book a Session
      </button>

      <button
        onClick={() => router.push("/assessments")}
        className="w-full border py-3 rounded-lg text-base"
      >
        Take Another Assessment
      </button>

      <BottomNav />
    </>
  );
}
