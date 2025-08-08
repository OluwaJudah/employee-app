"use client";

import BackButton from "@/components/BackButton";
import BottomNav from "@/components/BottomNav";
import { useRouter } from "next/navigation";

export default function AssessmentsPage() {
  const router = useRouter();

  const assessments = [
    {
      id: "depression",
      name: "Depression Assessment",
      description:
        "Evaluate symptoms of depression to determine your emotional well-being.",
    },
    {
      id: "anxiety",
      name: "Anxiety Assessment",
      description:
        "Measure your level of anxiety and how it might be affecting your life.",
    },
    {
      id: "stress",
      name: "Stress Assessment",
      description:
        "Understand your current stress levels and coping capacity.",
    },
  ];

  return (
    <main className="min-h-screen p-4 pb-20 space-y-6">
      <div className="flex items-center gap-2">
        <BackButton />
        <h1 className="text-xl font-semibold">Assessments</h1>
      </div>

      <p className="text-sm text-gray-700">
        Choose an assessment to better understand your mental and emotional
        health. We'll provide you with results and recommendations based on your
        responses.
      </p>

      <section className="space-y-4">
        {assessments.map((item) => (
          <div
            key={item.id}
            className="border p-4 rounded-md cursor-pointer"
            onClick={() => router.push(`/assessments/questions?type=${item.id}`)}
          >
            <h2 className="text-md font-semibold">{item.name}</h2>
            <p className="text-sm text-gray-600">{item.description}</p>
          </div>
        ))}
      </section>

      <BottomNav />
    </main>
  );
}
