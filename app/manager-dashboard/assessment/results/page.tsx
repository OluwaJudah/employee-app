"use client";

import { useRouter } from "next/navigation";
import BottomNav from "@/components/BottomNav";
import BackButton from "@/components/BackButton";

export default function AssessmentResultsPage() {
  const router = useRouter();

  // In a real-world scenario, fetch answers or result from context, API, or query params.
  const resultSummary = {
    emotionStatus: "You reported feeling overwhelmed recently.",
    stressLevel: "You experience stress frequently.",
    supportStatus: "You're not currently receiving support.",
    recommendation:
      "We recommend speaking with a certified counselor to help you navigate your current emotional state.",
  };

  return (
    <main className="min-h-screen p-4 pb-20 space-y-6">
      <div className="flex items-center gap-2">
        <BackButton />
        <h1 className="text-xl font-semibold">Your Assessment Results</h1>
      </div>

      <div className="space-y-4 text-sm text-gray-700">
        <p><strong>Emotional Status:</strong> {resultSummary.emotionStatus}</p>
        <p><strong>Stress Level:</strong> {resultSummary.stressLevel}</p>
        <p><strong>Support:</strong> {resultSummary.supportStatus}</p>
        <p className="text-black font-medium">{resultSummary.recommendation}</p>
      </div>

      <button
        onClick={() => router.push("/appointments/book")}
        className="w-full bg-black text-white py-2 rounded"
      >
        Book a Session
      </button>

      <BottomNav />
    </main>
  );
}
