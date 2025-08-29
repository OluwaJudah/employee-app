
"use client";

import { useRouter } from "next/navigation";
import BottomNav from "@/components/BottomNav";
import BackButton from "@/components/BackButton";

export default function AssessmentStartPage() {
  const router = useRouter();

  return (
    <main className="min-h-screen p-4 pb-16 space-y-6">
      <div className="flex items-center gap-2">
        <BackButton />
        <h1 className="text-xl font-semibold">Take Assessment</h1>
      </div>

      <p className="text-sm text-gray-700">
        This short assessment will help us understand your needs and recommend the most suitable support or practitioner.
      </p>

      <button
        onClick={() => router.push("/dashboard/assessment/questions")}
        className="w-full bg-black text-white py-2 rounded-md"
      >
        Start Assessment
      </button>

      <BottomNav />
    </main>
  );
}
