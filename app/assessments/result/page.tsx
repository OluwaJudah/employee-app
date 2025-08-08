"use client";
import BottomNav from "@/components/BottomNav";
import BackButton from "@/components/BackButton";

export default function AssessmentResultsPage() {
  const fakeResults = {
    mood: "Stable",
    stressLevel: "Moderate",
    sleepQuality: "Needs Improvement",
    overallScore: "65%",
  };

  return (
    <main className="p-4 pb-16 space-y-4">
      <div className="flex items-center gap-2">
        <BackButton />
        <h1 className="text-xl font-bold">Assessment Results</h1>
      </div>

      <div className="space-y-2">
        <div className="border rounded-md p-4">
          <h2 className="text-md font-semibold">Mood</h2>
          <p className="text-sm">{fakeResults.mood}</p>
        </div>
        <div className="border rounded-md p-4">
          <h2 className="text-md font-semibold">Stress Level</h2>
          <p className="text-sm">{fakeResults.stressLevel}</p>
        </div>
        <div className="border rounded-md p-4">
          <h2 className="text-md font-semibold">Sleep Quality</h2>
          <p className="text-sm">{fakeResults.sleepQuality}</p>
        </div>
        <div className="border rounded-md p-4">
          <h2 className="text-md font-semibold">Overall Score</h2>
          <p className="text-sm">{fakeResults.overallScore}</p>
        </div>
      </div>

      <BottomNav />
    </main>
  );
}
